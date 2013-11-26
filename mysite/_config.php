<?php

global $project;
$project = 'mysite';

global $databaseConfig;
$databaseConfig = array(
	"type" => 'MySQLDatabase',
	"server" => 'localhost',
	"username" => 'root',
	"password" => 'dbpass',
	"database" => 'portfolio',
	"path" => '',
);

// Set the site locale
i18n::set_locale('en_US');

Object::add_extension('SiteConfig', 'CustomSiteConfig');