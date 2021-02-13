function enlarge(elem) {
    img = document.getElementById(elem.id);
    modal = document.getElementById("myModal");
    modalImg = document.getElementById("img01");
    captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = elem.src;
    captionText.innerHTML = elem.alt;
    document.body.style.overflow = "hidden";
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}