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

	echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/underscore-min.js\" charset=\"UTF-8\"></script>");';
	echo 'document.write("<script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\" charset=\"UTF-8\"></script>");';//$
	if ((strpos($ua,'iPhone')!==false)||(strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false)) {
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/jquery.ui.touch-punch.min.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'plugin/kanaTextExtensionForSP.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/Namespace.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/model/DataManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/AutoAddressManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/AutoEmManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/ItemManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/MultiItemsManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/RemainingItemsManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/SubmitCheckManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/TimerSolutionManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/view/ValidateManager.js\" charset=\"UTF-8\"></script>");';
		// echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/ConfigManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'sp/controller/Index.js\" charset=\"UTF-8\"></script>");';
		if (isset($spJs) && isset($spCss)) {
			echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $ConfigSpJs . '\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $spJs . '\" charset=\"UTF-8\"></script>");';
			echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $spCss . '\" />");';
		}
	} else {
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $urlpath . 'helper/Namespace.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/MenuBoxManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/view/PageManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/controller/Index.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/model/DataManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . 'pc/ConfigManager.js\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<script type=\"text/javascript\" src=\"' . $url . $pcJs . '\" charset=\"UTF-8\"></script>");';
		echo 'document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"' . $url . $pcCss . '\" />");';
	}
}
?>