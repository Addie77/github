let account = document.getElementById("input1");
let password = document.getElementById("input2");
let code = document.getElementById("input3");
let  hint ='';
document.getElementById("login").addEventListener("click", function(){
    if (account.value.trim() === "" ) {
        hint += "請輸入使用者名稱或電子郵件\n";
    }
    if (password.value.trim() === "" ) {
        hint += "請輸入密碼";
    }
    if (hint.trim() !== "" ) {
        alert(hint)
        hint ='';
    }
    else {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("verifyPage").style.display = "block";
        document.title = "Two-factor authentication";
    }
})
document.getElementById("verifyBtn").addEventListener("click", function(){
    if (code.value.trim().length == 6 ) {
        alert("這是釣魚網站\n恭喜!您的資訊已全數被獲取");
    }
    else {
        alert("請輸入正確的驗證碼");
    }
})

