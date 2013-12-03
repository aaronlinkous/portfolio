<!DOCTYPE html>
<html lang="$ContentLocale">
<head>
	<% base_tag %>
	<title>$SiteConfig.Title</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	$MetaTags(false)
	<link rel="shortcut icon" href="$ThemeDir/images/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="$ThemeDir/css/css.css" media="screen" />

	<script>
		var titles = [$decode_html($SiteConfig.my_titles)];
	</script>

</head>

<body class="$Classname">
<% include Header %>

$Layout

<% include Footer %>

<div id="screenshot_modal"></div>

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="$ThemeDir/js/jquery.glide.min.js"></script>
<script src="$ThemeDir/js/js.js"></script>

<script type="text/javascript" src="//use.typekit.net/los8sls.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

</body>
</html>
