<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết tin</title>
    <?php 
    include 'theme/frontend/share/link.php' 
    ?>
    <link rel="stylesheet" href="theme/frontend/scss/newDetail.css">
    <link rel="stylesheet" href="theme/frontend/scss/detail.css">
</head>

<body>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-6 col-md-6 col-12 item">
                    <a href="" tagret="_blank" class="logo">
                        <img src="theme/frontend/images/logo.png" alt="logo">
                    </a>
                    <div class="c-text">
                        <h1 class="title fs-46">Tin tức</h1>
                        <div class="s-content">
                            <p class="fs-18">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                                laying out print,
                                graphic or web designs.</p>
                        </div>
                    </div>
                </div>
                <?php @include 'theme/frontend/share/menu_destop.php' ?>
            </div>
        </div>
    </header>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="#" target="blank">Trang chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="" target="_blank">Tin tức</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page"><a href="" target="_blank">Chi tiết tin</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="newDetail">
        <div class="container">
            <div class="row">
                <div class="col-xl-9 col-lg-9 col-md-12 col-12">
                    <div class="c-img">
                        <img src="theme/frontend/images/new.png" alt="new images">
                    </div>
                    <h3 class="title mt-3">
                        <p class=" fs-40">
                            Thị trường bđs biến động mạnh sau mùa covi
                        </p>
                    </h3>
                    <div class="d-flex time">
                        <p class="time-author cl-88 fs-16 mr-5"><i class="fa fa-clock-o mr-2"></i>
                            <span>23</span><span>/</span><span>11</span><span>/</span><span>2020</span>
                        </p>
                        <p class="time-author cl-88 fs-16 mr-1"><i class="fa fa-user-o mr-2"></i>
                            Admin
                        </p>
                    </div>
                    <p class="s-content fs-17 cl-6a">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum
                    </p>
                    <div class="item mt-5">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 md-5 col-12">
                                <div class="c-img">
                                    <img src="theme/frontend/images/people2.png" alt="people">
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 md-7 col-12">
                                <div class="fluctuations">
                                    <img src="theme/frontend/images/writer7.png" alt="">
                                    <p class="fs-16 cl_07">Lorem Ipsum has been the industry's standard dummy text ever
                                        since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries</p>
                                    <span class="fw600 fs-18 cl_07">Mrs. Aley swift</span>
                                </div>
                                <p class="s-content fs-17 mt-4">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </p>
                                <p class="s-content fs-17 mt-4">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-12 col-12 box">
                    <div class="d-flex mb-2 recently">
                        <img src="theme/frontend/images/Rectangle190.png" alt="" style="height:30px" class="pl-1 mr-3">
                        <h2 class="title font-bold">Gần đây</h2>
                    </div>
                    <?php include 'theme/frontend/share/recently.php';  ?>
                    <div class="img">
                        <img src="theme/frontend/images/Rectangle466.png" alt="quang-cao">
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="relate">
        <div class="container">
            <h3 class="title fs-40">
                Tin tức liên quan
            </h3>
            <div class="row mt-3">
                <?php 
                    for($i=0;$i<4;$i++){
                        ?>
                <div class="col-xl-3 col-lg-6 col-md-6 col-12">
                    <div class="item">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-12 col-12">
                                <a href="#" target="_blank" rel="noopener noreferrer" class="c-img">
                                    <img src="theme/frontend/images/Rectangle224.png" alt="product">
                                </a>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-12 col-12">
                                <div class="c-text">
                                    <p class="s-content fs-22_30 fw600">
                                        <a href="" tagret="_blank" class="cl-25">Làm sao để đăng ký cho thuê bđs</a>
                                    </p>
                                </div>
                                <div class="d-flex time">
                                    <p class="time-author cl-88 fs-16 mr-3"><i class="fa fa-clock-o mr-1"></i>
                                        <span>23</span><span>/</span><span>11</span><span>/</span><span>2020</span>
                                    </p>
                                    <p class="time-author cl-88 fs-16 mr-1"><i class="fa fa-user-o mr-1"></i>
                                        Admin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
                    }
                ?>
            </div>
            <div class="row mt-2">
                <?php 
                    for($i=0;$i<4;$i++){
                        ?>
                <div class="col-xl-3 col-lg-6 col-md-6 col-12">
                    <div class="item">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-12 col-12">
                                <a href="#" target="_blank" rel="noopener noreferrer" class="c-img">
                                    <img src="theme/frontend/images/Rectangle224.png" alt="product">
                                </a>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-12 col-12">
                                <div class="c-text">
                                    <p class="s-content fs-22_30 fw600">
                                        <a href="" tagret="_blank" class="cl-25">Làm sao để đăng ký cho thuê bđs</a>
                                    </p>
                                </div>
                                <div class="d-flex time">
                                    <p class="time-author cl-88 fs-16 mr-3"><i class="fa fa-clock-o mr-1"></i>
                                        <span>23</span><span>/</span><span>11</span><span>/</span><span>2020</span>
                                    </p>
                                    <p class="time-author cl-88 fs-16 mr-1"><i class="fa fa-user-o mr-1"></i>
                                        Admin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
                    }
                ?>
            </div>
        </div>
    </div>
    <?php 
        include 'theme/frontend/share/menu_mobile.php'; 
        include 'theme/frontend/share/contact.php';
        include 'theme/frontend/share/footer.php';
        include 'theme/frontend/share/style.php';
    ?>
    <script src="theme/frontend/js/style.js"></script>
</body>

</html>