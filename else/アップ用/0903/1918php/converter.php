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
		'url'			=> str_replace("/", "\/", "https://enq.nisshinfudosan.co.jp/form/fm/honsya/kanagawa"),
		'path'			=> 'nisshinfudosan',
		'converttype'	=> 'B'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://enq.nisshinfudosan.co.jp/form/fm/honsya/tokyocity_saitama"),
		'path'			=> 'nisshinfudosan',
		'converttype'	=> 'B'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://enq.nisshinfudosan.co.jp/form/fm/honsya/tokyo23"),
		'path'			=> 'nisshinfudosan',
		'converttype'	=> 'B'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://enq.nisshinfudosan.co.jp/form/.+"),
		'path'			=> 'nisshinfudosan',
		'converttype'	=> 'A'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://www.morimoto-real.co.jp/shinchiku/kawasaki-mid/toiawase.html"),
		'path'			=> 'morimoto',
		'converttype'	=> 'A'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/morimoto/request_inputA_UTF8.html"),
		'path'			=> 'morimoto',
		'converttype'	=> 'A'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/megalos/request_inputA_megalos.html"),
		'path'			=> 'megalos',
		'converttype'	=> 'A'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://i02.smp.ne.jp/u/megalos/catalog/testindex.html"),
		'path'			=> 'megalos',
		'converttype'	=> 'A'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://i02.smp.ne.jp/u/megalos/catalog/index.html"),
		'path'			=> 'megalos',
		'converttype'	=> 'A'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/yuraku2/request_inputA_UTF8_yuraku2.html"),
		'path'			=> 'yuraku',
		'converttype'	=> 'A'
	)
	,array(
		'url'		=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/yuraku2/y_yutorishia.+"),//分け方を変更
		'path'		=> 'yuraku',
		'converttype'	=> 'C'
	)
	,array(
		'url'		=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/yuraku2/y_yokohamatsurumi.+"),//分け方を変更
		'path'		=> 'yuraku',
		'converttype'	=> 'B'
	)
	,array(
		'url'			=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/yuraku2/y.+"),
		'path'			=> 'yuraku',
		'converttype'	=> 'A'
	)
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/y_yutorishia.+"),//分け方を変更
		'path'		=> 'yuraku',
		'converttype'	=> 'C'
	)
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/y_yokohamatsurumi.+"),//分け方を変更
		'path'		=> 'yuraku',
		'converttype'	=> 'B'
	)
	,array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/modularization/y.+"),
		'path'		=> 'yuraku',
		'converttype'	=> 'A'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index.html\?formId=B-29"),
		'path'		=> 'yuraku',
		'converttype'	=> 'C'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index.html\?formId=B-30"),
		'path'		=> 'yuraku',
		'converttype'	=> 'C'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index_sm.html\?formId=B-29"),
		'path'		=> 'yuraku',
		'converttype'	=> 'C'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index_sm.html\?formId=B-30"),
		'path'		=> 'yuraku',
		'converttype'	=> 'C'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index.html\?formId=B-101"),
		'path'		=> 'yuraku',
		'converttype'	=> 'B'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index.html\?formId=B-102"),
		'path'		=> 'yuraku',
		'converttype'	=> 'B'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index_sm.html\?formId=B-101&r=no"),
		'path'		=> 'yuraku',
		'converttype'	=> 'B'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index_sm.html\?formId=B-102"),
		'path'		=> 'yuraku',
		'converttype'	=> 'B'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/index.html$"),
		'path'		=> 'yuraku',
		'converttype'	=> 'D'
	)
	,array(//yurakuテストURL
		'url'		=> str_replace("/", "\/", "http://202.143.87.155/eso_hp/.+"),
		'path'		=> 'yuraku',
		'converttype'	=> 'A'
	)
	,array(
		'url'		=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/sumisho/s.+"),
		'path'		=> 'sumisho',
		'converttype'	=> 'A'
	)
	,array(
		'url'		=> str_replace("/", "\/", "https://www.codeles.net/sato/sample_site/primex/test1.+"),
		'path'		=> 'primex',
		'converttype'	=> 'A'
	)
	// ,array(//yuraku本番URL
	// 	'url'		=> str_replace("/", "\/", "https://ober.dga.jp/index.html?formId=.+"),
	// 	'path'		=> 'yuraku',
	// 	'converttype'	=> 'A'
	// )
	// ,array(//yuraku本番URL
	// 	'url'		=> str_replace("/", "\/", "https://ober.dga.jp/index_sm.html?formId=.+"),
	// 	'path'		=> 'yuraku',
	// 	'converttype'	=> 'A'
	// )
	// ,array(//yuraku本番URL
	// 	'url'		=> str_replace("/", "\/", "https://ober.dga.jp/new/index.html"),
	// 	'path'		=> 'yuraku',
	// 	'converttype'	=> 'A'
	// )
	// ,array(//yuraku本番URL
	// 	'url'		=> str_replace("/", "\/", "https://ober.dga.jp/new_sp/index.html"),
	// 	'path'		=> 'yuraku',
	// 	'converttype'	=> 'A'
	// )

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
	$urlpath = 'https://www.codeles.net/form_converter/' . $path . '/';//localとサーバの変更点 2
	// $urlpath = 'http://localhost/primex/modularization/' . $path . '/';//localとサーバの変更点 2

	include_once "" . $path . "/readfile_" . $path . ".php";
	readFilesEcho($ua,$type,$path,$urlpath,$converttype);
}
exit();

?>