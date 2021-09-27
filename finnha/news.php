<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tin tức</title>
    <?php 
    include 'theme/frontend/share/link.php' 
    ?>
    <link rel="stylesheet" href="theme/frontend/scss/news.css">
    <link rel="stylesheet" href="theme/frontend/scss/detail.css">
</head>

<body>
    <?php 
        @include 'theme/frontend/share/header.php';
    ?>
    <div class="news">
        <div class="container">
            <div class="row">
                <div class="col-xl-9 col-lg-9 col-md-12 col-12">
                    <?php
                    for($i=0;$i<5;$i++){
                        ?>
                    <div class="item">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-5 col-12">
                                <a href="" target="_blank" class="c-img">
                                    <img src="theme/frontend/images/Rectangle204.png" alt="product">
                                </a>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-7 col-12">
                                <h3>
                                    <a href="" class="title font-bold cl-25 fs-30_46">
                                        Làm sao để đăng ký cho thuê bđs
                                    </a>
                                </h3>
                                <div class="d-flex time">
                                    <p class="time-author cl-88 fs-16 mr-5"><i class="fa fa-clock-o mr-2"></i>
                                        <span>23</span><span>/</span><span>11</span><span>/</span><span>2020</span>
                                    </p>
                                    <p class="time-author cl-88 fs-16 mr-1"><i class="fa fa-user-o mr-2"></i>
                                        Admin
                                    </p>
                                </div>
                                <p class="s-content fs-18">
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                                    print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is
                                    dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum
                                    as it is sometimes known
                                </p>

                                <span>
                                    <a href="" class="cl_07 link">Chi tiết bài viết</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <?php
                    }
                    ?>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-12 col-12">
                    <div class="box">
                        <div class="d-flex">
                            <img src="theme/frontend/images/Rectangle190.png" alt="" style="height:30px"
                                class="pl-1 mr-3">
                            <h2 class="title font-bold">Danh mục tin</h2>
                        </div>
                        <ul>
                            <li>
                                <a href="" target="_blank" class="cl-25 fs-22_30">Tin tức tuyển dụng</a>
                                <span>01</span>
                            </li>
                            <li>
                                <a href="" target="_blank" class="cl-25 fs-22_30">Tin tức tuyển dụng</a>
                                <span>01</span>
                            </li>
                            <li>
                                <a href="" target="_blank" class="cl-25 fs-22_30">Tin tức tuyển dụng</a>
                                <span>01</span>
                            </li>
                        </ul>
                        <div class="d-flex mt-5 recently">
                            <img src="theme/frontend/images/Rectangle190.png" alt="" style="height:30px"
                                class="pl-1 mr-3">
                            <h2 class="title font-bold">Gần đây</h2>
                        </div>
                        <?php include 'theme/frontend/share/recently.php';  ?>
                        <div class="img">
                            <img src="theme/frontend/images/Rectangle466.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php 
        include 'theme/frontend/share/page.php'; 
        include 'theme/frontend/share/menu_mobile.php'; 
        include 'theme/frontend/share/contact.php';
        include 'theme/frontend/share/footer.php';
        include 'theme/frontend/share/style.php';
    ?>
    <script src="theme/frontend/js/style.js"></script>
</body>

</html>