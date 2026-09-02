# 计算机科学与技术专业入门手册

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

本仓库是使用 [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) 构建的静态文档网站，面向 **计算机科学与技术专业大一新生**（零基础友好），提供：

- 专业认知框架与学科地图
- AI 时代背景下的能力保值分析
- 四年核心课程、实践路线与毕业出路
- L1–L7 七层学科分层导读
- 按年级分层的练手项目与公开课推荐

## 内容来源

站点的原始稿件存放于 `doc/` 目录：

- `计算机科学与技术专业入门手册.docx`
- `计算机科学与技术学科分层导读.docx`
- `计算机学科地图与方向全景（手册扩展篇）.docx`
- `分层项目练手.md`

经过结构重组、表达优化后，已迁移到 `src/content/docs/` 下对应的 Astro/Starlight 页面中。

## 项目结构

```
.
├── public/                  # 静态资源
├── src/
│   ├── assets/              # 站点图片等媒体资源
│   ├── content/
│   │   └── docs/            # Starlight 文档页面
│   │       ├── index.mdx              # 首页
│   │       ├── handbook/              # 入门手册（8 章）
│   │       ├── layers/                # 学科分层导读（L1–L7）
│   │       ├── directions/            # 方向全景扩展篇
│   │       └── projects/              # 分层项目练手
│   └── content.config.ts    # 内容集合配置
├── doc/                     # 原始稿件
├── astro.config.mjs         # 站点与侧边栏配置
├── package.json
└── tsconfig.json
```

## 常用命令

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                         |
| `npm run dev`             | 启动本地开发服务器（默认 `localhost:4321`）       |
| `npm run build`           | 构建生产站点到 `./dist/`                          |
| `npm run preview`         | 本地预览构建产物                                  |

## 维护说明

- 新增或修改页面：在 `src/content/docs/` 下编辑 `.md` 或 `.mdx` 文件。
- 调整导航：修改 `astro.config.mjs` 中的 `sidebar`。
- 提交前请运行 `npm run build`，确保没有构建错误。
