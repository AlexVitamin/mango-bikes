require('../styles/bikeBuilder.less');
var $ = require('jquery');
var bikeApi = require('../api/bikestest');
var templates = require('../templates/templates');
var variationJSON = require('./debug/variation.json');

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

var bikeApp = {
  start:function(){
    this.makecalltoserver();
    this.resizeCanavs();
    this.bindEvents();

  },
  makecalltoserver:function(){
    // variationApi({},function(response){
    //   //success
    //   // store data to model.
    //   model.addData(response);

    //   variationApp.render();

    // },function(){
    //   // error
    // });

     setTimeout(function(){

      model.addData(variationJSON);
      bikeApp.renderModel();

    },500);

  },
     resizeCanavs(){
       $(window).resize(function(){
       $('#canvas').height($('#canvas').width() / 2.031);
    });
    },

    renderModel(){

      var state = model.getState();
      
       for(var i = 0, len = state.length; i < len; i++){

        var speed = state[i];
        var part = state[i].parts;
        var aspects = state[i].parts[i].aspects;
        var opts = state[i].parts[i].aspects[i].opts;

        for (var i in part) {
            $('#partsList').append(templates.getCustomBikeParts({
              Id:part[i].Id,
              name:part[i].name,
            }));
           }

        for (var i in aspects) {
            $('#aspect1').append(templates.getAspectsName({
              aspectsName:aspects[i].name,
            }));
            }
    
         for (var i in opts) {
           $('#testLists').append(templates.getAspectsList({
              optsName:opts[i].name,
            }));
           $('#aspect1').append(templates.getAspectsIcon({
              aspectsName:aspects[i].name,
            }));
         }


       //      $('#aspect1').append(templates.getAspectsList({
       //        optsName:state[i].parts[i].aspects[i].opts[i].name,
       //      }));
       //      $('#aspect1').append(templates.getAspectsList({
       //        optsName:state[i].parts[i].aspects[i].opts[1].name,
       //      }));
       //      $('#aspect1').append(templates.getAspectsList({
       //        optsName:state[i].parts[i].aspects[i].opts[2].name,
       //      }));

            



       //      $('#aspect2').append(templates.getAspectsName({
       //        aspectsName:state[i].parts[i].aspects[1].name,
       //      }));

       //      // $('#aspect2').append(templates.getAspectsList({
       //      //   aspectsName:state[i].parts[i].aspects[1].name,
       //      // }));





       //      $('#aspect3').append(templates.getAspectsName({
       //        aspectsName:state[i].parts[i].aspects[2].name,
       //      }));
       //      $('#aspect3').append(templates.getAspectsIcon({
       //        optsName:state[i].parts[i].aspects[2].opts[i].name,
       //      }));
       //      $('#aspect3').append(templates.getAspectsIcon({
       //        optsName:state[i].parts[i].aspects[2].opts[1].name,
       //      }));
       //      $('#aspect3').append(templates.getAspectsIcon({
       //        optsName:state[i].parts[i].aspects[2].opts[2].name,
       //      }));
       //       $('#aspect3').append(templates.getAspectsIcon({
       //        optsName:state[i].parts[i].aspects[2].opts[3].name,
       //      }));
       }

    },

     bindEvents(){
     $(".select-component").click(function() {
       $(this).toggleClass("active")
       $('#Options').toggleClass("Hide");
     });

      $("#Options >img").click(function() {
        alert("style selected");
     });

      $("#colours >img").click(function() {
          alert("colour selected");
          console.log(alt);
      });

       $("#addBasket").click(function() {
          alert("save - added to basket ");

      });
    },


};

bikeApp.start();


