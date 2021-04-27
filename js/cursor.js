
// toggle class


$( "#target" ).click(function(){
  $('body').toggleClass('dark-theme');
  $('#theme-button').toggleClass('fa-sun');
 });


// cursor

var currentMousePos = { x: -1, y: -1 };

$(document).ready(function() {

    $("body").hover(function(){
        $(".cursor-inner, .cursor-outer").addClass("show");
    }, function () {
        $(".cursor-inner, .cursor-outer").removeClass("show");
    });


    $(window).mousemove(function(event) {
        $(".cursor-inner, .cursor-outer").addClass("show");
        var currentX = currentMousePos.x = event.pageX;
        var currentY = currentMousePos.x = event.pageY - $(window).scrollTop();
        $(".cursor-inner").css({"transform":"translate3d(" + currentX + "px, " + currentY + "px, 0)"});
        setTimeout(function(){
            $(".cursor-outer").css({"transform":"translate3d(" + currentX + "px, " + currentY + "px, 0)"});
        }, 100);
    });
    

    $(".activeMouse").hover(function(){
        $(".cursor-outer").addClass("active");
    }, function () {
        $(".cursor-outer").removeClass("active");
    });


    $(".activemousebig").hover(function(){
        $(".cursor-outer").addClass("activebig");
    }, function () {
        $(".cursor-outer").removeClass("activebig");
    });


}); 



// reveal

     function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
        }
        var d = {
               el: document,
                name: "scroll",
                offset: [0, 0],
                repeat: !1,
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical",
                reloadOnContextChange: !1,
                lerp: 0.1,
                class: "is-inview",
            }

// end



