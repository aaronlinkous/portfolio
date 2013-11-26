<ul id="work_grid" class="row full_width">
	<% loop $ChildrenOf("worked-on") %>
		<li id="$Title"><a href="$Link"><span></span><div>$Title</div></a><img src="#" /></li>
	<% end_loop %>
</ul>