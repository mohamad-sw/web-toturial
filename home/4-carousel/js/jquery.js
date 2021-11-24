$(document).ready(function() {
 
    var owl = $("#owl-product");
   
    owl.owlCarousel({
        items : 1, //10 items above 1000px browser width
        responsive : {
            480 : { items : 1  },
            768 : { items : 2  },
            1024 : { items : 3  },
            1200 : { items : 4  },

        },
    });
   

   
  });