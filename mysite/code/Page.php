<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

	function decode_html($html){
		return html_entity_decode($html);
	}

}
class Page_Controller extends ContentController {

	private static $allowed_actions = array (
	);
}