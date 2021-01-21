$(function() {
    $('#HomePageModal').modal('show');
});


// Product Detail Gallery

function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	expandImg.src = imgs.src;
	expandImg.parentElement.style.display = "block";
}