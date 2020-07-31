

var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").height();

// move the #main-nav off the screen (this is moving the #main-nav on a y-axis)
gsap.set("#main-nav", {y:-navHeight});

var mainNavTimeline = gsap.timeline({paused:true})
    mainNavTimeline.to("#main-nav", {duration:0.85, y:0})

// $("#main-nav").height();
// console.log($("#main-nav").height() + " is the height of the #main-nav ");
// console.log($("#main-nav").outerHeight() + " is the height of the #main-nav ");

//function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    // console.log("hide or show nav");
    //toggles the css display property
    // $("#main-nav").toggle();
    
    if(canYouSeeTheMenu === false){

        console.log("show the menu");

        //reset back to true, so that the menu will go away
        canYouSeeTheMenu = true;

        //turn burger into an X
        animateBurger();

        //slide the #main-nav down into view
        mainNavTimeline.play();


    }
    else{
        console.log("hide the menu");

        //reset back to false, so that the menu will come back
        canYouSeeTheMenu = false;

        //turn X into a burger
        animateBurger();

        //slide the #main-nav up out of view
        mainNavTimeline.reverse();

        
        
    }

}


var menuBackground = document.querySelector('#main-nav');

window.onclick = function(event){
    
    //hiding menu when clicked anywhere outside of the button areas
    if(event.target == menuBackground){
        hideShowMainNav();
    }
    
}