<header>
	<aside id="name">
		<a href="$BaseHref" class="larger">Aaron Linkous</a><span class="smaller">, <span class="title">Sr. Developer</span></span>
	</aside>

	<nav>
		<ul class="larger">
			<% loop $Menu(1) %>
			<li><a href="$Link" class="$LinkingMode" title="$Title.XML">$MenuTitle.XML</a><div></div></li>
			<% end_loop %>
			<li class="clear"></li>
		</ul>
	</nav>
</header>
