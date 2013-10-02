

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
		 ,_AutoAddressIdObj	: {}
		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'SetIdname'
				,'SetClassname'
				,'SetValidation'
				,'setSubmitComment'
				,'setOriginalSubmit'
				,'setAutoAddressId'
				,'getIdname'
				,'getClassname'
				,'getValidation'
				,'getSubmitComment'
				,'getAutoAddressId'
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
				var formtable = $('form>table>tbody>tr>td>table:eq(1)>tbody>tr:eq(3)>td>table').addClass('formtable')

				thisObj._idname =	[
					 {'Selecter'	: $('input[name="col_19[]"]').eq(0) 	,'id': 'AutoAddressNum1'}

				]

			$(thisObj).trigger('onSetIdname');
		}
		,SetClassname: function() {
			var thisObj = this;
				var formtable = $('form>table>tbody>tr>td>table:eq(1)>tbody>tr:eq(3)>td>table').addClass('formtable')
				thisObj._classname =	[
//Placeholder
					 {'Selecter'	: $('#txtSeiName') 							,'classname': 'firstName'}
					,{'Selecter'	: $('#txtMeiName') 							,'classname': 'lastName'}
					,{'Selecter'	: $('#txtSeiKana') 							,'classname': 'firstNameKatakana'}
					,{'Selecter'	: $('#txtMeiKana') 							,'classname': 'lastNameKatakana'}
					,{'Selecter'	: $('#txtFirstCode')					,'classname': 'Address_Num_1st'}
					,{'Selecter'	: $('#txtLastCode')					,'classname': 'Address_Num_2nd'}
					// ,{'Selecter'	: $('#cmbProvince') 				,'classname': 'Address_text_1st'}
					,{'Selecter'	: $('#txtCity') 				,'classname': 'Address_text_2nd'}
					,{'Selecter'	: $('#txtDistrict') 				,'classname': 'Address_text_3rd'}
					,{'Selecter'	: $('#txtAddress') 							,'classname': 'Address_text_4th'}
					,{'Selecter'	: $('#txtBuilding') 							,'classname': 'Address_HouseName'}
					,{'Selecter'	: $('#txtMailPC') 						,'classname': 'Mail'}
					,{'Selecter'	: $('#txtMailMobile') 						,'classname': 'MobileMail'}
					,{'Selecter'	: $('#txtMobilePhone1')							,'classname': 'Tel3_1'}
					,{'Selecter'	: $('#txtMobilePhone2')						,'classname': 'Tel3_2'}
					,{'Selecter'	: $('#txtMobilePhone3')						,'classname': 'Tel3_3'}
					,{'Selecter'	: $('#txtYear')							,'classname': 'BirthYear'}
					,{'Selecter'	: $('#txtMonth')						,'classname': 'BirthMonth'}
					,{'Selecter'	: $('#txtDay')						,'classname': 'Birthdate'}
					// ,{'Selecter'	: $('#txtAge') 							,'classname': 'Age'}
					,{'Selecter'	: $('#txtFamilyNum') 							,'classname': 'Familiy_Num'}
					,{'Selecter'	: $('#txtMySelfMoney') 							,'classname': 'SelfMoney'}
					,{'Selecter'	: $('#txtArea') 							,'classname': 'AreaSize'}
					,{'Selecter'	: $('#txtHopeArea') 							,'classname': 'HopeArea'}
					// ,{'Selecter'	: $('#choice1,#choice2') 				,'classname': 'Reserve_Month'}
					// ,{'Selecter'	: $('#choice1_2,#choice2_2') 			,'classname': 'Reserve_Day'}
					// ,{'Selecter'	: $('#choice1_3,#choice2_3') 			,'classname': 'Reserve_Time'}



//カーソルフォーカス
					,{'Selecter'	: $('input').not('[type="radio"],[type="checkbox"]') 		,'classname': 'CursorFocusEvent'}
//マウスオーバー
/*radiotext*/		,{'Selecter'	: $('label.labelClass') 											,'classname': 'MouseoverRadioEvent'}
/*main*/			,{'Selecter'	: $('#tbodyID>tr>td:has(input,select),#privacyID')		,'classname': 'MouseoverEvent'}




// //住所自動入力
// 					// ,{'Selecter'	: $('input[name="col_14"]') 			,'classname': 'AutoAddressNum1'}
// 					,{'Selecter'	: $('#AutoAddressNum1') 				,'classname': 'AutoAddressNum1'}
// 					,{'Selecter'	: $('#AutoAddressNum2') 				,'classname': 'AutoAddressNum2'}
// 					// ,{'Selecter'	: $('input[name="col_21"]') 			,'classname': 'AutoAddressText1'}
// 					,{'Selecter'	: $('#AutoAddressText1') 				,'classname': 'AutoAddressText1'}
// 					,{'Selecter'	: $('#AutoAddressText2') 				,'classname': 'AutoAddressText2'}
// 					,{'Selecter'	: $('#AutoAddressText3') 				,'classname': 'AutoAddressText3'}

//バリデーション　RealtimeCheckManager
/*radio,check以外のinput,select*/		,{'Selecter'	: $('input:not(input[type="radio"],input[type="checkbox"]),select') 	,'classname': 'ValidationTextInputAndSelect'}
/*radioのinput*/							,{'Selecter'	: $('#tbodyID input[type="radio"]') 							,'classname': 'ValidationRadioInput'}
/*radio未選択の際に色を付けたい場所*/		,{'Selecter'	: $('#tbodyID>tr>td:has(input[type="radio"])') 					,'classname': 'ValidationRadioTd'}
/*checkboxのinput*/						,{'Selecter'	: $('#tbodyID>tr:eq(11)').find('input[type="checkbox"]')											,'classname': 'ValidationCheckboxInput'}
/*checkboxのinput*/						,{'Selecter'	: $('#privacyID input')											,'classname': 'ValidationCheckboxInput'}
// /*checkboxのinput*/						,{'Selecter'	: $('#tbodyID>tr:not(:eq(14),:eq(16)) input[type="checkbox"]') 											,'classname': 'ValidationCheckboxInput'}
/*checkbox未選択の際に色を付けたい場所*/		,{'Selecter'	: $('#tbodyID>tr:eq(11)>td:has(input[type="checkbox"])') 												 				,'classname': 'ValidationCheckboxTd'}
/*checkbox未選択の際に色を付けたい場所*/		,{'Selecter'	: $('#privacyID') 												 				,'classname': 'ValidationCheckboxTd'}




				]

			$(thisObj).trigger('onSetClassname');
		}
		,SetValidation: function() {
			var thisObj = this;

	thisObj._Validation = 
					{//プロパティはコメントでも大丈夫
// 					 $('.ValidateClass').attr('id')	: "chkrequired"
/*					*/	 txtSeiName				: "chkrequired"
/*					*/	,txtMeiName				: "chkrequired"
/*					*/	,txtSeiKana				: "chkkatakana chkrequired"
/*					*/	,txtMeiKana				: "chkkatakana chkrequired"
/*					*/	,txtCity				: "chkrequired"
/*					*/	,txtDistrict			: "chkrequired"
/*					*/	,txtAddress				: "chkrequired"
/*					*/	,txtMobilePhone1		: "chknumonly chkrequired chkmax4"
/*					*/	,txtMobilePhone2		: "chknumonly chkrequired chkmax4"
/*					*/	,txtMobilePhone3		: "chknumonly chkrequired chkmax4"
/*					*/	,txtYear				: "chknumonly chkrequired chkyear"
/*					*/	,txtMonth				: "chknumonly chkrequired chkmonth"
/*					*/	,txtDay					: "chknumonly chkrequired chkday"
/*					*/	,txtAge					: "chknumonly"
/*					*/	,txtFamilyNum			: "chknumonly chkmax2 chkrequired"
/*					*/	,txtMySelfMoney			: "chknumonly"
/*					*/	,txtArea				: "chknumonly chkmax3 chkrequired"
/*					*/	,txtMailPC				: "chkemail chkhankaku chkrequired"
/*					*/	,txtMailMobile			: "chkemail chkhankaku"
/*					*/	,txtFirstCode			: "chknumonly chkrequired chk3num"
/*					*/	,txtLastCode			: "chknumonly chkrequired chk4num"
/*					*/	,cmbJob					: "chkselect"
/*					*/	,cmbEstimate			: "chkselect"
/*					*/	,cmbBuildingType		: "chkselect"
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
										 , 'col_16'				: '生年月日（年）'
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
		,setAutoAddressId: function() {
			var thisObj = this;
			thisObj._AutoAddressIdObj = {  'Num1'			: 'txtFirstCode'
										 , 'Num2'			: 'txtLastCode'
										 , 'Txt1'			: 'cmbProvince'
										 , 'Txt2'			: 'txtCity'
										 , 'Txt3'			: 'txtDistrict'
										}
			$(thisObj).trigger('onSetAutoAddressId');
		}
		,setOriginalSubmit: function() {
			var thisObj = this;
			frmValidate(1)
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
		,getAutoAddressId : function() {
			var thisObj = this;
			return thisObj._AutoAddressIdObj;
		}
	}
});