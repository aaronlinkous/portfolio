<aside id="marquee" class="<% if $marquee_pos == '1' %>fixed<% end_if %>">
	<div class="sign <% if $marquee_align == 'left' %>left<% else_if $marquee_align == 'right' %> right<% end_if %>">
		<h1>$Title</h1>
		<h2>$duties</h2>
	</div>
</aside>

<div id="wrapper">
	<section id="content">
		<div id="intro"  class="row full_width">
			<h1>$Title</h1>
			<h2>$duties</h2>

			$Content
		</div>
</section>