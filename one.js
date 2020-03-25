
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

function clickSingleA(b)
{
    items = document.querySelectorAll('.single.active');

    if(items.length) 
    {
        items[0].className = 'single';
    }

    b.className = 'single active';
}