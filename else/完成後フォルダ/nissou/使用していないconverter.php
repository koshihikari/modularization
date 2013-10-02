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


if ($type !== 'request' && $type !== 'reserve') {
	return;
}

$pattern = array(
	array(
		'url'		=> str_replace("/", "\/", "http://localhost/primex/nissou/0.0.2/request_inputA.html"),
		'path'		=> 'nissouPC',
		'css'		=> 'convert.css',
		'js'		=> 'convert.js'
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
// if($index !== -1 && ((strpos($ua,'iPhone')!==false)||(strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false))) {//アップ時は表示
	$url = './' . $pattern[$index]['path'] . '/' . $type . '/';
	// $url = 'https://www.codeles.net/form_converter/' . $pattern[$index]['path'] . '/' . $type . '/';
	$url = 'http://localhost/primex/nissou/0.0.2/' . $pattern[$index]['path'] . '/' . $type . '/';//アップ時はコメントに
	// error_log('$url = ' . $url . "\n", 3, 'log.txt');
	// echo 'document.write("<script src=\"//ajaxzip3.googlecode.com/svn/trunk/ajaxzip3/ajaxzip3.js\"></script>");';
	echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"plugin/exvalidation.css\" />");';
	echo 'document.write("<script type=\"text/javascript\" src=\"http://www.google.com/jsapi\"></script>");';

	echo 'document.write("<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" src=\"plugin/exvalidation.js\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" src=\"plugin/exchecker-ja.js\"></script>");';

	echo 'document.write("<script src=\"' . $url . $pattern[$index]['js'] . '\"></script>");';
	echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $pattern[$index]['css'] . '\" />");';

	exit();
// }

?>