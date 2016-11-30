//将路由模块引入
var app = angular.module('app', ['ngRoute']);
app.directive('diHref', ['$location', '$routeParams', '$route', function($location, $route, $routeParams) {
	return function(scope, element, attrs) {
		scope.$watch('diHref', function() {
			if (attrs.diHref) {
				element.attr('href', attrs.diHref);
				element.bind('click', function(event) {
					switch (attrs.diHref) {
						case '#index':
							myrefresh();
							break;
						case '#M1':
							myrefresh();
							break;
						case '#OS':
							myrefresh();
							break;
						case '#yingyong':
							myrefresh();
							break;
						case '#luntan':
							myrefresh();
							break;
						default:
							break;
					}
				})
			}
		})
	}
}])

//配置路由
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: "index"
		})
		.when('/M1', {
			templateUrl: "M1"
		})
		.when('/OS', {
			templateUrl: "OS"
		})
		.when('/huanxi', {
			templateUrl: "huanxi"
		})
		.when('/yingyong', {
			templateUrl: "yingyong"
		})
		.when('/luntan', {
			templateUrl: "luntan"
		})
		.when('/login', {
			templateUrl: "login"
		})
		.otherwise({
			redirectTo: '/index'
		})
}])
app.factory('nameService', function() {
	return {
		tips: "default",
		nameMessages: [{
			name: 'default',
			msg: '请输入用户名'
		}, {
			name: 'minlength',
			msg: '至少输入三位'
		}, {
			name: 'maxlength',
			msg: '用户名不得超过10位'
		}, {
			name: 'pattern',
			msg: '只能输入字母'
		}, {
			name: 'required',
			msg: '请输入用户名'
		}, {
			name: 'pass',
			msg: '^_^'
		}]
	}
})
app.factory('namePass', function() {
	return {
		type: "default",
		nameMessages: [{
			name: 'default',
			msg: '请输入密码'
		}, {
			name: 'minlength',
			msg: '密码至少输入三位'
		}, {
			name: 'maxlength',
			msg: '密码不得超过10位'
		}, {
			name: 'pattern',
			msg: '只能输入数字'
		}, {
			name: 'required',
			msg: '请输入密码'
		}, {
			name: 'pass',
			msg: '^_^'
		}]
	}
})

app.controller('Controller', ["$scope", "nameService", '$location', "namePass", function($scope, nameService, $location, namePass) {
		/*页面跳转开始*/
		$scope.flag = true;
		
		$scope.fanhuiDenglv = function() {
				$location.path('login');
				$scope.flag = false;
			}
			/*页面跳转结束*/
		$scope.nameNum = namePass;
		$scope.nameObj = nameService;
		$scope.sayMessage = function(err, flag) {
			if (flag) {
				for (var item in err) {
					if (err[item] === true) {
						$scope.nameObj.tips = item;
						return
					}
				}
				$scope.nameObj.tips = "pass";
			} else {
				for (var item in err) {
					if (err[item] === true) {
						$scope.nameNum.type = item;
						return
					}
				}
				$scope.nameNum.type = "pass";
			}
		};
		
		//设置cookie   time为截止日期
		$scope.setCookie=function(name, value, time) {
			var date = new Date();
			date.setDate(date.getDate() + time);
			document.cookie = name + "=" + value + ";expires=" + date;
		}
		//获取cookie
//		$scope.getCookie="登录";
		$scope.getCookie=function(name){
			var arr1 = document.cookie.split(';');
			for (var i = 0; i < arr1.length; i++) {
				var arr2 = arr1[i].split('=');
				if (arr2[0] === name) {
					return arr2[1];
				};
			};
			return '';
		}
		$scope.fanhuiIndex = function() {
			$location.path('index');
			$scope.flag = true;
			myrefresh();
//			alert(getCookie('user'))
//			$('.dd').html(getCookie("user"));
		}
		$scope.datas = [{
			id: 1,
			jieshao: "简洁,应用,优雅,精美的邮件让处理邮件变得简洁快速",
			name: "锤子邮件",
			tubiao1: "img/android.png",
			tubiao2: "img/Mac.png",
			src: "img/yy3.png",
			erweima: "img/erweima.png",
			p: "扫二维码下载锤子邮件",
			link: "进一步了解锤子邮件",
		}, {
			id: 2,
			jieshao: "拟物化的界面风格和动画让时间的流动更加鲜活生动",
			name: "锤子时钟",
			tubiao1: "img/android.png",
			tubiao2: "img/Mac.png",
			src: "img/yy1.png",
			erweima: "img/erweima.png",
			p: "扫二维码下载锤子时钟",
			link: "进一步了解锤子时钟"
		}, {
			id: 3,
			jieshao: "是一个科技论坛, 不只是科技论坛",
			name: "锤子科技论坛",
			tubiao1: "img/android.png",
			tubiao2: "img/Mac.png",
			src: "img/yy2.png",
			erweima: "img/erweima.png",
			p: "扫二维码下载锤子科技论坛",
			link: "进一步了解锤子科技论坛"
		}, {
			id: 4,
			jieshao: "雅致的信纸,精心调整的文字排版,这可能是最让人想写字的便签应用",
			name: "锤子便签",
			tubiao1: "img/android.png",
			tubiao2: "img/Mac.png",
			src: "img/yy4.png",
			erweima: "img/erweima.png",
			p: "扫二维码下载锤子便签",
			link: "进一步了解锤子便签"
		}, {
			id: 5,
			jieshao: "是日历,也是行事历,花一点时间,就可以让生活井井有条",
			name: "锤子日历",
			tubiao1: "img/android.png",
			tubiao2: "img/Mac.png",
			src: "img/yy5.png",
			erweima: "img/erweima.png",
			p: "扫二维码下载锤子日历",
			link: "进一步了解锤子日历"
		}];
		$scope.hots = [{
			id: 1,
			img1: "img/81.jpg",
			img2: "img/8.jpg",
			h6: "Smartisan M1/M1L 软胶保护套",
			title1: "TPU环保材质、细腻防滑、防油污",
			name: "group2",
			class1: "pink-text",
			class2: "gray-text",
			id1: "test1",
			id2: "test2",
			price: "¥49.00",
			color1: "粉色",
			color2: "灰色"
		}];

	}])
	// app.run(['$rootScope','$location',function($rootScope,$location){     
	//         $rootScope.$on('$routeChangeSuccess',function(event,current,previous){
	//            myrefresh();
	//         });     
	//  }]);
