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
				content: '我们的产品'
			}, {
				aHref: '#features',
				content: '农产品作用'
			}, {
				aHref: '#team',
				content: '我们的团队'
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
			title: "我们的产品",
			img1: "images/pi.jpg",
			img2: "images/pi2.jpg",
			img3: "images/pi1.jpg",
			img4: "images/pi4.jpg",
			img5: "images/pi5.jpg",
			img6: "images/pi3.jpg",
			img7: "images/pi6.jpg",
			img8: "images/pi7.jpg",
		}
	})

	// 农产品的作用
	new Vue({
		el: "#features",
		data: {
			title: "农产品的作用",
			description: "农产品作用的描述，这是一个关于农产品作用的描述...",
			bigLi: [{
				src: "images/fe.jpg",
				description: "这是第一个描述",
				smallLi: [{
					content: "这是农产品的作用1"
				}, {
					content: "这是农产品的作用2"
				}, {
					content: "这是农产品的作用3"
				}, {
					content: "这是农产品的作用4"
				}]
			}, {
				src: "images/fe1.jpg",
				description: "这是第二个描述",
				smallLi: [{
					content: "这是农产品的作用1"
				}, {
					content: "这是农产品的作用2"
				}, {
					content: "这是农产品的作用3"
				}, {
					content: "这是农产品的作用4"
				}]
			}, {
				src: "images/fe2.jpg",
				description: "这是第三个描述",
				smallLi: [{
					content: "这是农产品的作用1"
				}, {
					content: "这是农产品的作用2"
				}, {
					content: "这是农产品的作用3"
				}, {
					content: "这是农产品的作用4"
				}]
			}, {
				src: "images/fe3.jpg",
				description: "这是第四个描述",
				smallLi: [{
					content: "这是农产品的作用1"
				}, {
					content: "这是农产品的作用2"
				}, {
					content: "这是农产品的作用3"
				}, {
					content: "这是农产品的作用4"
				}]
			}, ]
		}
	})

	// 我们的团队
	new Vue({
		el: "#team",
		data: {
			title: "我们的团队",
			list: [{
				src: "url(images/te.jpg)",
				name: "这是名字",
				description: "相关的描述"
			}, {
				src: "url(images/te1.jpg)",
				name: "这是名字",
				description: "相关的描述"
			}, {
				src: "url(images/te2.jpg)",
				name: "这是名字",
				description: "相关的描述"
			}, {
				src: "url(images/te3.jpg)",
				name: "这是名字",
				description: "相关的描述"
			}]
		}
	})

	// 联系我们
	new Vue({
		el: "#contact",
		data: {
			title: "联系我们",
			description: '这是联系我们的描述，描述内容自选',
			content: "这是填内容的，想好什么内容就填",
			list: [{
				title: "我们的地址1",
				description: "我们地址描述",
				content: "我们地址的内容"
			}, {
				title: "我们的地址2",
				description: "我们地址描述",
				content: "我们地址的内容"
			}],
			footNavLi: [{
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
				content: '我们的产品'
			}, {
				aHref: '#features',
				content: '农产品作用'
			}, {
				aHref: '#team',
				content: '我们的团队'
			}, {
				aHref: '#contact',
				content: '联系我们'
			}, ],
			footFriendLi: [{
				classIcon: ''
			}, {
				classIcon: 'twitter'
			}, {
				classIcon: 'linked'
			}, {
				classIcon: 'dribble'
			}]
		}
	})
});