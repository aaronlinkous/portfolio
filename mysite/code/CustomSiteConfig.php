<?php
class CustomSiteConfig extends DataExtension {
	static $db = array(
		'my_titles' => 'HTMLText'
	);
 
	public function updateCMSFields(FieldList $fields) {
		$fields->addFieldToTab('Root.Main', new TextField('my_titles','Titles'));
	}
}
?>