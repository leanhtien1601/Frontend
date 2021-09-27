<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Câu hỏi thường gặp</title>
    <?php 
    include 'theme/frontend/share/link.php' 
    ?>
    <link rel="stylesheet" href="theme/frontend/scss/question.css">
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
                <li class="breadcrumb-item active" aria-current="page"><a href="" target="_blank">Câu hỏi</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="question">
        <div class="container">
            <h2 class="title text-center fs-40">Các câu hỏi thường gặp </h2>
            <!-- Nav tabs -->
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#home">Bán nhà</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu1">Mua nhà</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu2">Tất cả</a>
                </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content mt-5">
                <div class="tab-pane container active" id="home">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                            <div class="question-home">
                                <?php
                                for($i=0;$i<4;$i++){
                                    ?>
                                <div class="card">
                                    <div class="card-header" id="question1">
                                        <button class="btn-main cl-25 font-w text-left">Làm sao để mua nhà giá rẻ
                                            ? <i class="fa fa-plus plus"></i></button>

                                    </div>
                                    <div class="s-content cus-p" id="collapse1">
                                        <p class="font-w">Anh Nam chia sẻ “ Tưởng có đủ tiền thì việc mua nhà sẽ dễ
                                            dàng, tôi
                                            chủ động đi tìm
                                            nhiều tháng trời gặp không ít chuyện dở khóc, dở cười với các chủ nhà tự rao
                                            bán
                                            hoặc các tin đăng của sales đăng ảo trên thị trường. Nhờ bạn bè giới thiệu,
                                            tôi biết
                                            đến finnha</p>
                                    </div>
                                </div>
                                <?php
                                }
                                ?>

                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                            <div class="question-home">
                                <?php
                                for($i=0;$i<4;$i++){
                                    ?>
                                <div class="card">
                                    <div class="card-header" id="question1">
                                        <button class="btn-main cl-25 font-w text-left">Làm sao để mua nhà giá rẻ
                                            ? <i class="fa fa-plus plus"></i></button>

                                    </div>
                                    <div class="s-content cus-p" id="collapse1">
                                        <p class="font-w">Anh Nam chia sẻ “ Tưởng có đủ tiền thì việc mua nhà sẽ dễ
                                            dàng, tôi
                                            chủ động đi tìm
                                            nhiều tháng trời gặp không ít chuyện dở khóc, dở cười với các chủ nhà tự rao
                                            bán
                                            hoặc các tin đăng của sales đăng ảo trên thị trường. Nhờ bạn bè giới thiệu,
                                            tôi biết
                                            đến finnha</p>
                                    </div>
                                </div>
                                <?php
                                }
                                ?>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane container fade" id="menu1">...</div>
                <div class="tab-pane container fade" id="menu2">...</div>
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