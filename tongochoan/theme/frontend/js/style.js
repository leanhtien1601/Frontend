var FUNCTION = (function () {
    // slide top index
    if ($('.nav-slider').length > 0) {
        var slideTop = function () {
            var slider = tns({
                container: '.wrap-slider',
                items: 1,
                slideBy: 'page',
                autoplay: false,
                controls: false,
                mouseDrag: true,
            });
        }
    } else {
        var slideTop = function () {

        }
    }
    // slide bot index
    if ($('.feedback').length > 0) {
        var slideBot = function () {
            $('.wrap-slider-bot').slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                autoplay: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
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

    var showMenu = function () {
        $('.icon').click(function () {
            if ($(".menu-mobile").hasClass("active")) {
                $(".menu-mobile").removeClass("active");

            } else {
                $(".menu-mobile").addClass("active");
            }
        })
    }
    var showBlur = function () {
        $('.icon').click(function () {
            if ($(".blur").hasClass("show")) {
                $(".blur").removeClass("show");
            } else {
                $(".blur").addClass("show");
            }
        });
        $('.blur').click(function () {
            $(".menu-mobile").removeClass("active");
            $(".blur").removeClass("show");
        })
    }
    var animant = function () {
        wow = new WOW({

        });
        wow.init();
    }
    var menuCategories = function () {
        var m_nav = $('.menu-mobile');
        var nav = m_nav.children('ul');
        m_nav.find("ul li ul").slideUp();
        m_nav.find("ul li").each(function () {
            if ($(this).find("ul>li").length > 0) {
                $(this).prepend('<i class="fa fa-chevron-down"></i>').css({ "color": "white", "position": "relative"});
                
            }
        });

        m_nav.find("li i").click(function () {
            var ul = $(this).nextAll("ul");
            $('.fa-chevron-up').css({ "color": "white", "margin-right": "10px" });
            if (ul.is(":hidden") === true) {
                $(this).addClass('active');
                ul.slideDown(200);
                $(this).addClass('fa-chevron-up');
                $('.fa-chevron-up').css({ "color": "white", "margin-right": "10px" })
                $(this).removeClass('fa-chevron-down');
            } else {
                $(this).removeClass("active");
                ul.slideUp(200);
                $(this).addClass('fa-chevron-down');
                $('.fa-chevron-up').css({ "color": "white", "margin-right": "10px" })
                $(this).removeClass('fa-chevron-up');
            }

        });
    }
    // ????ng k??
    if ($('#form_validate').length > 0) {
        var check = function () {
            $(document).ready(function () {
                $("#form_validate").validate({
                    rules: {
                        userid: {
                            required: true,
                            minlength: 5,
                            maxlength: 20,
                        },
                        email: {
                            required: true,
                            email: true,
                        },
                        phone: {
                            required: true,
                            minlength: 10,
                            digits: true,
                            maxlength: 11,
                        },
                        passid: {
                            required: true,
                        },
                        pass: {
                            required: true,
                        },

                    },
                    messages: {
                        userid: {
                            required: "B???n kh??ng n??n ????? tr???ng",
                            minlength: "B???n nh???p t???i thi???u 5 k?? t???",
                            maxlength: "B???n nh???p t???i thi???u 20 k?? t???"
                        },
                        email: {
                            required: "B???n kh??ng n??n ????? tr???ng",
                            email: "B???n nh???p sai gmail"
                        },
                        phone: {
                            required: "B???n kh??ng n??n ????? tr???ng",
                            minlength: "B???n nh???p ??t h??n 10",
                            digits: "B???n nh???p kh??ng ph???i s???",
                            minlength: "B???n nh???p  nhi???u h??n 10",
                        },
                        passid: {
                            required: "B???n kh??ng n??n ????? tr???ng",
                        },
                        pass: {
                            required: "B???n kh??ng n??n ????? tr???ng",
                        }
                    },

                });
            });
        }
    } else {
        var check = function () {

        }
    }

    // ????ng nh???p
    if ($('#validate').length > 0) {
        var login = function () {
            $(document).ready(function () {
                $("#validate").validate({
                    rules: {
                        gmail: {
                            required: true,
                            email: true,
                        },
                        password: {
                            required: true,
                        },

                    },
                    messages: {
                        email: {
                            required: "B???n kh??ng n??n ????? tr???ng",
                            email: "B???n nh???p sai gmail"
                        },
                        password: {
                            required: "B???n kh??ng n??n ????? tr???ng",
                        }
                    },

                });
            });
        }
    }else{
        var login = function(){
            
        }
    }

    // t??nh s??? l?????ng
    if ($('.amount').length > 0) {
        var amount = function () {
            var valueInput = Number($(".count").val());
            var valueCard = Number($(".count-card").val());
            var priceTan = 580000;
            var ship = 30000;
            $('.delete_cart i').on('click',function(e){
                $('.amount').css('display','none');
                $('.cart .title').css('display','none');
                $('.cart-contact').css('display','none');
                $('.show-text').css('display','block');
                $(".count-card").html(0);
                e.preventDefault();
                
            });
            $('#plus').on('click', function () {
                valueInput = valueInput + 1;
                $(".count").val(valueInput);
                var price = valueInput * priceTan;
                var priceSau = price + 30000;
                valueCard = valueCard + 1;
                $('.TotolePrice').html(price.toLocaleString() + "<sup>??</sup>");
                $('.temporary').html(price.toLocaleString() + "<sup>??</sup>");
                $(".count-card").html(valueCard.toLocaleString());
                console.log('.count-card');
                $('.countAmount').html(priceSau.toLocaleString() + "<sup>??</sup>")

            });
            $('#minus').on('click', function () {
                valueInput = valueInput - 1;
                valueCard = valueCard - 1;
                if (valueInput == 0) {
                    valueInput = 1;
                    valueCard =  1;
                }
                else {
                    $(".count").val(valueInput);
                    var price = valueInput * priceTan;
                    
                    var priceSau = price + 30000;
                    $('.TotolePrice').html(price.toLocaleString() + "<sup>??</sup>");
                    $('.temporary').html(price.toLocaleString() + "<sup>??</sup>");
                    $('.countAmount').html(priceSau.toLocaleString() + "<sup>??</sup>")
                    $(".count-card").val(valueInput);
                    $(".count-card").html(valueCard.toLocaleString());
                    console.log(valueInput);

                }
            });

        }
    } else {
        var amount = function () {

        }
    }

    return {
        _: function () {
            slideTop();
            slideBot();
            showMenu();
            showBlur();
            animant();
            menuCategories();
            check();
            login();
            amount();
        }
    };
})()
jQuery(document).ready(function () {
    FUNCTION._();
});