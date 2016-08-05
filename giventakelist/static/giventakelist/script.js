function ifReturned(x){
  console.log("checked");
  var c = x.checked ? "#d9d9d9":"rgba(0,0,0,.54)";
  var t = x.checked ? "line-through":"none";
  var x = $(x);
  var y = x.parent().parent().prev().children();
  y.css("color",c);
  y.css("text-decoration",t);

}

$(document).ready(function(){

});
