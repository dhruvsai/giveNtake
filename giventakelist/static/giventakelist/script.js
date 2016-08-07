// jQuery.fn.extend({
//     zigzag: function () {
//         var text = $(this).text();
//         var zigzagText = '';
//         var toggle = true; //lower/uppper toggle
// 			$.each(text, function(i, nome) {
// 				zigzagText += (toggle) ? nome.toUpperCase() : nome.toLowerCase();
// 				toggle = (toggle) ? false : true;
// 			});
// 	return zigzagText;
//     }
// });
var ifReturned;

$(document).ready(function(){
    // console.log(x.id);
    ifReturned= function(x){
       console.log("called");
       var c = x.checked ? "#d9d9d9":"rgba(0,0,0,.54)";
       var t = x.checked ? "line-through":"none";
       // console.log(c);
       // console.log(t);
       $.ajax({
         url: "/list/update_isreturned",
         type: "POST",
         data: {id : x.id},
         success: function(data){
           x = $(x);
           // console.log("mydata" + data);
           var y = x.parent().parent().prev().children();
           // console.log(y);
           y.css("color",c);
           y.css('text-decoration',t);
         },
         error:function(data){
           console.log("error");
         }
       });
   }
$(".mdl-checkbox__input").change(function(){
  console.log(this);
  var x = this;
  setTimeout(function(){
    console.log(x.checked) }, 3000);
  console.log(this.checked);
  ifReturned(this);
});
(function(){
  var checkboxes = $(".ifreturned");

  checkboxes.each(function(item){
    // console.log("yay");
    // console.log($(this).attr("ifreturned") == "True");
    if($(this).attr("ifreturned") == "True"){
      // console.log($(this).attr("ifreturned"));
      $(this).css("color","#d9d9d9");
      $(this).css("text-decoration","line-through");
      $(this).parent().next().find(".mdl-checkbox").get(0).MaterialCheckbox.check();
      console.log("yo " + $(this).parent().next().find(".mdl-checkbox").is(":checked"));
      // console.log(cb.checked);
    }
  });
})();
  // This function gets cookie with a given name

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});
