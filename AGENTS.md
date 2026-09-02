# AGENTS.md —— 项目代理指南

本文件面向 AI 编程代理。阅读本文档前，请默认你对本项目一无所知。以下内容基于项目实际文件与配置整理，请勿凭经验推断。

---

## 项目概述

本项目是一个使用 **Astro + Starlight** 构建的静态文档网站，用于承载《计算机科学与技术专业入门手册》及其配套材料。当前站点主要面向零基础大一新生，提供计算机专业的认知框架、四年学习路线图、学科分层导读、方向全景以及分层练手项目。

项目的核心内容目前仍以 Word 文档（`.docx`）和 Markdown（`.md`）形式存放在 `doc/` 目录，尚未完全迁移到网站的 `src/content/docs/` 中。`README.md` 目前还是 Starlight 官方模板的默认内容，不代表项目实际用途。

## 技术栈

| 层级/用途 | 技术 |
| --- | --- |
| 框架 | [Astro](https://astro.build/) v7.x |
| 文档主题/插件 | [@astrojs/starlight](https://starlight.astro.build/) v0.41.x |
| 包管理器 | npm（使用 `package-lock.json` v3） |
| 语言 | TypeScript / JavaScript（ES Module） |
| 图片处理 | sharp（Astro 构建优化依赖） |

- `package.json` 中 `"type": "module"`，所有 `.js/.mjs` 文件按 ES Module 解析。
- `tsconfig.json` 继承 `astro/tsconfigs/strict`，包含 `.astro/types.d.ts`。

## 项目结构

```
.
├── public/                      # 静态资源（不会被 Astro 处理，直接复制到 dist）
│   └── favicon.svg
├── src/
│   ├── assets/                  # 站点图片等媒体资源
│   │   └── houston.webp
│   ├── content/                 # Starlight 内容集合
│   │   └── docs/
│   │       ├── index.mdx        # 首页（splash 模板）
│   │       ├── guides/
│   │       │   └── example.md   # 示例指南页
│   │       └── reference/
│   │           └── example.md   # 示例参考页
│   └── content.config.ts        # 内容集合配置，使用 Starlight 的 loader 与 schema
├── doc/                         # 原始稿件（尚未完全迁移到站点）
│   ├── 计算机科学与技术专业入门手册.docx
│   ├── 计算机科学与技术学科分层导读.docx
│   ├── 计算机学科地图与方向全景（手册扩展篇）.docx
│   └── 分层项目练手.md
├── astro.config.mjs             # Astro + Starlight 站点配置
├── package.json                 # 依赖与脚本
├── tsconfig.json                # TypeScript 配置
├── README.md                    # 当前为 Starlight 模板默认内容
├── AGENTS.md                    # 本文件
└── CLAUDE.md -> AGENTS.md       # 软链接，指向本文件
```

### 关键文件说明

- **`astro.config.mjs`**：站点标题、GitHub 社交链接、侧边栏导航均在此配置。当前 `title` 为默认的 `"My Docs"`，`sidebar` 包含 `Guides` 和 `Reference` 两个分组。
- **`src/content.config.ts`**：定义 `docs` 集合，使用 `@astrojs/starlight/loaders` 与 `@astrojs/starlight/schema`。
- **`doc/`**：项目的真实内容资产。若要将新页面加入站点，通常需要将这些 `.docx` 或 `.md` 转换为 `src/content/docs/` 下的 `.md` 或 `.mdx`。
- **`.vscode/`**：包含推荐的 Astro 扩展（`astro-build.astro-vscode`）以及用于启动开发服务器的调试配置。

## 构建与运行命令

所有命令均在项目根目录执行。

| 命令 | 作用 |
| --- | --- |
| `npm install` | 安装依赖 |
| `npm run dev` / `npm start` | 启动本地开发服务器（默认 `localhost:4321`） |
| `npm run build` | 构建生产站点到 `./dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run astro -- <args>` | 运行 Astro CLI 命令，例如 `npm run astro -- check` |

### 后台开发服务器

Astro 7 支持后台运行开发服务器：

```bash
astro dev --background
```

管理后台服务：

```bash
astro dev stop      # 停止
astro dev status    # 查看状态
astro dev logs      # 查看日志
```

> 注意：`package.json` 中未单独定义后台模式脚本，直接使用 Astro CLI 即可。

## 内容管理

- Starlight 默认将 `src/content/docs/` 中的 `.md` 和 `.mdx` 文件映射为路由。
- 首页 `src/content/docs/index.mdx` 当前使用 `template: splash`，不显示侧边栏；去掉该 frontmatter 行可恢复侧边栏。
- 新增页面时：
  1. 在 `src/content/docs/` 下创建 `.md` 或 `.mdx` 文件；
  2. 在 `astro.config.mjs` 的 `sidebar` 中注册导航项（或使用 `autogenerate` 自动生成目录）；
  3. 如需使用 Starlight 组件（如 `Card`、`CardGrid`），在 `.mdx` 中 `import` 后使用。

### 关于 `doc/` 中的原始稿件

- `计算机科学与技术专业入门手册.docx`：面向零基础新生的完整手册。
- `计算机科学与技术学科分层导读.docx`：基于 L1–L7 七层模型的课程、就业、研究全景。
- `计算机学科地图与方向全景（手册扩展篇）.docx`：从五层到七层的升级说明与方向对照表。
- `分层项目练手.md`：按大一到大四的分层训练项目与公开课推荐。

如果任务涉及将这些内容迁移到网站，通常需要：
1. 将 `.docx` 转换为 `.md`（可借助 pandoc 或 Python 脚本，注意保留表格与层级）；
2. 按 `src/content/docs/` 的目录结构组织；
3. 更新 `astro.config.mjs` 的 `sidebar` 以反映新的章节结构。

## 代码风格与约定

- 跟随现有文件风格。当前 `astro.config.mjs` 与 `src/content.config.ts` 使用 **Tab 缩进**；新增 `.md` / `.mdx` 内容时保持统一即可。
- 文件名使用小写英文与连字符，中文内容文件名保持语义清晰即可。
- `.mdx` 中的组件导入与 JSX 语法需符合 Astro/Starlight 规范。
- 提交前运行 `npm run build`，确保没有类型或构建错误。

## 测试

- 本项目目前**没有配置单元测试或 E2E 测试**。
- 主要验证方式：
  - `npm run build`：检查构建是否通过；
  - `npm run preview`：手动检查页面与链接；
  - `astro check`：运行 TypeScript 类型检查（`npm run astro -- check`）。

## 部署

- 构建产物输出到 `./dist/`，为纯静态文件，可部署到任何静态托管服务（Vercel、Netlify、GitHub Pages 等）。
- 项目未配置 CI/CD 工作流或平台特定配置文件，部署需手动配置。

## 安全与隐私

- 不要提交 `.env`、`.env.production` 或任何包含密钥的文件（已在 `.gitignore` 中排除）。
- 站点为静态文档，无后端、无数据库、无用户认证。
- 在 `.mdx` 中使用外部链接时，建议使用 Starlight 的 `LinkCard` 或显式标注外部链接，避免用户误点。

## 常用参考链接

在修改站点或内容前，建议先查阅对应官方文档：

- [Astro 路由指南](https://docs.astro.build/en/guides/routing/)
- [Astro 组件基础](https://docs.astro.build/en/basics/astro-components/)
- [在 Astro 中使用 React/Vue/Svelte 等框架组件](https://docs.astro.build/en/guides/framework-components/)
- [Astro 内容集合](https://docs.astro.build/en/guides/content-collections/)
- [Astro 样式与 Tailwind](https://docs.astro.build/en/guides/styling/)
- [Astro 多语言支持](https://docs.astro.build/en/guides/internationalization/)
- [Starlight 官方文档](https://starlight.astro.build/)
