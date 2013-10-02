<?php
function readFilesEcho($ua,$type,$path,$urlpath,$converttype){
	$url = $urlpath . $type . '/';
	$pcCss = 'pc/convert.css';
	$spCss = 'sp/convert.css';
	switch ($converttype) {
		case "A":
			$pcJs = 'pc/convert.js';
			$spJs = 'sp/convert.js';
			$ConfigPcJs = 'pc/ConfigManager.js';
			$ConfigSpJs = 'sp/ConfigManager.js';
			break;
		case "B":
			$pcJs = 'pc/convertYokohama.js';
			$spJs = 'sp/convert.js';
			$ConfigPcJs = 'pc/ConfigManagerYokohama.js';
			$ConfigSpJs = 'sp/ConfigManager.js';
			break;
		case "C":
			$pcJs = 'pc/convertYutorishia.js';
			$spJs = 'sp/convert.js';
			$ConfigPcJs = 'pc/ConfigManagerYutorishia.js';
			$ConfigSpJs = 'sp/ConfigManager.js';
			break;
	}

	// echo 'document.write("<script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\" charset=\"UTF-8\"></script>");';//$
		// echo 'document.write("<script type=\"text/javascript\" src=\"http://zeptojs.com/zepto.min.js/\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/zepto.min.js\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $spJs . '\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $spCss . '\" />");';
}
?>