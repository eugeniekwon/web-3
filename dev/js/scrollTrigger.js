
/* =============
    Lines (except index, contact)
============= */

gsap.set(".line-right", {transformOrigin:"right right"})

var rightLineTimeline = gsap.timeline();
rightLineTimeline.from(".line-right", {
  duration: 1,
  alpha: 0,
  x: 100,
  scaleX:0, 
  stagger: 0.25
})

// ScrollTrigger.create({
//   trigger: ".line-r",
//   start: "top 10%",
//   end: "bottom 10%",
//   animation: rightLineTimeline,
//   toggleActions: "play none none none",
//   scrub: 1
//   // id: "#line-h1",
//   // markers: true
// });


gsap.set(".line-left", {transformOrigin:"left center"})

var leftLineTimeline = gsap.timeline();
leftLineTimeline.from(".line-left",{duration:1, alpha:0, x: -100})

ScrollTrigger.create({
  trigger: ".line-l",
  start: "top 60%",
  end: "bottom 60%",
  animation: leftLineTimeline,
  toggleActions: "play none none none",
  scrub: 1
  // id: "#line-h2",
  // markers: true
});


/* =============
    Lines (index, contact)
============= */

var rightIndConLineTimeline = gsap.timeline();
rightIndConLineTimeline.from(".line-right-ind-con", {
  duration: 1,
  alpha: 0,
  x: 100
})

ScrollTrigger.create({
  trigger: ".line-r-ind-con",
  start: "top 20%",
  end: "bottom 20%",
  animation: rightIndConLineTimeline,
  toggleActions: "play none none none",
  scrub: 1
  // id: "#line-h1",
  // markers: true
});


gsap.set(".line-left-ind-con", {transformOrigin:"left center"})

var leftIndConLineTimeline = gsap.timeline();
leftIndConLineTimeline.from(".line-left-ind-con", {
  duration: 1,
  alpha: 0,
  x: -100
})

ScrollTrigger.create({
  trigger: ".line-l-ind-con",
  start: "top 40%",
  end: "bottom 40%",
  animation: leftIndConLineTimeline,
  toggleActions: "play none none none",
  scrub: 1
  // id: "#line-h1",
  // markers: true
});

var rightIndConLineTwoTimeline = gsap.timeline();
rightIndConLineTwoTimeline.from(".line-right-ind-con-2", {
  duration: 1,
  alpha: 0,
  x: 100
})

ScrollTrigger.create({
  trigger: ".line-r-ind-con-2",
  start: "top 40%",
  end: "bottom 40%",
  animation: rightIndConLineTwoTimeline,
  toggleActions: "play none none none",
  scrub: 1
  // id: "#line-h1",
  // markers: true
});


/* =============
    Intro-text
============= */

var introTextTimeline = gsap.timeline();
introTextTimeline.from(".text-motion",{duration:2, alpha:0})
                .from(".triangle",{duration:2, alpha: 0, y:30}, "-=1.5")

// ScrollTrigger.create({
//   trigger: ".intro-text",
//   start: "top 70%",
//   end: "bottom 70%",
//   animation: introTextTimeline,
//   toggleActions: "restart none none none",
//   scrub: 1
//   // id: "#text",
//   // markers: true
// });


/* =============
    Triangle
============= */

// var triangleTimeline = gsap.timeline();
// triangleTimeline.from(".triangle",{duration:1.5, alpha: 0, y:30})

// ScrollTrigger.create({
//   trigger: ".intro-text",
//   start: "top 40%",
//   end: "bottom 40%",
//   animation: triangleTimeline,
//   toggleActions: "restart none none none",
//   scrub: 1
//   // id: "#text",
//   // markers: true
// });


/* =============
    Index Photo - 1
============= */

// var indexPhotoOneTimeline = gsap.timeline();
// indexPhotoOneTimeline.from(".index-photo-1",{duration:2, x:-150})

// ScrollTrigger.create({
//   trigger: "#home-gallery-1",
//   start: "top 100%",
//   end: "bottom 100%",
//   animation: indexPhotoOneTimeline,
//   toggleActions: "restart none none none",
//   scrub: 1,
//   id: "#text"
//   // markers: true
// });

// /* =============
//     Index Photo - 1
// ============= */

// var indexPhotoTwoTimeline = gsap.timeline();
// indexPhotoTwoTimeline.from(".index-photo-2",{duration:2, xPercent:150})

// ScrollTrigger.create({
//   trigger: "#home-gallery-2",
//   start: "top 90%",
//   end: "bottom 90%",
//   animation: indexPhotoTwoTimeline,
//   toggleActions: "play none none none",
//   scrub: 1,
//   id: "#text"
//   // markers: true
// });