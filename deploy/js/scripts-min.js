console.log("hello fancybox"),$('[data-fancybox="gallery-3"]').fancybox({buttons:["zoom","fullScreen","close"]}),console.log("please work"),$(".my-slider").length>0&&tns({container:".my-slider",items:1,gutter:20,navPosition:"bottom",controlsPosition:"bottom",controlsText:["BACK","NEXT"],startIndex:2,responsive:{350:{edgePadding:0,gutter:20},768:{edgePadding:50,gutter:20},1025:{edgePadding:60,gutter:20}}}),$(".index-slider").length>0&&tns({container:".index-slider",items:1,navPosition:"bottom",controlsPosition:"bottom",startIndex:0,controls:!1,autoplayText:["▶","❚❚"],autoplayPosition:"bottom",autoplay:!0}),gsap.registerPlugin(ScrollTrigger);var burgerAnimationSpeed=.25;gsap.set(".lines",{transformOrigin:"center"});var burgerAnimationTimeLine=gsap.timeline({paused:!0});burgerAnimationTimeLine.addLabel("burgerToDownArrow").to("#burger",{duration:burgerAnimationSpeed,rotation:-45},"animatedBurger").to("#bottom-line",{duration:burgerAnimationSpeed,y:-10},"animatedBurger").to("#top-line",{duration:burgerAnimationSpeed,y:10},"animatedBurger").to("#middle-line",{duration:burgerAnimationSpeed,alpha:0},"animatedBurger").to("#down-left-arrow",{duration:burgerAnimationSpeed,rotation:55},"createArrow").to("#down-right-arrow",{duration:burgerAnimationSpeed,rotation:-55},"createArrow").addLabel("burgerToDownArrowReverse").addPause().addLabel("downArrowtoX").to("#top-line",{duration:burgerAnimationSpeed,rotation:-45},"burgerX").to("#bottom-line",{duration:burgerAnimationSpeed,rotation:45},"burgerX").to("#middle-line",{duration:burgerAnimationSpeed,alpha:0},"burgerX").to("#down-right-arrow",{duration:burgerAnimationSpeed,alpha:0,rotation:0},"burgerX").to("#down-left-arrow",{duration:burgerAnimationSpeed,alpha:0,rotation:0},"burgerX").to("#up-right-arrow",{duration:burgerAnimationSpeed,alpha:0},"burgerX").to("#up-left-arrow",{duration:burgerAnimationSpeed,alpha:0},"burgerX").addLabel("downArrowtoXReverse").addPause().addLabel("XtoUpArrow").to("#up-left-arrow",{duration:burgerAnimationSpeed,alpha:1,rotation:55},"animatedBurgerx").to("#up-right-arrow",{duration:burgerAnimationSpeed,alpha:1,rotation:-55},"animatedBurgerx").to("#bottom-line",{duration:burgerAnimationSpeed,rotation:0},"animatedBurgerx").to("#top-line",{duration:burgerAnimationSpeed,rotation:0},"animatedBurgerx").addLabel("XtoUpArrowReverse").addPause().addLabel("UpArrowtoBurger").to("#up-left-arrow",{duration:burgerAnimationSpeed,rotation:0,alpha:0},"backToBurger").to("#up-right-arrow",{duration:burgerAnimationSpeed,rotation:0,alpha:0},"backToBurger").to("#middle-line",{duration:burgerAnimationSpeed,alpha:1},"backToBurger").to("#bottom-line",{duration:burgerAnimationSpeed,y:0,rotation:0},"backToBurger").to("#top-line",{duration:burgerAnimationSpeed,y:0,rotation:0},"backToBurger").to("#burger",{duration:burgerAnimationSpeed,rotation:0},"backToBurger").addPause(),gsap.set("#burger",{transformOrigin:"center"}),gsap.set("#up-left-arrow",{transformOrigin:"right center",alpha:0}),gsap.set("#up-right-arrow",{transformOrigin:"right center",alpha:0}),$("#burger").on("mouseenter",(function(){console.log("mouse enter"),!1===canYouSeeTheMenu?burgerAnimationTimeLine.play("burgerToDownArrow"):burgerAnimationTimeLine.play("XtoUpArrow")})),$("#burger").on("mouseleave",(function(){console.log("mouse leave"),!1===canYouSeeTheMenu?burgerAnimationTimeLine.reverse("burgerToDownArrowReverse"):burgerAnimationTimeLine.reverse("XtoUpArrowReverse")}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").height();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(burgerAnimationTimeLine.play("downArrowtoX"),mainNavTimeline.play(),canYouSeeTheMenu=!0):(burgerAnimationTimeLine.play("UpArrowtoX"),mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.85,y:0});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){!1===canYouSeeTheMenu&&(navHeight=$("#main-nav").outerHeight(),gsap.set("#main-Nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#burger").on("click",hideShowMainNav),gsap.registerPlugin(ScrollToPlugin);var scrollItems=["#home-intro-text","#home-hours-text"];function scrollIndex(){gsap.to(window,{duration:2,scrollTo:{y:scrollItems[$("#main-nav li button").index(this)],offsetY:90}})}$("#main-nav li button").on("click",hideShowMainNav),$("#main-nav li button").on("click",scrollIndex),$(document).ready((function(){$("#show-form-button").on("click",(function(){$("#contact-button-section").hide(),$("#form-container").show()}))}));