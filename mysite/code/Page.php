<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

	function decode_html($html){
		return html_entity_decode($html);
	}

	function CustomStyles() {
		$pages = Page::get(); // returns empty DataList

		echo '<style type="text/css">';
		foreach($pages as $page) {

			$brand_color = empty($page->brand_color) ? '' : 'background-color:' . $page->brand_color . ';';

			echo(empty($brand_color)) ? '' : '#grid_' . $page->URLSegment . ' span {' . $brand_color . '}';
		}
		echo '</style>';
	}

}
class Page_Controller extends ContentController {

	private static $allowed_actions = array (
	);
}