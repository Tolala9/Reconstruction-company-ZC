class Portfolio{

	constructor() {
		this.allMethods();  
	}




  allMethods() {


    (function () { 



     $("section__portfolio li").click(function() { 
      $("section__portfolio li").removeClass("active");
      $(this).addClass("active");
    });


     $("#portfolio-grid").mixItUp(); 

     // var mixer = mixItUp("#portfolio-grid");

     // mixer.filter('.category-2');

    //  var mixer = mixitup("#portfolio-grid", {
    //   load: {
    //     filter: '.category-2'
    //   }
    // });





  }());

  }

}

export default Portfolio;