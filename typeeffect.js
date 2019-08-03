document.addEventListener("DOMContentLoaded", typeEffect)

var text = ['前端設計師', '平面設計師', '遊戲開發者'];
var speed = 300;
var wait = 7;
var index = 0;
var count = 0;
var letter = "";

function typeEffect() {
    
    letter = text[index].slice(0, count++);

    if (count === text[index].length + wait) {
        count = 0;
        index++;
    }
    if (index === text.length) {
        index = 0;
    }

    document.querySelector(".type").textContent = letter;
    
    setTimeout(typeEffect, speed);
}