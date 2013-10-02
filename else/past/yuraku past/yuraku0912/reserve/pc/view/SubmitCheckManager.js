

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
		,_SubmitCommentObj 		:{}
		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'getSubmitComment'
				,'submitCheck'
			);

			this._instances = {//
			}
		}
		,getSubmitComment: function(SubmitCommentObj) {//初期設定的な
			var thisObj = this;
			thisObj._SubmitCommentObj = SubmitCommentObj
		}
		,submitCheck: function() {
			var thisObj = this;
			$j('#task').closest('td').click(function(){
			// $j("form").submit(function() {//細かく対応。
						if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){//placeholderの値削除(IE)
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
// alert('チェック用アラート：true start')
							// for (var i=0,len=arr.length; i<len; i++) {
							// 	$j('#' + arr[i]['afterid']).attr('id',arr[i]['beforeid']);
							// }
		/*修正*/				if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
		/*check*/       		$(window).off('beforeunload');//$jはNG
							}
/*>>>>>>>>> Check Point*/
// $('input,select').each(function(){
// 	alert($(this).attr('name'))
// })
// return;
//―――――――――――――――――――――――――
// alert('チェック用アラート：true end')

							my_submit('confirm');
							// $('form').submit();
    // document.register.submit_type.value = 'confirm';
    // document.register.action = "index.html";
    // document.register.submit();

						} else {//エラーあり
// alert('チェック用アラート：false start')
							// $('div.formError.userformError.form_form1.absolute').hide();
							// var ddElem = $('.error-message:eq(0)').closest('dd');
							// var index = ddElem.parent('dl').children().index(ddElem);
							// var dtElem = $(ddElem.parent('dl').children().get(index - 1));
//for yuraku　↓―――――――――――――――――――――――――――――――――――
							var FirstBlank = $j('form .blank').eq(0)
							if(FirstBlank.val().length != 0){
								alert(thisObj._SubmitCommentObj[FirstBlank.attr('id')]+'の入力が間違っています')
							} else {
								if(FirstBlank.attr('id') == 'RadioID_3'){
									alert('送信するには個人情報保護規約への同意が必要となります')
								} else if(FirstBlank.attr('id') == 'RadioID_4'){
									alert('「クラブオーベル個人情報保護規約への同意」がされていません')
								} else if(FirstBlank[0].nodeName == 'INPUT'){
									alert(thisObj._SubmitCommentObj[FirstBlank.attr('id')]+'が入力されていません')
								} else if(FirstBlank[0].nodeName == 'SELECT'){//select
									alert(thisObj._SubmitCommentObj[FirstBlank.attr('id')]+'が選択されていません')
								} else {
									if(FirstBlank.is(':has(input[type="radio"])') === true){
										alert(thisObj._SubmitCommentObj[FirstBlank.attr('id')]+'が選択されていません')
									} else if(FirstBlank.is(':has(input[type="checkbox"])') === true){
										alert(thisObj._SubmitCommentObj[FirstBlank.attr('id')]+'がチェックされていません')
									}
								}
							}
//for yuraku　↑―――――――――――――――――――――――――――――――――――
							if($('html').hasClass('ie') === true){//placeholderの値削除(IE)
								var targetY = $j('form .blank').eq(0).offset().top - 100;
								$j('body,html').animate({scrollTop: targetY}, 0);
								$j('form .blank').eq(0).blur();
								$('input:not(input[type="radio"])').blur()
							} else {
								var targetY = $('form .blank').eq(0).offset().top - 100;
								$j('form .blank').eq(0).blur();
								$('body,html').animate({scrollTop: targetY}, 200);
							}
// alert('チェック用アラート：false end')
							return false;
						}
					})
		}
	}
});