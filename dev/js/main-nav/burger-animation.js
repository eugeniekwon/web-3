
var burgerAnimationSpeed = 0.25;

// reset the transformOrigin point for each line

gsap.set(".lines", {transformOrigin:"center"});

var burgerAnimationTimeLine = gsap.timeline({paused:true});

burgerAnimationTimeLine.addLabel("burgerToDownArrow")
                      .to("#burger", {duration:burgerAnimationSpeed, rotation:-90}, "animatedBurger")
                      .to("#bottom-line",{duration:burgerAnimationSpeed, y:-10}, "animatedBurger")
                      .to("#top-line",{duration:burgerAnimationSpeed, y:10}, "animatedBurger")
                      .to("#middle-line",{duration:burgerAnimationSpeed, alpha:0}, "animatedBurger")
                      .to("#down-left-arrow", {duration:burgerAnimationSpeed, rotation:55}, "createArrow")
                      .to("#down-right-arrow", {duration:burgerAnimationSpeed, rotation:-55}, "createArrow")
                      .addLabel("burgerToDownArrowReverse")
                      .addPause()
                      .addLabel("downArrowtoX")
                      .to("#top-line", {duration:burgerAnimationSpeed, rotation:-45},"burgerX")
                      .to("#bottom-line", {duration:burgerAnimationSpeed, rotation:45}, "burgerX")
                     .to("#middle-line", {duration:burgerAnimationSpeed, alpha:0}, "burgerX")
                     .to("#down-right-arrow", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerX")
                     .to("#down-left-arrow", {duration:burgerAnimationSpeed, alpha:0, rotation:0}, "burgerX")
                     .to("#up-right-arrow", {duration:burgerAnimationSpeed, alpha:0}, "burgerX")
                     .to("#up-left-arrow", {duration:burgerAnimationSpeed, alpha:0}, "burgerX")
                      .addLabel("downArrowtoXReverse")
                      .addPause()
                      .addLabel("XtoUpArrow")
                     .to("#up-left-arrow", {duration:burgerAnimationSpeed, alpha:1, rotation:55}, "animatedBurgerx")
                     .to("#up-right-arrow", {duration:burgerAnimationSpeed, alpha:1, rotation:-55}, "animatedBurgerx")
                     .to("#bottom-line", {duration:burgerAnimationSpeed, rotation:0}, "animatedBurgerx")
                     .to("#top-line", {duration:burgerAnimationSpeed, rotation:0}, "animatedBurgerx")
                     .addLabel("XtoUpArrowReverse")
                     .addPause()
                     .addLabel("UpArrowtoBurger")
                      .to("#up-left-arrow", {duration:burgerAnimationSpeed, rotation:0, alpha:0}, "backToBurger")
                      .to("#up-right-arrow", {duration:burgerAnimationSpeed, rotation:0, alpha:0}, "backToBurger")
                      .to("#middle-line",{duration:burgerAnimationSpeed, alpha:1}, "backToBurger")
                      .to("#bottom-line",{duration:burgerAnimationSpeed, y:0, rotation:0}, "backToBurger")
                      .to("#top-line",{duration:burgerAnimationSpeed, y:0, rotation:0}, "backToBurger")
                      .to("#burger", {duration:burgerAnimationSpeed, rotation:0}, "backToBurger")
                      .addPause();
