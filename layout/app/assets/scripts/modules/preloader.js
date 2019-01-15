class Preloader{

	constructor() {
		this.allMethods();  
	}




  allMethods() {


    (function () { 

      // $(window).on('load', function() {
      //   $('.preloader').delay(100).fadeOut('slow');
      //   $('body').removeClass('stop-scrolling');
      // });

     //  $(window).load(function() {
     //   $('.lds-wedges, .lds-css').fadeOut('slow');
     // }); 

      function hideLoader() {
        $('.lds-wedges, .lds-css').fadeOut('slow');
      }

      $(window).load(hideLoader); 

      // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
      setTimeout(hideLoader, 20 * 1000);



      // var $loading = $('.lds-wedges, .lds-css').delay(1000).fadeOut('slow');
      // // $('body').addClass('stop-scrolling');
      // $(document)
      // .ajaxStart(function () {
      //   $loading.show();

      // })
      // .ajaxStop(function () {
      //   $loading.hide();
      // });





      // $(document).ready(function($) {
      //   var Body = $('body');
      //   Body.addClass('preloader-site');
      // });


    }());

  }

}

export default Preloader;