
var lineTimeline = gsap.timeline();
lineTimeline.from(".line-right",{duration:1, alpha:0, xPercent:100})
            .from(".line-left",{duration:1, alpha:0, xPercent:-100}, "-=0.5")


ScrollTrigger.create({
    trigger: "#line-h1",
    start: "top 60%",
    end: "bottom 60%",
    animation: lineTimeline,
    toggleActions: "restart none none none",
    scrub: 1
    // id: "#line-h1",
    // markers: true
  });

  ScrollTrigger.create({
    trigger: "#line-h2",
    start: "top 60%",
    end: "bottom 60%",
    animation: lineTimeline,
    toggleActions: "restart none none none",
    scrub: 1,
    id: "#line-h2",
    markers: true
  });


