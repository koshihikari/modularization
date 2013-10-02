<?php
function readFilesEcho($ua,$type,$path,$urlpath,$converttype){
	$url = $urlpath . $type . '/';
	$time = time();
	$pcCss .= '?' .$time;
	$spCss .= '?' .$time;
	$pcJs .= '?' .$time;
	$spJs .= '?' .$time;
	$ConfigPcJs .= '?' .$time;
	$ConfigSpJs .= '?' .$time;


	$arr = array(
			'0':'ClientCredential',
			'0':'HttpClient',
			'0':'IdToken',

		   )

	for (var i=0,len=; i<len; i++) {

	}


	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/underscore-min.js\" charset=\"UTF-8\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\" charset=\"UTF-8\"></script>");';//$
	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/ajax3.js?' .$time. '\" charset=\"UTF-8\"></script>");';
	if ((strpos($ua,'iPhone')!==false)||(strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false)) {
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/kanaTextExtensionForSP.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/Namespace.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/model/DataManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/AutoAddressManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/AutoEmManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/ItemManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/MultiItemsManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/RemainingItemsManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/SubmitCheckManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/TimerSolutionManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/ValidateManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/ConfigManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/controller/Index.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		if (isset($spJs) && isset($spCss)) {
			echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $ConfigSpJs . '\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $spJs . '\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $spCss . '\" />");';
		}
	} else {
		echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $urlpath . 'plugin/exValidation-master/styles/exvalidation.css\" />");';

		// echo 'document.write("<script type=\"text/javascript\" src=\"https://www.google.com/jsapi\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/kanaTextExtension.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/jquery.ah-placeholder.js\" charset=\"UTF-8\"></script>");';

/*exValidation plugin ↓*/
/*$別ver*/	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/jquery.js\" charset=\"UTF-8\"></script>");';//$
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exvalidation.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/exValidation-master/scripts/exchecker-ja.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/nomethod.js\" charset=\"UTF-8\"></script>");';

/*handmade plugin ↓*/
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/Namespace.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/PlaceholderManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/FocusEventManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/MouseEventManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/AutoAddressManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/AutoAddressManagerForIE.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/AutoAddressManagerForIE10.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/TimerSolutionManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/AutoEmManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/Mediator.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/RealtimeCheckManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/RemainingItemsManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/SubmitCheckManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/ConfigManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
/*handmade plugin ↑*/

		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/ConfigManager.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/ConfigManagerYokohama.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/ConfigManagerYutorishia.js?' .$time. '\" charset=\"UTF-8\"></script>");';
		if (isset($pcJs) && isset($pcCss)) {
			// echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $ConfigPcJs . '\" charset=\"UTF-8\"></script>");';
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