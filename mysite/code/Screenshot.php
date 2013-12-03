<?php
class Screenshot extends Page {

	private static $db = array(
	);

	private static $has_one = array(
		'marquee_img' => 'Image'
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->addFieldToTab('Root.Main', new UploadField('marquee_img','Screenshot'),'Content');

		return $fields;
	}
}
class Screenshot_Controller extends Page_Controller {

	private static $allowed_actions = array (
	);

}