var modal = document.getElementById("modal");
var openLink = document.getElementById("openModal");
var closeBtn = document.getElementsByClassName("close")[0];
var content = document.getElementById("content");
var body = document.body;

openLink.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
    content.style.filter = "blur(3px)";
    body.classList.add("modal-open");
}

closeBtn.onclick = function() {
    modal.style.display = "none";
    content.style.filter = "none"; 
    body.classList.remove("modal-open"); 
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        content.style.filter = "none"; 
        body.classList.remove("modal-open");
    }
}
