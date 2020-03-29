
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


$('.items a').on('click', function() {
  var $this = $(this),
      $bc = $('<div class="item"></div>');

  $this.parents('li').each(function(n, li) {
      var $a = $(li).children('a').clone();
      $bc.prepend(' / ', $a);
  });
    $('.breadcrumb').html( $bc.prepend('<a href="#home">Home</a>') );
    return false;
}) 
