$(function() {
	init();
});

//初始化头部和底部
function init() {
	$('.header').html(header);
	$('.footer').html(footer);
	var currentClass = getPageName().split('.')[0];
	$('.navbar-nav > li > a').removeClass('current');
	$('.' + currentClass).addClass('current');
}


//获取当前页面html名称
function getPageName() {
	var urlItem = location.href;
	var filename;
	if(urlItem.indexOf("?")){
		filename=location.href.split("?")[0];
		filename=filename.substr(filename.lastIndexOf('/')+1);

	}else{
		filename=filename.substr(filename.lastIndexOf('/')+1);
	}
	return filename;
}