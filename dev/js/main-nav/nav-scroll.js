
gsap.registerPlugin(ScrollToPlugin);

var scrollItems = ["#home-intro-text", "#home-hours-text"];

function scrollIndex(){
    // gsap.to(window, {duration: 2, scrollTo:"#home"});

    gsap.to(window, {duration: 2, scrollTo:{ y: scrollItems[$("#main-nav li button").index(this)], offsetY:90}});
}




// function scrollWelcome(){
//     // gsap.to(window, {duration: 2, scrollTo:"#home-intro-text"});
//     gsap.to(window, {duration: 2, scrollTo:{y:"#home-intro-text", offsetY:90}});
// }

// function scrollStoreHours(){
//     gsap.to(window, {duration: 2, scrollTo:"#home-hours-text"});
// }

