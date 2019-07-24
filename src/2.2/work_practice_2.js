function valid2(form) {
    var number = form.number.value;
    var code = form.code.value;
    var regexp = /89\d{9}/g;
    if (number == '')
        alert("Пожуйста, введтите номер телефона");
     else if (!regexp.test(number))
        alert("Введите номер в формате 89*********");
    else if (code == '')
        alert("Пожалуйста, введите код из смс, отправленного на номер " + number);
    else
        alert ("Ваш код из смс " + code + ", продолжить?");

}
function valid1(form) {
    alert("Отправлено");
}
function changeNumber(number, form) {
    var phone = form.number.value;
    var regexp = /89\d{9}/g;
    if (!regexp.test(phone)){
        alert("Введите номер в формате 89*********");
        return;
    }
    number.innerHTML = "Введите код подтверждения из сообщения, отправленого на номер " + phone;
}
