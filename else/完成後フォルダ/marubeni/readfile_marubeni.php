<?php
function readFilesEcho($ua,$type,$path,$urlpath,$converttype){
	$url = $urlpath . $type . '/';
	$pcCss = 'pc/convert.css';
	// $spCss = 'sp/convert.css';
	// switch ($converttype) {
		// case "A":
			$pcJs = 'pc/convert.js';
			// $spJs = 'sp/convert.js';
			$ConfigPcJs = 'pc/ConfigManager.js';
			// $ConfigSpJs = 'sp/ConfigManager.js';
			// break;
	// }

	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/underscore-min.js\" charset=\"UTF-8\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\" charset=\"UTF-8\"></script>");';//$
	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/ajax3.js\" charset=\"UTF-8\"></script>");';
	// echo 'document.write("<script type=\"text/javascript\" src=\"http://ajaxzip3.googlecode.com/svn/trunk/ajaxzip3/ajaxzip3.js\" charset=\"UTF-8\"></script>");';
	// echo 'document.write("<script type=\"text/javascript\" src=\"https://ajaxzip3.googlecode.com/svn/trunk/ajaxzip3/ajaxzip3-https.js\" charset=\"UTF-8\"></script>");';
	if ((strpos($ua,'iPhone')!==false)||(strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false)) {
	} else {
		echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $urlpath . 'plugin/exValidation-master/styles/exvalidation.css\" />");';

		// echo 'document.write("<script type=\"text/javascript\" src=\"https://www.google.com/jsapi\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/kanaTextExtension.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/jquery.ah-placeholder.js\" charset=\"UTF-8\"></script>");';

/*exValidation plugin ↓*/
/*$別ver*/	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/jquery.js\" charset=\"UTF-8\"></script>");';//$
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exvalidation.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exchecker-ja.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/nomethod.js\" charset=\"UTF-8\"></script>");';

/*handmade plugin ↓*/
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/Namespace.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/PlaceholderManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/FocusEventManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/MouseEventManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/AutoAddressManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/AutoAddressManagerForIE.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/TimerSolutionManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/AutoEmManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/Mediator.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/RealtimeCheckManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/RemainingItemsManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/SubmitCheckManager.js\" charset=\"UTF-8\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/ConfigManager.js\" charset=\"UTF-8\"></script>");';
/*handmade plugin ↑*/

		if (isset($pcJs) && isset($pcCss)) {
			echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $ConfigPcJs . '\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $pcJs . '\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $pcCss . '\" />");';
		}

/*ex-fixed plugin ↓*/
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/cyokodog-jquery.ex-fixed-9a25a98/jquery-1.7.1.min.js\" charset=\"UTF-8\"></script>");';//$
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/cyokodog-jquery.ex-fixed-9a25a98/jquery.exfixed-latest.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/nomethod2.js\" charset=\"UTF-8\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/cyokodog-jquery.ex-fixed-9a25a98/exe.js\" charset=\"UTF-8\"></script>");';
	}
}
?>