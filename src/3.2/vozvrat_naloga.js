let option = document.querySelector(".options");
option.onclick = function(event) {
    let target = event.target.closest('.option-content');
    let icon = target.querySelector(".option-content-icon");
    if (!target) return;
    target.classList.toggle('change_color');
    icon.classList.toggle('change_icon');
};


function checkbox(i) {
    let inputs = document.querySelectorAll(".input");
    let labels = document.querySelectorAll(".label");
    let box = document.querySelectorAll(".boxes-content");
    let box_img = document.querySelectorAll(".boxes-content img");

    if (inputs[i].checked) {
        labels[i].style.backgroundImage = "url('check.svg')";
        if (i !== (inputs.length - 1)) {
            box[i].style.borderColor = "#19bb4f";
            box_img[i].style.filter = "none";
        }

    } else {
        labels[i].style.backgroundImage = "";
        if (i !== (inputs.length - 1)) {
            box[i].style.borderColor = "#d8d8d8";
            box_img[i].style.filter = "grayscale(100%) opacity(25%)";
        }
    }
}
