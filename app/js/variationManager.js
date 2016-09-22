require('../styles/variationManager.less');
var $ = require('jquery');


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

// Parts Selections for Single Bike
  $('#singleParts').bind('change', function (e) { 
    if( $('#singleParts').val() == "frame") {
      $('#frame-types').show();
    }
    else{
      $('#frame-types').hide();
    } 

    if( $('#singleParts').val() == "handlebars") {
      $('#handlebar-types').show();
    }
    else{
      $('#handlebar-types').hide();
    } 

  });

  // Parts selection for Sixteen Bike 

  // $('#sixteenParts').bind('change', function (e) { 
  //   if( $('#sixteenParts').val() == "frame") {
  //     $('#frame-types').show();
  //   }
  //   else{
  //     $('#frame-types').hide();
  //   } 

  // });

 // Plus Buttons

 // New Speed
 $("#add-new-speed").click(function() {
  alert("adding new speed option.");

  $('#speed').append($('<option>', {
    value: 1,
    text: 'My option'
}));
});

// New Part
$("#add-new-parts").click(function() {
  alert("adding a new part.");

  $('#singleParts').append($('<option>', {
    value: 1,
    text: 'My option'
}));
});

// Creating new instance of type.

$("#add-new-type").click(function() {
  alert("adding a new type.");
  $(".select-type:last").append("<div class='select-type'><h4>New Type</h4></div>");
});

// Save Button

$(".saveButton").click(function() {
    alert("save clicked");
    // check every editable option
    // return every option to the server
});

$(".openVariation").click(function() {
     $('#VariationsContainer').toggleClass("hide");
});

// image upload & Replace

$(".imageUploadBTN, .imageReplaceBTN").click(function() {
    alert("image picker/popup here");
});


// $('.imageUploadBTN').click(function()) {

// });

