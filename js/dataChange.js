$(function() {
	// 头部
	new Vue({
		el: '#header',
		data: {
			title: '冷里农产品',
			navList: [{
				aHref: 'index.html',
				content: '首页'
			}, {
				aHref: '#about',
				content: '关于'
			}, {
				aHref: '#services',
				content: '服务'
			}, {
				aHref: '#gallery',
				content: '产业'
			}, {
				aHref: '#team',
				content: '我们团队'
			}, {
				aHref: '#contact',
				content: '联系我们'
			}, ]
		}
	})

	// content-top
	new Vue({
		el: "#contentTop",
		data: {
			list: [{
				btnIcon: "glyphicon-leaf",
				title: "一个标题",
				description: " 给标题描述内容，有意思的内容。最好三列内容差不多长。"
			},{
				btnIcon: "glyphicon-cog",
				title: "流行",
				description: " 乱数假文不是简单的随机文本。它起源于45年的古典拉丁文学作品。"
			},{
				btnIcon: "glyphicon-time",
				title: "流行",
				description: " 乱数假文不是简单的随机文本。它起源于45年的古典拉丁文学作品。"
			}]
		}
	})
});