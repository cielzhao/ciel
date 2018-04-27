$(function() {
	init();
	navbarToggle();
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

//页面内容进入动画
function contentWayPoint() {
	var i = 0;
	$('.animate-box').waypoint( function( direction ) {
		if( direction === 'down' && !$(this.element).hasClass('animated') ) {
			i++;
			$(this.element).addClass('item-animate');
			setTimeout(function(){
				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('animate-effect');
						if ( effect === 'fadeIn') {
							el.addClass('fadeIn animated');
						} else if ( effect === 'fadeInLeft') {
							el.addClass('fadeInLeft animated');
						} else if ( effect === 'fadeInRight') {
							el.addClass('fadeInRight animated');
						} else {
							el.addClass('fadeInUp animated');
						}
						el.removeClass('item-animate');
					},  k * 200, 'easeInOutExpo' );
				});
			}, 100);
		}
	} , { offset: '85%' } );
};

//小屏右上角菜单点击效果
function navbarToggle() {
	$('.navbar-toggle').click(function() {
		if(!$(this).hasClass('open')) {
			$(this).addClass('open');
//			$(this).html('<span class="glyphicon glyphicon-remove"></span>');
		} else {
			$(this).removeClass('open');
//			$(this).html('<span class="sr-only">切换导航</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>');
		}
	});
}
