console.log("please work");

tns({
  container: '.my-slider',
  items: 1,
  gutter: 20,
  navPosition: "bottom",
  controlsPosition: "botton",
  controlsText: ["BACK", "NEXT"],
  startIndex: 2,
  
  "responsive": {
    "350": {
      edgePadding: 20,
      gutter: 20,
      "items": 1
    },

    "768": {
      edgePadding: 50,
      gutter: 20,
      "items": 1
    },

    "1025": {
      edgePadding: 60,
      gutter: 20,
      "items": 1
    }
  }
});


tns({
  container: '.my-slider-2',
  items: 1,
  navPosition: "bottom",
  controlsPosition: "botton",
  startIndex: 2,
  autoplay: true

});