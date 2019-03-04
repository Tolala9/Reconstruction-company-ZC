class CopyrightYear{

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
    copyrightYear: $(".copyright-year")
  };

  /**
   * Initialize All Scripts
   */
   $document.ready(function () {
    var isNoviBuilder = window.xMode;

     /**
     * Copyright Year
     * @description  Evaluates correct copyright year
     */
     if (plugins.copyrightYear.length) {
      plugins.copyrightYear.text(initialDate.getFullYear());
    }

    
  });
   




 }());

  }
}

export default CopyrightYear;