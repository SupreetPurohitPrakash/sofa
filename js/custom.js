jQuery(document).ready(function ($) {
  if (!$('body').hasClass('homepage')) {
    $('link.homepage-only').remove();
  }
  //smooth scroll
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    var topSpacer = 60;

    if ($(".menu-cat-tab").length === 1) {
      if ($(window).width() < 1201) {
        var headerHeight = $(".header").height();
        var menuBarHeight = $(".menu-cat-tab-list").height();
        if (menuBarHeight == null) {
          menuBarHeight = 0;
        }
        topSpacer = headerHeight + menuBarHeight;
        console.log(headerHeight);
        console.log(menuBarHeight);
      }
    }

    if ($(".order").length === 1) {
      topSpacer = 90;
    }

    $("html, body")
      .stop()
      .animate({
          scrollTop: $($anchor.attr("href")).offset().top - topSpacer,
        },
        1500,
        "easeInOutExpo"
      );

    event.preventDefault();
  });

  //carousel init
  $("#carousel1").carousel({
    interval: 12000,
    pause: "false",
  });


  $(".welcome-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  $(".recipes-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  $(".review-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    }, ]
  });

  //limit characters
  $("p").each(function () {
    "use strict";
    var maxLength = parseInt($(this).attr("data-maxlength"));
    var txt = $(this).text();
    if (txt.length > maxLength)
      $(this).text(txt.substring(0, maxLength) + ".....");
  });

  sideMenuManage();

  $(window).on("resize", function () {
    sideMenuManage();
  });

  $(window).scroll(function () {
    sideMenuManage();
  });

  window.setInterval(function () {
    sideMenuManage();
  }, 2000);

  // padding to body according to header height
  // bodyPaddingForHeader();

  // $(window).on('resize', function () {
  //   bodyPaddingForHeader();
  // });

  // $(window).scroll(function () {
  //   bodyPaddingForHeader();
  // });

  // $("#modalCourse").on("show", function () {
  //   console.log('rararar')
  // }).on("hidden", function () {
  //   console.log('tatatat')
  // });

  // lightcase
  $("a[data-rel^=lightcase]").lightcase();

  $('.custom-modal').on('show.bs.modal', function (event) {
    $('html').addClass('overflowYStop');
  }).on("hidden.bs.modal", function () {
    $('html').removeClass('overflowYStop');
  });

  $('.courses-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="19.882" height="38.35" viewBox="0 0 19.882 38.35"> <g id="Group_2039" data-name="Group 2039" transform="translate(1009.091 -1635.236) rotate(90)"> <path id="Path_1297" data-name="Path 1297" d="M734.341-270.4l18.821,18.821-18.821,18.821" transform="translate(1402.831 255.221) rotate(90)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="1"/> </g></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="19.882" height="38.35" viewBox="0 0 19.882 38.35"> <g id="Group_2038" data-name="Group 2038" transform="translate(-989.209 1673.586) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M734.341-270.4l18.821,18.821-18.821,18.821" transform="translate(1402.831 255.221) rotate(90)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="1"/> </g></svg></button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // $('.profile-modal-hero-preview-slider').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true,
  //   arrows: true,
  //   prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="Group_1987" data-name="Group 1987" transform="translate(1383 609) rotate(180)"> <path id="Path_1329" data-name="Path 1329" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(1355 581)" fill="#fff"/> <g id="Group_1985" data-name="Group 1985" transform="translate(403.864 2235.149) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M0,0,4.772,4.772,0,9.544" transform="translate(1645.133 964.136) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/> </g> </g></svg></button>',
  //   nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="Group_1986" data-name="Group 1986" transform="translate(-1355 -581)"> <path id="Path_1329" data-name="Path 1329" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(1355 581)" fill="#fff"/> <g id="Group_1985" data-name="Group 1985" transform="translate(403.864 2235.149) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M0,0,4.772,4.772,0,9.544" transform="translate(1645.133 964.136) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/> </g> </g></svg></button>',
  //   asNavFor: '.profile-modal-hero-collec-slider'
  // });


  if ($('.profile-modal-hero-collec-slider .item').length > 3) {
    // console.log('more than 3');
    $('.profile-modal-hero-preview-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="Group_1987" data-name="Group 1987" transform="translate(1383 609) rotate(180)"> <path id="Path_1329" data-name="Path 1329" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(1355 581)" fill="#fff"/> <g id="Group_1985" data-name="Group 1985" transform="translate(403.864 2235.149) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M0,0,4.772,4.772,0,9.544" transform="translate(1645.133 964.136) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/> </g> </g></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="Group_1986" data-name="Group 1986" transform="translate(-1355 -581)"> <path id="Path_1329" data-name="Path 1329" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(1355 581)" fill="#fff"/> <g id="Group_1985" data-name="Group 1985" transform="translate(403.864 2235.149) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M0,0,4.772,4.772,0,9.544" transform="translate(1645.133 964.136) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/> </g> </g></svg></button>',
      asNavFor: '.profile-modal-hero-collec-slider'
    });
    $('.profile-modal-hero-collec-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.profile-modal-hero-preview-slider',
      centerMode: true,
      focusOnSelect: true
    });
  } else {
    // console.log('less than 3');
    $('.profile-modal-hero-preview-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="Group_1987" data-name="Group 1987" transform="translate(1383 609) rotate(180)"> <path id="Path_1329" data-name="Path 1329" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(1355 581)" fill="#fff"/> <g id="Group_1985" data-name="Group 1985" transform="translate(403.864 2235.149) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M0,0,4.772,4.772,0,9.544" transform="translate(1645.133 964.136) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/> </g> </g></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"> <g id="Group_1986" data-name="Group 1986" transform="translate(-1355 -581)"> <path id="Path_1329" data-name="Path 1329" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(1355 581)" fill="#fff"/> <g id="Group_1985" data-name="Group 1985" transform="translate(403.864 2235.149) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M0,0,4.772,4.772,0,9.544" transform="translate(1645.133 964.136) rotate(90)" fill="none" stroke="#343434" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/> </g> </g></svg></button>',
      asNavFor: '.profile-modal-hero-collec-slider'
    });
    $('.profile-modal-hero-collec-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      asNavFor: '.profile-modal-hero-preview-slider',
      centerMode: false,
      focusOnSelect: true
    });

  }

  $('#modalProfile').on('show.bs.modal', function (event) {
    setTimeout(function () {
      $('.profile-modal-hero-preview-slider').slick('setPosition');
      $('.profile-modal-hero-collec-slider').slick('setPosition');
      console.log('position reset')
    }, 250);
  })



  $('.main-content-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="19.882" height="38.35" viewBox="0 0 19.882 38.35"> <g id="Group_2039" data-name="Group 2039" transform="translate(1009.091 -1635.236) rotate(90)"> <path id="Path_1297" data-name="Path 1297" d="M734.341-270.4l18.821,18.821-18.821,18.821" transform="translate(1402.831 255.221) rotate(90)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="1"/> </g></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="19.882" height="38.35" viewBox="0 0 19.882 38.35"> <g id="Group_2038" data-name="Group 2038" transform="translate(-989.209 1673.586) rotate(-90)"> <path id="Path_1297" data-name="Path 1297" d="M734.341-270.4l18.821,18.821-18.821,18.821" transform="translate(1402.831 255.221) rotate(90)" fill="none" stroke="#343434" stroke-miterlimit="10" stroke-width="1"/> </g></svg></button>'
  });

  $(".side-menu-toggle,.side-menu-bg").click(function () {
    $(".nav-toggle").toggleClass("open");
    $("#menu").toggleClass("active");

    if ($("#menu").hasClass("active")) {
      $("html").addClass("overflowYStop");
      $(".side-menu-bg").addClass("active").animate({
          opacity: 1,
        },
        400
      );
    } else {
      $("html").removeClass("overflowYStop");
      $("#menu").removeClass("active");
    }
  });

  //dropdown toggle
  $(".has-submenu").click(function () {
    "use strict";
    var $this = $(this);
    var menu = $(this).children("ul");

    $this.toggleClass("open");
  });

  $(".carousel-overlay-title .heading-fancy").addClass(
    "animate__animated animate__fadeInDown"
  );
  $(".carousel-overlay-cont>*").addClass("animate__animated animate__fadeInUp");

  //changing img to wrapped div's background
  imgToBg();

  //if clicked outside container remove said class
  containerOutClock(".has-submenu", "open");

  function sideMenuManage() {
    if ($(window).width() < 577) {
      var headerHeight = $(".header").height();
      var windowHeight = $(window).innerHeight();
      var sideMenuHeight = windowHeight - headerHeight;

      $(".side-menu").css({
        top: headerHeight,
        height: sideMenuHeight,
      });
    } else {
      $(".side-menu").css({
        top: "inherit",
        height: "100vh",
      });
    }
  }

  function bodyPaddingForHeader() {
    var headerHeight = $(".header").outerHeight();

    if ($(window).width() < 992) {
      $("body").css({
        "padding-top": headerHeight,
      });
    } else {
      $("body").css({
        "padding-top": "inherit",
      });
    }
  }

  // if the target of the click isn't the container nor a descendant of the container
  function containerOutClock(target, toAddClass) {
    $(document).mouseup(function (e) {
      var container = $(target);

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(target).removeClass(toAddClass);
      }
    });
  }

  //setting overlay outer height
  $(document).ready(overlayHeight);
  $(window).resize(overlayHeight);

  function overlayHeight() {
    $(".square").each(function () {
      "use strict";
      var $this = $(this);
      var widthValue = $this.width();
      $this.css("height", widthValue);
    });
  }

  //copy img to background
  function imgToBg() {
    "use strict";
    var $classForBg = $(".imgtobg-img");
    $classForBg.addClass("imgtobg");
    $(".imgtobg").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });

    var $classForBgSm = $(".imgtobg-img-sm");
    $classForBgSm.addClass("imgtobg-sm");
    $(".imgtobg-sm").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o-sm app-xs" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });
  }

  function equalHeightFixer(targetClass) {
    // Select and loop the container element of the elements you want to equalise
    var highestBox = 0;

    $(targetClass).each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).outerHeight();
      }
    });
    console.log(highestBox);
    $(targetClass).css({
      "min-height": highestBox,
    });
  }

  function scrollDestination() {
    var $section = $("#counter");
    $(document).bind("scroll", function () {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        console.log("reached counter div");
        setTimeout(function () {
          move1();
        }, 500);
        // unbind event not to load scrolsl again
        $(document).unbind("scroll");
      }
    });
  }

  $('.scroll-line').each(function () {
    var $section = $(this);
    $(document).bind("scroll", function () {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        setTimeout(function () {
          $section.addClass('scrolled');
        }, 300);
        // $(document).unbind("scroll");
      }
    });
  });

  $('.scroll-down').click(function () {
    var destination = $(this).parents('.section').next('.section');

    $("html, body").stop().animate({
      scrollTop: destination.offset().top,
    }, 500);

    event.preventDefault();
  });

});