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

	echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/underscore-min.js\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>");';//$
	echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/ajax3.js\"></script>");';
	if ((strpos($ua,'iPhone')!==false)||(strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false)) {
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/kanaTextExtensionForSP.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'helper/Namespace.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/model/DataManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/AutoAddressManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/AutoEmManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/ItemManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/MultiItemsManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/RemainingItemsManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/SubmitCheckManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/TimerSolutionManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/view/ValidateManager.js\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/ConfigManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'sp/controller/Index.js\"></script>");';
		if (isset($spJs) && isset($spCss)) {
			echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . $ConfigSpJs . '\"></script>");';
			echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . $spJs . '\"></script>");';
			echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $spCss . '\" />");';
		}
	} else {
		echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $urlpath . 'plugin/exValidation-master/styles/exvalidation.css\" />");';

		// echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"https://www.google.com/jsapi\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/kanaTextExtension.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/jquery.ah-placeholder.js\"></script>");';

/*exValidation plugin ↓*/
/*$別ver*/	echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/jquery.js\"></script>");';//$
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exvalidation.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exchecker-ja.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'helper/nomethod.js\"></script>");';

/*handmade plugin ↓*/
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'helper/Namespace.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/PlaceholderManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/FocusEventManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/MouseEventManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/AutoAddressManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/AutoAddressManagerForIE.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/AutoAddressManagerForIE10.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/TimerSolutionManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/AutoEmManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/Mediator.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/RealtimeCheckManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/RemainingItemsManager.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/view/SubmitCheckManager.js\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . 'pc/ConfigManager.js\"></script>");';
/*handmade plugin ↑*/

		if (isset($pcJs) && isset($pcCss)) {
			echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . $ConfigPcJs . '\"></script>");';
			echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $url . $pcJs . '\"></script>");';
			echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $pcCss . '\" />");';
		}

/*ex-fixed plugin ↓*/
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/cyokodog-jquery.ex-fixed-9a25a98/jquery-1.7.1.min.js\"></script>");';//$
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/cyokodog-jquery.ex-fixed-9a25a98/jquery.exfixed-latest.js\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'helper/nomethod2.js\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"' . $urlpath . 'plugin/cyokodog-jquery.ex-fixed-9a25a98/exe.js\"></script>");';
	}
}
?>