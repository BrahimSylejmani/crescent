(function ($) {
  "use strict";

  $(document).ready(function () {
    /*====================================
		Header Sticky JS
	======================================*/
    var activeSticky = $("#active-sticky"),
      winDow = $(window);
    winDow.on("scroll", function () {
      var scroll = $(window).scrollTop(),
        isSticky = activeSticky;
      if (scroll < 80) {
        isSticky.removeClass("is-sticky");
      } else {
        isSticky.addClass("is-sticky");
      }
    });

    $(".counter-active").counterUp({
      time: 3000,
      delay: 15,
    });

    /*====================================
		Aos Animate JS
	======================================*/
    AOS.init({
      duration: 1500,
      disable: !1,
      offset: 0,
      once: !0,
      easing: "ease",
    });
  });

  /*====================================
		Mobile Menu
	======================================*/
  var $offcanvasNav = $("#offcanvas-menu a");
  $offcanvasNav.on("click", function () {
    var link = $(this);
    var closestUl = link.closest("ul");
    var activeLinks = closestUl.find(".active");
    var closestLi = link.closest("li");
    var linkStatus = closestLi.hasClass("active");
    var count = 0;

    closestUl.find("ul").slideUp(function () {
      if (++count == closestUl.find("ul").length)
        activeLinks.removeClass("active");
    });
    if (!linkStatus) {
      closestLi.children("ul").slideDown();
      closestLi.addClass("active");
    }
  });

  /*====================================
		Scrool To Top JS
	======================================*/
  var lastScrollTop = "";
  var scrollToTopBtn = ".scrollToTop";

  function stickyMenu($targetMenu, $toggleClass) {
    var st = $(window).scrollTop();
    if ($(window).scrollTop() > 600) {
      if (st > lastScrollTop) {
        $targetMenu.removeClass($toggleClass);
      } else {
        $targetMenu.addClass($toggleClass);
      }
    } else {
      $targetMenu.removeClass($toggleClass);
    }
    lastScrollTop = st;
  }
  $(scrollToTopBtn).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  $(window).on("scroll", function () {
    stickyMenu($(".sticky-header"), "active");
    if ($(this).scrollTop() > 400) {
      $(scrollToTopBtn).addClass("show");
    } else {
      $(scrollToTopBtn).removeClass("show");
    }
  });

  /*====================================
	 	Preloader JS
	 ======================================*/
  $(window).on("load", function (event) {
    $(".preloader").delay(200).fadeOut(100);
  });

  /*====================================
		Cursor Animation JS
	======================================*/
  $(function () {
    $("body").append('<span class="crescent-mouse-move-big d"></span>');
    $("body").append('<span class="crescent-mouse-move-sm"></span>');
    $(
      ".crescent-header,.social-icon a,.newsletter-area__forms button,.topsass-btn,.features-btn,.topsass-btn__v2 "
    ).on("mouseenter", function () {
      $(".crescent-mouse-move-big").addClass("crescent-hidden");
      $(".crescent-mouse-move-sm").addClass("crescent-hidden");
    });
    $(
      ".crescent-header,.social-icon a,.newsletter-area__forms button,.topsass-btn,.features-btn,.topsass-btn__v2 "
    ).on("mouseleave", function () {
      $(".crescent-mouse-move-big").removeClass("crescent-hidden");
      $(".crescent-mouse-move-sm").removeClass("crescent-hidden");
    });
  });
  function cursorMovingAnimation(event) {
    try {
      const timing = gsap.timeline({
        defaults: {
          x: event.clientX,
          y: event.clientY,
        },
      });

      timing
        .to(".crescent-mouse-move-big", {
          ease: "power2.out",
        })
        .to(
          ".crescent-mouse-move-sm",
          {
            ease: "power2.out",
          },
          "-=0.4"
        );
    } catch (err) {
      console.log(err);
    }
  }
  document.addEventListener("mousemove", cursorMovingAnimation);

})(jQuery);

// h7 interface slider
if ($(".h7-app-interface-slide").length) {
  $(".h7-app-interface-slide").slick({
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    infinite: true,
    dots: true,
    arrows: false,
    cssEase: "ease",
    draggable: true,
    prevArrow: '<button class="Prev">Prev</button>',
    nextArrow: '<button class="Prev">Next</button>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
}
