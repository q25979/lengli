$(function() {
	// 手机端的菜单下拉效果
	$("span.menu").click(function() {
		$(".top-nav ul").slideToggle(500, function() {});
	});

	// light-box-files 我们的产品点击效果
	$('.gallery-grids a').Chocolat();
})