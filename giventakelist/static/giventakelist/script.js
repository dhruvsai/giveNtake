var ifReturned;

$(document).ready(function(){

  //initx function to render DOM
    var initx = function(){
      var checkboxes = $(".ifreturned");
      checkboxes.each(function(item){
        if($(this).attr("ifreturned") == "True"){
          // console.log($(this).attr("ifreturned"));
          $(this).css("color","#d9d9d9");
          $(this).css("text-decoration","line-through");
          // console.log(cb.checked);
        }
      });
    }



// ifReturned function to handle checkbox change event
    ifReturned= function(x){
      //  console.log("called");
       var c = x.checked ? "#d9d9d9":"rgba(0,0,0,.54)";
       var t = x.checked ? "line-through":"none";
       // console.log(c);
       // console.log(t);
       $.ajax({
         url: "/list/update_isreturned",
         type: "POST",
         data: {id : x.id},
         success: function(data){
          //  console.log(data);
           $("#listdiv").html(data);
           componentHandler.upgradeDom();
           initx();
          //  x = $(x);
          //  // console.log("mydata" + data);
          //  var y = x.parent().parent().prev().children();
          //  // console.log(y);
          //  y.css("color",c);
          //  y.css('text-decoration',t);
         },
         error:function(data){
           console.log("error");
         }
       });
   }

   //jquery event listener for chekbox change
$("body").on('change','.mdl-checkbox__input',function(){
  // console.log("called");
  // console.log(this);
  var x = this;
  // ifReturned(this);
  // var p = $(this).parent().parent().parent();
  // console.log(p);
  setTimeout(function(){
      ifReturned(x);
  },1000);
  var p = $(this).parent().parent().parent();
  console.log(p);
  p.removeClass('animated pulse').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated pulse');
    });

});

(initx)();
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


    (function() {
      'use strict';
      var dialogButton = document.querySelector('.dialog-button');
      var dialog = document.querySelector('#dialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialogButton.addEventListener('click', function() {
         dialog.showModal();
      });
      dialog.querySelectorAll('button').forEach(function(button) {
      button.addEventListener('click', function() {
        console.log("y0");
        dialog.close();
      });
    });
    }());


});
