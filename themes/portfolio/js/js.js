var mobile,header_height,marquee_height,wh,ww,dh,dw,cursor,glide,time = 250,mobile_l = 568,title = 0,open=0;

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

function loop_titles() {
	$(".title").fadeOut(time,function(){
		$(this).text(titles[title]).fadeIn(time);
	});

	title = title == titles.length-1 ? 0 : title + 1;
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

	$("#screenshots").on("click", function(e) {
		url = $(this).attr("data-url");
		if(open) {
			$("#screenshot_modal").fadeIn();
		} else {
			$("#screenshot_modal").fadeIn(function(){
				$(this).load(url + " .slider", function(){
					glide = $('.slider').glide({
						autoplay: false,
						arrows: false,
						nav: '#screenshot_modal'
					}).data('api_glide');
	
					open = 1;
				});
			});
		}
	});

	$("body").on("mousemove", ".slide", function(e) {
		cursor = e.pageX;

		$(".slider").removeClass("prev next close");

		if(cursor <= ww*.3333) {
			$(".slider").addClass("prev");
		} else if(cursor >= ww*.6666) {
			$(".slider").addClass("next");
		} else {
			$(".slider").addClass("close");
		}
	}).on("click",".slide", function(e) {
		if(cursor <= ww*.3) {
			glide.prev();
		} else if(cursor >= ww*.6) {
			glide.next();
		} else {
			$("#screenshot_modal").fadeOut();
		}
	});
});