var mobile, header_height,marquee_height,wh,ww,dh,dw,time = 250,mobile_l = 568;
var titles = ["Sr. Developer", "UI & UX Designer", "CSS > * Believer", "Analogy Extraordinaire", "Project Manager", "Car Guy"];

function get_size() {
	wh = $(window).outerHeight();
	ww = $(window).outerWidth();

	dh = $(document).outerHeight();
	dw = $(document).outerWidth();

	header_height = $("header").outerHeight();
	marquee_height = $("#marquee").outerHeight();

	mobile = ww <= mobile_l ? 1 : 0;

	if(!mobile) {
		$("header").toggleClass("active", $(document).scrollTop() >= (marquee_height - header_height));
	} else {
		$("header").addClass("active");
	}

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
	setTimeout(get_size, 750);
	setTimeout(loop_titles, 2000);

	$(window).resize(function(){
		get_size();
	});

	$(document).scroll(function() {
		if(!mobile) $("header").toggleClass("active", $(document).scrollTop() >= (marquee_height - header_height));
	});

	$("nav").on("click", function(e) {
		if(mobile) $("body").toggleClass("open");
	});
});