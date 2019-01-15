class Wow{

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
   onloadCaptchaCallback
   
  /**
   * Initialize All Scripts
   */
   $document.ready(function () {
    var isNoviBuilder = window.xMode;

    

    if ($html.hasClass("wow-animation") && $(".wow").length) { 
      
            new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            }).init();

        }



  });

   

 }());

  }
}

export default Wow;