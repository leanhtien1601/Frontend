var FUNCTION = (function () {
    var slideTop = function (){
        var slider = tns({
            container: '.wrap-slider',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            controls: false,
            mouseDrag: true,
        });
    }
    var showMenu = function () {
        $('.icon').click(function () {
            if ($(".menu-mobile").hasClass("active")) {
                $(".menu-mobile").removeClass("active");
            }
            else {
                $(".menu-mobile").addClass("active");
            }
        })
    }
    var showBlur = function () {
        $('.icon').click(function () {
            if ($(".blur").hasClass("show")) {
                $(".blur").removeClass("show");
            }
            else {
                $(".blur").addClass("show");
            }
        });
        $('.blur').click(function () {
            $(".menu-mobile").removeClass("active");
            $(".blur").removeClass("show");
        })
    }
    var menuChild = function () {
        $(".fa-angle-down").click(function (e) {
            e.preventDefault();
        });
        $("li a").click(function () {
            $(this).next().slideToggle();
        })
    }
    var animant =function () {
        wow = new WOW(
            {
              
            }
          );
          wow.init();
    }
    return {
        _: function () {
            slideTop();
            showMenu();
            showBlur();
            menuChild();
            animant();
          
        }
    };
})()
jQuery(document).ready(function () {
    FUNCTION._();
});
