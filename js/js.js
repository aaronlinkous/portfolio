var header_height,marquee_height,height,width;

function getSize() {
	height = $(window).outerHeight();
	width = $(window).outerWidth();

	header_height = $("header").outerHeight();
	marquee_height = $("#marquee").outerHeight();
}

$(document).ready(function(){
	getSize();

	$(window).resize(function(){
		getSize();
	});

	$(document).scroll(function() {
		$("header").toggleClass("active", $(document).scrollTop() >= (marquee_height - header_height));
	});
});