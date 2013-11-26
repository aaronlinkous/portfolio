<aside id="marquee"<% if $marquee_pos == "1" %> class="fixed"<% end_if %>>
	<div class="sign">
		<h1 class="title">Sr. Developer</h1>
		<a href="$button_left_url" class="fake_button" title="$button_left_text">$button_left_text</a>
		<a href="$button_right_url" class="fake_button" title="$button_right_text">$button_right_text</a>
	</div>
</aside>

<div id="wrapper">
	<section id="content">
		<div id="intro"  class="row full_width">
			$Content
		</div>

	<% include WorkGrid %>
</section>