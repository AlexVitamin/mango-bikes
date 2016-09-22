require('../styles/bikeBuilder.less');
var $ = require('jquery');

 $(".select-component").click(function() {
    $(this).toggleClass("active")
    // $('#frameOptions').addClass("Hide");
});


 $("#styles >img").click(function() {
    alert("style selected");
});

$("#colours >img").click(function() {
    alert("colour selected");
    console.log(alt);
});


 $("#addBasket").click(function() {
    alert("save - added to basket ");

});