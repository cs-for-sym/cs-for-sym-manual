// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CS 入门手册',
			description: '计算机科学与技术专业大一新生认知框架、四年路线图与分层学习指南',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: '首页', slug: '' },
				{
					label: '入门手册',
					items: [
						{ label: '前言', slug: 'handbook' },
						{ label: '第 1 章 这是一门什么样的专业', slug: 'handbook/01-what-is-cs' },
						{ label: '第 2 章 AI 时代，CS 还值得读吗', slug: 'handbook/02-ai-era' },
						{ label: '第 3 章 前置知识与入学前准备', slug: 'handbook/03-preparation' },
						{ label: '第 4 章 核心课程地图', slug: 'handbook/04-curriculum' },
						{ label: '第 5 章 实践能力与工具链', slug: 'handbook/05-practice' },
						{ label: '第 6 章 未来方向全景', slug: 'handbook/06-career' },
						{ label: '第 7 章 四年学习路线图', slug: 'handbook/07-roadmap' },
						{ label: '第 8 章 常见误区与建议', slug: 'handbook/08-myths' },
					],
				},
				{
					label: '学科分层导读',
					items: [
						{ label: '七层模型总览', slug: 'layers' },
						{ label: 'L1 数学地基', slug: 'layers/l1-math' },
						{ label: 'L2 算法与理论层', slug: 'layers/l2-algorithm' },
						{ label: 'L3 硬件与体系结构层', slug: 'layers/l3-hardware' },
						{ label: 'L4 系统软件层', slug: 'layers/l4-systems' },
						{ label: 'L5 软件与工程层', slug: 'layers/l5-software' },
						{ label: 'L6 智能与数据层', slug: 'layers/l6-ai-data' },
						{ label: 'L7 交叉与应用层', slug: 'layers/l7-applications' },
						{ label: '结语', slug: 'layers/conclusion' },
					],
				},
				{ label: '方向全景扩展', slug: 'directions' },
				{ label: '分层项目练手', slug: 'projects' },
			],
		}),
	],
});
