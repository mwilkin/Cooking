
var galtoliter = function(num1){
  return num1 / .26417;
};

var lbstokg = function(num1){
  return num1 / .45359;
};

//alert(galtoliter(10));

$(function(){
  $("img").hide();
  $("#img-1-toggle").click(function(){
    $("#img-1").toggle();
  })
  $("#img-2-toggle").click(function(){
    $("#img-2").toggle();
  })
  $("#img-3-toggle").click(function(){
    $("#img-3").toggle();
  })

})
