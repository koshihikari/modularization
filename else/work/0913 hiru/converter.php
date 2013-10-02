<?php

$ua = $_SERVER['HTTP_USER_AGENT'];
$ref = $_SERVER['HTTP_REFERER'];
$type = $_GET['t'];

// $ref = 'https://enq.nisshinfudosan.co.jp/form/operator/formulator/formulator_preview?id=427&key=4e9772e5dfcc5549';

// error_log("\n", 3, 'log.txt');
// error_log('$ua = ' . $ua . "\n", 3, 'log.txt');
// error_log('$ref = ' . $ref . "\n", 3, 'log.txt');
// error_log('$ref2 = ' . str_replace("/", "\/", $ref) . "\n", 3, 'log.txt');
// error_log('$type = ' . $type . "\n", 3, 'log.txt');

if ($type !== 'request' && $type !== 'reserve' && $type !== 'enrollment') {
// if ($type !== 'request' && $type !== 'reserve') {
	return;
}

$pattern = array(
	array(
		'url'		=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/nissou/request_input.+"),
		'path'		=> 'nissou',
		'converttype'	=> 'A'
	)

);
$index = -1;
for ($i=0,$len=count($pattern); $i<$len; $i++) {
	$patternStr = '/^' . $pattern[$i]['url'] . '/';
	if (preg_match($patternStr, $ref)) {
		$index = $i;
		break;
	}
}

// error_log('$index = ' . $index . "\n", 3, 'log.txt');


header("Content-type: text/javascript");
if($index !== -1) {
	$converttype = $pattern[$index]['converttype'];
	$path = $pattern[$index]['path'];
	$urlpath = 'https://www.codeles.net/sato/sample_site/' . $path . '/';//localとサーバの変更点 2
	// $urlpath = 'http://localhost/primex/modularization/' . $path . '/';//localとサーバの変更点 2

	include_once "" . $path . "/readfile_" . $path . ".php";
	readFilesEcho($ua,$type,$path,$urlpath,$converttype);
}
exit();

?>