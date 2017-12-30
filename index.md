<html>
<head>
  <title>WADEAWHILE | Developer</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <style>
  body {
      font: 400 15px 'Orbitron', sans-serif;
      line-height: 1.8;
      color: #161616;
  }
  h2 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 30px;
  }
  h4 {
      font-size: 19px;
      line-height: 1.375em;
      font-weight: 400;
      margin-bottom: 30px;
  }  
  .jumbotron {
      background-color: #2c4167;
      color: #fff;
      padding: 80px 25px 25px;
font-family: 'Press Start 2P', cursive;
  }
  .container-fluid {
      padding: 60px 50px;
  }
  .bg-grey {
      background-color: #a5a5a5;
  }
.bg-android {
background-color: #A4C639;
}

.bg-red {
background-color: #f4511e;
}

  .logo-small {
      color: #f4511e;
      font-size: 50px;
  }
  .logo {
      color: #f4511e;
      font-size: 200px;
  }
  .thumbnail {
      padding: 0 0 15px 0;
      border: none;
      border-radius: 0;
  }
  .thumbnail img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
  }
  .carousel-control.right, .carousel-control.left {
      background-image: none;
      color: #f4511e;
  }
  .carousel-indicators li {
      border-color: #f4511e;
  }
  .carousel-indicators li.active {
      background-color: #f4511e;
  }
  .item h4 {
      font-size: 19px;
      line-height: 1.375em;
      font-weight: 400;
      font-style: italic;
      margin: 70px 0;
  }
  .item span {
      font-style: normal;
  }
  .panel {
      border: 1px solid #808080;
      border-radius: 90 !important;
      transition: box-shadow 0.5s;
  }
  .panel:hover {
      box-shadow: 5px 0px 40px rgba(0,0,0, .2);
  }
  .panel-footer .btn:hover {
      border: 1px solid #f4511e;
      background-color: #fff !important;
      color: #f4511e;
  }
  .panel-heading {
      color: #f4511e !important;
      background-color: transparent !important;
      padding: 25px;
      border-bottom: 1px solid transparent;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
  }
  .panel-footer {
      background-color: transparent !important;
  }
  .panel-footer h3 {
      font-size: 32px;
  }
  .panel-footer h4 {
      color: #aaa;
      font-size: 14px;
  }
  .panel-footer .btn {
      margin: 15px 0;
      background-color: #f4511e;
      color: #fff;
  }

.panel-footer .btn-android {
      margin: 15px 0;
      background-color: #ffffff;
      color: #A4C639
  }
 .panel-footer .btn-android:hover {
      border: 1px solid #ffffff;
      background-color: #A4C639 !important;
      color: #ffffff;
  }
.panel-footer .btn-apple {
      margin: 15px 0;
      background-color: #ffffff;
      color: #161616;
  }
 .panel-footer .btn-apple:hover {
      border: 1px solid #ffffff;
      background-color: #161616 !important;
      color: #ffffff;
  }

  .navbar {
      margin-bottom: 0;
      background-color: #a5a5a5;
      z-index: 9999;
      border: 0;
      font-size: 12px !important;
      line-height: 1.42857143 !important;
      letter-spacing: 4px;
      border-radius: 0;
      font-family: Montserrat, sans-serif;
  }
  .navbar li a, .navbar .navbar-brand {
      color: #2c4167;  !important;
text-align: right;
  }
  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #f4511e !important;
      background-color: #fff !important;
  }
  .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #fff !important;
  }
  footer .glyphicon {
      font-size: 20px;
      margin-bottom: 20px;
      color: #f4511e;
  }
  .slideanim {visibility:hidden;}
  .slide {
      animation-name: slide;
      -webkit-animation-name: slide;
      animation-duration: 1s;
      -webkit-animation-duration: 1s;
      visibility: visible;
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
    }
  }
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
        width: 100%;
        margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
        font-size: 150px;
    }
  }

#myImg-CAW01 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-CAW01:hover {opacity: 0.7;}

#myImg-CAW02 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-CAW02:hover {opacity: 0.7;}

