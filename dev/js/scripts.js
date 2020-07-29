// @codekit-prepend "fancybox.js";
// @codekit-prepend "tinyslider.js";

// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/burger-mouse-events-2.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";
// @codekit-prepend "main-nav/nav-scroll.js";
// @codekit-prepend "main-nav/main-nav-click.js";

$( document ).ready(function() {
    

    $("#show-form-button").on("click", function(){
        // console.log("button here");

        // hide contact-button-section
        $("#contact-button-section").hide();

        // show form-container
        $("#form-container").show();

    });



});

