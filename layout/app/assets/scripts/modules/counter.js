class Counter{

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
    counter: $(".counter")
  };

  /**
   * Initialize All Scripts
   */
   $document.ready(function () {
    var isNoviBuilder = window.xMode;

    function isScrolledIntoView(elem) {
            if (!isNoviBuilder) {
                return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
            } else {
                return true;
            }
        }

        
        if (plugins.counter.length) {
            var i;
            for (i = 0; i < plugins.counter.length; i++) {
                var $counterNotAnimated = $(plugins.counter[i]).not('.animated');
                $document.on("scroll", $.proxy(function() {
                    var $this = this;
                    if ((!$this.hasClass("animated")) && (isScrolledIntoView($this))) {
                        $this.countTo({
                            refreshInterval: 40,
                            from: 0,
                            to: parseInt($this.text(), 10),
                            speed: $this.attr("data-speed") || 1000
                        });
                        $this.addClass('animated');
                    }
                }, $counterNotAnimated)).trigger("scroll");
            }
        }

    
  });




 }());

  }
}

export default Counter;