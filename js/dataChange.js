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
				content: '产品'
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
			}, {
				btnIcon: "glyphicon-cog",
				title: "流行",
				description: " 乱数假文不是简单的随机文本。它起源于45年的古典拉丁文学作品。"
			}, {
				btnIcon: "glyphicon-time",
				title: "流行",
				description: " 乱数假文不是简单的随机文本。它起源于45年的古典拉丁文学作品。"
			}]
		}
	})

	// 关于
	new Vue({
		el: "#about",
		data: {
			title: "这是一个关于产品的标题描述，产地什么的标题自选",
			description: "这是一个关于产品的详细描述，怪我词穷想不到什么内容了，随便写点什么，一段内容的多少对网页的美观是有一定的作用的",
			list: [{
				imgSrc: "images/ab.jpg",
				title: "这是一个关于产品的标题",
				description: "这是一个关于产品的描述，一定要详细的描述产品，这样有效于产品的销售"
			}, {
				imgSrc: "images/ab1.jpg",
				title: "这是一个关于产品的标题",
				description: "这是一个关于产品的描述，一定要详细的描述产品，这样有效于产品的销售"
			}, {
				imgSrc: "images/ab2.jpg",
				title: "这是一个关于产品的标题",
				description: "这是一个关于产品的描述，一定要详细的描述产品，这样有效于产品的销售"
			}, ]
		}
	})

	// 服务
	new Vue({
		el: "#services",
		data: {
			title: "我们的服务",
			description: "我们所提供的服务是，这个是很好很多的服务，请看看下面的介绍，这一定会对你有所帮助的",
			li1: [{
				btnIcon: "glyphicon-pencil",
				title: "这是我们的服务1",
				description: "这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述"
			}, {
				btnIcon: "glyphicon-user",
				title: "这是我们的服务2",
				description: "这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述"
			}],
			li2: [{
				btnIcon: "glyphicon-file",
				title: "这是我们的服务3",
				description: "这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述"
			}, {
				btnIcon: "glyphicon-eye-open",
				title: "这是我们的服务4",
				description: "这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述这是我们对服务1的一些详细描述"
			}]
		}
	})

	// 产品
	new Vue({
		el: "#gallery",
		data: {
			title: "我们的产品"
		}
	})
});