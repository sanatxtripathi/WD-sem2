let heading=document.getElementById("heading");
let paragraph=document.getElementById("paragraph");
let input = document.getElementById("input");

let fontSize=16;
 
document.getElementById("headingbut").addEventListener("click",function(){
    if(input.value !=="") {
        heading.innerHTML = input.value;
    }
});



document.getElementById("backgroundbut").onclick = function () {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
};


document.getElementById("fontsizebut").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});


document.getElementById("hideparabut").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});


document.getElementById("resetbut").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
    fontSize = 16;
});