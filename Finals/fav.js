var popup = document.getElementById("loginPopup");

var btn = document.getElementById("loginBtn");

var span = document.getElementById("closeBtn");

btn.onclick = function() {
    popup.style.display = "flex";
}

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}