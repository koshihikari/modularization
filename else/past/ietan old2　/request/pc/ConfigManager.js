

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
				,'ChangeValidation'
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
				var formtableradio = $('form.NT_mainForm>table>tbody>tr>td>table:eq(3)>tbody>tr>td:has(input[type="radio"])')

				thisObj._idname =	[
// 					 // {'Selecter'	: $('input[name="col_14"]') 			,'id': 'AutoAddressNum1'}
// 					//  {'Selecter'	: $('input[name="col_4"]')				,'id': 'kanaEx_firstName'}
// 					// ,{'Selecter'	: $('input[name="col_5"]')				,'id': 'kanaEx_lastName'}
// 					// ,{'Selecter'	: $('input[name="col_14"]')				,'id': 'kanaEx_firstNameKatakana'}
// 					// ,{'Selecter'	: $('input[name="col_15"]')				,'id': 'kanaEx_lastNameKatakana'}
// 					 {'Selecter'	: $('input[name="col_19[]"]').eq(0) 	,'id': 'AutoAddressNum1'}
// 					,{'Selecter'	: $('input[name="col_19[]"]').eq(1) 	,'id': 'AutoAddressNum2'}
// 					// ,{'Selecter'	: $('input[name="col_21"]') 			,'id': 'AutoAddressText1'}
// 					,{'Selecter'	: $('select[name="col_12"]') 			,'id': 'AutoAddressText1'}
// 					,{'Selecter'	: $('input[name="col_21"]') 			,'id': 'AutoAddressText2'}
// 					,{'Selecter'	: $('input[name="col_22"]') 			,'id': 'AutoAddressText3'}
// /*td*/				,{'Selecter'	: formtableradio.eq(0)								,'id': 'RadioID_1'}
// 					,{'Selecter'	: formtableradio.eq(1)						 		,'id': 'RadioID_2'}
// 					,{'Selecter'	: $('form.NT_mainForm>table>tbody>tr>td>table:eq(6)>tbody>tr:eq(1)') 	,'id': 'RadioID_3'}
// 					,{'Selecter'	: $('#agree_privacy').closest('.font2_1') 					,'id': 'RadioID_4'}
				]

			$(thisObj).trigger('onSetIdname');
		}
		,SetClassname: function() {
			var thisObj = this;
				var formtable = $('form.NT_mainForm>table>tbody>tr>td>table').addClass('formtable')
				thisObj._classname =	[
//Placeholder
					 {'Selecter'	: $('#user_nam1') 							,'classname': 'firstName'}
					,{'Selecter'	: $('#user_nam2') 							,'classname': 'lastName'}
					,{'Selecter'	: $('#user_kana1') 							,'classname': 'firstNameKatakana'}
					,{'Selecter'	: $('#user_kana2') 							,'classname': 'lastNameKatakana'}
					,{'Selecter'	: $('#user_zip1')							,'classname': 'Address_Num_1st'}
					,{'Selecter'	: $('#user_zip2')							,'classname': 'Address_Num_2nd'}
					,{'Selecter'	: $('#user_ken') 							,'classname': 'Address_text_1st'}
					,{'Selecter'	: $('#user_adr1') 							,'classname': 'Address_text_2nd'}
					,{'Selecter'	: $('#user_adr2') 							,'classname': 'Address_text_3rd'}
					,{'Selecter'	: $('#user_eml') 							,'classname': 'Mail'}
					,{'Selecter'	: $('#user_tel1')							,'classname': 'Tel3_1'}
					,{'Selecter'	: $('#user_tel2')							,'classname': 'Tel3_2'}
					,{'Selecter'	: $('#user_tel3')							,'classname': 'Tel3_3'}
					,{'Selecter'	: $('#user_fax1')							,'classname': 'Tel3_1'}
					,{'Selecter'	: $('#user_fax2')							,'classname': 'Tel3_2'}
					,{'Selecter'	: $('#user_fax3')							,'classname': 'Tel3_3'}
					,{'Selecter'	: $('#user_age') 							,'classname': 'Age'}
					,{'Selecter'	: $('#user_family') 						,'classname': 'Familiy_Num'}
					,{'Selecter'	: $('#req_hop1_m,#req_hop2_m') 				,'classname': 'Reserve_Month'}
					,{'Selecter'	: $('#req_hop1_d,#req_hop2_d') 				,'classname': 'Reserve_Day'}
					,{'Selecter'	: $('#req_hop1_h,#req_hop2_h') 				,'classname': 'Reserve_Time'}

// //カーソルフォーカス
// 					,{'Selecter'	: $('input').not('[type="radio"]') 		,'classname': 'CursorFocusEvent'}
// //マウスオーバー
// /*radiotext*/		,{'Selecter'	: $('.labelClass') 																	,'classname': 'MouseoverRadioEvent'}
// /*td*/				,{'Selecter'	: $('table.formtable:eq(3)>tbody>tr>td:has(input,select)')								,'classname': 'MouseoverEvent'}
// 					,{'Selecter'	: $('table.formtable:eq(4)>tbody>tr>td:has(input,select)')						 		,'classname': 'MouseoverEvent'}
// // /*td*/				,{'Selecter'	: $('table.formtable:eq(3)>tbody>tr>td:has(input,select)').not('td:has(input[type="radio"])')		,'classname': 'MouseoverEvent'}
// // 					,{'Selecter'	: $('table.formtable:eq(4)>tbody>tr>td:has(input,select)').not('td:has(input[type="radio"])') 		,'classname': 'MouseoverEvent'}
// 					,{'Selecter'	: $('table.formtable:eq(6)>tbody>tr:eq(1)') 														,'classname': 'MouseoverEvent'}
// 					,{'Selecter'	: $('input[name="wellith"]').closest('td.font2_1').closest('table').closest('td.font2_1') 						,'classname': 'MouseoverEvent'}
// 					,{'Selecter'	: $('#RadioID_4') 																		,'classname': 'MouseoverEvent'}

//住所自動入力
					// ,{'Selecter'	: $('input[name="col_14"]') 			,'classname': 'AutoAddressNum1'}
					,{'Selecter'	: $('#user_zip1') 				,'classname': 'AutoAddressNum1'}
					,{'Selecter'	: $('#user_zip2') 				,'classname': 'AutoAddressNum2'}
					// ,{'Selecter'	: $('input[name="col_21"]') 			,'classname': 'AutoAddressText1'}
					,{'Selecter'	: $('#user_ken') 				,'classname': 'AutoAddressText1'}
					,{'Selecter'	: $('#user_adr1') 				,'classname': 'AutoAddressText2'}
					,{'Selecter'	: $('#user_adr2') 				,'classname': 'AutoAddressText3'}

// //バリデーション　RealtimeCheckManager
// /*radio,check以外のinput,select*/		,{'Selecter'	: $('input:not(input[type="radio"],input[type="checkbox"]),select') 	,'classname': 'ValidationTextInputAndSelect'}
/*radioのinput*/							,{'Selecter'	: $('#lavel7_1') 												,'classname': 'ValidationRadioInput'}
/*radio未選択の際に色を付けたい場所*/		,{'Selecter'	: $('#lavel7_1').closest('td') 									,'classname': 'ValidationRadioTd'}
/*checkboxのinput*/						,{'Selecter'	: $('#lavel2_1,#lavel2_2,#lavel2_3,#lavel2_4,#lavel3_1,#lavel3_2,#lavel3_3,#lavel3_4') 		,'classname': 'ValidationCheckboxInput'}
/*checkbox未選択の際に色を付けたい場所*/	,{'Selecter'	: $('#lavel2_1').closest('td') 									,'classname': 'ValidationCheckboxTd'}//個人情報１
/*checkbox未選択の際に色を付けたい場所*/	,{'Selecter'	: $('#lavel3_1').closest('td') 									,'classname': 'ValidationCheckboxTd'}//個人情報１

//バリデーション　exvalidation Plugin
/*必須項目*/		,{'Selecter'	: $('input:not(input[type="radio"],input[type="checkbox"]),select') 			,'classname': 'ValidationTextInputAndSelect'}



				]
			$(thisObj).trigger('onSetClassname');
		}
		,SetValidation: function() {
			var thisObj = this;

	thisObj._Validation = 
					{//プロパティはコメントでも大丈夫
// 					 $('.ValidateClass').attr('id')	: chkrequired
/*					*/	 user_nam1			: "chkrequired"
/*					*/	,user_nam2			: "chkrequired"
/*					*/	,user_kana1			: "chkrequired chkkatakana"
/*					*/	,user_kana2			: "chkrequired chkkatakana"
/*					*/	,user_zip1			: "chkrequired chknumonly chk3num"
/*					*/	,user_zip2			: "chkrequired chknumonly chk4num"
/*					*/	,user_ken			: "chkrequired "
/*					*/	,user_adr1			: "chkrequired "
/*					*/	,user_adr2			: "chkrequired "
/*					*/	,user_eml			: "chkrequired chkemail chkhankaku"
/*					*/	,user_tel1			: "chkrequired chknumonly"
/*					*/	,user_tel2			: "chkrequired chknumonly"
/*					*/	,user_tel3			: "chkrequired chknumonly"
/*					*/	,user_fax1			: "chkrequired chknumonly"
/*					*/	,user_fax2			: "chkrequired chknumonly"
/*					*/	,user_fax3			: "chkrequired chknumonly"
/*					*/	,user_age			: "chknumonly chkage"
/*					*/	,user_family		: "chknumonly"
/*					*/	,req_hop1_m			: "chknumonly chkmonth"
/*					*/	,req_hop1_d			: "chknumonly chkday"
/*					*/	,req_hop1_h			: "chknumonly chktime"
/*					*/	,req_hop2_m			: "chknumonly chkmonth"
/*					*/	,req_hop2_d			: "chknumonly chkday"
/*					*/	,req_hop2_h			: "chknumonly chktime"
// /*					*/	,col_29				: "chkselect"
					};
// 	thisObj._Validation = 
// 					{//プロパティはコメントでも大丈夫
// // 					 $('.ValidateClass').attr('id')	: chkrequired
// /*					*/	 user_nam1			: "chkrequired"
// /*					*/	,user_nam2			: "chkrequired"
// /*					*/	,user_kana1			: "chkrequired chkkatakana"
// /*					*/	,user_kana2			: "chkrequired chkkatakana"
// /*					*/	,user_zip1			: "chknumonly chk3num"
// /*					*/	,user_zip2			: "chknumonly chk4num"
// /*					*/	,user_ken			: ""
// /*					*/	,user_adr1			: ""
// /*					*/	,user_adr2			: ""
// /*					*/	,user_eml			: "chkemail chkhankaku"
// /*					*/	,user_tel1			: "chknumonly"
// /*					*/	,user_tel2			: "chknumonly"
// /*					*/	,user_tel3			: "chknumonly"
// /*					*/	,user_fax1			: "chknumonly"
// /*					*/	,user_fax2			: "chknumonly"
// /*					*/	,user_fax3			: "chknumonly"
// /*					*/	,user_age			: "chknumonly chkage"
// /*					*/	,user_family		: "chknumonly"
// /*					*/	,req_hop1_m			: "chknumonly chkmonth"
// /*					*/	,req_hop1_d			: "chknumonly chkday"
// /*					*/	,req_hop1_h			: "chknumonly chktime"
// /*					*/	,req_hop2_m			: "chknumonly chkmonth"
// /*					*/	,req_hop2_d			: "chknumonly chkday"
// /*					*/	,req_hop2_h			: "chknumonly chktime"
// // /*					*/	,col_29				: "chkselect"
// 					};

/*――――――――――――――*/
/*Settings end  */
/*――――――――――――――*/
			$(thisObj).trigger('onSetValidation');
		}
		,ChangeValidation: function(mustTel,mustFax,mustMail,mustAddress) {
			var thisObj = this;
			var mustAddressTxt = ""
			var mustAddressSlct = ""
			var mustTelTxt = ""
			var mustFaxTxt = ""
			var mustMailTxt = ""
			if(mustAddress === true){
				mustAddressTxt = "chkrequired"
				mustAddressSlct = "chkselect"
			}
			if(mustTel === true){mustTelTxt = "chkrequired"}
			if(mustFax === true){mustFaxTxt = "chkrequired"}
			if(mustMail === true){mustMailTxt = "chkrequired"}
	thisObj._Validation = 
					{//プロパティはコメントでも大丈夫
// 					 $('.ValidateClass').attr('id')	: "chkrequired"
/*					*/	 user_nam1			: "chkrequired"
/*					*/	,user_nam2			: "chkrequired"
/*					*/	,user_kana1			: "chkrequired chkkatakana"
/*					*/	,user_kana2			: "chkrequired chkkatakana"
/*					*/	,user_zip1			: ""+mustAddressTxt+" chknumonly chk3num"
/*					*/	,user_zip2			: ""+mustAddressTxt+" chknumonly chk4num"
/*					*/	,user_ken			: ""+mustAddressSlct+""
/*					*/	,user_adr1			: ""+mustAddressTxt+""
/*					*/	,user_adr2			: ""+mustAddressTxt+""
/*					*/	,user_eml			: ""+mustMailTxt+" chkemail chkhankaku"
/*					*/	,user_tel1			: ""+mustTelTxt+" chknumonly"
/*					*/	,user_tel2			: ""+mustTelTxt+" chknumonly"
/*					*/	,user_tel3			: ""+mustTelTxt+" chknumonly"
/*					*/	,user_fax1			: ""+mustFaxTxt+" chknumonly"
/*					*/	,user_fax2			: ""+mustFaxTxt+" chknumonly"
/*					*/	,user_fax3			: ""+mustFaxTxt+" chknumonly"
/*					*/	,user_age			: "chknumonly chkage"
/*					*/	,user_family		: "chknumonly"
/*					*/	,req_hop1_m			: "chknumonly chkmonth"
/*					*/	,req_hop1_d			: "chknumonly chkday"
/*					*/	,req_hop1_h			: "chknumonly chktime"
/*					*/	,req_hop2_m			: "chknumonly chkmonth"
/*					*/	,req_hop2_d			: "chknumonly chkday"
/*					*/	,req_hop2_h			: "chknumonly chktime"
// /*					*/	,col_29				: "chkselect"
					};

/*――――――――――――――*/
/*Settings end  */
/*――――――――――――――*/
			$(thisObj).trigger('onChangeValidation');
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