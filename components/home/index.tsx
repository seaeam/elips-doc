"use client"

import { CourseHomeHero } from "./components/course-home-hero"
import { LearningPath } from "./components/learning-path"
import {
  HomeIntro,
  HomeMetrics,
  HomeNextStep,
  TechStack,
} from "./components/home-sections"
import { SchemaPlayground } from "./components/schema-playground"
import { HERO_PLAYBACK_ID } from "./const"

export function CourseHomepage() {
  return (
    <div className="experience-page home-page not-prose relative mx-auto w-full max-w-6xl pb-12 md:pb-20">
      <CourseHomeHero />
      <HomeMetrics />
      <TechStack />
      <LearningPath />
      <SchemaPlayground />
      <HomeIntro playbackId={HERO_PLAYBACK_ID} />
      <HomeNextStep />
    </div>
  )
}
