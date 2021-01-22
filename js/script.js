$(function() {
    $('#HomePageModal').modal('show');
});


// Product Detail Gallery
function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	expandImg.src = imgs.src;
	expandImg.parentElement.style.display = "block";
}

// Active Class via jQuery
// $(document).ready(function() {
//     $(".nav-item").click(function() {
//         $(".nav-item").removeClass("active");
//         $(this).addClass("active");
//     });
// });
