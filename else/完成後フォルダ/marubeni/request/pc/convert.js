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
	$('#formRequest').addClass('NT_mainForm')

	var tokenVal = $('form.NT_mainForm').find('input[type="hidden"][name="token"]').val() !== undefined ? $('form.NT_mainForm').find('input[type="hidden"][name="token"]').val() : 'complete';
	$('body').addClass('pc');
	if($('body').attr('id') === undefined){//css point用
		$('body').attr('id','bodyID')
	}
	if($('form.NT_mainForm').attr('id') === undefined){//css point用
		$('form.NT_mainForm').attr('id','formID')
	}
//―――――――――――――――――――――――――――――――――――

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

//ConfigManagerからclass取得―――――――――――――――――――――――――――――――――――
	$(ConfigManager).on('onSetClassname', function(event) {
		var arr = ConfigManager.getClassname();
		for (var i=0,len=arr.length; i<len; i++) {
			arr[i]['Selecter'].addClass(arr[i]['classname']);
		}
	})
	ConfigManager.SetClassname();

//ConfigManagerからclass取得―――――――――――――――――――――――――――――――――――
//kanatext
	$(ConfigManager).on('onSetKana', function(event) {
		var arrKana = ConfigManager.getKana();
		$('form').startKanatext(arrKana)
	})
	ConfigManager.SetKana();

//validation
	var ExValidationObj = ConfigManager.getValidation();


//全てにチェックつける―――――――――――――――――――――――――
	$('#lavel3_1,#lavel3_2,#lavel3_3,#lavel3_4').attr('checked',true)
//―――――――――――――――――――――――――
	$('#formID>div.submitBtnArea>a').attr('id','NT_submit').removeAttr('href')
//new――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	var FocusEventManager	 	= new MYNAMESPACE.view.FocusEventManager();
	var AutoEmManager		 	= new MYNAMESPACE.view.AutoEmManager();

	var RemainingItemsManager 	= new MYNAMESPACE.view.RemainingItemsManager();
	var RealtimeCheckManager 	= new MYNAMESPACE.view.RealtimeCheckManager(ExValidationObj);
	var SubmitCheckManager 		= new MYNAMESPACE.view.SubmitCheckManager();
	var PlaceholderManager	 	= new MYNAMESPACE.view.PlaceholderManager();
	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
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

//丸紅―――――――――――――――――――――――――――――――――――
	$('#confirm_button').hide()
	$('<input>')
		.attr({'id':'confirm_button2','type':'image','src':'https://www.codeles.net/sato/else/img/button_marubeni.png'})
		.appendTo( $('#confirm_button').closest('li') )
		.click(function(){
			$j('form.NT_mainForm').submit()
		})
//―――――――――――――――――――――――――――――――――――

//action――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

	Mediator			 		.setEvent()

	FocusEventManager	 		.focusEvent()
	AutoEmManager		 		.autoEm()
	AutoEmManager		 		.saveLength()

	RealtimeCheckManager.realtimeCheck()
	PlaceholderManager	 	.placeholder()
	if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
		PlaceholderManager	 .placeholderForIE()
	}
	SubmitCheckManager.submitCheck()
	AutoAddressManager	 	.autoAddress()
	TimerSolutionManager	 	.timerSolutionKanaAndPlaceholder()
	TimerSolutionManager	 	.timerSolutionAddressAndPlaceholder()
	TimerSolutionManager	 	.sameMailRealtimeBlur()
	RemainingItemsManager 	.insertdiv()
	RemainingItemsManager 	.setEvent()

	MouseEventManager	 	.mouseEvent()

	if($jk('html').hasClass('ie') === true) {
		$jk('#float').exFixed();
	}


//チェックに応じてexvalidationを変えるが、バグる。HPのonclickを殺した方がいいかもしれない。
	// var mustTel = false;
	// var mustFax = false;
	// var mustMail = false;
	// var mustAddress = false;
	// $('form.NT_mainForm').on('click','#lavel3_1,#lavel3_2,#lavel3_3,#lavel3_4',function(){
	// 	if($('#lavel3_1:checked') === true){mustTel = true;}
	// 	if($('#lavel3_1:checked') === true){mustFax = true;}
	// 	if($('#lavel3_1:checked') === true){mustMail = true;}
	// 	if($('#lavel3_1:checked') === true){mustAddress = true;}
	// 	ConfigManager.ChangeValidation(mustTel,mustFax,mustMail,mustAddress);
	// 	$(ConfigManager).on('onChangeValidation',function(event){
	// 		ExValidationObj = ConfigManager.getValidation();
	// 		RealtimeCheckManager.realtimeCheck();
	// 	})
	// })

});