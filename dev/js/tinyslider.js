console.log("please work");

if ($('.my-slider').length > 0) {
  tns({
    container: '.my-slider',
    items: 1,
    gutter: 20,
    navPosition: "bottom",
    controlsPosition: "bottom",
    controlsText: ["BACK", "NEXT"],
    startIndex: 2,

    "responsive": {
      "350": {
        edgePadding: 20,
        gutter: 20
        //"items": 1
      },

      "768": {
        edgePadding: 50,
        gutter: 20
        //"items": 1
      },

      "1025": {
        edgePadding: 60,
        gutter: 20
        //"items": 1
      }
    }
  });
}

if ($('.index-slider').length > 0) {
  tns({
    container: '.index-slider',
    items: 1,
    navPosition: "bottom",
    controlsPosition: "bottom",
    startIndex: 2,
    autoplay: true

  });
}