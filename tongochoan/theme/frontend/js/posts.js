var FUNCTION = (function () {
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
    var animant = function () {
        wow = new WOW(
            {
            }
        );
        wow.init();
    }
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
                        required: "Bạn không nên để trống",
                        minlength: "Bạn nhập tối thiểu 5 kí tự",
                        maxlength: "Bạn nhập tối thiểu 20 kí tự"
                    },
                    email: {
                        required: "Bạn không nên để trống",
                        email: "Bạn nhập sai gmail"
                    },
                    phone: {
                        required: "Bạn không nên để trống",
                        minlength: "Bạn nhập ít hơn 10",
                        digits: "Bạn nhập không phải số",
                        minlength: "Bạn nhập  nhiều hơn 10",
                    },
                    passid: {
                        required: "Bạn không nên để trống",
                    },
                    pass: {
                        required: "Bạn không nên để trống",
                    }
                },

            });
        });
    }
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
                        required: "Bạn không nên để trống",
                        email: "Bạn nhập sai gmail"
                    },
                    password: {
                        required: "Bạn không nên để trống",
                    }
                },

            });
        });
    }
    var amount = function () {
        var valueInput = Number($(".count").val());
        var priceTan = 580000;
        var ship = 30000;
        $('#plus').on('click', function () {
            valueInput = valueInput + 1;
            $(".count").val(valueInput);
            var price = valueInput * priceTan;
            var priceSau = price + 30000;
                $('.TotolePrice').html(price.toLocaleString() + "<sup>đ</sup>");
                $('.temporary').html(price.toLocaleString()+ "<sup>đ</sup>");
                $('.countAmount').html(priceSau.toLocaleString()+ "<sup>đ</sup>")

        });
        $('#minus').on('click', function () {
            valueInput = valueInput - 1;
            if (valueInput == 0) {
                valueInput = 1
            }
            else {
                $(".count").val(valueInput);
                var price = valueInput * priceTan;
                var priceSau = price + 30000;
                $('.TotolePrice').html(price.toLocaleString() + "<sup>đ</sup>");
                $('.temporary').html(price.toLocaleString()+ "<sup>đ</sup>");
                $('.countAmount').html(priceSau.toLocaleString()+ "<sup>đ</sup>")

                console.log(valueInput);

            }
        });

    }
    return {
        _: function () {
            showMenu();
            showBlur();
            menuChild();
            animant();
            check();
            login();
            amount();
        }
    };
})()
jQuery(document).ready(function () {
    FUNCTION._();
});
