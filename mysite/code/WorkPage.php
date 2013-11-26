<?php
class WorkPage extends Page {

	private static $db = array(
		'duties' => 'HTMLText',
		'marquee_pos' => 'Int'
	);

	private static $has_one = array(
		'marquee_img' => 'Image',
		'grid_thumb' => 'Image'
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->addFieldToTab('Root.Main', new TextField('duties','Duties'), 'Content');
		$fields->addFieldToTab('Root.Main', new UploadField('marquee_img','Marquee Image'),'Content');
		$fields->addFieldToTab('Root.Main', new UploadField('grid_thumb','Grid Thumbnail'),'Content');
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
class WorkPage_Controller extends Page_Controller {

	private static $allowed_actions = array (
	);

}