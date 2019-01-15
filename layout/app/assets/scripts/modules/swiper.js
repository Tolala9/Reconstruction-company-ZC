class Swiper{

  constructor() {
    this.allMethods();  
  }




  allMethods() {






    (function () {

  /**
   * Global variables
   */

   var userAgent = navigator.userAgent.toLowerCase(),
   initialDate = new Date(),

   $document = $(document),
   $window = $(window),
   $html = $("html"),
   $body = $('body'),

   isDesktop = $html.hasClass("desktop"),
   isRtl = $html.attr("dir") === "rtl",
   isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
   isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
   isTouch = "ontouchstart" in window,
   onloadCaptchaCallback,
   plugins = {
    swiper: $(".swiper-slider"),
    rdMailForm: $(".rd-mailform")
  };

  /**
   * Initialize All Scripts
   */
   $document.ready(function () {
    var isNoviBuilder = window.xMode;

    /**
     * getSwiperHeight
     * @description  calculate the height of swiper slider basing on data attr
     */
     function getSwiperHeight(object, attr) {
      var val = object.attr("data-" + attr),
      dim;

      if (!val) {
        return undefined;
      }

      dim = val.match(/(px)|(%)|(vh)$/i);

      if (dim.length) {
        switch (dim[0]) {
          case "px":
          return parseFloat(val);
          case "vh":
          return $window.height() * (parseFloat(val) / 100);
          case "%":
          return object.width() * (parseFloat(val) / 100);
        }
      } else {
        return undefined;
      }
    }

    /**
     * toggleSwiperInnerVideos
     * @description  toggle swiper videos on active slides
     */
     function toggleSwiperInnerVideos(swiper) {
      var prevSlide = $(swiper.slides[swiper.previousIndex]),
      nextSlide = $(swiper.slides[swiper.activeIndex]),
      videos,
      videoItems = prevSlide.find("video");

      for (i = 0; i < videoItems.length; i++) {
        videoItems[i].pause();
      }

      videos = nextSlide.find("video");
      if (videos.length) {
        videos.get(0).play();
      }
    }

    // *
    //  * toggleSwiperCaptionAnimation
    //  * @description  toggle swiper animations on active slides
     
     function toggleSwiperCaptionAnimation(swiper) {
            var prevSlide = $(swiper.container).find("[data-caption-animate]"),
                nextSlide = $(swiper.slides[swiper.activeIndex]).find("[data-caption-animate]"),
                delay, duration, nextSlideItem, prevSlideItem;
            for (i = 0; i < prevSlide.length; i++) {
                prevSlideItem = $(prevSlide[i]);
                prevSlideItem.removeClass("animated").removeClass(prevSlideItem.attr("data-caption-animate")).addClass("not-animated");
            }
            for (i = 0; i < nextSlide.length; i++) {
                nextSlideItem = $(nextSlide[i]);
                delay = nextSlideItem.attr("data-caption-delay");
                duration = nextSlideItem.attr('data-caption-duration');
                var tempFunction = function(nextSlideItem, duration) {
                    return function() {
                        nextSlideItem.removeClass("not-animated").addClass(nextSlideItem.attr("data-caption-animate")).addClass("animated");
                        if (duration) {
                            nextSlideItem.css('animation-duration', duration + 'ms');
                        }
                    };
                };
                setTimeout(tempFunction(nextSlideItem, duration), delay ? parseInt(delay, 10) : 0);
            }
        }

    
    /**
     * Swiper 3.1.7
     * @description  Enable Swiper Slider
     */
     if (plugins.swiper.length) {
      var i;
      for (i = 0; i < plugins.swiper.length; i++) {
        var s = $(plugins.swiper[i]);
        var pag = s.find(".swiper-pagination").length > 0 ? s.find(".swiper-pagination") : $(s.attr('data-custom-pagination')),
        next = s.find(".swiper-button-next"),
        prev = s.find(".swiper-button-prev"),
        bar = s.find(".swiper-scrollbar"),
        swiperSlide = s.find(".swiper-slide"),
        autoplay = true;

        for (j = 0; j < swiperSlide.length; j++) {
          var $this = $(swiperSlide[j]),
          url;

          if (url = $this.attr("data-slide-bg")) {
            $this.css({
              "background-image": "url(" + url + ")",
              "background-size": "cover"
            })
          }
        }



        swiperSlide.end()
        .find("[data-caption-animate]")
        .addClass("not-animated")
        .end()
        .swiper({
          autoplay: isNoviBuilder ? null : s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
          direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
          effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
          speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
          keyboardControl: s.attr('data-keyboard') === "true",
          mousewheelControl: s.attr('data-mousewheel') === "true",
          mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
          nextButton: next.length ? next.get(0) : null,
          prevButton: prev.length ? prev.get(0) : null,
          pagination: pag.length ? pag.get(0) : null,
          paginationClickable: pag.length ? s.attr("data-clickable") !== "false" : true ,
          paginationBulletRender: pag.length ? s.attr("data-index-bullet") === "true" ? function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          } : null : null,
          scrollbar: bar.length ? bar.get(0) : null,
          scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
          scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
          loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
          simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
          onTransitionStart: function (swiper) {
            toggleSwiperInnerVideos(swiper);
          },
          onTransitionEnd: function (swiper) {
            toggleSwiperCaptionAnimation(swiper);
          },
          onInit: function (swiper) {
            toggleSwiperInnerVideos(swiper);
            toggleSwiperCaptionAnimation(swiper);

            
            $window.on('resize', function () {
              swiper.update(true);
            })
          }
        });

        $window
        .on("resize", function () {
          var mh = getSwiperHeight(s, "min-height"),
          h = getSwiperHeight(s, "height");
          if (h) {
            s.css("height", mh ? mh > h ? mh : h : h);
          }
        })
        .trigger("resize");
      }
    };


    



     if (plugins.rdMailForm.length) {
      var i, j, k,
      msg = {
        
      };


};



    });





}());


}
}

export default Swiper;