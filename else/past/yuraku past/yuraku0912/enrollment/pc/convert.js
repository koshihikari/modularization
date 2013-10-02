//目次
//ブラウザ判定、body,formのid,class付与
//ConfigManagerからid取得
//ID付与（IDがない場合）(nameが被った場合、単にiを付与する方が処理が軽い)
//事前コンバート
//ConfigManagerからclass取得
//ConfigManagerからvalidation取得
//new
//action

// window.onunload = function(){}
// if(window.name != "xyz"){
// 	location.reload();
// 	window.name = "xyz";
// }
jQuery.noConflict();
jQuery('html').hide();
jQuery(document).ready(function($){

	jQuery('html').show();
//ブラウザ判定、body,formのid,class付与―――――――――――――――――――――――――――――――――――
	var userAgent = window.navigator.userAgent.toLowerCase();
/*new*/	var appVersion = window.navigator.appVersion.toLowerCase();
	if (userAgent.indexOf("msie") != -1) {
		if (appVersion.indexOf("msie 10.") != -1) {
			$('html').addClass('elseBL ie10');
		} else if (appVersion.indexOf("msie 9.") != -1) {
			$('html').addClass('ie9');
			// if(userAgent.indexOf("win64") != -1){
			// 	$('html').addClass('ie64bit');
			// }
		} else if (appVersion.indexOf("msie 8.") != -1) {
			$('html').addClass('ie');
		} else if (appVersion.indexOf("msie 11.") != -1) {
			$('html').addClass('elseBL ie10');
		} else {
			return false;
		}
	} else {
		$('html').addClass('elseBL');
	}

	var tokenVal = $('form').find('input[type="hidden"][name="token"]').val() !== undefined ? $('form').find('input[type="hidden"][name="token"]').val() : 'complete';
	$('body').addClass('pc');
	if($('body').attr('id') === undefined){//css point用
		$('body').attr('id','bodyID')
	}
	if($('form').attr('id') === undefined){//css point用
		$('form').attr('id','formID')
	}
//―――――――――――――――――――――――――――――――――――

//ConfigManagerからid取得―――――――――――――――――――――――――――――――――――
	var ConfigManager	 	= new MYNAMESPACE.model.ConfigManager();
	var arrid = ConfigManager.getIdname();
	for (var i=0,len=arrid.length; i<len; i++) {
		arrid[i]['Selecter'].attr('id',arrid[i]['id']);
	}


//ID付与(nameが被った場合、単にiを付与する方が処理が軽い)
		$('input,select').each(function(i) {//ok
			if($(this).attr('id') === undefined){
				if($(this).attr('name') !== undefined){//nameと同名をつける
/*有楽仕様*/			var thisname = $(this).attr('name').replace('[]','')
					var sameIDlength = $('input[id='+thisname+'],select[id='+thisname+']').length
					if(sameIDlength === 0){
						$(this).attr('id', thisname);
					} else {
						for (var j=0,len=5; j<len; j++) {
							sameIDlength = $('input[id='+thisname+'_'+(j+2)+'],select[id='+thisname+'_'+(j+2)+']').length
							if(sameIDlength === 0){
								$(this).attr('id', thisname+'_'+(j+2));
								break;
							}
						}
					}
				} else {//nameを持っていない場合、id=AddID+i
					$(this).attr('id', 'AddID'+i);
				}
			}
		})







//事前コンバート―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
//backgroundColorを削除―――――――――――――――――――――――――――――――――――
	$('input[name="privacy"]').closest('td').attr('bgcolor','')

//Radio,Checkをlabelで囲む。―――――――――――――――――――――――――――――――――――
	$('#col_32,#col_32_2,#col_32_3').closest('label').addClass('labelClass')

	var tempradioNode = $('<div>')
	$('input[name="col_18"]').each(function(i){
		var gendertxt = $('<span>').html($(this).val() + ' ');
		var genderlabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(gendertxt)
		tempradioNode.append(genderlabelNode)
	})
	$('input[name="col_18"]').eq(0).closest('td').html('').addClass('labeltd').append(tempradioNode.html())
	$('input[type="checkbox"]').each(function(i){
		var radiotd = $(this).closest('td')
		var radiotxt = $('<span>').html(radiotd.text())
		var radiolabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(radiotxt)
		radiotd.html(radiolabelNode)
	})

//フォーム依存――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
//submit
	$('#frm>p.form_send>a').attr('onclick','')
	// $j('#frm>p.form_send>a').click(function(){
	// 	$j('form').submit();
	// })
//――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

//事前コンバートここまで―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――


//ConfigManagerからclass取得―――――――――――――――――――――――――――――――――――
	$(ConfigManager).on('onSetClassname', function(event) {
		var arr = ConfigManager.getClassname();
		for (var i=0,len=arr.length; i<len; i++) {
			arr[i]['Selecter'].addClass(arr[i]['classname']);
		}
	})
	ConfigManager.SetClassname();

//ConfigManagerからリアルタイムで取得。―――――――――――――――――――――――――
	// ConfigManager.SetClassname();
	// $(ConfigManager).on('onSetIdname', function(event) {
	// })
	// ConfigManager.SetIdname();
//―――――――――――――――――――――――――――――――――――

/*――――――――――――――――――――――――――*/
/*	AddID&Name from Class	*/
/*――――――――――――――――――――――――――*/

//住所自動入力は任意のidが必須（なかったら自動付与、というようにしてもよい）
	// var arrname =	[
	// 				 {'Selecter'	: $('input[name="col_4"]')				,'name': 'kanaEx_firstName'}
	// 				,{'Selecter'	: $('input[name="col_5"]')				,'name': 'kanaEx_lastName'}
	// 				,{'Selecter'	: $('input[name="col_14"]')				,'name': 'kanaEx_firstNameKatakana'}
	// 				// ,{'Selecter'	: $('input[name="col_14"]')				,'name': 'kanaEx_firstNameHiragana'}
	// 				,{'Selecter'	: $('input[name="col_15"]')				,'name': 'kanaEx_lastNameKatakana'}
	// 				// ,{'Selecter'	: $('input[name="col_15"]')				,'name': 'kanaEx_lastNameHiragana'}
	// 			]




	// for (var i=0,len=arrname.length; i<len; i++) {
	// 	arrname[i]['Selecter'].attr('name',arrname[i]['name']);
	// }




//validation
	var ExValidationObj = ConfigManager.getValidation();



//new――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

		//initialvalidateじゃない？	// var InitialBlankManager	 	= new MYNAMESPACE.view.InitialBlankManager($j);
	var FocusEventManager	 	= new MYNAMESPACE.view.FocusEventManager();
	var AutoEmManager		 	= new MYNAMESPACE.view.AutoEmManager();
	// var AutoKanaManager		 	= new MYNAMESPACE.view.AutoKanaManager();⇒プラグインで実装
	// var TextNumberManager	 	= new MYNAMESPACE.view.TextNumberManager($j);

	var RemainingItemsManager 	= new MYNAMESPACE.view.RemainingItemsManager();
	var RealtimeCheckManager 	= new MYNAMESPACE.view.RealtimeCheckManager(ExValidationObj);
	var SubmitCheckManager 		= new MYNAMESPACE.view.SubmitCheckManager();
	var PlaceholderManager	 	= new MYNAMESPACE.view.PlaceholderManager();
	// if($('html').hasClass('ie') === true){
	// 	var PlaceholderManagerForIE	= new MYNAMESPACE.view.PlaceholderManagerForIE();
	// }
	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
	// if($('html').hasClass('ie') === true){
		var AutoAddressManager	 	= new MYNAMESPACE.view.AutoAddressManagerForIE();
	} else {
		var AutoAddressManager	 	= new MYNAMESPACE.view.AutoAddressManager();
	}
	var TimerSolutionManager	= new MYNAMESPACE.view.TimerSolutionManager();
	var MouseEventManager	 	= new MYNAMESPACE.view.MouseEventManager();

	var Mediator	 			= new MYNAMESPACE.view.Mediator(RemainingItemsManager,RealtimeCheckManager,TimerSolutionManager);



//ConfigManagerからSubmit時のエラーコメント取得―――――――――――――――――――――――――――――――――――
	$(ConfigManager).on('onSetSubmitComment', function(event) {
		var SubmitCommentObj = ConfigManager.getSubmitComment();
		SubmitCheckManager.getSubmitComment(SubmitCommentObj)
	})
	ConfigManager.setSubmitComment();


//action――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	Mediator			 		.setEvent()

	// InitialBlankManager	 	.initialBlank()
	FocusEventManager	 		.focusEvent()
	AutoEmManager		 		.autoEm()
	// AutoKanaManager		 	.autoKana()⇒プラグインで実装
	// TextNumberManager	 	.textNumber()

	RealtimeCheckManager.realtimeCheck()
	PlaceholderManager	 	.placeholder()
	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
	// if($('html').hasClass('ie') === true){
		PlaceholderManager	 .placeholderForIE()
	}
	SubmitCheckManager.submitCheck()
	AutoAddressManager	 	.autoAddress()
	TimerSolutionManager	 	.timerSolutionKanaAndPlaceholder()
	TimerSolutionManager	 	.timerSolutionAddressAndPlaceholder()
	RemainingItemsManager 	.insertdiv()
	RemainingItemsManager 	.setEvent()

	MouseEventManager	 	.mouseEvent()

	// if($jk('html').hasClass('ie') === true) {
	// 	$jk('#float').exFixed();
	// }


	var countval = $('.AutoAddressNum2').val().replace('-', '').replace('－', '').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
	var count = countval.length;
	if(count == 4){
				AutoAddressManager.changeNameAddressNum();//name1、2を確定させるアクション
				AutoAddressManager.changeNameAddressText();//name3,4,5を確定させるアクション
				// AutoAddressManager.ajaxZip3zip2addrAction();
/*カスタマイズ*/		AutoAddressManager.realTimeCheck();//飛ばされた項目をblurする。
				AutoAddressManager.returnName();//name1,2を戻すアクション

	}

});