var Myacount = {
    account: "admin",
    password: 12345, 
};

        function login(){
    var account = document.getElementById("acount").value;
    var password = document.getElementById("password").value;


    if (account == Myacount.account && password == Myacount.password) {
        alert("Đăng nhập thành công");
        window.location.href = "main.html";
    } else {
        alert("ERROR"); 
    }
}