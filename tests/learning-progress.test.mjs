import assert from "node:assert/strict"
import test from "node:test"
import * as learningProgress from "../lib/learning-progress.ts"
import {
  parseProgress,
  updateProgress,
  getResumeTime,
  getContinueLesson,
  formatWatchTime,
} from "../lib/learning-progress.ts"

const lessons = [
  { href: "/courses/intro/01", title: "第一节" },
  { href: "/courses/intro/02", title: "第二节" },
  { href: "/courses/core/01", title: "第三节" },
]
const empty = { version: 1, lessons: {} }
const point = {
  href: lessons[1].href,
  mediaId: "video-2",
  position: 83.5,
  duration: 600,
  updatedAt: 1000,
  completed: false,
}

test("保存后重新读取，仍能继续同一课的同一位置", () => {
  const saved = updateProgress(empty, point)
  const restored = parseProgress(JSON.stringify(saved), lessons)
  assert.equal(getResumeTime(restored.lessons[point.href], point.mediaId), 83.5)
  assert.equal(getContinueLesson(restored, lessons)?.href, lessons[1].href)
})

test("每节课独立保存，最近实际观看的课程优先", () => {
  const first = updateProgress(empty, { ...point, href: lessons[0].href })
  const latest = updateProgress(first, { ...point, updatedAt: 2000 })
  assert.equal(Object.keys(latest.lessons).length, 2)
  assert.equal(getContinueLesson(latest, lessons)?.href, lessons[1].href)
  assert.equal(getContinueLesson(empty, lessons), null)
})

test("看完一节后接着下一节，全部看完后允许重看最后一节", () => {
  let progress = updateProgress(empty, {
    ...point,
    position: 600,
    completed: true,
  })
  assert.equal(getResumeTime(progress.lessons[point.href], point.mediaId), 0)
  assert.equal(getContinueLesson(progress, lessons)?.href, lessons[2].href)
  progress = updateProgress(progress, {
    ...point,
    href: lessons[2].href,
    completed: true,
    position: 600,
    updatedAt: 2000,
  })
  assert.equal(getContinueLesson(progress, lessons)?.href, lessons[0].href)
  progress = updateProgress(progress, {
    ...point,
    href: lessons[0].href,
    completed: true,
    position: 600,
    updatedAt: 3000,
  })
  assert.equal(getContinueLesson(progress, lessons)?.href, lessons[0].href)
})

test("重看已完成课程仍保留完成标记，同时能从重看的位置继续", () => {
  const finished = updateProgress(empty, {
    ...point,
    position: 600,
    completed: true,
  })
  const replaying = updateProgress(finished, {
    ...point,
    position: 30,
    updatedAt: 2000,
  })
  assert.equal(replaying.lessons[point.href].completed, true)
  assert.equal(getResumeTime(replaying.lessons[point.href], point.mediaId), 30)
  assert.equal(getContinueLesson(replaying, lessons)?.href, point.href)
})

test("损坏、旧版本和非课程地址的存档不会造成崩溃或跳转", () => {
  for (const raw of [
    null,
    "broken json",
    "null",
    "[]",
    '{"version":2,"lessons":{}}',
  ]) {
    assert.deepEqual(parseProgress(raw, lessons), empty)
  }
  const stored = updateProgress(empty, point)
  stored.lessons["https://example.com"] = stored.lessons[point.href]
  stored.lessons[lessons[0].href] = {
    ...stored.lessons[point.href],
    position: -2,
  }
  const parsed = parseProgress(JSON.stringify(stored), lessons)
  assert.deepEqual(Object.keys(parsed.lessons), [point.href])
})

test("视频更换或时长缩短时不会跳到错误的位置", () => {
  const record = updateProgress(empty, point).lessons[point.href]
  assert.equal(getResumeTime(record, "different-video"), 0)
  assert.equal(getResumeTime(record, point.mediaId, 60), 59)
  assert.equal(getResumeTime(undefined, point.mediaId), 0)
})

test("非法播放时间不会覆盖有效进度，倒退观看则会记录实际位置", () => {
  const saved = updateProgress(empty, point)
  for (const invalid of [NaN, Infinity, -1]) {
    assert.deepEqual(
      updateProgress(saved, { ...point, position: invalid }),
      saved
    )
    assert.deepEqual(
      updateProgress(saved, { ...point, duration: invalid }),
      saved
    )
  }
  assert.equal(
    updateProgress(saved, { ...point, position: 20 }).lessons[point.href]
      .position,
    20
  )
  assert.equal(
    updateProgress(saved, { ...point, position: 800 }).lessons[point.href]
      .position,
    600
  )
})

