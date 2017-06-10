$(function() {
	// 手机端的菜单下拉效果
	$("span.menu").click(function() {
		$(".top-nav ul").slideToggle(500, function() {});
	});
})