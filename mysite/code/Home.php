<?php
class Home extends Page {

	private static $db = array(
		'button_left_text' => 'varchar',
		'button_left_url' => 'varchar',
		'button_right_text' => 'varchar',
		'button_right_url' => 'varchar',
		'marquee_pos' => 'Int'
	);

	private static $has_one = array(
		'marquee_img' => 'Image'
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->addFieldToTab('Root.Main', new TextField('button_left_text','Left Button Text'), 'Content');
		$fields->addFieldToTab('Root.Main', new TextField('button_left_url','Left Button URL'), 'Content');

		$fields->addFieldToTab('Root.Main', new TextField('button_right_text','Right Button Text'), 'Content');
		$fields->addFieldToTab('Root.Main', new TextField('button_right_url','Right Button URL'), 'Content');

		$fields->addFieldToTab('Root.Main', new UploadField('marquee_img','Marquee Image'),'Content');

		$fields->addFieldToTab('Root.Main', new DropdownField(
				$name = "marquee_pos",
				$title = "Marquee Position",
				$source = array(
					"1" => "Fixed",
					"0" => "Inline"
				),
				$value = "1"
			)
		);

		return $fields;
	}
}
class Home_Controller extends Page_Controller {

	private static $allowed_actions = array (
	);

}