#myImg-CAW03 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-CAW03:hover {opacity: 0.7;}

#myImg-CAW04 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-CAW04:hover {opacity: 0.7;}

#myImg-CAW05 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-CAW05:hover {opacity: 0.7;}

#myImg-CAW06 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-CAW06:hover {opacity: 0.7;}

#myImg-WM01 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-WM01:hover {opacity: 0.7;}

#myImg-WM02 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-WM02:hover {opacity: 0.7;}

#myImg-WM03 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-WM03:hover {opacity: 0.7;}

#myImg-WM04 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-WM04:hover {opacity: 0.7;}

#myImg-WM05 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-WM05:hover {opacity: 0.7;}

#myImg-WM06 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-WM06:hover {opacity: 0.7;}

#myImg-WM07 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-WM07:hover {opacity: 0.7;}

#myImg-AC01 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-AC01:hover {opacity: 0.7;}

#myImg-AC02 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-AC02:hover {opacity: 0.7;}

#myImg-AC03 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-AC03:hover {opacity: 0.7;}

#myImg-AC04 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-AC04:hover {opacity: 0.7;}

#myImg-AC05 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-AC05:hover {opacity: 0.7;}

#myImg-AC06 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-AC06:hover {opacity: 0.7;}

#myImg-GNG01 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-GNG01:hover {opacity: 0.7;}

#myImg-GNG02 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-GNG02:hover {opacity: 0.7;}

#myImg-GNG03 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-GNG03:hover {opacity: 0.7;}

#myImg-GNG04 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-GNG04:hover {opacity: 0.7;}

#myImg-GNG05 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-GNG05:hover {opacity: 0.7;}

#myImg-GNG06 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-GNG06:hover {opacity: 0.7;}

#myImg-PP01 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-PP01:hover {opacity: 0.7;}

#myImg-PP02 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-PP02:hover {opacity: 0.7;}

#myImg-PP03 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-PP03:hover {opacity: 0.7;}

#myImg-PP04 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-PP04:hover {opacity: 0.7;}

#myImg-PP05 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-PP05:hover {opacity: 0.7;}

#myImg-PP06 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-PP06:hover {opacity: 0.7;}

#myImg-TC01 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-TC01:hover {opacity: 0.7;}

#myImg-TC02 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-TC02:hover {opacity: 0.7;}

#myImg-TC03 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-TC03:hover {opacity: 0.7;}

#myImg-TC04 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-TC04:hover {opacity: 0.7;}

#myImg-TC05 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-TC05:hover {opacity: 0.7;}

#myImg-TC06 {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

#myImg-TC06:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 50px;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

/* Caption of Modal Image */
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}

/* Add Animation */
.modal-content, #caption {    
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)} 
    to {-webkit-transform:scale(1)}
}

@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}

