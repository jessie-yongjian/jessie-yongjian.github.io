$(function(){
	topBannerFiex();
//	血拼时刻
	shopingRunning();
	
	bannerTouch();
});
	

//顶部导航
function topBannerFiex(){
	var $header = $('header');
	var $bannerHeight = $('.jd-banner').height();
//	window.scroll
	
		$(window).scroll(function(){
			var $scrollHeight = $(document.body).scrollTop();
//			console.log($scrollHeight);
			var oPacity =$scrollHeight/$bannerHeight;
			if(oPacity>0.8){
				oPacity=0.8;
			}
//			console.log(oPacity);
			$header.css("background","rgba(201, 21, 35,"+oPacity+"0)");
		})
}


//倒计时抢购
function shopingRunning(){
	var totalTimes =5*30*60;
	
	var timerId = setInterval(function(){
	
		totalTimes--;
		if(totalTimes<0){
			clearInterval(timerId);
			return;
		}
		var Kill_lis = $('.kill-time li');
		var hours = Math.floor(totalTimes/3600);
		Kill_lis.eq(0).innerHTML =Math.floor(hours/10); 
		Kill_lis[1].innerHTML =hours%10; 
		
		var mins = Math.floor(totalTimes%3600/60);
		Kill_lis[3].innerHTML =Math.floor(mins/10); 
		Kill_lis[4].innerHTML =mins%10; 
		
		var secs = Math.floor(totalTimes%60);
		Kill_lis[6].innerHTML =Math.floor(secs/10); 
		Kill_lis[7].innerHTML =secs%10; 
	},10)
	
	
}

////touch模块测试
//function Touch(){
//		$('body').swipeLeft(function(){
//			console.log('向左滑动');
//		}).swipeRight(function(){
//			$(this).css('background','yellow');
//		}).swipeUp(function(){
//			$(this).css('background','pink');
//			console.log('向下滑动');
//		}).longTap(function(){
//			console.log('常按');
//		})
//}
function bannerTouch(){
	var $banner_imgs = $('.banner-imgs');
	var count=1;
	
//	往左滑动
	$banner_imgs.swipeLeft(function(){
		count++;
		if(count>=10){
			count=2;
			$(this).css({
				transform:'translateX(-10%)'
			})
			
		}
		console.log(count);
		$('.banner-index').children().removeClass('current');
		if(count>8){
			$('.banner-index').children().eq(0).addClass('current');
		}else{
			$('.banner-index').children().eq(count-1).addClass('current');
		}
		
		$(this).animate({
			transform:'translateX('+count*-10+'%)'
		});
	});
	
//	往右滑动
	$banner_imgs.swipeRight(function(){
		count--;
		if(count<0){
			count=7;
			$(this).css({
				transform:'translateX(-80%)'
			});
		};
		
		console.log(count);
		$(this).animate({
			transform:'translateX('+count*-10+'%)'
		});
		
		console.log(count);
		$('.banner-index').children().removeClass('current');
		$('.banner-index').children().eq(count-1).addClass('current');
	});

}