test("旧标签页的迟到写入不覆盖更近的观看记录", () => {
  const saved = updateProgress(empty, { ...point, updatedAt: 2000 })
  assert.deepEqual(updateProgress(saved, { ...point, position: 10 }), saved)
})

test("时分秒文案对长视频和异常输入均有效", () => {
  assert.equal(formatWatchTime(83.5), "01:23")
  assert.equal(formatWatchTime(3661), "1:01:01")
  assert.equal(formatWatchTime(NaN), "00:00")
})

test("观看到 90% 即完成，临界值之前仍可续看", () => {
  const before = updateProgress(empty, { ...point, position: 539.99 })
  assert.equal(before.lessons[point.href].completed, false)
  const reached = updateProgress(before, { ...point, position: 540 })
  assert.equal(reached.lessons[point.href].completed, true)
  assert.equal(getContinueLesson(reached, lessons)?.href, lessons[2].href)
  assert.equal(getResumeTime(reached.lessons[point.href], point.mediaId), 0)
})

test("旧记录超过 90% 时自动补标，仍保留原观看位置", () => {
  const restored = parseProgress(
    JSON.stringify({
      version: 1,
      lessons: { [point.href]: { ...point, position: 558 } },
    }),
    lessons
  )
  assert.equal(restored.lessons[point.href].completed, true)
  assert.equal(restored.lessons[point.href].position, 558)
})

test("视频未加载也能手动完成，刷新后保留并继续下一节", () => {
  assert.equal(typeof learningProgress.setLessonCompletion, "function")
  const saved = learningProgress.setLessonCompletion(empty, {
    href: point.href,
    mediaId: point.mediaId,
    completed: true,
    updatedAt: 1000,
  })
  const restored = parseProgress(JSON.stringify(saved), lessons)
  assert.equal(restored.lessons[point.href].completed, true)
  assert.equal(restored.lessons[point.href].duration, 0)
  assert.equal(getContinueLesson(restored, lessons)?.href, lessons[2].href)
})

test("手动取消优先于自动完成，后续播放、刷新和旧标签页不把它改回来", () => {
  assert.equal(typeof learningProgress.setLessonCompletion, "function")
  const auto = updateProgress(empty, { ...point, position: 550 })
  const unchecked = learningProgress.setLessonCompletion(auto, {
    href: point.href,
    mediaId: point.mediaId,
    completed: false,
    updatedAt: 2000,
  })
  let next = updateProgress(unchecked, {
    ...point,
    position: 600,
    completed: true,
    updatedAt: 3000,
  })
  next = parseProgress(JSON.stringify(next), lessons)
  assert.equal(next.lessons[point.href].completed, false)
  assert.equal(getContinueLesson(next, lessons)?.href, point.href)
  assert.equal(
    updateProgress(next, { ...point, ...auto.lessons[point.href] }).lessons[
      point.href
    ].completed,
    false
  )
  const checked = learningProgress.setLessonCompletion(next, {
    href: point.href,
    mediaId: point.mediaId,
    completed: true,
    updatedAt: 4000,
  })
  assert.equal(checked.lessons[point.href].completed, true)
})

test("合并标签页时观看位置与手动完成状态分别取最新值", () => {
  assert.equal(typeof learningProgress.setLessonCompletion, "function")
  const manual = learningProgress.setLessonCompletion(
    updateProgress(empty, point),
    {
      href: point.href,
      mediaId: point.mediaId,
      completed: false,
      updatedAt: 2000,
    }
  )
  const playing = updateProgress(empty, {
    ...point,
    position: 590,
    updatedAt: 3000,
  })
  for (const merged of [
    updateProgress(playing, {
      href: point.href,
      ...manual.lessons[point.href],
    }),
    updateProgress(manual, {
      href: point.href,
      ...playing.lessons[point.href],
    }),
  ]) {
    assert.equal(merged.lessons[point.href].position, 590)
    assert.equal(merged.lessons[point.href].completed, false)
  }
})

test("手动标记不改播放位置，替换视频后不继承旧完成状态", () => {
  assert.equal(typeof learningProgress.setLessonCompletion, "function")
  const manual = learningProgress.setLessonCompletion(
    updateProgress(empty, point),
    {
      href: point.href,
      mediaId: point.mediaId,
      completed: true,
      updatedAt: 2000,
    }
  )
  assert.equal(manual.lessons[point.href].position, point.position)
  const replaced = updateProgress(manual, {
    ...point,
    mediaId: "new-video",
    position: 10,
    updatedAt: 3000,
  })
  assert.equal(replaced.lessons[point.href].completed, false)
  assert.equal(replaced.lessons[point.href].completionOverride, undefined)
})
