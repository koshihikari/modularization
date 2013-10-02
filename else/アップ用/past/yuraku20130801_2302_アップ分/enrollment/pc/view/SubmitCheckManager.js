

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.SubmitCheckManager');
	MYNAMESPACE.view.SubmitCheckManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.SubmitCheckManager.prototype = {
		 _Num_Name1				: null
		,_Num_Name2				: null
		,_Text_Name1			: null
		,_Text_Name2			: null
		,_Text_Name3			: null
		,_Name2					: ''
		,_Name4					: ''
		,_isCorrect				: true
		,_AddressNumInput		: null
		,_AddressNumlength		: null
		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'submitCheck'
			);

			this._instances = {//
			}
		}
		,submitCheck: function() {
			var thisObj = this;
				$j("form")
				// 	// .on('click', $('#task').closest('td'),function(event){
				// 	// 	alert()
				// 	// })
					.submit(function() {//細かく対応。
						if($('html').hasClass('ie') === true){//placeholderの値削除(IE)
							$j('input').each(function(){
								if($j(this).attr('placeholder') !== undefined){
									var val = $j(this).val();
									var placeholder = $j(this).attr('placeholder');
									if(val == placeholder){
										$j(this).val('');
									}
								}
							})
						}
						var isCorrect = true;
						if($j('.blank').length == 0){//submit エラーなし対応
							// for (var i=0,len=arr.length; i<len; i++) {
							// 	$j('#' + arr[i]['afterid']).attr('id',arr[i]['beforeid']);
							// }
		/*修正*/				if($('html').hasClass('ie') === true){
		/*check*/       		$(window).off('beforeunload');
							}
						} else {//エラーあり
							// $('div.formError.userformError.form_form1.absolute').hide();
							// var ddElem = $('.error-message:eq(0)').closest('dd');
							// var index = ddElem.parent('dl').children().index(ddElem);
							// var dtElem = $(ddElem.parent('dl').children().get(index - 1));
							if($('html').hasClass('ie') === true){//placeholderの値削除(IE)
								var targetY = $('form .blank').eq(0).offset().top - 100;
								$('html,body').animate({scrollTop: targetY}, 0);
								$j('form .blank').eq(0).blur();
								$('input:not(input[type="radio"])').blur()
							} else {
								var targetY = $('form .blank').eq(0).offset().top - 100;
								$j('form .blank').eq(0).blur();
								$('html,body').animate({scrollTop: targetY}, 200);
							}
							return false;
						}
					})
		}
	}
});