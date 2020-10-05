
/* =============
    Lines (except index, contact)
============= */

gsap.set(".line-right", {transformOrigin:"right right"})

var rightLineTimeline = gsap.timeline();
rightLineTimeline.from(".line-right", {duration: 1, alpha: 0, x: 100})


gsap.set(".line-left", {transformOrigin:"left center"})

var leftLineTimeline = gsap.timeline();
leftLineTimeline.from(".line-left", {duration:1, alpha:0, x: -100})

ScrollTrigger.create({
  trigger: ".line-l",
  start: "top 60%",
  end: "bottom 60%",
  animation: leftLineTimeline,
  toggleActions: "play none none none"
});


/* =============
    Lines (index, contact)
============= */

var rightIndConLineTimeline = gsap.timeline();
rightIndConLineTimeline.from(".line-right-ind-con", {duration: 1, alpha: 0, x: 100})

ScrollTrigger.create({
  trigger: ".line-r-ind-con",
  start: "top 20%",
  end: "bottom 20%",
  animation: rightIndConLineTimeline,
  toggleActions: "play none none none"
  // scrub: 1
  // id: "#line-h1",
  // markers: true
});


gsap.set(".line-left-ind-con", {transformOrigin:"left center"})

var leftIndConLineTimeline = gsap.timeline();
leftIndConLineTimeline.from(".line-left-ind-con", {duration: 1, alpha: 0, x: -100})

ScrollTrigger.create({
  trigger: ".line-l-ind-con",
  start: "top 40%",
  end: "bottom 40%",
  animation: leftIndConLineTimeline,
  toggleActions: "play none none none"
  // id: "#line-h1",
  // markers: true
});


var rightIndConLineTwoTimeline = gsap.timeline();
rightIndConLineTwoTimeline.from(".line-right-ind-con-2", {duration: 1, alpha: 0, x: 100})

ScrollTrigger.create({
  trigger: ".line-r-ind-con-2",
  start: "top 40%",
  end: "bottom 40%",
  animation: rightIndConLineTwoTimeline,
  toggleActions: "play none none none"
  // id: "#line-h1",
  // markers: true
});


/* =============
    Intro-text (except Index)
============= */

var introTextTimeline = gsap.timeline();
introTextTimeline.from(".text-motion",{duration:2, alpha:0})
                .from(".triangle",{duration:2, alpha: 0, y:30}, "-=1.5")


/* =============
    Index - intro text
============= */

var indexTextTimeline = gsap.timeline();
indexTextTimeline.from(".text-motion-index",{duration:1, alpha:0})
                  .from("#h-button-1",{duration:1, alpha:0})
                  .from(".triangle-index",{duration:2, alpha: 0, y:30}, "-=1.5")

ScrollTrigger.create({
  trigger: "#home-intro-text",
  start: "top 90%",
  end: "bottom 90%",
  animation: indexTextTimeline,
  toggleActions: "restart none none none",
  id: "#text"
  // markers: true
});


/* =============
    Index - Photo (1)
============= */

var indexPhotoOneTimeline = gsap.timeline();
indexPhotoOneTimeline.from(".index-photo-1",{duration:1.5, alpha:0, x:-150})

ScrollTrigger.create({
  trigger: "#home-gallery-1",
  start: "top 100%",
  end: "bottom 100%",
  animation: indexPhotoOneTimeline,
  toggleActions: "restart none none none",
  id: "#text"
  // markers: true
});

/* =============
    Index - Photo (2)
============= */

var indexPhotoTwoTimeline = gsap.timeline();
indexPhotoTwoTimeline.from(".index-photo-2",{duration:1.5, alpha:0, x:150})

ScrollTrigger.create({
  trigger: "#home-gallery-2",
  start: "top 90%",
  end: "bottom 90%",
  animation: indexPhotoTwoTimeline,
  toggleActions: "play none none none",
  id: "#text"
  // markers: true
});


/* =============
    Index - Store Hours
============= */

var indexStoreTimeline = gsap.timeline();
indexStoreTimeline.from("#index-hours-motion",{duration:1, alpha:0, y:50})

ScrollTrigger.create({
  trigger: "#home-hours-text",
  start: "top 60%",
  end: "bottom 60%",
  animation: indexStoreTimeline,
  toggleActions: "play none none none",
  id: "#text"
  // markers: true
});


/* =============
    Online Orders - gallery
============= */

var onlineOrdersTimeline = gsap.timeline();
onlineOrdersTimeline.from("#orders-carousel div",{duration:1, alpha:0, x:-150})

ScrollTrigger.create({
  trigger: "#orders-carousel",
  start: "top 90%",
  end: "bottom 90%",
  animation: onlineOrdersTimeline,
  toggleActions: "play none none none",
  id: "#text"
  // markers: true
});


/* =============
    Online Orders - button
============= */

var onlineOrdersButtonTimeline = gsap.timeline();
onlineOrdersButtonTimeline.from("#o-button-1",{duration:1, alpha:0})


/* =============
    Gallery
============= */

var galleryTimeline = gsap.timeline();
var galleryTime = 0.5;

galleryTimeline.from("#gallery-content-laptop div ul:nth-child(1) li:nth-child(1)",{duration:galleryTime, alpha:0})
              .from("#gallery-content-laptop div ul:nth-child(1) li:nth-child(3)",{duration:galleryTime, alpha:0}, "-=0.1")
              .from("#gallery-content-laptop div ul:nth-child(1) li:nth-child(2)",{duration:galleryTime, alpha:0})
              .from("#gallery-content-laptop div ul:nth-child(2) li:nth-child(1)",{duration:galleryTime, alpha:0}, "-=0.1")
                .from("#gallery-content-laptop div ul:nth-child(2) li:nth-child(3)",{duration:galleryTime, alpha:0})
                .from("#gallery-content-laptop div ul:nth-child(2) li:nth-child(2)",{duration:galleryTime, alpha:0}, "-=0.1")
                .from("#gallery-content-laptop div ul:nth-child(3) li:nth-child(1)",{duration:galleryTime, alpha:0})
                .from("#gallery-content-laptop div ul:nth-child(3) li:nth-child(2)",{duration:galleryTime, alpha:0}, "-=0.1")
                
                
ScrollTrigger.create({
  trigger: "#gallery-content-laptop",
  start: "top 60%",
  end: "bottom 60%",
  animation: galleryTimeline,
  toggleActions: "play none none none",
  id: "#text"
  // markers: true
});


/* =============
    Contact
============= */

var contactTimeline = gsap.timeline();
contactTimeline.from("#contact-hero div img",{duration:1, alpha:0, x:-150})
                
ScrollTrigger.create({
  trigger: "#contact",
  start: "top 90%",
  end: "bottom 90%",
  animation: contactTimeline,
  toggleActions: "play none none none",
  id: "#text"
  // markers: true
});