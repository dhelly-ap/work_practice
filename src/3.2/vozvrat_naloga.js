'use strict'

function checkbox(i) {
    let inputs = document.querySelectorAll(".input");
    let labels = document.querySelectorAll(".label");
    let box = document.querySelectorAll(".boxes-content");
    let box_img = document.querySelectorAll(".boxes-content img");

    if(inputs[i].checked){
        labels[i].style.backgroundImage = "url('check.svg')";
        if (i !== (inputs.length - 1)){
            box[i].style.borderColor = "#19bb4f";
            box_img[i].style.filter = "none";
        }

    }
    else{
        labels[i].style.backgroundImage = "";
        if (i !== (inputs.length - 1)){
            box[i].style.borderColor = "#d8d8d8";
            box_img[i].style.filter = "grayscale(100%) opacity(25%)";
        }

    }

    let option = document.querySelector(".options");
    let content = document.querySelector(".option-content");
    let selectedTd;

    table.onclick = function(event) {
        let target = event.target.closest('.option-content');

        if (!target) return;
        if (option.contains(target)) return;

       changeTarget(target);
    };

    function changeTarget(target) {
        if (selectedTd) { // убрать существующую подсветку, если есть
            selectedTd.classList.remove('change_color');
        }
        selectedTd = target;
        selectedTd.classList.add('change_color'); // подсветить новый td
    }

};