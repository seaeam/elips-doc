---
alwaysApply: true
scene: git_message
---

生成中文的提交信息，并且提交格式为：type(scope): description，这个只需要第一行写入，并且有且只有一个，在下方分条写出详细信息，并且注意事项：\n1. type 只能是 feat、fix、docs、style、refactor、perf、test、chore 这几种类型\n2. scope 是必选的，可以写模块名称或者功能点\n3. description 是对提交内容的简短描述，尽量控制在50个字符以内\n4. 如果有相关的 issue，可以在最后一行添加关联信息，例如：Closes #123
