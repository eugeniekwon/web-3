
// var burgerToArrowTimeline = gsap.timeline({paused:true});

gsap.set("#burger", {transformOrigin:("center")});

gsap.set("#up-left-arrow", {transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow", {transformOrigin:"right center", alpha:0});


$("#burger").on("mouseenter", function(){
    
    console.log("mouse enter");

    if(canYouSeeTheMenu === false){ 
        //mouse enter
        burgerAnimationTimeLine.play("burgerToDownArrow");
        
    }
    else{
        burgerAnimationTimeLine.play("XtoUpArrow");
    }

})

$("#burger").on("mouseleave", function(){
    
    console.log("mouse leave");

    if(canYouSeeTheMenu === false){
        burgerAnimationTimeLine.reverse("burgerToDownArrowReverse");
        
    } 
    else{
        burgerAnimationTimeLine.reverse("XtoUpArrowReverse");
    }

    
})






