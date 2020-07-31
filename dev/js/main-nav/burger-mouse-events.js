
var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;


gsap.set("#burger", {rotation:0,transformOrigin:("center")});


// turning the burger 90 degrees on a vertical axis
burgerToArrowTimeline.to("#burger", {duration:burgerArrowSpeed, rotation:-90}, "animatedBurger")
                     .to("#bottom-line",{duration:burgerArrowSpeed, y:-10}, "animatedBurger")
                     .to("#top-line",{duration:burgerArrowSpeed, y:10}, "animatedBurger")
                     .to("#middle-line",{duration:burgerArrowSpeed, alpha:0}, "animatedBurger")
                     .to("#down-left-arrow", {duration:burgerArrowSpeed, rotation:55}, "createArrow")
                     .to("#down-right-arrow", {duration:burgerArrowSpeed, rotation:-55}, "createArrow")



gsap.set("#up-left-arrow", {transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow", {transformOrigin:"right center", alpha:0});

//turning the X back into a burger
var xToArrowTimeline = gsap.timeline({paused:true});
xToArrowTimeline
                // .to("#down-right-arrow", {duration:burgerArrowSpeed, alpha:0}, "animatedBurgerx")
                // .to("#down-left-arrow", {duration:burgerArrowSpeed, alpha:0}, "animatedBurgerx")
                .to("#up-left-arrow", {duration:burgerArrowSpeed, alpha:1, rotation:55}, "animatedBurgerx")
                .to("#up-right-arrow", {duration:burgerArrowSpeed, alpha:1, rotation:-55}, "animatedBurgerx")
                .to("#bottom-line", {duration:burgerArrowSpeed, rotation:0}, "animatedBurgerx")
                .to("#top-line", {duration:burgerArrowSpeed, rotation:0}, "animatedBurgerx")
                .to("#up-right-arrow", {duration:burgerArrowSpeed, alpha:0}, "animatedBurgerx")
                .to("#up-left-arrow", {duration:burgerArrowSpeed, alpha:0}, "animatedBurgerx")
                .to("#down-right-arrow", {duration:burgerArrowSpeed, alpha:1}, "animatedBurgerx")
                .to("#down-left-arrow", {duration:burgerArrowSpeed, alpha:1}, "animatedBurgerx")
                

$("#burger").on("mouseenter", function(){
    
    console.log("mouse enter");

    if(canYouSeeTheMenu === false){
 
        burgerToArrowTimeline.play();
        
    }
    else{
        xToArrowTimeline.play();
    }

})

$("#burger").on("mouseleave", function(){
    
    console.log("mouse leave");

    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.reverse();
        
    } 
    else{
        xToArrowTimeline.reverse();
    }

    
})






