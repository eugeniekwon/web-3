var xToArrowTimeline = gsap.timeline({paused:true});
var burgerUpArrowSpeed = 0.25;

xToArrowTimeline.to("#burger", {duration:burgerUpArrowSpeed, rotation:-90}, "animatedBurgerx")
                .to("#left-arrow", {duration:burgerUpArrowSpeed, rotation:55}, "animatedBurgerx")
                .to("#right-arrow", {duration:burgerUpArrowSpeed, rotation:-55}, "animatedBurgerx")
                .to("#bottom-line", {duration:burgerUpArrowSpeed, y:-10}, "animatedBurgerx")
                .to("#top-line", {duration:burgerUpArrowSpeed, y:10}, "animatedBurgerx")



$("#burger").on("mouseenter", function(){
    
    console.log("mouse enter");
    xToArrowTimeline.play();

})

$("#burger").on("mouseleave", function(){
    
    console.log("mouse leave");

    xToArrowTimeline.reverse();
})



function rolloverBurgerUp(){
    console.log("rollover burger")

    // check the canYouSeeTheMenu value

    if(animateBurger === true){
        //turn the X into a hover of up arrow
        xToArrowTimeline.play();
    }
    else{
        // turn the hovered up arrow into an X
        xToArrowTimeline.reverse();
    }
}


