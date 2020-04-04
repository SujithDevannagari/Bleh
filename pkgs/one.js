
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");

// function myFunction() {
//   if (window.pageYOffset>0) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
$('.b').on('click', function(){
  $('.b').removeClass('active');
  $(this).toggleClass('active');
});

function go(loc) {
  document.getElementById('iFr').src = loc;
}


$(document).ready(function () {
	$(document).on("scroll", onScroll);

	// Smooth scroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");
		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top + 2
		}, 300, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	$('.edo a').each(function () {
		var currLink = $(this);
    var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('a').removeClass("active");
			currLink.addClass("active");
		} else {
			currLink.removeClass("active");
		}
	});
}


