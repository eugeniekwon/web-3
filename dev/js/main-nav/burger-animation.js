var burgerAnimationTimeLine = gsap.timeline({paused:true});
var burgerAnimationSpeed = 0.25;

// reset the transformOrigin point for each line

gsap.set(".lines", {transformOrigin:"center"});

//1: first is the reference to the timeline (burgerAnimationTimeLine), 2: what do you want to animate?, 3: what properties do you want to animate?
// burgerAnimationTimeLine.to("#middle-line", {duration:burgerAnimationSpeed, alpha:0},"burgerStart")
//                         .to("#top-line", {duration:burgerAnimationSpeed, rotation:45, y:10, stroke: "#E5892A"},"burgerStart")
//                         .to("#bottom-line", {duration:burgerAnimationSpeed, rotation:-45, y:-10, stroke: "#E5892A", onReverseComplete:resetBurgerLineColour},"burgerStart");
                     

//ver 2: 
// burgerAnimationTimeLine.to("#burger");

burgerAnimationTimeLine.to("#top-line", {duration:burgerAnimationSpeed, rotation:-45},"burgerX")
                        .to("#bottom-line", {duration:burgerAnimationSpeed, rotation:45}, "burgerX")
                        .to("#middle-line", {duration:burgerAnimationSpeed, alpha:0}, "burgerX")
                        .to("#down-right-arrow", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerX")
                        .to("#down-left-arrow", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerX")
                        


var upArrowtoBurger = gsap.timeline({paused: true});
upArrowtoBurger.to("top-line", {y:0}, "backtoburger")
              .to("bottom-line", {y:0}, "backtoburger")
              .to("middle-line", {alpha:1}, "backtoburger")
              .to("burger", {rotation:0}, "backtoburger")


function animateBurger(){
    console.log("animate burger")

    //check the canYouSeeTheMenu value

    if(canYouSeeTheMenu === true){
        //turn the burger into an X
        burgerAnimationTimeLine.play();
        
    }
    else{
        //turn the X into a burger
        upArrowtoBurger.reverse();
    }
}

//function to change the burger back to the original colour of pink after completing its cycle of burgerAnimationTimeLine
// function resetBurgerLineColour(){

//     //change the burger's colour back to pink after 0.25s
//     gsap.to(".lines", {duration:0.25, stroke:"#D66969"});
// }