// JavaScript Document

(function($){

$(window).load(function() {    
	//$("#status").fadeOut(); // will first fade out the loading animation
	//$("#preloader").delay(400).fadeOut("slow"); // will fade out the white DIV that covers the website.

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}			
	}            			
	theWindow.resize(resizeBg).trigger("resize");
});

$(document).ready(function(){
	
	//Homepage Box Switcher//
	
	$('.homepage-box-one-deploy').click(function(){
		alert("Asd");
		$('.homepage-box-one').delay(100).fadeIn(100);
		$('.homepage-box-two').fadeOut(100);
		$('.homepage-box-three').fadeOut(100);
		$(this).addClass('active-homepage');
		$('.homepage-box-two-deploy').removeClass('active-homepage');
		$('.homepage-box-three-deploy').removeClass('active-homepage');
		return false;
	});
	
	$('.homepage-box-two-deploy').click(function(){
		$('.homepage-box-one').fadeOut(100);
		$('.homepage-box-two').delay(100).fadeIn(100);
		$('.homepage-box-three').fadeOut(100);	
		$(this).addClass('active-homepage');
		$('.homepage-box-one-deploy').removeClass('active-homepage');
		$('.homepage-box-three-deploy').removeClass('active-homepage');	
		return false;
	});
	
	$('.homepage-box-three-deploy').click(function(){
		$('.homepage-box-one').fadeOut(100);
		$('.homepage-box-two').fadeOut(100);
		$('.homepage-box-three').delay(100).fadeIn(100);
		$(this).addClass('active-homepage');	
		$('.homepage-box-two-deploy').removeClass('active-homepage');
		$('.homepage-box-one-deploy').removeClass('active-homepage');
		return false;	
	});
	
	//Adaptive Portfolio Switcher//
	
	$('.portfolio-one-activate').click(function(){
		$('.portfolio').removeClass('portfolio-three');
		$('.portfolio').removeClass('portfolio-two');
		$('.portfolio').addClass('portfolio-one');
		$(this).addClass('active-portfolio-style');
		$('.portfolio-two-activate, .portfolio-three-activate').removeClass('active-portfolio-style');
		return false;
	});
	
	$('.portfolio-two-activate').click(function(){
		$('.portfolio').removeClass('portfolio-three');
		$('.portfolio').addClass('portfolio-two');
		$('.portfolio').removeClass('portfolio-one');	
		$(this).addClass('active-portfolio-style');	
		$('.portfolio-three-activate, .portfolio-one-activate').removeClass('active-portfolio-style');
		return false;
	});
	
	$('.portfolio-three-activate').click(function(){
		$('.portfolio').addClass('portfolio-three');
		$('.portfolio').removeClass('portfolio-two');
		$('.portfolio').removeClass('portfolio-one');
		$(this).addClass('active-portfolio-style');	
		$('.portfolio-two-activate, .portfolio-one-activate').removeClass('active-portfolio-style');
		return false;
	});
	
	//Navigation Settings//
	
	$('.submenu-deploy').click(function(){
		$(this).parent().find('.nav-submenu').toggle(100);
		$(this).parent().find('.sidebar-decoration').toggle(100);
		$(this).toggleClass('active-submenu');
		return false;
	});
	
	$('.close-nav, .sidebar-close, .shortcut-close').click(function(){
		snapper.close();
	});
	

	$('.open-nav, .close-nav').click(function(){
		//$(this).toggleClass('remove-sidebar');
		if( snapper.state().state=="left" ){
			snapper.close();
		} else {
			snapper.open('left');
		}
		return false;
	});
	
	var snapper = new Snap({
	  element: document.getElementById('content')
	});

	$('.deploy-sidebar').click(function(){
		//$(this).toggleClass('remove-sidebar');
		if( snapper.state().state=="left" ){
			snapper.close();
		} else {
			snapper.open('left');
		}
		return false;
	});
	
	/*	$('.deploy-navigation, .close-navigation').click(function(){
		$('.page-navigation').toggleClass('page-navigation-active');
		$(this).find('i').toggleClass('deploy-navigation-active');
		return false;
	});
	
	$('.page-navigation a').hover(function(){
		$(this).find('i:first-child').toggleClass('hover-icon');		
	});*/
	
	
	//Animate.css scroll to begin animation //	
	
	//Go up
	
	$('.footer-backtotop').click(function() {
		$('body,html').animate({
			scrollTop:0
		}, 800, 'easeOutExpo');
		return false;
	});
		
	//Checkboxes
	
	$('.checkbox-one').click(function(){
		$(this).toggleClass('checkbox-one-checked');
		return false;
	});
	$('.checkbox-two').click(function(){
		$(this).toggleClass('checkbox-two-checked');
		return false;
	});
	$('.checkbox-three').click(function(){
		$(this).toggleClass('checkbox-three-checked');
		return false;
	});	
	$('.radio-one').click(function(){
		$(this).toggleClass('radio-one-checked');
		return false;
	});	
	$('.radio-two').click(function(){
		$(this).toggleClass('radio-two-checked');
		return false;
	});
	
	//Notifications
		
	$('.tap-dismiss-notification').click(function(){
		$(this).fadeOut();
		return false;
	});
	
	$('.close-big-notification').click(function(){
		$(this).parent().fadeOut();
		return false;
	});
	
	//Tabs 
	
	$('.tab-but-1').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-1').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-1').show(100);	
		return false;	
	});
	
	$('.tab-but-2').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-2').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-2').show(100);
		return false;		
	});	
	
	$('.tab-but-3').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-3').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-3').show(100);	
		return false;	
	});	
	
	$('.tab-but-4').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-4').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-4').show(100);
		return false;		
	});	

	$('.tab-but-5').click(function(){
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-5').addClass('tab-active');
		$('.tab-content').hide(100);
		$('.tab-content-5').show(100);	
		return false;	
	});	
	
	//Toggles
	
	$('.deploy-toggle-1').click(function(){
		$(this).parent().find('.toggle-content').toggle(100);
		$(this).toggleClass('toggle-1-active');
		return false;
	});
	
	$('.deploy-toggle-2').click(function(){
		$(this).parent().find('.toggle-content').toggle(100);
		$(this).toggleClass('toggle-2-active');
		return false;
	});
	
	$('.deploy-toggle-3').click(function(){
		$(this).parent().find('.toggle-content').toggle(100);
		$(this).find('em strong').toggleClass('toggle-3-active-ball');
		$(this).find('em').toggleClass('toggle-3-active-background');
		return false;
	});
	
	//Submenu Nav
	
	$('.submenu-nav-deploy').click(function(){
		$(this).toggleClass('submenu-nav-deploy-active');
		$(this).parent().find('.submenu-nav-items').toggle(100);
		return false;
	});
	
	//Sliding Door
	
	$('.sliding-door-top').click(function(){
		$(this).animate({
			left:'101%'
		}, 500, 'easeInOutExpo');
		return false;
	});
	
	$('.sliding-door-bottom a em').click(function(){
		$(this).parent().parent().parent().find('.sliding-door-top').animate({
			left:'0px'
		}, 500, 'easeOutBounce');
		return false
		
	});
	

	////////////////////////////////////////
	// Creating a cookie for the modal form! 
	////////////////////////////////////////
	
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {	createCookie(name,"",-1);	}
	
	var webappStatus = readCookie('webappIsClosed');
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	//Detect user agent for known mobile devices and show hide elements for each specific element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	var isiPhone = 		navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = 		navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = 		navigator.userAgent.toLowerCase().indexOf("ipod");
	var isiAndroid = 	navigator.userAgent.toLowerCase().indexOf("android");
	
	if(isiPhone > -1) 	 {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').show();		 $('.android-detected').hide();	 }
	if(isiPad > -1)	 {		 	 $('.ipod-detected').hide();		 $('.ipad-detected').show();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }
	if(isiPod > -1)	 {		 	 $('.ipod-detected').show();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }   
	if(isiAndroid > -1) {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').show();	 }  

	
	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
	
 
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //pause while dragging 
    function pauseOnDragging(){
      isPause = true;
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }


	// Custom Navigation Events
	$(".next-home").click(function(){
	  $(".homepage-slider").trigger('owl.next');
	  return false;
	});
	$(".prev-home").click(function(){
	  $(".homepage-slider").trigger('owl.prev');
	  return false;
	});	


});

}(jQuery));
