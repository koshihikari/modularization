<?php
function readFilesEcho($ua,$type,$path,$urlpath,$converttype){
	$url = $urlpath . $type . '/';
	$pcCss = 'pc/convert.css';
	$pcJs = 'pc/convert.js';

	$time = time();
	$pcCss .= '?' .$time;
	$pcJs .= '?' .$time;

	echo 'document.write("<script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\" charset=\"UTF-8\"></script>");';//$
	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/ajax3.js?' .$time. '\" charset=\"UTF-8\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/kanaTextExtension.js?' .$time. '\" charset=\"UTF-8\"></script>");';

/*exValidation plugin ↓*/
	echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $urlpath . 'plugin/exValidation-master/styles/exvalidation.css\" />");';
	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exvalidation.js\" charset=\"UTF-8\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exchecker-ja.js?' .$time. '\" charset=\"UTF-8\"></script>");';

/*exValidation plugin ↓*/
	echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $pcJs . '\" charset=\"UTF-8\"></script>");';
	echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $pcCss . '\" />");';
}
?>