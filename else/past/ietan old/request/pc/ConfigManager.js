

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
				// var formtable = $('form>table>tbody>tr>td>table:eq(1)>tbody>tr:eq(3)>td>table').addClass('formtable')

				thisObj._idname =	[
							 // {'Selecter'	: $('input[name="col_14"]') 			,'id': 'AutoAddressNum1'}
							//  {'Selecter'	: $('input[name="col_4"]')				,'id': 'kanaEx_firstName'}
							// ,{'Selecter'	: $('input[name="col_5"]')				,'id': 'kanaEx_lastName'}
							// ,{'Selecter'	: $('input[name="col_14"]')				,'id': 'kanaEx_firstNameKatakana'}
							// ,{'Selecter'	: $('input[name="col_15"]')				,'id': 'kanaEx_lastNameKatakana'}
					//  {'Selecter'	: $('input[name="col_19[]"]').eq(0) 	,'id': 'AutoAddressNum1'}
					// ,{'Selecter'	: $('input[name="col_19[]"]').eq(1) 	,'id': 'AutoAddressNum2'}
					// // ,{'Selecter'	: $('input[name="col_21"]') 			,'id': 'AutoAddressText1'}
					// ,{'Selecter'	: $('select[name="col_12"]') 			,'id': 'AutoAddressText1'}
					// ,{'Selecter'	: $('input[name="col_21"]') 			,'id': 'AutoAddressText2'}
					// ,{'Selecter'	: $('input[name="col_22"]') 			,'id': 'AutoAddressText3'}
//マウスオーバー
/*main*/			{'Selecter'	: $('table.formtable:eq(0)>tbody>tr>td:has(input[type="radio"]):eq(0)')		,'id': 'RadioID_1'}
/*main*/			,{'Selecter'	: $('table.formtable:eq(0)>tbody>tr>td:has(input[type="radio"]):eq(1)')		,'id': 'RadioID_2'}
/*個人情報*/			,{'Selecter'	: $('table.formtable:eq(3) tr:has(input,select)')							,'id': 'RadioID_3'}
/*ご入会**/			,{'Selecter'	: $('table.formtable:eq(4)>tbody>tr>td:has(input,select):eq(1)')		,'id': 'RadioID_4'}

				]

			$(thisObj).trigger('onSetIdname');
		}
		,SetClassname: function() {
			var thisObj = this;
				var formtable = $('form>table>tbody>tr>td>table:eq(1)>tbody>tr:eq(3)>td>table').addClass('formtable')
				thisObj._classname =	[
//Placeholder
					 {'Selecter'	: $('#user_nam1') 							,'classname': 'firstName'}
					,{'Selecter'	: $('#user_nam2') 							,'classname': 'lastName'}
					,{'Selecter'	: $('#user_kana1') 							,'classname': 'firstNameKatakana'}
					,{'Selecter'	: $('#user_kana2') 							,'classname': 'lastNameKatakana'}
					,{'Selecter'	: $('#user_zip1')					,'classname': 'Address_Num_1st'}
					,{'Selecter'	: $('#user_zip2')					,'classname': 'Address_Num_2nd'}
					,{'Selecter'	: $('#user_ken') 				,'classname': 'Address_text_1st'}
					,{'Selecter'	: $('#user_adr1') 				,'classname': 'Address_text_2nd'}
					,{'Selecter'	: $('#user_adr2') 				,'classname': 'Address_text_3rd'}
					// ,{'Selecter'	: $('#col_23') 							,'classname': 'Address_text_4th'}
					// ,{'Selecter'	: $('#col_24') 							,'classname': 'Address_HouseName'}
					,{'Selecter'	: $('#user_eml') 						,'classname': 'Mail'}
					,{'Selecter'	: $('#user_tel1')							,'classname': 'Tel3_1'}
					,{'Selecter'	: $('#user_tel2')						,'classname': 'Tel3_2'}
					,{'Selecter'	: $('#user_tel3')						,'classname': 'Tel3_3'}
					,{'Selecter'	: $('#user_fax1')							,'classname': 'Tel3_1'}
					,{'Selecter'	: $('#user_fax2')						,'classname': 'Tel3_2'}
					,{'Selecter'	: $('#user_fax3')						,'classname': 'Tel3_3'}
					// ,{'Selecter'	: $('#col_16')							,'classname': 'BirthYear'}
					// ,{'Selecter'	: $('#col_16_2')						,'classname': 'BirthMonth'}
					// ,{'Selecter'	: $('#col_16_3')						,'classname': 'Birthdate'}
					,{'Selecter'	: $('#user_age') 							,'classname': 'Age'}
					,{'Selecter'	: $('#user_family') 							,'classname': 'Familiy_Num'}
					,{'Selecter'	: $('#req_hop1_m,#req_hop2_m') 				,'classname': 'Reserve_Month'}
					,{'Selecter'	: $('#req_hop1_d,#req_hop2_d') 			,'classname': 'Reserve_Day'}
					,{'Selecter'	: $('#req_hop1_h,#req_hop2_h') 			,'classname': 'Reserve_Time'}

//カーソルフォーカス
					,{'Selecter'	: $('input').not('[type="radio"]') 		,'classname': 'CursorFocusEvent'}
//マウスオーバー
/*radiotext*/		,{'Selecter'	: $('.labelClass') 											,'classname': 'MouseoverRadioEvent'}
/*main*/			,{'Selecter'	: $('table.formtable:eq(0)>tbody>tr>td:has(input,select)')		,'classname': 'MouseoverEvent'}
/*その他*/			,{'Selecter'	: $('table.formtable:eq(1) td')									,'classname': 'MouseoverEvent'}
/*個人情報*/			,{'Selecter'	: $('table.formtable:eq(3) tr:has(input,select)')							,'classname': 'MouseoverEvent'}
/*ご入会**/			,{'Selecter'	: $('table.formtable:eq(4)>tbody>tr>td:has(input,select)')		,'classname': 'MouseoverEvent'}

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
/*radioのinput*/							,{'Selecter'	: formtable.eq(0).find('input[type="radio"]') 							,'classname': 'ValidationRadioInput'}
// /*radioのinput*/							,{'Selecter'	: formtable.eq(0).find('input[type="radio"]') 							,'classname': 'ValidationRadioInput'}
/*radio未選択の際に色を付けたい場所*/		,{'Selecter'	: $('table.formtable:eq(0)>tbody>tr>td:has(input[type="radio"])').not('td:has(input[name="col_18"])') 					,'classname': 'ValidationRadioTd'}
/*checkboxのinput*/						,{'Selecter'	: $('input[type="checkbox"]') 											,'classname': 'ValidationCheckboxInput'}
/*checkbox未選択の際に色を付けたい場所*/		,{'Selecter'	: $('table.formtable:eq(3) tr:has(input,select)') 												 				,'classname': 'ValidationCheckboxTd'}
/*checkbox未選択の際に色を付けたい場所*/		,{'Selecter'	: $('table.formtable:eq(4)>tbody>tr>td:has(input,select)')  				,'classname': 'ValidationCheckboxTd'}

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
/*					*/	 user_nam1				: "chkrequired"
/*					*/	,col_5				: "chkrequired"
/*					*/	,col_14				: "chkkatakana chkrequired"
/*					*/	,col_15				: "chkkatakana chkrequired"
/*					*/	,AutoAddressText2	: "chkrequired"
/*					*/	,AutoAddressText3	: "chkrequired"
/*					*/	,col_23				: "chkrequired"
/*					*/	,col_13				: "chknumonly chkrequired chkmax4"
/*					*/	,col_13_2			: "chknumonly chkrequired chkmax4"
/*					*/	,col_13_3			: "chknumonly chkrequired chkmax4"
/*					*/	,col_16				: "chknumonly chkrequired chkmin4 chkmax4"
/*					*/	,col_16_2			: "chknumonly chkrequired chkmax2"
/*					*/	,col_16_3			: "chknumonly chkrequired chkmax2"
/*					*/	,col_17				: "chknumonly chkrequired chkmax2"
/*					*/	,choice1			: "chknumonly chkrequired chkmax2"
/*					*/	,choice1_2			: "chknumonly chkrequired chkmax2"
/*					*/	,choice1_3			: "chknumonly chkrequired chkmax2"
/*					*/	,choice2			: "chknumonly chkrequired chkmax2"
/*					*/	,choice2_2			: "chknumonly chkrequired chkmax2"
/*					*/	,choice2_3			: "chknumonly chkrequired chkmax2"
/*					*/	,col_25				: "chknumonly chkrequired"
/*					*/	,mailaddr			: "chkemail chkhankaku chkrequired"
/*					*/	,AutoAddressNum1	: "chknumonly chkrequired chkmax3"
/*					*/	,AutoAddressNum2	: "chknumonly chkrequired chkmax4"
/*					*/	,AutoAddressText1	: "chkselect"
/*					*/	,col_29				: "chkselect"
/*					*/	,col_29_2			: "chkselect"
/*					*/	,col_28				: "chkselect"
/*					*/	,col_26				: "chkselect"
/*					*/	,col_26_2			: "chkselect"
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
										 , 'col_16'			: '生年月日（年）'
										 , 'col_16_2'			: '生年月日（月）'
										 , 'col_16_3'			: '生年月日（日）'
										 , 'col_17'				: '年齢'
										 , ''					: '性別'
										 , 'AutoAddressNum1'	: 'ご住所(郵便番号)'
										 , 'AutoAddressNum2'	: 'ご住所(郵便番号)'
										 , 'AutoAddressText1'	: 'ご住所(都道府県)'
										 , 'AutoAddressText2'	: 'ご住所(市区)'
										 , 'AutoAddressText3'	: 'ご住所(町村)'
										 , 'col_23'				: 'ご住所(丁目・番地)'
										 , 'col_13'				: '電話番号'
										 , 'col_13_2'			: '電話番号'
										 , 'col_13_3'			: '電話番号'
										 , 'col_25'				: 'ご家族数'
										 , ''					: '買替の有無'	
										 , 'col_26'				: '現在のお住まい'	
										 , ''					: 'ご希望の間取り'
										 , 'col_28'				: 'ご希望の広さ'
										 , 'col_29'				: 'ご予算'
										 , 'col_30'				: 'ご希望の地域（第１希望）'
										 , ''					: 'クラブオーベル会員規約への同意'
										 , ''					: 'クラブオーベルにおける個人情報のお取扱いについてへの同意'
										 , 'choice1'			: 'ご希望の来場日時(第一希望／ご希望の月)'
										 , 'choice1_2'			: 'ご希望の来場日時(第一希望／ご希望の日)'
										 , 'choice1_3'			: 'ご希望の来場日時(第一希望／ご希望の時刻)'
										 , 'choice2'			: 'ご希望の来場日時(第二希望／ご希望の月)'
										 , 'choice2_2'			: 'ご希望の来場日時(第二希望／ご希望の日)'
										 , 'choice2_3'			: 'ご希望の来場日時(第二希望／ご希望の時刻)'
										 , 'RadioID_1'			: 'このホームページをどこでお知りになりましたか？'
										 , 'RadioID_2'			: 'ご希望の間取り'
										 , 'RadioID_3'			: '資料請求、お問合わせについての個人情報保護規約への同意'
										 , 'RadioID_4'			: 'クラブオーベルへのご入会についての個人情報保護規約への同意'
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