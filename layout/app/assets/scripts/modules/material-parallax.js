class Parallax{

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
    materialParallax: $(".parallax-container")
  };

  /**
   * Initialize All Scripts
   */
   $document.ready(function () {
    var isNoviBuilder = window.xMode;

    
    /**
     * Material Parallax
     * @description Enables Material Parallax plugin
     */
     if (plugins.materialParallax.length) {
      var i;

      if (!isNoviBuilder && !isIE && !isMobile) {
        plugins.materialParallax.parallax();

        if (!isMobile) {
          $window.scroll(function () {
            var transfromY = 1 - $window.scrollTop() / 250;

            $('.page-title-img').find('.parallax-content').css({
              'opacity': 1 - $window.scrollTop() / 250,
              'top': -200 + $window.scrollTop() / 3,
            });
          });
        }

      } else {

        for (i = 0; i < plugins.materialParallax.length; i++) {
          var parallax = $(plugins.materialParallax[i]),
          imgPath = parallax.data("parallax-img");

          parallax.css({
            "background-image": 'url(' + imgPath + ')',
            "background-attachment": "scroll",
            "background-size": "cover"
          });

        }

        
      }
    }
    ;


  });




}());

}
}

export default Parallax;