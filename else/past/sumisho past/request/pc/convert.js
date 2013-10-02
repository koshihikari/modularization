//目次
//ブラウザ判定、body,formのid,class付与
//ConfigManagerからid取得
//ID付与（IDがない場合）(nameが被った場合、単にiを付与する方が処理が軽い)
//事前コンバート
//ConfigManagerからclass取得
//ConfigManagerからvalidation取得
//new
//action

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

//ConfigManagerからid取得（書き換え）―――――――――――――――――――――――――――――――――――
	var ConfigManager	 	= new MYNAMESPACE.model.ConfigManager();
	var arrid = ConfigManager.getIdname();
	for (var i=0,len=arrid.length; i<len; i++) {
		arrid[i]['Selecter'].attr('id',arrid[i]['id']);
	}


//ID付与(nameが被った場合、単にiを付与する方が処理が軽い)
		var inputSelectSelectior = $('input,select').not('input[type="radio"],input[name="col_34"],select[name="col_33"],select[name="col_41"],select[name="col_42"]')
		inputSelectSelectior.each(function(i) {//ok
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
//id
	$('#frmRegist>table:eq(1)>tbody').attr('id','tbodyID')
	$('img[name="btnConfirm"]').attr('id','submitID')
	$('#frmRegist>table:eq(0)>tbody>tr>td:eq(1)').attr('id','privacyID')

//Radio,Checkをlabelで囲む。―――――――――――――――――――――――――――――――――――
	var inputcheck = $('input[type="checkbox"]').not(':first')
	for (var i=0,len=inputcheck.length; i<len; i++) {
		var radiotd = inputcheck.eq(i).closest('td')
		var radiotxt = $('<span>').html(radiotd.text())
		var radiolabelNode = $('<label>').addClass('labelClass').append(inputcheck.eq(i).clone()).append(radiotxt)
		radiotd.html(radiolabelNode)
	}
	var RadioGender = $('#tbodyID>tr:eq(0)').children('td:nth-child(4)')
	$('#tbodyID>tr').filter(':eq(11),:eq(17)').children('td:nth-child(2)')
		.add(RadioGender)
		.add($('#tbodyID>tr:eq(12)').children('td'))
		.addClass('labeltd')

	var tempradioNode = $('<div>')
	var RadioGenderS = RadioGender.add($('#tbodyID>tr:last>td:eq(1)'))

	RadioGenderS.find('input').each(function(i){
		var gendertxt = null
		if($(this).val() == '0010'){
			gendertxt = $('<span>').text('男性 ');
		} else if($(this).val() == '0020'){
			gendertxt = $('<span>').text('女性 ');
		} else if($(this).val() == '01'){
			gendertxt = $('<span>').text('を同意して入会する ');
		} else if($(this).val() == '00'){
			gendertxt = $('<span>').text('入会しない ');
		}
		var genderlabelNode = $('<label>').addClass('labelClass').append($(this).clone())
		if($(this).next('a').length !== 0){
			genderlabelNode.append($(this).next('a'))
		}
/**/		genderlabelNode.append(gendertxt)
		if($(this).next('span').length !== 0){
			genderlabelNode.append($(this).next('span'))
		}
		tempradioNode.append(genderlabelNode)
	})
	RadioGenderS.eq(0).html('').append(tempradioNode.children(':first')).append(tempradioNode.children(':first'))
	RadioGenderS.eq(1).html('').append(tempradioNode.children(':first')).append(tempradioNode.children(':first'))

//デフォルト記入例の削除―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	var addressTr = $('#tbodyID>tr:eq(2)>td:eq(1)>table>tbody>tr')
	$('#txtFirstCode').closest('tr').children('td').eq(2).text('(半角数字)')
	$('#txtCity,#txtDistrict,#txtAddress,#txtBuilding,#txtMailPC,#txtMailMobile').each(function(){
		var tempDivNode = $('<div>')
		var thisnext = $(this).next('span')
		var closestTd = $(this).closest('td')
		tempDivNode.append($(this)).append(thisnext)
		var zenhankaku = null
		switch($(this).attr('id')) {
			case 'txtCity':
			case 'txtDistrict':
			case 'txtAddress':
			case 'txtBuilding':
				zenhankaku = '（全角）'
				break;
			case 'txtMailPC':
			case 'txtMailMobile':
				zenhankaku = '（半角英数字）'
				break;
		}
		closestTd.html(tempDivNode.html()).append($('<span>').addClass('NT_zenkaku').text(zenhankaku))
	})
	var closestTd = $('#txtMobilePhone1').closest('td')
	var tempPhoneNode = $('<div>')
							.append($('#txtMobilePhone1'))
							.append($('<span>').addClass('NT_hifun').text('-'))
							.append($('#txtMobilePhone2'))
							.append($('<span>').addClass('NT_hifun').text('-'))
							.append($('#txtMobilePhone3'))
							.append($('<span>').addClass('NT_zenkaku').text('（半角数字）'))
	closestTd.html(tempPhoneNode.html())

//onアトリビュートの削除
	$('#submitID').attr('onclick','')//SubmitCheckManagerで実行
	// $('#txtCity').attr('onblur','')//AutoEmManagerで実行
	// $('#txtDistrict').attr('onblur','')//AutoEmManagerで実行
	// $('#txtAddress').attr('onblur','')//AutoEmManagerで実行
	// $('#txtBuilding').attr('onblur','')//AutoEmManagerで実行


	var privacyTdClone = $('#privacyID').html()
	$('#privacyID').html($('<label>').addClass('labelClass').append(privacyTdClone))


//事前コンバートここまで―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――


//ConfigManagerからclass取得―――――――――――――――――――――――――――――――――――
	$(ConfigManager).on('onSetClassname', function(event) {
		var arr = ConfigManager.getClassname();
		for (var i=0,len=arr.length; i<len; i++) {
			arr[i]['Selecter'].addClass(arr[i]['classname']);
		}
	})
	ConfigManager.SetClassname();


//validation
	var ExValidationObj = ConfigManager.getValidation();

$('input').not('[type="radio"]').each(function(){
	console.log($(this).attr('id'))
})

//new――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

	var FocusEventManager	 	= new MYNAMESPACE.view.FocusEventManager();
	var AutoEmManager		 	= new MYNAMESPACE.view.AutoEmManager();

	var RemainingItemsManager 	= new MYNAMESPACE.view.RemainingItemsManager();
	var RealtimeCheckManager 	= new MYNAMESPACE.view.RealtimeCheckManager(ExValidationObj);
	var SubmitCheckManager 		= new MYNAMESPACE.view.SubmitCheckManager();
	var PlaceholderManager	 	= new MYNAMESPACE.view.PlaceholderManager();
/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
		var AutoAddressManager	 	= new MYNAMESPACE.view.AutoAddressManagerForIE();
	} else {
		var AutoAddressManager	 	= new MYNAMESPACE.view.AutoAddressManager();
	}
	var TimerSolutionManager	= new MYNAMESPACE.view.TimerSolutionManager();
	var MouseEventManager	 	= new MYNAMESPACE.view.MouseEventManager();

	var Mediator	 			= new MYNAMESPACE.view.Mediator(RemainingItemsManager,RealtimeCheckManager,TimerSolutionManager,SubmitCheckManager,ConfigManager);

//ConfigManagerからSubmit時のエラーコメント取得―――――――――――――――――――――――――――――――――――
	$(ConfigManager).on('onSetSubmitComment', function(event) {
		var SubmitCommentObj = ConfigManager.getSubmitComment();
		SubmitCheckManager.getSubmitComment(SubmitCommentObj)
	})
	ConfigManager.setSubmitComment();

//ConfigManagerからAutoAddress ID取得―――――――――――――――――――――――――――――――――――
	$(ConfigManager).on('onSetAutoAddressId', function(event) {
		var AutoAddressIdObj = ConfigManager.getAutoAddressId();
		AutoAddressManager.getAutoAddressId(AutoAddressIdObj)
	})
	ConfigManager.setAutoAddressId();

//action――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

	Mediator			 		.setEvent()

	FocusEventManager	 		.focusEvent()
	AutoEmManager		 		.autoEm()

	RealtimeCheckManager.realtimeCheck()
	PlaceholderManager	 	.placeholder()
/*new*/	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
		PlaceholderManager	 .placeholderForIE()
	}
	SubmitCheckManager.submitCheck()
	AutoAddressManager	 	.autoAddress()
	TimerSolutionManager	.timerSolutionKanaAndPlaceholder()
	TimerSolutionManager	.timerSolutionAddressAndPlaceholder()
	RemainingItemsManager 	.insertdiv()
	RemainingItemsManager 	.setEvent()

	MouseEventManager	 	.mouseEvent()

	if($jk('html').hasClass('ie') === true) {
			$jk('#float').exFixed();
	}
});