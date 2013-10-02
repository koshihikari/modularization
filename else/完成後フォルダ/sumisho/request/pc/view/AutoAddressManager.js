

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.AutoAddressManager');
	MYNAMESPACE.view.AutoAddressManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.AutoAddressManager.prototype = {
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
		,_AutoAddressIdObj	: {}
		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'getAutoAddressId'
				,'autoAddress'
			);

			this._instances = {//
			}
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
// 			thisObj._AddressNumInput
// 				.on('keyup change', function(event) {
// 					var count = countval.length;
// 					if(count == thisObj._AddressNumlength){
// 						thisObj._AddressNumInput.val(countval)
// 						// chkLastPostName(document.getElementById('txtFirstCode'),this);
// // thisObj.ajaxZip3Action();
// 					}
// 				})


			// $('#'+thisObj._AutoAddressIdObj['Txt1']).blur(function(){
			// 	var countval = $(this).val().replace('-', '').replace('－', '').replace(/[Ａ-Ｚａ-ｚ０-９]/g);
			// 	$(this).val(countval)
			// })












			
// 			if($('#'+thisObj._AutoAddressIdObj['Num2']).length === 0){
// 				thisObj._AddressNumlength = 7
// 				thisObj._AddressNumInput = $('#'+thisObj._AutoAddressIdObj['Num1'])
// 			} else {
// 				thisObj._AddressNumlength = 4
// 				thisObj._AddressNumInput = $('#'+thisObj._AutoAddressIdObj['Num2'])

// 			//次のフォームへ移る
// 				$('form')
// 					.on('keyup', '.AutoAddressNum1', function(event) {
// 						if($('#'+thisObj._AutoAddressIdObj['Num1']).val().replace('-', '').replace('－', '').length == 3){
// 							$('#'+thisObj._AutoAddressIdObj['Num2']).focus();
// 						};
// 					})
// 			}
// 			thisObj._AddressNumInput
// 				.on('keyup change', function(event) {
// 					var countval = thisObj._AddressNumInput.val().replace('-', '').replace('－', '').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
// 					var count = countval.length;
// 					if(count == thisObj._AddressNumlength){
// // thisObj.ajaxZip3Action();
// 					}
// 				})
		}
	}
});