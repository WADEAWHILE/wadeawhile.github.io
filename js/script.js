// 1st Website
var currentImage1 = document.getElementById("current-image1");
var imageThumbs1 = document.getElementById("image-thumbs1");
for (var i = 1; i <= 3; i++) {
    var thumb = document.createElement("img");
    thumb.src = "assets/images/website_0" + i + "_image_01.jpg";
    thumb.alt = "Image of website_0" + i + "_image_01";
    thumb.classList.add("thumb");
    imageThumbs1.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage1.src = this.src;
            currentImage1.alt = this.alt;
        }
    );
}

// 2nd Website
var currentImage2 = document.getElementById("current-image2");
var imageThumbs2 = document.getElementById("image-thumbs2");
for (var i = 4; i <= 6; i++) {
    var thumb = document.createElement("img");
    thumb.src = "assets/images/website_0" + i + "_image_01.jpg";
    thumb.alt = "Image of website_0" + i + "_image_01";
    thumb.classList.add("thumb");
    imageThumbs2.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage2.src = this.src;
            currentImage2.alt = this.alt;
        }
    );
}