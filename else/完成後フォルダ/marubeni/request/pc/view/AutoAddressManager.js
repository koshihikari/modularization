

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
		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'autoAddress'
				,'ajaxZip3Action'
				,'changeNameAddressNum'
				,'changeNameAddressText'
				,'realTimeCheck'
				,'returnName'
				,'ajaxZip3zip2addrAction'
			);
			this._instances = {//
			}
			this._Num_Name1 = $('.AutoAddressNum1').attr('name')
			this._Num_Name2 = $('.AutoAddressNum2').attr('name')
			this._Text_Name1 = $('.AutoAddressText1').attr('name')
			this._Text_Name2 = $('.AutoAddressText2').attr('name')
			this._Text_Name3 = $('.AutoAddressText3').attr('name')
		}
		,autoAddress: function() {
			var thisObj = this;
console.log($('.AutoAddressText1').attr('name'))
			if($('.AutoAddressNum2').length === 0){
				thisObj._AddressNumlength = 7
				thisObj._AddressNumInput = $('.AutoAddressNum1')
			} else {
				thisObj._AddressNumlength = 4
				thisObj._AddressNumInput = $('.AutoAddressNum2')

			//次のフォームへ移る
				// $('form.NT_mainForm')
				// 	.on('keyup', '.AutoAddressNum1', function(event) {
				// 		if($('.AutoAddressNum1').val().length == 3){
				// 			$('.AutoAddressNum2').focus();
				// 		};
				// 	})
			}
			thisObj._AddressNumInput
				.on('keyup change', function(event) {
					if(thisObj._AddressNumInput.val().length == thisObj._AddressNumlength){
						var countval = thisObj._AddressNumInput.val().replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
						thisObj._AddressNumInput.val(countval)
						thisObj.ajaxZip3Action();
					}
				})

			// $('#loadBtnApp').click(function(){
			// 	thisObj.ajaxZip3Action();
			// 	return false;
			// })

		}
		,ajaxZip3Action: function() {
			var thisObj = this;

				thisObj.changeNameAddressNum();//NT_name1、2を確定させるアクション
				thisObj.changeNameAddressText();//NT_name3,4,5を確定させるアクション
				thisObj.ajaxZip3zip2addrAction();
/*カスタマイズ*/		thisObj.realTimeCheck();//飛ばされた項目をblurする。
				thisObj.returnName();//NT_name1,2を戻すアクション
		}
		,changeNameAddressNum: function() {
			var thisObj = this;
			if($('.AutoAddressNum1').length !== 0){
				// thisObj._Num_Name1 = $('.AutoAddressNum1').attr('name')
				$('.AutoAddressNum1').attr('name','NT_name1')
				if($('.AutoAddressNum2').length !== 0){
					// thisObj._Num_Name2 = $('.AutoAddressNum2').attr('name')
					$('.AutoAddressNum2').attr('name','NT_name2')
					thisObj._Name2 = 'NT_name2'
				} else {
					thisObj._Name2 = ''
				}
			} else {
				alert('class=AutoAddressNum1を設定してください。')
			}
		}
		,changeNameAddressText: function() {
			var thisObj = this;
			if($('.AutoAddressText1').length !== 0){//true
				$('.AutoAddressText1').attr('name','NT_name3')
				if($('.AutoAddressText2').length !== 0){//true
					$('.AutoAddressText2').attr('name','NT_name4')
					thisObj._Name4 = 'NT_name4'
					if($('.AutoAddressText3').length !== 0){//false
						thisObj._isCorrect = false;
						$('.AutoAddressText3').attr('name','NT_name5')
					}
				} else {
console.log(1)
					thisObj._Name4 = 'NT_name3'
				}
			} else {
				alert('class=AutoAddressText1を設定してください。')
			}
		}
		,realTimeCheck: function() {
			var thisObj = this;
			$('.AutoAddressText1,.AutoAddressText2,.AutoAddressText3').blur()
		}
		,returnName: function() {
			var thisObj = this;
			var arr =	[
							 {'class':'AutoAddressNum1' ,	'name':thisObj._Num_Name1	}
							,{'class':'AutoAddressNum2' ,	'name':thisObj._Num_Name2	}
							,{'class':'AutoAddressText1' ,	'name':thisObj._Text_Name1	}
							,{'class':'AutoAddressText2' ,	'name':thisObj._Text_Name2	}
							,{'class':'AutoAddressText3' ,	'name':thisObj._Text_Name3	}
						]
			for (var i=0,len=arr.length; i<len; i++) {
				$('.' + arr[i]['class']).attr('name',arr[i]['name']);
			}
		}
		,ajaxZip3zip2addrAction: function() {
			var thisObj = this;
			if(thisObj._isCorrect === true){
console.log('2/'+thisObj._Name4+','+$('.AutoAddressText1').attr('name'))
				AjaxZip3.zip2addr('NT_name1',thisObj._Name2,'NT_name3',thisObj._Name4);//県・市区町村
console.log('end')
				// AjaxZip3.zip2addr('NT_name1',thisObj._Name2,'NT_name3',thisObj._Name4);//県・市区町村
			} else if (thisObj._isCorrect === false){
				AjaxZip3.zip2addr('NT_name1',thisObj._Name2,'NT_name3','NT_name4','','NT_name5');//県・市区・町村
			}
		}
	}
});