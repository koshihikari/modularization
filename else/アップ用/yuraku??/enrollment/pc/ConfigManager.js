

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('model.ConfigManager');
	MYNAMESPACE.model.ConfigManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.model.ConfigManager.prototype = {
		 _instances			: {}
		 ,_classname		: []
		 ,_idname			: []
		 ,_Validation		: {}
		 ,_SubmitCommentObj	: {}
		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'SetIdname'
				,'SetClassname'
				,'SetValidation'
				,'setSubmitComment'
				,'getIdname'
				,'getClassname'
				,'getValidation'
				,'getSubmitComment'
			);
			this._instances = {
			}
			this.SetIdname();
			// this.SetClassname();
			this.SetValidation();
		}

/*――――――――――――――*/
/*Settings Start*/
/*――――――――――――――*/
		,SetIdname: function() {
			var thisObj = this;

				thisObj._idname =	[
					 // {'Selecter'	: $('input[name="col_14"]') 			,'id': 'AutoAddressNum1'}
					//  {'Selecter'	: $('input[name="col_4"]')				,'id': 'kanaEx_firstName'}
					// ,{'Selecter'	: $('input[name="col_5"]')				,'id': 'kanaEx_lastName'}
					// ,{'Selecter'	: $('input[name="col_14"]')				,'id': 'kanaEx_firstNameKatakana'}
					// ,{'Selecter'	: $('input[name="col_15"]')				,'id': 'kanaEx_lastNameKatakana'}
					 {'Selecter'	: $('input[name="col_19[]"]').eq(0) 	,'id': 'AutoAddressNum1'}
					,{'Selecter'	: $('input[name="col_19[]"]').eq(1) 	,'id': 'AutoAddressNum2'}
					// ,{'Selecter'	: $('input[name="col_21"]') 			,'id': 'AutoAddressText1'}
					,{'Selecter'	: $('select[name="col_12"]') 			,'id': 'AutoAddressText1'}
					,{'Selecter'	: $('input[name="col_21"]') 			,'id': 'AutoAddressText2'}
					,{'Selecter'	: $('input[name="col_22"]') 			,'id': 'AutoAddressText3'}
/*td*/				,{'Selecter'	: $('.form_table>tbody>tr>td:has(input[type="radio"]):eq(0)')		,'id': 'RadioID_1'}
/*td*/				,{'Selecter'	: $('.form_table>tbody>tr>td:has(input[type="radio"]):eq(1)')		,'id': 'RadioID_2'}
/*td*/				,{'Selecter'	: $('.form_table>tbody>tr>td:has(input[type="checkbox"]):eq(0)')		,'id': 'RadioID_3'}
/*td*/				,{'Selecter'	: $('.form_table>tbody>tr>td:has(input[type="checkbox"]):eq(1)')		,'id': 'RadioID_4'}
				]

			$(thisObj).trigger('onSetIdname');
		}
		,SetClassname: function() {
			var thisObj = this;
				var formtable = $('form>table>tbody>tr>td>table').addClass('formtable')
				thisObj._classname =	[
//Placeholder
					 {'Selecter'	: $('#col_4') 							,'classname': 'firstName'}
					,{'Selecter'	: $('#col_5') 							,'classname': 'lastName'}
					,{'Selecter'	: $('#col_14') 							,'classname': 'firstNameKatakana'}
					,{'Selecter'	: $('#col_15') 							,'classname': 'lastNameKatakana'}
					,{'Selecter'	: $('#AutoAddressNum1')					,'classname': 'Address_Num_1st'}
					,{'Selecter'	: $('#AutoAddressNum2')					,'classname': 'Address_Num_2nd'}
					,{'Selecter'	: $('#AutoAddressText1') 				,'classname': 'Address_text_1st'}
					,{'Selecter'	: $('#AutoAddressText2') 				,'classname': 'Address_text_2nd'}
					,{'Selecter'	: $('#AutoAddressText3') 				,'classname': 'Address_text_3rd'}
					,{'Selecter'	: $('#col_23') 							,'classname': 'Address_text_4th'}
					,{'Selecter'	: $('#col_24') 							,'classname': 'Address_HouseName'}
					,{'Selecter'	: $('#mailaddr') 						,'classname': 'Mail'}
					,{'Selecter'	: $('#col_13_t1')							,'classname': 'Tel3_1'}
					,{'Selecter'	: $('#col_13_t2')						,'classname': 'Tel3_2'}
					,{'Selecter'	: $('#col_13_t3')						,'classname': 'Tel3_3'}
					,{'Selecter'	: $('#col_16_y')							,'classname': 'BirthYear'}
					,{'Selecter'	: $('#col_16_m')						,'classname': 'BirthMonth'}
					,{'Selecter'	: $('#col_16_d')						,'classname': 'Birthdate'}
					,{'Selecter'	: $('#col_17') 							,'classname': 'Age'}
					,{'Selecter'	: $('#col_25') 							,'classname': 'Familiy_Num'}
					,{'Selecter'	: $('#col_35') 							,'classname': 'CompanyName'}

//カーソルフォーカス
					,{'Selecter'	: $('input').not('[type="radio"]') 		,'classname': 'CursorFocusEvent'}
//マウスオーバー
/*radiotext*/		,{'Selecter'	: $('.labelClass') 																	,'classname': 'MouseoverRadioEvent'}
// /*td*/				,{'Selecter'	: $('.form_table>tbody>tr>td:has(input,select)').not('td:has(input[type="radio"])')		,'classname': 'MouseoverEvent'}
// /*td*/				,{'Selecter'	: $('.form_table>tbody>tr>td:has(input,select)').not('td:has(input[type="radio"],input[type="checkbox"])')		,'classname': 'MouseoverEvent'}
/*td*/				,{'Selecter'	: $('.form_table>tbody>tr>td:has(input,select)')		,'classname': 'MouseoverEvent'}

//住所自動入力
					// ,{'Selecter'	: $('input[name="col_14"]') 			,'classname': 'AutoAddressNum1'}
					,{'Selecter'	: $('#AutoAddressNum1') 				,'classname': 'AutoAddressNum1'}
					,{'Selecter'	: $('#AutoAddressNum2') 				,'classname': 'AutoAddressNum2'}
					// ,{'Selecter'	: $('input[name="col_21"]') 			,'classname': 'AutoAddressText1'}
					,{'Selecter'	: $('#AutoAddressText1') 				,'classname': 'AutoAddressText1'}
					,{'Selecter'	: $('#AutoAddressText2') 				,'classname': 'AutoAddressText2'}
					,{'Selecter'	: $('#AutoAddressText3') 				,'classname': 'AutoAddressText3'}

//バリデーション　RealtimeCheckManager
/*radio,check以外のinput,select*/		,{'Selecter'	: $('input:not(input[type="radio"],input[type="checkbox"]),select') 	,'classname': 'ValidationTextInputAndSelect'}
/*radioのinput*/							,{'Selecter'	: $('input[type="radio"]') 												,'classname': 'ValidationRadioInput'}
/*radio未選択の際に色を付けたい場所*/		,{'Selecter'	: $('.form_table>tbody>tr>td:has(input[type="radio"])') 				,'classname': 'ValidationRadioTd'}
/*checkboxのinput*/						,{'Selecter'	: $('input[type="checkbox"]') 											,'classname': 'ValidationCheckboxInput'}
/*checkbox未選択の際に色を付けたい場所*/		,{'Selecter'	: $('.form_table>tbody>tr>td:has(input[type="checkbox"])') 				,'classname': 'ValidationCheckboxTd'}

//バリデーション　exvalidation Plugin
/*必須項目*/		,{'Selecter'	: $('input:not(input[type="radio"],input[type="checkbox"]),select') 			,'classname': 'ValidationTextInputAndSelect'}
/**/			,{'Selecter'	: $('input:not(input[type="radio"],input[type="checkbox"]),select') 			,'classname': 'ValidationTextInputAndSelect'}



				]

			$(thisObj).trigger('onSetClassname');
		}
		,SetValidation: function() {
			var thisObj = this;

	thisObj._Validation = 
					{//プロパティはコメントでも大丈夫
// 					 $('.ValidateClass').attr('id')	: "chkrequired"
/*					*/	 col_4				: "chkrequired"
/*					*/	,col_5				: "chkrequired"
/*					*/	,col_14				: "chkkatakana chkrequired"
/*					*/	,col_15				: "chkkatakana chkrequired"
/*					*/	,AutoAddressText2	: "chkrequired"
/*					*/	,AutoAddressText3	: "chkrequired"
/*					*/	,col_23				: "chkrequired"
/*					*/	,col_13_t1			: "chknumonly chkrequired chkmax4"
/*					*/	,col_13_t2			: "chknumonly chkrequired chkmax4"
/*					*/	,col_13_t3			: "chknumonly chkrequired chkmax4"
/*					*/	,col_16_y			: "chknumonly chkrequired chkyear"
/*					*/	,col_16_m			: "chknumonly chkrequired chkmonth"
/*					*/	,col_16_d			: "chknumonly chkrequired chkday"
/*					*/	,col_17				: "chknumonly chkrequired chkage"
/*					*/	,col_25				: "chknumonly chkrequired"
/*					*/	,mailaddr			: "chkemail chkhankaku chkrequired"
/*					*/	,AutoAddressNum1	: "chknumonly chkrequired chk3num"
/*					*/	,AutoAddressNum2	: "chknumonly chkrequired chk4num"
/*					*/	,AutoAddressText1	: "chkselect"
/*					*/	,col_29				: "chkselect"
/*					*/	,col_29_2			: "chkselect"
/*					*/	,col_28				: "chkselect"
/*					*/	,col_26				: "chkselect"
/*					*/	,col_26_2			: "chkselect"
/*					*/	,col_27				: "chkselect"
/*					*/	,col_30				: "chkselect"
					};


/*――――――――――――――*/
/*Settings end  */
/*――――――――――――――*/
			$(thisObj).trigger('onSetValidation');
		}
		,setSubmitComment: function() {
			var thisObj = this;
			thisObj._SubmitCommentObj = {  'mailaddr'			: 'メールアドレス'
										 , 'col_4'				: 'お名前(姓)'
										 , 'col_5'				: 'お名前(名)'
										 , 'col_14'				: 'フリガナ(セイ)'
										 , 'col_15'				: 'フリガナ(メイ)'
										 , 'col_16_y'			: '生年月日（年）'
										 , 'col_16_m'			: '生年月日（月）'
										 , 'col_16_d'			: '生年月日（日）'
										 , 'col_17'				: '年齢'
										 , ''					: '性別'
										 , 'AutoAddressNum1'	: 'ご住所(郵便番号)'
										 , 'AutoAddressNum2'	: 'ご住所(郵便番号)'
										 , 'AutoAddressText1'	: 'ご住所(都道府県)'
										 , 'AutoAddressText2'	: 'ご住所(市区)'
										 , 'AutoAddressText3'	: 'ご住所(町村)'
										 , 'col_23'				: 'ご住所(丁目・番地)'
										 , 'col_13_t1'			: '電話番号'
										 , 'col_13_t2'			: '電話番号'
										 , 'col_13_t3'			: '電話番号'
										 , 'col_25'				: 'ご家族数'
										 , ''					: '買替の有無'	
										 , 'col_26'				: '現在の居住形態'	
										 , 'col_27'				: 'ご希望の間取'
										 , 'col_28'				: 'ご希望の面積'
										 , 'col_29'				: 'ご予算'
										 , 'col_30'				: 'ご希望の地域（第１希望）'
										 , ''					: 'クラブオーベル会員規約への同意'
										 , ''					: 'クラブオーベルにおける個人情報のお取扱いについてへの同意'
										 , 'RadioID_1'			: '性別'
										 , 'RadioID_2'			: '買替の有無'
										 , 'RadioID_3'			: 'クラブオーベル会員規約への同意'
										 , 'RadioID_4'			: 'クラブオーベルにおける個人情報のお取扱いについてへの同意'
										}
			$(thisObj).trigger('onSetSubmitComment');
		}
		,getIdname : function() {
			var thisObj = this;
			return thisObj._idname;
		}
		,getClassname : function() {
			var thisObj = this;
			return thisObj._classname;
		}
		,getValidation : function() {
			var thisObj = this;
			return thisObj._Validation;
		}
		,getSubmitComment : function() {
			var thisObj = this;
			return thisObj._SubmitCommentObj;
		}
	}
});