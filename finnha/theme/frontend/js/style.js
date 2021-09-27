var FUNCTION = (function () {
    // slide bot index
    if ($('.buy-house').length > 0) {
        var slideBot = function () {
            $('.wrap-slide').slick({
                infinite: true,
                slidesToShow: 4,
                speed: 300,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1900,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,

                        }
                    },
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,

                        }
                    },
                    {
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,

                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,

                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,

                        }
                    },

                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            })
        }
    } else {
        var slideBot = function () {
        }
    }

    if ($('.deal-home').length > 0) {
        var slide = function () {
            $('.wrap-slide-bot').slick({
                infinite: true,
                slidesToShow: 5,
                speed: 300,
                slidesToScroll: 5,
                responsive: [
                    {
                        breakpoint: 1900,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,

                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            })
        }
    } else {
        var slide = function () {

        }
    }
    // why -us
    if ($('.why-us').length > 0) {
        var slide_why = function () {
            $('.slide_why').slick({
                infinite: true,
                slidesToShow: 3,
                speed: 300,
                slidesToScroll: 3,
                gutter: 10,
                responsive: [
                    {
                        breakpoint: 1900,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,


                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,

                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            })
        }
    } else {
        var slide_why = function () {

        }
    }
    //new-box
    if ($('.new-home').length > 0) {
        var slide_new = function () {
            $('.new-box').slick({

                slidesToShow: 1,
                speed: 300,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1900,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,

                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            })
        }
    } else {
        var slide_new = function () {

        }
    }
    //customer
    if ($('.customer').length > 0) {
        var check = function () {
            $('.btn-main').click(function () {
               $(this).children('.fa-plus').toggleClass('minus');
               $(this).parent().parent().children('.cus-p').slideToggle();
            })
        }
    } else {
        var check = function () {
        }
    }

    var showMenu = function () {
        $('.icon-mobile').click(function () {
            if ($(".menu-mobile").hasClass("active")) {
                $(".menu-mobile").removeClass("active");
            }
            else {
                $(".menu-mobile").addClass("active");
            }
        })
    }
    var showBlur = function () {
        $('.icon-mobile').click(function () {
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


     //question
    //  if ($('.question').length > 0) {
    //     var checkQuestion = function () {
    //         // $('.card-header').click(function () {
    //         //     var _this = $(this).parent();
    //         //     $(_this).children('.cus-p').slideToggle();

    //         // })
    //          $('.btn-main').click(function () {
    //            $(this).parent().parent().children('.cus-p').slideToggle();
    //            $(this).children('.fa-plus').toggleClass("minus");

    //         })
    //     }
    // } else {
    //     var checkQuestion = function () {
    //     }
    // }

    var slideInpo = function () {
        $('.wrap-pers').slick({
            infinite: true,
            slidesToShow: 4,
            speed: 300,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1900,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,

                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,

                    }
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,

                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,

                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,

                    }
                },

                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        // slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        // slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        })
    }
   
    return {
        _: function () {
            slideBot();
            slide();
            slide_why();
            slide_new();
            check();
            showBlur();
            showMenu();
            checkQuestion();
            slideInpo();
        }
    };
})()
jQuery(document).ready(function () {
    FUNCTION._();
});
