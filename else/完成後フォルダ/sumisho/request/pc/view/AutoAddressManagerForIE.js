

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.AutoAddressManagerForIE');
	MYNAMESPACE.view.AutoAddressManagerForIE = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.AutoAddressManagerForIE.prototype = {
		_instances			: {}
		,_classNum			: -1
		,_currentIndex			: -1
		,_AutoAddressIdObj	: {}

		,initialize: function() {//初期設定的な
			var thisObj = this;
			this._instances = {//
			}
			_.bindAll(
				this
				,'getAutoAddressId'
				,'autoAddress'
			);
		}
		,getAutoAddressId: function(AutoAddressIdObj) {//初期設定的な
			var thisObj = this;
			thisObj._AutoAddressIdObj = AutoAddressIdObj
		}
		,autoAddress: function() {
			var thisObj = this;

			thisObj._AddressNumlength = 4
			thisObj._AddressNumInput = $('#'+thisObj._AutoAddressIdObj['Num2'])
			thisObj._AddressNumInput3 = $('#'+thisObj._AutoAddressIdObj['Num1'])
			$('form')
				.on('keyup', '#'+thisObj._AutoAddressIdObj['Num1'], function(event) {
				var countval3 = thisObj._AddressNumInput3.val().replace('-', '').replace('－', '').replace(/[Ａ-Ｚａ-ｚ０-９]/g);
				var count3 = countval3.length;
						if(count3 == 3){
							thisObj._AddressNumInput3.val(countval3)
							// thisObj._AddressNumInput.focus();
							$('#'+thisObj._AutoAddressIdObj['Num2']).focus();
						};
					})
			$('form')
				.on('keyup', '#'+thisObj._AutoAddressIdObj['Num2'], function(event) {
				var countval = thisObj._AddressNumInput.val().replace('-', '').replace('－', '').replace(/[Ａ-Ｚａ-ｚ０-９]/g);
				var count = countval.length;
						if(count == 4){
							thisObj._AddressNumInput.val(countval)
							// thisObj._AddressNumInput.focus();
							$('#'+thisObj._AutoAddressIdObj['Txt1']).focus();
						};
					})













			
// 			var AutoAddressNumNode = null;
// 			var AutoAddressCount = null;
// 			var AutoAddressNumName = null;
// 			if($('#'+thisObj._AutoAddressIdObj['Num2']).length !== 0){
// 				AutoAddressNumNode = $('#'+thisObj._AutoAddressIdObj['Num2'])
// 				AutoAddressCount = 4;
// 				AutoAddressNumName = 'AutoAddressNum2';
// 				$('form')
// 					.on('keyup', '#'+thisObj._AutoAddressIdObj['Num1'], function(event) {
// 						if($('#'+thisObj._AutoAddressIdObj['Num1']).val().replace('-', '').replace('－', '').length == 3){
// 							AutoAddressNumNode.focus();
// 						};
// 					})
// 			} else {
// 				AutoAddressNumNode = $('#'+thisObj._AutoAddressIdObj['Num1'])
// 				AutoAddressCount = 7;
// 				AutoAddressNumName = '';
// 			}

// //Ajaxzip3、ieの場合はidで動作を確認。
// 			AutoAddressNumNode
// 				.on('keyup', function(event) {
// 					var countval = AutoAddressNumNode.val().replace('-', '').replace('－', '').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
// 					var count = countval.length;
// 					if(count == AutoAddressCount){
// 						AutoAddressNumNode.val(countval)//replaceした値を挿入

// 						if($('#'+thisObj._AutoAddressIdObj['Txt1']).length !== 0){
// 							if($('#'+thisObj._AutoAddressIdObj['Txt2']).length !== 0){
// 								if($('#'+thisObj._AutoAddressIdObj['Txt3']).length !== 0){
// 									AjaxZip3.zip2addr('AutoAddressNum1',AutoAddressNumName,'AutoAddressText1','AutoAddressText2','','AutoAddressText3');
// 								} else {
// 									AjaxZip3.zip2addr('AutoAddressNum1',AutoAddressNumName,'AutoAddressText1','AutoAddressText2');
// 								}
// 							} else {
// 								AjaxZip3.zip2addr('AutoAddressNum1',AutoAddressNumName,'AutoAddressText1','AutoAddressText1');
// 							}
// 						} else {

// 						}
// 					}
// 				})
// 				// .on('keyup　change', function(event) {
// 				// })

		}
	}
});