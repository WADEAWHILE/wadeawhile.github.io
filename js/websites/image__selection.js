// WEBSITES

// Natural Hearth
var currentImage1 = document.getElementById("current-image1");
var imageThumbs1 = document.getElementById("image-thumbs1");
for (var i = 1; i <= 3; i++) {
    var thumb = document.createElement("img");
    thumb.src = "assets/images/websites/natural__hearth/natural__hearth__0" + i + ".jpg";
    thumb.alt = "Image of Natural Hearth 0" + i;
    thumb.classList.add("thumb");
    imageThumbs1.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage1.src = this.src;
            currentImage1.alt = this.alt;
        }
    );
}

// Ethical Mi
var currentImage2 = document.getElementById("current-image2");
var imageThumbs2 = document.getElementById("image-thumbs2");
for (var i = 1; i <= 1; i++) {
    var thumb = document.createElement("img");
    thumb.src = "assets/images/websites/ethicalmi/ethicalmi__0" + i + ".jpg";
    thumb.alt = "Image of Ethical Mi 0" + i;
    thumb.classList.add("thumb");
    imageThumbs2.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage2.src = this.src;
            currentImage2.alt = this.alt;
        }
    );
}

// Goat Real Estate
var currentImage3 = document.getElementById("current-image3");
var imageThumbs3 = document.getElementById("image-thumbs3");
for (var i = 1; i <= 2; i++) {
    var thumb = document.createElement("img");

    if (i<2) {
        thumb.src = "assets/images/websites/goat__real__estate/goat__real__estate__0" + i + ".jpg";
        thumb.alt = "Image of Goat Real Estate 0" + i;
    } else {
        thumb.src = "assets/images/websites/goat__real__estate/goat__real__estate__0" + i + ".gif";
        thumb.alt = "Video of Goat Real Estate 0" + i;
    }

    thumb.classList.add("thumb");
    imageThumbs3.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage3.src = this.src;
            currentImage3.alt = this.alt;
        }
    );
}

// Corporate Wear
var currentImage4 = document.getElementById("current-image4");
var imageThumbs4 = document.getElementById("image-thumbs4");
for (var i = 1; i <= 2; i++) {
    var thumb = document.createElement("img");

    if (i<2) {
        thumb.src = "assets/images/websites/corporate__wear/corporate__wear__0" + i + ".jpg";
        thumb.alt = "Image of Corporate Wear 0" + i;
    } else {
        thumb.src = "assets/images/websites/corporate__wear/corporate__wear__0" + i + ".gif";
        thumb.alt = "Video of Corporate Wear 0" + i;
    }

    thumb.classList.add("thumb");
    imageThumbs4.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage4.src = this.src;
            currentImage4.alt = this.alt;
        }
    );
}

// WDesign
var currentImage5 = document.getElementById("current-image5");
var imageThumbs5 = document.getElementById("image-thumbs5");
for (var i = 1; i <= 2; i++) {
    var thumb = document.createElement("img");

    if (i<2) {
        thumb.src = "assets/images/websites/wdesign/WDesign__0" + i + ".jpg";
        thumb.alt = "Image of WDesign 0" + i;
    } else {
        thumb.src = "assets/images/websites/wdesign/WDesign__0" + i + ".gif";
        thumb.alt = "Video of WDesign 0" + i;
    }

    thumb.classList.add("thumb");
    imageThumbs5.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage5.src = this.src;
            currentImage5.alt = this.alt;
        }
    );
}