<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liên hệ</title>
    <?php 
    include 'theme/frontend/share/link.php' 
    ?>
    <link rel="stylesheet" href="theme/frontend/scss/detail.css">
    <link rel="stylesheet" href="theme/frontend/scss/contact.css">
</head>

<body>
    <?php 
        @include 'theme/frontend/share/header.php';
    ?>
    <div class="contact-again">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                    <h2 class="title fs-40">Thông tin liên hệ</h2>
                    <div class="item phone">
                        <p class="fs-18 cl-6a mb-0">Phone number</p>
                        <div class="phone mt-1">
                            <a href="" target="_blank" class="fs-24 cl-25">
                                0123.456.789
                            </a>
                            <span>-</span>
                            <a href="http://" target="_blank" class="fs-24 cl-25">
                                0123.555.666
                            </a>
                        </div>
                    </div>
                    <div class="item mail">
                        <p class="fs-18 cl-6a mb-0">Email</p>
                        <div class="phone mt-1">
                            <a href="" target="_blank" class="fs-24 cl-25">
                                support@omji.com.vn
                            </a>

                            </a>
                        </div>
                    </div>
                    <div class="item location">
                        <p class="fs-18 cl-6a mb-0">Address</p>
                        <div class="phone mt-1">
                            <a href="" target="_blank" class="fs-24 cl-25">
                                Building A2 An Binh City, 232 Pham Van Dong Street, Co Nhue 1 Ward
                            </a>

                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                    <h2 class="title fs-40">Để lại thông tin liên hệ</h2>
                    <form action="">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                                <input type="text" placeholder="Họ và tên">
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                                <input type="text" placeholder="Số điện thoại ">
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                                <input type="text" placeholder="Địa chỉ email">
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                                <textarea placeholder="Nội dung" class="textara"> </textarea>
                            </div>
                        </div>
                        <div class=" text-center mt-4">
                            <button class="btn-main cl-white ">Đăng kí</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14893.854285123929!2d105.77420652420298!3d21.05413940104422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552aefbe28f5%3A0x920387eae0bdbe4d!2zQ-G7lSBOaHXhur8gMSwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1604397349793!5m2!1svi!2s"
                       height="450" frameborder="0" style="border:0;" allowfullscreen=""
                        aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    <?php 
        include 'theme/frontend/share/menu_mobile.php'; 
        include 'theme/frontend/share/footer.php';
        include 'theme/frontend/share/style.php';
    ?>
    <script src="theme/frontend/js/style.js"></script>
</body>

</html>