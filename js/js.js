var header_height,marquee_height,wh,ww,dh,dw,time = 250;
var titles = ["Sr. Developer", "UI & UX Designer", "Analogy Extraordinaire", "Project Manager"];

function get_size() {
	wh = $(window).outerHeight();
	ww = $(window).outerWidth();

	dh = $(document).outerHeight();
	dw = $(document).outerWidth();

	header_height = $("header").outerHeight();
	marquee_height = $("#marquee").outerHeight();

	dh <= wh ? $("footer").addClass("fixed") : $("footer").removeClass("fixed");
}

var i = 0;
var l = titles.length-1;
function loop_titles() {
	$(".title").fadeOut(time,function(){
		$(this).text(titles[i]).fadeIn(time);
	});

	i = i == l ? 0 : i + 1;
	setTimeout(loop_titles, 2000+(time*2));
}

$(document).ready(function(){
	get_size();
	setTimeout(loop_titles, 2000);

	$(window).resize(function(){
		get_size();
	});

	$(document).scroll(function() {
		$("header").toggleClass("active", $(document).scrollTop() >= (marquee_height - header_height));
	});
});