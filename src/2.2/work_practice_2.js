function checkNum(number) {
    var regexp = /89\d{9}/g;
    return regexp.test(number);
}

function valid(form) {
    var number = form.number.value;
    var code = form.code.value;
    if (number == '')
        alert("Пожалуйста, введите номер телефона");
    else if (!checkNum(number))
        alert("Введите номер в формате 89*********");
    else if (code == '')
        alert("Пожалуйста, введите код из смс, отправленного на номер " + number);
    else
        confirm ("Ваш код из смс " + code + ", продолжить?");

}
function sendSms(form) {
    alert("Отправлено");
}
function changeNumber(number, form) {
    var phone = form.number.value;

    if (!checkNum(phone))
        alert("Введите номер в формате 89*********");
    else
        number.innerHTML = "Введите код подтверждения из сообщения, отправленого на номер " + phone;
}
