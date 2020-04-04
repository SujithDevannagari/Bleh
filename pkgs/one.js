
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");

// function myFunction() {
//   if (window.pageYOffset>0) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


function go(loc) {
  document.getElementById('iFr').src = loc;
}




var topMenu = $(".edo"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    $(document).ready(function() {
    $(document).on("scroll", onScroll);

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.edo a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
        });
    }
})


$('.b').on('click', function(){
  $('.b').removeClass('active');
  $(this).toggleClass('active');
})