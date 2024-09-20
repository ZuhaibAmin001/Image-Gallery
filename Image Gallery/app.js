function showImage(element) {
    // Get the main image element
    var mainImg = document.getElementById("main-img");
    
    // Change the main image's src to the clicked thumbnail's src
    mainImg.src = element.src;
    
    // Optionally, you can add an active class for the selected thumbnail
    var thumbnails = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }
    element.classList.add("active");
}
