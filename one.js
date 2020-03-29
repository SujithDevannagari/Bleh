
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

function myFunction() {
  if (window.pageYOffset > 800) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function go(loc) {
  document.getElementById('iFr').src = loc;
}


