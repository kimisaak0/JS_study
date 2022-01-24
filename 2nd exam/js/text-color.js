var heading = document.querySelector('#heading');
let sw = false;
heading.onclick = function() {
    if (sw == false) {
        sw = true;
        heading.style.color = "red";
    } else {
        sw = false;
        heading.style.color = "blue";
    }
}