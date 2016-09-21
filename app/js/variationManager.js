require('../styles/variationManager.less');
var jquery = require('../../node_modules/jquery/src/jquery.js');


// $(".select-speed").on("click", function() {
//     $(this).css("background", "red");
// })

// $(".select-speed, .select-part").on("click", function() {
//     $(this).toggleClass("active")
// })


// Model Selections
 $('#speed').bind('change', function (e) { 
    if( $('#speed').val() == "single") {
      $('#singleParts').show();
    }
    else{
      $('#singleParts').hide();
    }

     if( $('#speed').val() == "sixteen") {
      $('#sixteenParts').show();
    }
    else{
      $('#sixteenParts').hide();
    }         
  });

// Parts Selections
  $('#singleParts').bind('change', function (e) { 
    if( $('#singleParts').val() == "frame") {
      $('#frame-types').show();
    }
    else{
      $('#frame-types').hide();
    }         
  });

 // Plus Buttons
 $(".add-new").click(function() {
  alert("clicked.");
});




