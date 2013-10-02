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
//yuraku2―――――――――――――――――――――――――
	array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/y2_yutorishia.+"),//分け方を変更
		'path'		=> 'yuraku2',
		'converttype'	=> 'C'
	)
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/y2_yokohamatsurumi.+"),//分け方を変更
		'path'		=> 'yuraku2',
		'converttype'	=> 'B'
	)
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/y2.+"),
		'path'		=> 'yuraku2',
		'converttype'	=> 'A'
	)
//yuraku normal―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/y_yutorishia.+"),//分け方を変更
		'path'		=> 'yuraku',
		'converttype'	=> 'C'
	)
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/y_yokohamatsurumi.+"),//分け方を変更
		'path'		=> 'yuraku',
		'converttype'	=> 'B'
	)
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/y.+"),
		'path'		=> 'yuraku',
		'converttype'	=> 'A'
	)
//sumisho normal―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/s.+"),
		'path'		=> 'sumisho',
		'converttype'	=> 'A'
	)
//sample―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/2.0/2.+"),
		'path'		=> '2.0',
		'converttype'	=> 'A'
	)
//sample/Zept―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/2.0z/2.+"),
		'path'		=> '2.0z',
		'converttype'	=> 'A'
	)
//sample/Zept―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/2.0z2/2.+"),
		'path'		=> '2.0z2',
		'converttype'	=> 'A'
	)
//nissou―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/nissou/request_input.+"),
		'path'		=> 'nissou',
		'converttype'	=> 'A'
	)
//ietan―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/ietan/i.+"),
		'path'		=> 'ietan',
		'converttype'	=> 'A'
	)
//marubeni―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/marubeni/m.+"),
		'path'		=> 'marubeni',
		'converttype'	=> 'A'
	)
//rakuten―――――――――――――――――――――――――
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/html/rakuten/r.+"),
		'path'		=> 'rakuten',
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
	// $urlpath = 'https://www.codeles.net/form_converter/' . $path . '/';
	$urlpath = 'http://localhost/primex/modularization/' . $path . '/';//localとサーバの変更点 2

	include_once "" . $path . "/readfile_" . $path . ".php";
	readFilesEcho($ua,$type,$path,$urlpath,$converttype);
}
exit();

?>