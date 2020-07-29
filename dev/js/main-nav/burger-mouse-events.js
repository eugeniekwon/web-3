
var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;


gsap.set("#burger", {rotation:0});


// turning the burger 90 degrees on a vertical axis
burgerToArrowTimeline.to("#burger", {duration:burgerArrowSpeed, rotation:-90}, "animatedBurger")
                     .to("#bottom-line",{duration:burgerArrowSpeed, y:-10}, "animatedBurger")
                     .to("#top-line",{duration:burgerArrowSpeed, y:10}, "animatedBurger")
                     .to("#left-arrow", {duration:burgerArrowSpeed, rotation:55}, "createArrow")
                     .to("#right-arrow", {duration:burgerArrowSpeed, rotation:-55}, "createArrow")
                     
                     


// $("#burger").on("mouseenter", burgerToArrowTimeline({play:true}));
// $("#burger").on("mouseleave", burgerToArrowTimeline);

$("#burger").on("mouseenter", function(){
    
    console.log("mouse enter");
    burgerToArrowTimeline.play();

})

$("#burger").on("mouseleave", function(){
    
    console.log("mouse leave");

    burgerToArrowTimeline.reverse();
})



function rolloverBurger(){
    console.log("rollover burger")

    // check the canYouSeeTheMenu value

    if(animateBurger === false){
        
        // turn the burger into a hover of down arrow
        burgerToArrowTimeline.play();
    }
    else{
         // turn the hovered up arrow into an burger
        burgerToArrowTimeline.reverse();
    }
}