/* The Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
    .modal-content {
        width: 100%;
    }

}
  </style>
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container bg-grey">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="https://itunes.apple.com/au/developer/wade-rossow/id769754891"  data-toggle="tooltip" data-placement="top" title="Check us out in the AppStore">
        <i class="icon-large icon-apple" style="font-size:50px;color:#ffffff;">
        </i>
  </a>
  <a class="navbar-brand" href="https://play.google.com/store/apps/developer?id=WADEAWHILE"  data-toggle="tooltip" data-placement="top" title="Check us out in the Google Play">
    <i class="fa fa-android" aria-hidden="true" style="font-size:60px;color:#A4C639;">
    </i>
  </a>
  <a class="navbar-brand" data-placement="top">
    <i style="font-size:14px;color:ffffff;">
      Developer
    </i>
  </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#about" style="color: #ffffff;">ABOUT</a></li>
        <li><a href="#applications" style="color: #ffffff;">APPLICATIONS</a></li>
        <li><a href="#contact" style="color: #ffffff;">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="jumbotron text-center">
  <h1>WADEAWHILE</h1>
<h5><> software development</h5>
</div>

<!-- Container (About Section) -->
<div id="about" class="container-fluid">
  <div class="row">
    <div class="col-sm-8">
      <h2>About</h2><br>
<h4>Welcome, we are excited to have you here and hope you enjoy our world of wonderment.</h4>
      <p>The focus of WADEAWHILE is to develop fun, functional and sometimes educational applications primarily for mobile devices.</p>
                    <p>Early applications like '<b>Construct-A-Word</b>' and '<b>Word Match</b>' were heavily focused on assisting students of all ages in their abilities to recognise words that they were studying through matching or clue based exercises. These applications were originally developed natively in Xcode for iPhone, iPad and iPod.</p> 
                        <p>With the introduction of the AppleTV appStore '<b>Word Match</b>' went through a revamp and restructure to suit the AppleTV, making '<b>Word Match</b>' the first native AppleTV (TvOS) application from WADEAWHILE.</p>
                    <p>Changing direction towards the AppleTV lead to the uses of Unity3D instead of the native Xcode.</p>
                    <p>From this change in development software also came a change in application type/focus.</p>
                    <p>'<b>Animal Catch</b>' was created for AppleTV to provide users an easy to control character who as best he could, would try to catch cat and dogs in his net that were falling from the sky, all whilst avoiding a few hazards like snakes and spiders. It was shortly thereafter released for iPhone, iPad and iPod.</p>
                    <p>The current direction here at WADEAWHILE is on simple applications to provide entertainment and where possible education.</p>
                    <p>Please take the time to view each application page on this site, check out the WADEAWHILE Facebook page or even in the AppStore itself.</p>
                    <p>Keep an eye on the Facebook page as there are promo days that pop up on the from time to time.</p>
      <br>
    </div>
    <div class="col-sm-4">
      <i class="icon-mobile-phone" style="font-size:150px;"></i>
<span style="font-size:50px;"> Mobile</span>
<br>
<i class="icon large icon-tablet" aria-hidden="true" style="font-size:150px;"></i>
<span style="font-size:50px;"> Tablet</span>
<br>
<i class="fa fa-television" aria-hidden="true" style="font-size:150px;"></i>
<span style="font-size:50px;"> AppleTV</span>
    </div>
  </div>
</div>

<!-- Container (Applications Section) -->
<div id="applications" class="container-fluid bg-grey">
  <div class="text-center">
    <h2>Applications</h2>
    <h4>Cast your peepers on these little beauties.</h4>
  </div>

<!-- ************************************************************************ -->

  <div class="row slideanim">

<!-- ************************************************************************ -->

    <div class="col-sm-4 col-xs-12">
      <div id="Construct-A-Word" class="panel panel-default text-center">
        <div class="panel-heading">
          <h2>Construct-A-Word</h2>
        </div>
        <div class="panel-body">
          <h5><strong>Available in AppStore</strong> <h6>( iPad only )</h6></h5>

          <h5 style="text-align: left;">A bit of a difference on this application to the other as it was only developed for iPad as the smaller screens of iPhone and iPod were not suitable to display or play this application.</h5>
<h5 style="text-align: left;">Similar to Word Match in that you can save up to 4 custom lists but this is not just a simple list of words.</h5>
<h5 style="text-align: left;">You will need to have a bit of a think about how you want to put these lists together as they contain Clues as well as the Answers.</h5>
<h5 style="text-align: left;">The idea behind this application is to provide another angle to help with learning new or troublesome words.</h5>
<h5 style="text-align: left;">Enter 6 Clues and their corresponding Answers into one of your custom lists and either play it yourself or hand it to a student, family member or friend to complete.</H5>
<h5 style="text-align: left;">You/They will have to read the Clue and by selecting sections of words below the Clues, peice together the Answer until all of the Clues have been Answered.</H5>

<br>

<p style="align: center">
<table>
<tbody>
<tr>
<td style="align: center">
<img id="myImg-CAW01" src="images/Construct-A-Word/CAW - Blank Menu.png" class="img-responsive" alt="Construct-A-Word - Blank Menu" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-CAW01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-CAW02" src="images/Construct-A-Word/CAW - Instructions.png" class="img-responsive" alt="Construct-A-Word - Instructions" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-CAW02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-CAW03" src="images/Construct-A-Word/CAW - Completed Menu.png" class="img-responsive" alt="Construct-A-Word - Completed Menu" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-CAW03');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td>
<img id="myImg-CAW04" src="images/Construct-A-Word/CAW - Start Game.png" class="img-responsive" alt="Construct-A-Word - Start Game" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-CAW04');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td>
<img id="myImg-CAW05" src="images/Construct-A-Word/CAW - Partial Game.png" class="img-responsive" alt="Construct-A-Word - Partial Game" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-CAW05');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td>
<img id="myImg-CAW06" src="images/Construct-A-Word/CAW - Completed Game.png" class="img-responsive" alt="Construct-A-Word - Completed Game" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-CAW06');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>
</tbody>
</table>
</p>
        </div>
        <div class="panel-footer bg-grey">
          <button class="btn-apple btn-lg" href="https://itunes.apple.com/au/app/construct-word-educator-edition/id790013902?mt=8"  data-toggle="tooltip" data-placement="top" title="View in AppStore">View in AppStore</button>
        </div>
      </div>      
    </div>

<!-- ************************************************************************ -->

    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Word Match</h1>
        </div>
        <div class="panel-body">
          <h5><strong>Available in AppStore</strong></h5>

          <h5 style="text-align: left;">Ah, another word matching application you say.</h5>
          <h5 style="text-align: left;">Nay I say.</h5>
          <h5 style="text-align: left;">You are provided with the option to save upto 4 custom lists contisting of 10 words entered by you, to assist yourself or someone else to visually recognise new or troublesome words from sources like School, Work, University or any other study type situations.</h5>
           <h5 style="text-align: left;">Your fastest time will be kept to give you further incentive to learn these words and to have your brain etch them in nice and deep, providing you with quicker recall in the future.</h5>
           <h5 style="text-align: left;">This application was given a revamp when the new AppleTV was released introducing the AppleTV appStore. Originally developed for iPhone, iPad and iPod for students to easily carry this productive and fun application from class to class entering different word per class.</h5>
           <h5 style="text-align: left;">Having the ability to learn your words from the comfort of your lounge room or bedroom on a larger screen was something that couldn't be overlooked her at WADEAWHILE.</h5>

<br>

<p style="align: center">
<table>
<tbody>
<tr>
<td style="align: center">
<img id="myImg-WM01" src="images/Word Match/WM Blank Menu Screen.png" class="img-responsive" alt="Word Match Blank Menu Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-WM01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-WM02" src="images/Word Match/WM Instruction.png" class="img-responsive" alt="Word Match Instruction" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-AC02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-WM03" src="images/Word Match/WM Entered Menu Screen.png" class="img-responsive" alt="Word Match Entered Menu Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-WM03');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td>
<img id="myImg-WM04" src="images/Word Match/WM Start Game Screen.png" class="img-responsive" alt="Word Match Start Game Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-WM04');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td>
<img id="myImg-WM05" src="images/Word Match/WM Partial Matched Game Screen.png" class="img-responsive" alt="Word Match Partial Matched Game Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-WM05');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-WM06" src="images/Word Match/WM Completely Matched Game Screen.png" class="img-responsive" alt="Word Match Completely Matched Game Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-WM06');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td>
<img id="myImg-WM07" src="images/Word Match/WM Game Completed.png" class="img-responsive" alt="Word Match Game Completed" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-WM07');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>
</tbody>
</table>
</p>
        </div>
        <div class="panel-footer bg-grey">
          <button class="btn-apple btn-lg" href="https://itunes.apple.com/au/app/word-match/id813390269?mt=8"  data-toggle="tooltip" data-placement="top" title="View in AppStore">View in AppStore</button>
        </div>
      </div>      
    </div>      

<!-- ************************************************************************ -->

    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Animal Catch</h1>
        </div>
        <div class="panel-body">
          <h5><strong>Available in AppStore</strong></h5>

          <h5 style="text-align: left;">Put simply, this application was developed with the focus on the new AppleTV which introduced the AppleTV appStore and it's new controller.</h5>
          <h5 style="text-align: left;">The aim was to have a simple character who would be controlled by tilting the new controller from side to side and jump when the touchpad was clicked. Fortunately this controller type was also present in current Apple products like iPhone, iPad and iPod allowing for Animal Catch to be release for those products also.</h5>
           <h5 style="text-align: left;">Russell is the name of this character and his job is to catch as many falling Dogs and Cats as he can whilst dodging the falling Spiders and Snakes. If Russell can catch the timer that comes across the screen fro time to time, a slow motion mode will occur making all of the animals that fall after the collection to be very slow for a time period.</h5>
           <h5 style="text-align: left;">At set score points you will level up which will increase the fall speed of the animals making in more and more important to catch the timer to assist in your attempt to beat the current high score whether it be held by yourself, family member or a friend.</h5>
           <h5 style="text-align: left;">This is an endless play application which allows you to continue to play for as long as you can keep Russell alive. He like us has only one life and is extremely vunerable to Spider and Snake bites so please take care out there.</h5>

<br>

<p style="align: center">
<table>
<tbody>
<tr>
<td style="align: center">
<img id="myImg-AC01" src="images/Animal Catch/Animal Catch - Menu.png" class="img-responsive" alt="Animal Catch - Menu Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-AC01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-AC02" src="images/Animal Catch/Animal Catch - Start Game.png" class="img-responsive" alt="Animal Catch - Start Game" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-AC02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-AC03" src="images/Animal Catch/Animal Catch - In Game.png" class="img-responsive" alt="Animal Catch - In Game" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-AC03');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td>
<img id="myImg-AC04" src="images/Animal Catch/Animal Catch - Level Up.png" class="img-responsive" alt="Animal Catch - Level Up" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-AC04');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td>
<img id="myImg-AC05" src="images/Animal Catch/Animal Catch - Slow Mo.png" class="img-responsive" alt="Animal Catch - Slow Mo" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-AC05');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>
</tbody>
</table>
</p>
        </div>
        <div class="panel-footer bg-grey">
          <button class="btn-apple btn-lg" href="https://itunes.apple.com/au/app/animal-catch/id1082585765?mt=8"  data-toggle="tooltip" data-placement="top" title="View in AppStore">View in AppStore</button>
        </div>
      </div>      
    </div>      
</div>

<!-- ************************************************************************ -->

<div class="row slideanim">

<!-- ************************************************************************ -->

    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Grab N Go</h1>
        </div>
        <div class="panel-body">
          <h5><strong>Available in AppStore</strong></h5>

          <h5 style="text-align: left;">This one is for the health conscious.</h5>
<h5 style="text-align: left;">All of the Apples in the land have been taken by the newly formed Apple Guards, thus leaving the people Appleless.</h5>
<h5 style="text-align: left;">Help your chosen Character collect as many Apples as they can before the Apple Guards catch them.</h5>
<h5 style="text-align: left;">Once you have collected enough Apples the Grab Key will spawn for you to collect and gain access to the next level.</h5>
<h5 style="text-align: left;">Levels are randomly generated at varying difficulties to provide unlimited enjoyment and of coarse more opportunity to collect Apples for the people.</h5>
<h5 style="text-align: left;">If you find yourself, Grab Key or next level Portal are surrounded by blocks, just touch the Block Buster button at the bottom of the screen to clear your path (Block Buster does not harm the Apple Guards).</h5>
<h5 style="text-align: left;">As your score increases you will unlock new characters to help in your quest.</h5>
<h5 style="text-align: left;">This game was created for the enjoyment of all ages.</h5>
<h5 style="text-align: left;">So go get your fruit on.</h5>

<br>

<p style="align: center">
<table>
<tbody>
<tr>
<td style="align: center">
<img id="myImg-GNG01" src="images/Grab N Go/GNG Menu 750x1334.jpg" class="img-responsive" alt="Grab N Go Menu Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-GNG01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-GNG02" src="images/Grab N Go/GNG Instructions 750x1334.jpg" class="img-responsive" alt="Grab N Go Instruction Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-GNG02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-GNG03" src="images/Grab N Go/GNG Player Select 750x1334.jpg" class="img-responsive" alt="Grab N Go Player Selection Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-GNG03');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td>
<img id="myImg-GNG04" src="images/Grab N Go/GNG Block Buster 750x1334.jpg" class="img-responsive" alt="Grab N Go Game Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-GNG04');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td>
<img id="myImg-GNG05" src="images/Grab N Go/GNG Score Blank 750x1334.jpg" class="img-responsive" alt="Grab N Go Top 5 Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-GNG05');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>
</tbody>
</table>
</p>
        </div>
        <div class="panel-footer bg-grey">
          <button class="btn-apple btn-lg" href="https://itunes.apple.com/au/app/grab-n-go/id1118775945?ls=1&mt=8"  data-toggle="tooltip" data-placement="top" title="View in AppStore">View in AppStore</button>
        </div>
      </div>      
    </div>        

<!-- ************************************************************************ -->

    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Pocket Pong</h1>
        </div>
        <div class="panel-body">
          <h5><strong>Available in AppStore</strong></h5>

          <h5 style="text-align: left;">As the name suggests, this app is like having your paddle and ball in your pocket ready to go at a moments notice.</h5>
<h5 style="text-align: left;">First choose your desired difficulty level. Easy gives you 1 ball maximum, Normal gives you 3 balls maximum and Hard gives you 6 balls maximum.</h5>
<h5 style="text-align: left;">Now calibrate your device to the position in which you would like to play in.</h5>
<h5 style="text-align: left;">Brace yourself as you are now ready to start the game, hold on tight.</h5>
<h5 style="text-align: left;">Based on your chosen difficulty level, a ball will spawn above the centre of the paddle until the maximum number of balls have spawned.</h5>
<h5 style="text-align: left;">You have 3 lives which reduce with each ball that you drop passed the paddle.</h5>
<h5 style="text-align: left;">When you drop a ball mother will spawn to take its place until you drop 3 balls in total.</h5>
<h5 style="text-align: left;">This game was created for the enjoyment of all ages.</h5>
<h5 style="text-align: left;">Its simple but addictive.</h5>

<br>

<p style="align: center">
<table>
<tbody>
<tr>
<td style="align: center">
<img id="myImg-PP01" src="images/Pocket Pong/PP-Menu.jpg" class="img-responsive" alt="Pocket Pong Menu Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-PP01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-PP02" src="images/Pocket Pong/PP-Instructions.jpg" class="img-responsive" alt="Pocket Pong Instruction Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-PP02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-PP03" src="images/Pocket Pong/PP-Calibration.jpg" class="img-responsive" alt="Pocket Pong Calibration Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-PP03');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr>
<td>
<img id="myImg-PP04" src="images/Pocket Pong/PP-ingame.jpg" class="img-responsive" alt="Pocket Pong Game Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-PP04');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td>
<img id="myImg-PP05" src="images/Pocket Pong/PP-Top5.jpg" class="img-responsive" alt="Word Match Partial Matched Game Screen" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-PP05');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>
</tbody>
</table>
</p>
        </div>
        <div class="panel-footer bg-grey">
          <button class="btn-apple btn-lg" href="https://itunes.apple.com/au/app/pocket-pong/id1123596378?mt=8"  data-toggle="tooltip" data-placement="top" title="View in AppStore">View in AppStore</button>
        </div>
      </div>      
    </div>      

<!-- ************************************************************************ -->

    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Bestie Battles</h1>
        </div>
        <div class="panel-body">
          <h5><strong>Available in AppStore + Google Play</strong></h5>

          <h5 style="text-align: left;">Currently in development.</h5>
<h5 style="text-align: left;">Due for release shortly.</h5>
            <h5 style="text-align: left;">Please come back for updates.</h5>

<br>

<p style="align: center">
<table>
<tbody>
<tr>
<td style="align: center">
<img id="myImg-BB01" src="images/BestieBattles/BB - Menu.png" class="img-responsive" alt="Bestie Battles - Menu" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-BB01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-BB02" src="images/BestieBattles/BB - Pre Game.png" class="img-responsive" alt="Bestie Battles - Pre Game" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-BB02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
<td>&nbsp;</td>
<td style="align: center">
<img id="myImg-BB03" src="images/BestieBattles/BB - In Game.png" class="img-responsive" alt="Bestie Battles - In Game" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-BB03');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>
</tbody>
</table>
</p>
        </div>
        <div class="panel-footer bg-grey">
          <button class="btn-apple btn-lg" href="" data-toggle="tooltip" data-placement="top" title="View in AppStore">View in AppStore</button>
          <button class="btn-android btn-lg" href="" data-toggle="tooltip" data-placement="top" title="View in Google Play">View in Google Play</button>
        </div>
      </div>      
    </div>      
</div>
<!-- ************************************************************************ -->

<div class="row slideanim">

<!-- ************************************************************************ -->

    <div class="col-sm-4 col-xs-12">
      <div class="panel panel-default text-center">
        <div class="panel-heading">
          <h1>Temperature Conversion</h1>
        </div>
        <div class="panel-body">
          <h5><strong>Available in Google Play</strong></h5>

          <h5 style="text-align: left;">This is a simple Temperature Conversion Application.</h5>
            <h5 style="text-align: left;">It enables you to convert between Celsius and Fahrenheit and rounds to the nearest whole number.</h5>

<br>

<p style="align: center">
<table>
<tbody>
<tr>
<td style="align: center">
<img id="myImg-TC01" src="images/Temperature Conversion/TC - Convert C to F.jpg" class="img-responsive" alt="Temperature Conversion - Convert C to F" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-TC01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
    <td>&nbsp;</td>
    <td style="align: center">
<img id="myImg-TC02" src="images/Temperature Conversion/TC - Convert F to C.jpg" class="img-responsive" alt="Temperature Conversion - Convert F to C" width="144" height="81" />

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-TC02');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>

</td>
</tr>
</tbody>
</table>
</p>
        </div>
        <div class="panel-footer bg-grey">
          <button class="btn-android btn-lg" href="https://play.google.com/store/apps/details?id=au.com.wadeawhile.temperatureconversion" data-toggle="tooltip" data-placement="top" title="View in Google Play">View in Google Play</button>
        </div>
      </div>      
    </div>        

<!-- ************************************************************************ -->

</div>
</div>

<!-- Container (Contact Section) -->
<div id="contact" class="container-fluid bg-red">
  <h2 class="text-center" style="color: #ffffff;">CONTACT</h2>
  <div class="row">
    <div class="col-sm-7">
        <div id="googleMap" style="height:250px;width:100%;"></div>

<!-- Add Google Maps -->
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script>
var myCenter = new google.maps.LatLng(-26.700000, 153.106667);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:7,
  scrollwheel:true,
  draggable:true,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position:myCenter,
  });

//marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
        <br/>
      <p style="color: #ffffff;"><span class="glyphicon glyphicon-map-marker"></span> Sunshine Coast, Queensland, Australia</p>
    </div>
    <div class="col-sm-5 slideanim">
        <br/>
        <h5 style="color: #ffffff;"><a href="https://www.facebook.com/wadeawhile/" data-toggle="tooltip" data-placement="top" title="Facebook Page" style="text-decorations:none; color:inherit;">Check us out on <i class="icon-large icon-facebook" style="color: #ffffff; margin-right:2px"></i>acebook</a>.</h5>
        <br/>
        <h5 style="color: #ffffff;"><a href="mailto:wadeawhile@gmail.com" data-toggle="tooltip" data-placement="top" title="Email" style="text-decorations:none; color:inherit;"><span class="glyphicon glyphicon-envelope" style="color: #ffffff; margin-right:2px"></span>Send us an email.</a></h5>
      </div>
    </div>
  </div>

<footer class="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Back to the Top</p>
    <br/>
    <br/>
    
</footer>

<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
</script>

</body>
</html>
