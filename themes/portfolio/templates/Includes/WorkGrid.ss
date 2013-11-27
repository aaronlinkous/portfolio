$CustomStyles

<ul id="work_grid" class="row full_width">
	<% loop $ChildrenOf("worked-on") %>
		<li id="grid_$URLSegment"><a href="$Link"><span></span><div>$Title</div></a>$grid_thumb</li>
	<% end_loop %>
</ul>