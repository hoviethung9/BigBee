var Myacount = {
    account: "admin",
    password: 12345, 
};

        function login(){
    var account = document.getElementById("acount").value;
    var password = document.getElementById("password").value;


    if (account == Myacount.account && password == Myacount.password) {
        alert("Đăng nhập thành công");
        window.location.href = "login.html";
    } else {
        alert("ERROR"); 
    }
}
function Loginascess(){
    window.location.href = "INDEX.html";
}
function register(){
    window.location.href = "register.html";
}
function registerascess(){
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (username && email && password) {
        alert("Đăng ký thành công!");
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}