function myrefresh() {
	window.location.reload();
}

/*jQuery部分开始*/
$(function() {
	/*侧边栏开始*/
	$(".button-collapse").sideNav();
	/*侧边栏结束*/
	$('.six img').each(function(i, item) {
		$(item).hover(function() {
			$('.six img').removeClass('shake');
			$('.six img').eq(i).addClass('shake');
		})
	})
	$('.three-phone ul li a').each(function(i, item) {
		$(item).click(function() {
			$('.three-phone a').removeClass('togglePhone');
			$('.three-phone a').eq(i).addClass('togglePhone');
			$('.col.left img').eq(i).fadeIn(1000).siblings().slideUp();
			$('.col.right img').eq(i).fadeIn(1000).siblings().slideUp();
		})
	})

	/*顶部导航切换开始*/
	$('.topnav li').each(function(i, item) {
			$(item).click(function() {
				$(this).addClass('active').siblings().removeClass('active');
			})
		})
		/*顶部导航切换结束*/
		/*应用页双页面切换开始*/
	$('.change').each(function(i, item) {
			$(item).hover(function() {
				$('.model1').eq(i).hide();
				$('.model2').eq(i).show();
			}, function() {
				$('.model2').eq(i).hide();
				$('.model1').eq(i).show();
			})
		})
		/*应用页双页面切换结束*/
		/*商品颜色切换开始*/
	toggleColor('input[name=group2]', 0)
	toggleColor('input[name=group4]', 2)
	toggleColor('input[name=group6]', 7)
	toggleColor('input[name=group31]', 8)
	toggleColor('input[name=group30]', 9)

	function toggleColor(obj, num) {
		$(obj).each(function(i, item) {
			$(item).on('click', function() {
				$('.body li').eq(num).find('img').hide();
				$(this).parent().parent().siblings().eq(i).show();
			})
		})
	}
	/*商品颜色切结束*/

	/*banner图切换开始*/
	$('.banner .carousel.carousel-slider').carousel({
		full_width: true,
		Interval: 200,
		indicators: true
	});
	$('#p1_banner').slider({
		Interval: 200
	});
	/*banner图切换结束*/
	/*顶部菜单固定开始*/
	$(window).on('scroll', function() {
			var scrollT = $(window).scrollTop();
			if (scrollT > 90) {
				$('.M1menu').addClass('moveTop');
				$('.M1menu .logo').show(1000);
			} else {
				$('.M1menu').removeClass('moveTop');
				$('.M1menu .logo').hide();
			}
		})
		/*顶部菜单固定结束*/

	/*价格切换开始*/
	$('.togglePrice').each(function(i, item) {
			$(item).hover(function() {
				$('.togglePrice .price').eq(i).hide();
				$('.togglePrice .more').eq(i).show();
			}, function() {
				$('.togglePrice .price').eq(i).show();
				$('.togglePrice .more').eq(i).hide();
			})
		})
		/*价格切换结束*/
	var speed1 = 0.1;
	var speed2 = 0.3;
	var speed3 = 0.5;
	var speed4 = 0.7;
	var speed5 = 0.9;
	var $bgTop = 0;

	$('.slider-box').on('mousemove', function(e) {
		$('.slider').css({
			"transition": "none",
		})
		var e = e || window.event;
		var x = -($('.slider').position().left - e.clientX + $('.slider').width() / 2) / 80;
		var y = ($('.slider').position().top - e.clientY - $(document).scrollTop() + $('.slider').height() / 2) / 80 - 1;
		var z = 14;
		var rotate = "rotateX(" + y + "deg) rotateY(" + x + "deg)";
		$('.slider').css({
			"transform": rotate
		})
		if (x < 0 && y < 0) {
			y = Math.abs(y);
			z = Math.abs(x);
			x = Math.abs(y) * 2 - Math.abs(x);
		} else if (x < 0 && y > 0) {
			y = Math.abs(y) - 3
		} else if (x > 0 && y < 0) {
			y = -Math.abs(y) - 3;
			x = Math.abs(y) * 3 - Math.abs(x) * 2;
		} else if (x > 0 && y > 0) {
			y = -(Math.abs(y) - 3)
			z = Math.abs(x);
		}
		var shadow = y + "px " + Math.abs(x) + "px " + z + "px #666";
		$('.slider').css({
			"box-shadow": shadow
		})
		var gaodu1 = x * speed1;
		var gaodu2 = x * speed5;
		var gaodu3 = -x * speed3;
		$('.gaodu1').css('left', gaodu1)
		$('.gaodu2').css('left', gaodu2)
		$('.gaodu3').css('left', gaodu3)
	})
	$('.slider-box').on('mouseout', function() {
		$('.slider').css({
			"transition": "all 200ms",
			"box-shadow": "10px 6px 10px #666",
			"transform": "rotateX(0deg) rotateY(0deg)"
		})
	})

})

/*jQuery部分结束*/