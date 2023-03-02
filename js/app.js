$(document).ready(function () {
  // navbar_start
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 25) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
  // navbar_end

  // type_js_start
  var typed = new Typed(".element", {
    strings: ["bala", "a designer", "a developer", "a techie"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });
  // type_js_end

  // progress_bars_start
  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:100%; transition:1s all");
      p[1].setAttribute("style", "width:95%; transition:1.5s all");
      p[2].setAttribute("style", "width:85%; transition:1.7s all");
      p[3].setAttribute("style", "width:99%; transition:2s all");
      p[4].setAttribute("style", "width:85%; transition:2.3s all");
      p[5].setAttribute("style", "width:85%; transition:2.3s all");
    },
    offset: "90%",
  });
  // progress_bars_end

  // filterizr_start
  var filterizid = $(".filter-container").filterizr({
    animationDuration: 0.5,
  });
  // filterizr_end

  // animation_start
  $(window).scroll(() => {
    $(".slideanim").each(function () {
      // console.log($(this));
      let pos = $(this).offset().top; //get slideanim position
      // console.log(pos);

      let winTop = $(window).scrollTop();
      if (winTop + 600 > pos) {
        $(this).addClass("slide");
      }
    });

    $(".slideanim2").each(function () {
      // console.log($(this));
      let pos = $(this).offset().top; //get slideanim position
      // console.log(pos);

      let winTop = $(window).scrollTop();
      if (winTop + 600 > pos) {
        $(this).addClass("slide2");
      }
    });
  });
  // animation_end
});
