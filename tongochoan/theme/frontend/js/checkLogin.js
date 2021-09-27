function kt() {
    var ten = document.getElementsByName("userid");
    if (ten[0].value == "" || ten[0].value.length < 5 || ten[0].value.length > 12) {
        alert("Tên tài khoản không được rỗng / độ dài trong khoảng từ 5 đến 12 ký tự");
        ten[0].style.borderColor = 'red';
        return false;

    };
    ten[0].style.borderColor = '#CCC7C7';
    // gmail
    var gmai = document.getElementsByName("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!gmai[0].value.match(mailformat) || gmai[0] == "") {
        alert("Không đúng định dạng gmail");
        gmai[0].style.borderColor = 'red';
        return false;
    }; gmai[0].style.borderColor = '#CCC7C7';
    // số điện thoại
    var sdt = document.getElementsByName("phone");
    var numbers = /^[0-9]+$/;
    if (!sdt[0].value.match(numbers) || sdt[0].value.length != 10) {
        alert("Số điện thoại phải nhập là số, độ dài 10 ký tự");
        sdt[0].style.borderColor = 'red';
        return false;
    }; sdt[0].style.borderColor = '#CCC7C7';

    // mật khẩu
    var mk = document.getElementsByName("passid");
    if (mk[0].value == "" || mk[0].length < 7 || mk[0].length > 16) {
        alert("Mật khẩu không được rỗng / độ dài trong khoảng từ 7 đến 16 ký tự");
        mk[0].style.borderColor = 'red';
        return false;
    };
    mk[0].style.borderColor = '#CCC7C7';

    // nhập lại mật khẩu
    var mk1 = document.getElementsByName("pass");
    if (mk1[0].value == "" || mk1[0].length < 7 || mk1[0].length > 16) {
        if (mk.value != mk1.value) {
            alert("Mật khẩu không được rỗng / độ dài trong khoảng từ 7 đến 16 ký tự");
            mk1[0].style.borderColor = 'red';
            return false;
        }

    };
    mk[0].style.borderColor = '#CCC7C7';

    alert("Đăng kí thành công");
    return true;
}

function login() {
   
    // gmail
    var gmai = document.getElementsByName("gmail");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!gmai[0].value.match(mailformat) || gmai[0] == "") {
        alert("Không đúng định dạng gmail");
        gmai[0].style.borderColor = 'red';
        return false;
    }; gmai[0].style.borderColor = '#CCC7C7';
   

    // mật khẩu
    var mk = document.getElementsByName("password");
    if (mk[0].value == "" || mk[0].length < 7 || mk[0].length > 16) {
        alert("Mật khẩu không được rỗng / độ dài trong khoảng từ 7 đến 16 ký tự");
        mk[0].style.borderColor = 'red';
        return false;
    };
    mk[0].style.borderColor = '#CCC7C7';

    alert("Đăng kí thành công");
    return true;
}