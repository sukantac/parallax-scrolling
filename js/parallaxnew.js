var x = 0,
    y = 0,

    span2FadeIn = false;

// starting function
function init() {
    addScrollEvent();
}
//Making the document ready
$(document).ready(function() {
    $(window).scrollTop(0);
    // initializationObject();
    init();
});
// Scroll Event binding
function addScrollEvent() {
    $(window).off("scroll").on("scroll", function() {
        x = $(window).scrollTop();
        // console.log(x);
        animateImages();

        spanSpeed();
        displayScoreMatchOne();
        showCaption();
        $('div[data-type="background"]').each(function() {
            var $bgobj = $(this); // assigning the object


            var yPos = -(x / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '30% ' + yPos + 'px';

            // Move the background
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });

}
//function for animation
function animateImages() {
    var y = (-x);
    $("#img1").css('top', x);
    $("#img2").css('top', x);
    $("#img1").css('left', y * 3);
    $("#img2").css('right', y * 3);
    // $(".header").css('top', y );

    $("#img3").fadeIn(3000);
    $("#img4").fadeIn(3000);
    $("#galatasaraymatch").fadeIn(1000);
    $("#rmsk").fadeIn(5000);
    $("#rmat").fadeIn(5000);

}



function spanSpeed() {
    $("h3").css('right', y * 4);

    $("#span1").fadeIn(2000);

    // $("#span2").fadeIn(1000);
    // $("#span3").fadeIn(1000);


    //$("#span4").fadeIn(15000);
    //  $("#span5").fadeIn(16000);
    //$("#span6").fadeIn(17000);
    $("#span7").fadeIn(18000);

}
//Showing the caption
function showCaption() {
    if (x > 145 && x < 540) {
        $("#caption1").fadeIn(1000);
    } else {
        $("#caption1").fadeOut(1000);
    }
    //$("#caption2").fadeIn(1000);
    // if (x > 700 && x < 1200) {
    //     $("#caption2").css('top', -x / 10);
    // } else {
    //     {
    //         $("#caption2").css('position', 'fixed');
    //     }
    // }
    // $("#caption3").fadeIn(1000);
    // $("#caption4").fadeIn(2000);
    //$("#caption5").fadeIn(2000);
    //$("#caption6").fadeIn(2000);
    $("#caption7").fadeIn(2000);

}
//Showing the span at different speed
function displayScoreMatchOne() {
    /*  if (x >= 1500 && !span2FadeIn) {
          $("#caption3").fadeIn(1000);
            $("#span3").fadeIn(1000);
          // $('#span3').show();
          span2FadeIn = true;
      }
      if (x >= 1700 && span2FadeIn) {
          $("#caption3").fadeOut(1000);
            $("#span3").fadeOut(1000);
          // $('#span3').hide();
          span2FadeIn = false;
      }*/
    if (x > 590 && x < 1200) {

        $("#caption2").fadeIn(1000);
        $("#span2").fadeIn(1000);
    } else {
        $("#caption2").fadeOut(3000);
        $("#span2").fadeOut(3000);
    }

    if (x > 1130 && x < 1650) {

        $("#caption3").fadeIn(1000);
        $("#span3").fadeIn(1000);
    } else {
        $("#caption3").fadeOut(3000);
        $("#span3").fadeOut(3000);
    }

    if (x > 2350 && x < 2880) {

        $("#caption5").fadeIn(1000);
        $("#span5").fadeIn(1000);
    } else {
        $("#caption5").fadeOut(2000);
        $("#span5").fadeOut(2000);
    }
    if (x > 1740 && x < 2250) {

        $("#caption4").fadeIn(1000);
        $("#span4").fadeIn(1000);
    } else {
        $("#caption4").fadeOut(2000);
        $("#span4").fadeOut(2000);
    }
    if (x > 3140 && x < 3770) {

        $("#caption6").fadeIn(1000);
        $("#span6").fadeIn(1000);
    } else {
        $("#caption6").fadeOut(2000);
        $("#span6").fadeOut(2000);
    }
}
window.addEventListener('load', function() {
    overlay.style.display = 'none';
})
