require('../styles/variationManager.less');
var $ = require('jquery');
var variationApi = require('../api/variations');
// var picker = require('color-picker');
var variationJSON = require('./debug/variation.json');

var templates = require('../templates/templates')

// var speedItemTemplate = require('../templates/speeditem.template.html');
// var formTemplate = require('sdf/sdf');

$( document ).ready(function() {
    
});

var model = (function(){
  var settings = {},
      _data = null;
 

  settings.addData = function(data){
    _data = data;
  };

  settings.getState = function(){
    return $.extend(true,[],_data);
  }; 

  settings.removeItem = function(id){

  };

  settings.addType = function(){

  };


  return settings;
}());

window.model = model;


// Function for the Variation Container to convert the StateMap
function sm(x,d,o){
 var i,j,k=0,v={},l=''
 if(o){for(;k<x.length;k++)l+=f(s(x[k]))+Array(5-f(s(x[k])).length).join('0')}else v=''
 for(k=0;k<d.length;k++){
 if(o)v[d[k]]=l[k]==1;else{l+=x[d[k]]?1:0;if(l.length>3){v+=s(f(l));l=''}} } if(!o&&l)v+=s(f(l)); return v;

 function f(h){return h.split('').reverse().join('')}

 function s(h){return parseInt(h,o?16:2).toString(o?2:16)}
}

var variationApp = {
  start:function(){
    this.bindEvents();
    this.makecalltoserver();
    this.popUps();
    this.openVariationsPanel();
    this.save();
  },
  makecalltoserver:function(){
    /*variationApi({},function(response){
      //success
      // store data to model.
      model.addData(response);

      variationApp.renderModel();

    },function(){
      // error
    });*/

    setTimeout(function(){

      model.addData(variationJSON);
      variationApp.renderModel();

    },500);


  },
  bindEvents(){
   

    // List of bike models 
     $('#speed').bind('change', function () { 
         if( $('#speed').val() == "single speed") {
            $('#singleParts').show();
          }
          else{
            $('#singleParts').hide();
          }
      });

       $('#singleParts').bind('change', function () { 
        // console.log('VAL: ', $(this).find(':selected').attr('data-id'));
         
         $('.types[data-id="'+$(this).find(':selected').attr('data-id')+'"]').show().siblings('.types').hide(); 

         
         /*if( $('#singleParts').val() == "frame") {
            $('.types[data-id="'+$(this).find(':selected').attr('data-id')+'"]').show();
          }
          else {
            $('.types[data-id="'+$(this).find(':selected').attr('data-id')+'"]').hide();
          }*/



      });

      
     $('.partOption').click(function(e) {
          var mousePosInElement = e.pageX - $(this).position().left;
          if (mousePosInElement > $(this).width()) {
             console.log("edit clicked")
          }
        });


  },
  popUps(){
      var modal = document.getElementById('myModal');
      var popup = document.getElementById("popup");
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      popup.onclick = function() {
          modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  },
  openVariationsPanel(){
     $(".openVariation").click(function() {
     $('#VariationsContainer').toggleClass("hide");
     $('#typesSection').toggleClass('hide');
     });
  },
  save(){
    $("#saveButton").click(function() {
    alert("save clicked");
    // check every editable option
    // return every option to the server
    });
  },
  renderModel(){
    var state = model.getState();

    for(var i = 0, len = state.length; i < len; i++){

      var speed = state[i];
      var part = state[i].parts;

       // Speed List 
         $('#speed').append(templates.getSpeedItem({
              name:speed.name,
          }));



      // Parts List
      var arrayLength = part.length;

      for (var j in part) {
         $('#singleParts').append(templates.getPartsItem({
               partsName:part[j].name,
               partsId:part[j].Id,
           }));

         $('#typesSection').append(templates.getTypes({
            partsId:part[j].Id,
         }));

          var aspects = state[i].parts[j].aspects;
           console.log('Parts: ', part[i].name);

          for (var k in aspects) {

            console.log('ASPECTS: ', aspects[k]);
           
             $('.types[data-id="'+part[j].Id+'"]').append(templates.getAspects({
                  aspectsName:aspects[k].name,
                  aspectsId:aspects[k].Id,
                  partsName:part[j].name,
                  partsId:part[j].Id,
              }));


             var opts = state[i].parts[j].aspects[k].opts;
             

              for (var l in opts) {
                    $('.optsList[data-id="'+aspects[k].Id+'"]').append(templates.getOpts({
                      optsName:opts[l].name,
                      aspectsId:aspects[k].Id,
                    }));

                  }


                }

            }

        }
      }
   };

variationApp.start();


// // Model Selections
//  $('#speed').bind('change', function (e) { 
//     if( $('#speed').val() == "single") {
//       $('#singleParts').show();
//     }
//     else{
//       $('#singleParts').hide();
//     }

//      if( $('#speed').val() == "sixteen") {
//       $('#sixteenParts').show();
//     }
//     else{
//       $('#sixteenParts').hide();
//     }         
//   });

// Parts Selections for Single Bike
  // $('#singleParts').bind('change', function (e) { 
  //   if( $('#singleParts').val() == "frame") {
  //     $('#frame-types').show();
  //   }
  //   else{
  //     $('#frame-types').hide();
  //   } 

  //   if( $('#singleParts').val() == "handlebars") {
  //     $('#handlebar-types').show();
  //   }
  //   else{
  //     $('#handlebar-types').hide();
  //   } 
  // });


// Save Button

// $("#saveButton").click(function() {
//     alert("save clicked");
//     // check every editable option
//     // return every option to the server
// });

// $(".openVariation").click(function() {
//      $('#VariationsContainer').toggleClass("hide");
// });

// image upload & Replace

// $(".imageUploadBTN, .imageReplaceBTN").click(function() {
//     alert("image picker/popup here");
// });



// Popup - Image upload

// var modal = document.getElementById('myModal');
// var popup = document.getElementById("popup");
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// popup.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// $("#colorpicker").spectrum({
//     color: "#f00"
// });

// Color Picker Javascript 

/*var ctx = $('#cv').get(0).getContext('2d');

for(var i = 0; i < 30; i++) {
    for(var j = 0; j < 30; j++) {
        ctx.fillStyle = 'rgb(' + 
            ((i/30*255)|0) + ',' + 
            ((j/30*255)|0) + ',0)';
        ctx.fillRect(i * 10, j * 10, 10, 10);
    }
}

$('#cv').click(function(e) {
    var data = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
    alert('rgb: ' + [].slice.call(data, 0, 3).join());
     $('#rgb input').slice.call(data, 0, 3);
});*/