function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "top_nevi") {
    x.className += " responsive";
  } else {
    x.className = "top_nevi";
  }
}

var myfirstslide = 0;
slideimage();

function slideimage() {
  var i;
  var x = document.getElementsByClassName("slide_img_edit");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myfirstslide++;
  if (myfirstslide > x.length) { myfirstslide = 1 }
  x[myfirstslide - 1].style.display = "block";
  setTimeout(slideimage, 2000);
}




