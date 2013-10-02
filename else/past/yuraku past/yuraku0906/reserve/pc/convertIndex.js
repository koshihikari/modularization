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
			$('html').addClass('ie');
			// $('html').addClass('ie9');
			// $('html').addClass('ie ie9');
		} else {
			$('html').addClass('ie');
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






//convertYokohama.js――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	if($('form>input[name="b_code"]').val() == 'B-102'){
	if(($('html').hasClass('ie') !== true)&&($('html').hasClass('ie10') !== true)){
			console.log('B-102')
	}
// alert('テスト用アラート【横浜鶴見】／プライムクロス')



	//ConfigManagerからid取得―――――――――――――――――――――――――――――――――――
		var ConfigManager	 	= new MYNAMESPACE.model.ConfigManagerYokohama();
		var arrid = ConfigManager.getIdname();
		for (var i=0,len=arrid.length; i<len; i++) {
			arrid[i]['Selecter'].attr('id',arrid[i]['id']);
		}


	//ID付与(nameが被った場合、単にiを付与する方が処理が軽い)
			$('input,select').not('input[type="radio"],input[name="col_34"],select[name="col_33"],select[name="col_41"],select[name="col_42"]').each(function(i) {//ok
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
		// $('#RadioID_3').remove()
		$('#RadioID_3>td').attr('bgcolor','')

	//Radio,Checkをlabelで囲む。―――――――――――――――――――――――――――――――――――
		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		var wellithTd = $('#wellith').closest('td')
		wellithTd.closest('tr').attr('id','wellithTr')
		wellithTd.html($('<label>').addClass('labelClass').append(wellithTd.clone().html()))
		var wellithTdClone = wellithTd.clone()
		wellithTd.remove()
		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		var colHPOTHER = $('#col_HP_OTHER').clone()
		var formtable = $('form>table>tbody>tr>td>table')
		var tempradioNode = $('<div>')
		$('input[name="col_18"]').each(function(i){
			var gendertxt = $('<span>').html($(this).val() + ' ');
			var genderlabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(gendertxt)
			tempradioNode.append(genderlabelNode)
		})
		$('input[name="col_18"]').eq(0).closest('td').html('').addClass('labeltd').append(tempradioNode.html())
		$('input[type="radio"],input[type="checkbox"]').not('input[name="col_18"]').each(function(i){
			var radiotd = $(this).closest('td')
			var radiotxt = $('<span>').html(radiotd.text())
			var radiolabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(radiotxt)
			radiotd.html(radiolabelNode)
		})
		$('input[type="radio"]').not('input[name="col_18"]').closest('table').closest('td').addClass('labeltd')

		$('input[name="col_HP"]:last').closest('label').after(colHPOTHER)
	//同意文
		// var doibuncheck = formtable.eq(6).find('>tbody>tr:eq(1)>td').add(formtable.eq(7).find('>tbody>tr:eq(0)>td:eq(1)')).add(formtable.eq(7).find('>tbody>tr:eq(1)>td')).add(formtable.eq(7).find('>tbody>tr:eq(2)>td:eq(1)'))
		// doibuncheck.addClass('labeltd')

		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		$('#wellithTr').append(wellithTdClone)
		$('#wellithTr').closest('td').addClass('labeltd')
		//追加 入会のリンクを有効化―――――――――――――――――――――――――

	//フォーム依存――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//submit
		$('#task').closest('td').find('a').attr('onclick','')
		// $j('input[name="task"]').closest('td').click(function(){
		// 	$j('form').submit();
		// })
	//――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

	//a移動無効――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
		$('a[href=#]').click(function(e){//#に""はいらないのかどうか
			e.preventDefault();
		})
	//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//デフォルト記入例の削除―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
		$('#AutoAddressText2').closest('td').html($('#AutoAddressText2').closest('td').find('input'))
		$('#AutoAddressText3').closest('td').html($('#AutoAddressText3').closest('td').find('input'))
		$('#col_23').closest('td').html($('#col_23').closest('td').find('input'))
		$('#col_24').closest('td').html($('#col_24').closest('td').find('input'))

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
	/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
	// /*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)||($('html').hasClass('ie10') === true)){
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
	/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
			PlaceholderManager	 .placeholderForIE()
		}
		SubmitCheckManager.submitCheck()
		AutoAddressManager	 	.autoAddress()
		TimerSolutionManager	 	.timerSolutionKanaAndPlaceholder()
		TimerSolutionManager	 	.timerSolutionAddressAndPlaceholder()
		RemainingItemsManager 	.insertdiv()
		RemainingItemsManager 	.setEvent()

		MouseEventManager	 	.mouseEvent()

		if($jk('html').hasClass('ie') === true) {
				$jk('#float').exFixed();
		}










//convertYutorishia.js―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	} else if($('form>input[name="b_code"]').val() == 'B-30'){
	if(($('html').hasClass('ie') !== true)&&($('html').hasClass('ie10') !== true)){
			console.log('B-30')
	}
// alert('テスト用アラート【ユトリシア】／プライムクロス')

	//ConfigManagerからid取得―――――――――――――――――――――――――――――――――――
		var ConfigManager	 	= new MYNAMESPACE.model.ConfigManagerYutorishia();
		var arrid = ConfigManager.getIdname();
		for (var i=0,len=arrid.length; i<len; i++) {
			arrid[i]['Selecter'].attr('id',arrid[i]['id']);
		}


	//ID付与(nameが被った場合、単にiを付与する方が処理が軽い)
			$('input,select').not('input[type="radio"],input[name="col_34"],select[name="col_33"],select[name="col_41"],select[name="col_42"]').each(function(i) {//ok
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



	//iframe対策―――――――――――――――――――――――――――――――――――
	        if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
	                var iframeClone = $('#iframe1').clone()
	                $('#iframe1').remove()
	                $(window).load(function(){
	                        $('#formtdID>div:first>table:first>tbody>tr:eq(1)>td').append(iframeClone)
	                })
	        }
	//iframe対策 End ―――――――――――――――――――――――――――――――――――



	//事前コンバート―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//backgroundColorを削除―――――――――――――――――――――――――――――――――――
		$('#RadioID_3>td').attr('bgcolor','')

	//Radio,Checkをlabelで囲む。―――――――――――――――――――――――――――――――――――
		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		var wellithTd = $('#wellith').closest('td')
		wellithTd.closest('tr').attr('id','wellithTr')
		wellithTd.html($('<label>').addClass('labelClass').append(wellithTd.clone().html()))
		var wellithTdClone = wellithTd.clone()
		wellithTd.remove()
		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		var colHPOTHER = $('#col_HP_OTHER').clone()
		var formtable = $('form>table>tbody>tr>td>table')
		var tempradioNode = $('<div>')
		$('input[name="col_18"]').each(function(i){
			var gendertxt = $('<span>').html($(this).val() + ' ');
			var genderlabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(gendertxt)
			tempradioNode.append(genderlabelNode)
		})
		$('input[name="col_18"]').eq(0).closest('td').html('').addClass('labeltd').append(tempradioNode.html())
		$('input[type="radio"],input[type="checkbox"]').not('input[name="col_18"]').each(function(i){
			var radiotd = $(this).closest('td')
			var radiotxt = $('<span>').html(radiotd.text())
			var radiolabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(radiotxt)
			radiotd.html(radiolabelNode)
		})
		$('input[type="radio"]').not('input[name="col_18"]').closest('table').closest('td').addClass('labeltd')

		$('input[name="col_HP"]:last').closest('label').after(colHPOTHER)
	//同意文
		// var doibuncheck = formtable.eq(6).find('>tbody>tr:eq(1)>td').add(formtable.eq(7).find('>tbody>tr:eq(0)>td:eq(1)')).add(formtable.eq(7).find('>tbody>tr:eq(1)>td')).add(formtable.eq(7).find('>tbody>tr:eq(2)>td:eq(1)'))
		// doibuncheck.addClass('labeltd')

		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		$('#wellithTr').append(wellithTdClone)
		$('#wellithTr').closest('td').addClass('labeltd')
		//追加 入会のリンクを有効化―――――――――――――――――――――――――

	//フォーム依存――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//submit
		$('#task').closest('td').find('a').attr('onclick','')
		// $j('input[name="task"]').closest('td').click(function(){
		// 	$j('form').submit();
		// })
	//――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

	//a移動無効――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
		$('a[href=#]').click(function(e){//#に""はいらないのかどうか
			e.preventDefault();
		})
	//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//デフォルト記入例の削除―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
		$('#AutoAddressText2').closest('td').html($('#AutoAddressText2').closest('td').find('input'))
		$('#AutoAddressText3').closest('td').html($('#AutoAddressText3').closest('td').find('input'))
		$('#col_23').closest('td').html($('#col_23').closest('td').find('input'))
		$('#col_24').closest('td').html($('#col_24').closest('td').find('input'))

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
	/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
	// /*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)||($('html').hasClass('ie10') === true)){
			var AutoAddressManager	 	= new MYNAMESPACE.view.AutoAddressManagerForIE();
		} else if($('html').hasClass('ie10') === true){
			var AutoAddressManager	 	= new MYNAMESPACE.view.AutoAddressManagerForIE10();
		} else {
			var AutoAddressManager	 	= new MYNAMESPACE.view.AutoAddressManager();
		}
		var TimerSolutionManager	= new MYNAMESPACE.view.TimerSolutionManager();
		var MouseEventManager	 	= new MYNAMESPACE.view.MouseEventManager();

		var Mediator	 			= new MYNAMESPACE.view.Mediator(RemainingItemsManager,RealtimeCheckManager,TimerSolutionManager,AutoAddressManager);

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
	/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
			PlaceholderManager	 .placeholderForIE()
		}
		SubmitCheckManager.submitCheck()
		AutoAddressManager	 	.autoAddress()
	/*new*/	if($('html').hasClass('ie10') === true){
			// こちらはtrigger実行型のため不要TimerSolutionManager	 	.timerSolutionAddressAndPlaceholderForIE10()
		} else {
			TimerSolutionManager	 	.timerSolutionAddressAndPlaceholder()
		}
		TimerSolutionManager	 	.timerSolutionKanaAndPlaceholder()
		RemainingItemsManager 	.insertdiv()
		RemainingItemsManager 	.setEvent()

		MouseEventManager	 	.mouseEvent()

		if($jk('html').hasClass('ie') === true) {
				$jk('#float').exFixed();
		}












//convert.js―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	} else {
	if(($('html').hasClass('ie') !== true)&&($('html').hasClass('ie10') !== true)){
			console.log('B-else')
	}
// alert('テスト用アラート【通常】／プライムクロス')

	//ConfigManagerからid取得―――――――――――――――――――――――――――――――――――
		var ConfigManager	 	= new MYNAMESPACE.model.ConfigManager();
		var arrid = ConfigManager.getIdname();
		for (var i=0,len=arrid.length; i<len; i++) {
			arrid[i]['Selecter'].attr('id',arrid[i]['id']);
		}


	//ID付与(nameが被った場合、単にiを付与する方が処理が軽い)
			$('input,select').not('input[type="radio"],input[name="col_34"],select[name="col_33"],select[name="col_41"],select[name="col_42"]').each(function(i) {//ok
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
		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		var wellithTd = $('#wellith').closest('td')
		wellithTd.closest('tr').attr('id','wellithTr')
		wellithTd.html($('<label>').addClass('labelClass').append(wellithTd.clone().html()))
		var wellithTdClone = wellithTd.clone()
		wellithTd.remove()
		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		var colHPOTHER = $('#col_HP_OTHER').clone()
		var formtable = $('form>table>tbody>tr>td>table')
		var tempradioNode = $('<div>')
		$('input[name="col_18"]').each(function(i){
			var gendertxt = $('<span>').html($(this).val() + ' ');
			var genderlabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(gendertxt)
			tempradioNode.append(genderlabelNode)
		})
		$('input[name="col_18"]').eq(0).closest('td').html('').addClass('labeltd').append(tempradioNode.html())
		$('input[type="radio"],input[type="checkbox"]').not('input[name="col_18"]').each(function(i){
			var radiotd = $(this).closest('td')
			var radiotxt = $('<span>').html(radiotd.text())
			var radiolabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(radiotxt)
			radiotd.html(radiolabelNode)
		})
		$('input[type="radio"]').not('input[name="col_18"]').closest('table').closest('td').addClass('labeltd')

		$('input[name="col_HP"]:last').closest('label').after(colHPOTHER)
	//同意文
		// var doibuncheck = formtable.eq(6).find('>tbody>tr:eq(1)>td').add(formtable.eq(7).find('>tbody>tr:eq(0)>td:eq(1)')).add(formtable.eq(7).find('>tbody>tr:eq(1)>td')).add(formtable.eq(7).find('>tbody>tr:eq(2)>td:eq(1)'))
		// doibuncheck.addClass('labeltd')

		//追加 入会のリンクを有効化―――――――――――――――――――――――――
		$('#wellithTr').append(wellithTdClone)
		$('#wellithTr').closest('td').addClass('labeltd')
		//追加 入会のリンクを有効化―――――――――――――――――――――――――

	//フォーム依存――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//submit
		$('#task').closest('td').find('a').attr('onclick','')
		// $j('input[name="task"]').closest('td').click(function(){
		// 	$j('form').submit();
		// })
	//――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//a移動無効――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
		$('a[href=#]').click(function(e){//#に""はいらないのかどうか
			e.preventDefault();
		})
	//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	//デフォルト記入例の削除―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
		$('#AutoAddressText2').closest('td').html($('#AutoAddressText2').closest('td').find('input'))
		$('#AutoAddressText3').closest('td').html($('#AutoAddressText3').closest('td').find('input'))
		$('#col_23').closest('td').html($('#col_23').closest('td').find('input'))
		$('#col_24').closest('td').html($('#col_24').closest('td').find('input'))

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
	/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
	// /*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)||($('html').hasClass('ie10') === true)){
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
	/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
			PlaceholderManager	 .placeholderForIE()
		}
		SubmitCheckManager.submitCheck()
		AutoAddressManager	 	.autoAddress()
		TimerSolutionManager	 	.timerSolutionKanaAndPlaceholder()
		TimerSolutionManager	 	.timerSolutionAddressAndPlaceholder()
		RemainingItemsManager 	.insertdiv()
		RemainingItemsManager 	.setEvent()

		MouseEventManager	 	.mouseEvent()

		if($jk('html').hasClass('ie') === true) {
				$jk('#float').exFixed();
		}
	}
});