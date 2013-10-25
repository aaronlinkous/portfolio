var header_height,marquee_height,height,width,time = 250;

var titles = ["Sr. Developer", "UI & UX Designer", "Analogy Extraordinaire", "Project Manager"];

function getSize() {
	height = $(window).outerHeight();
	width = $(window).outerWidth();

	header_height = $("header").outerHeight();
	marquee_height = $("#marquee").outerHeight();
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
	getSize();
	setTimeout(loop_titles, 2000);

	$(window).resize(function(){
		getSize();
	});

	$(document).scroll(function() {
		$("header").toggleClass("active", $(document).scrollTop() >= (marquee_height - header_height));
	});
});