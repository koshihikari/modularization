

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('mojule.ConfigManager');
	MYNAMESPACE.mojule.ConfigManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.mojule.ConfigManager.prototype = {
		 _instances			: {}
		 ,_ClassName		: []
		 ,_AttrName			: []
		 ,_AttrType			: []
		 ,_Placeholder		: []
		 ,_SubmitCommentObj	: {}
		,initialize: function(DataManagerInstance) {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'defineClassName'
				,'defineAttrName'
				,'defineAttrType'
				,'definePlaceholder'
				,'defineSubmitComment'
				,'setEvent'
			);
			this._instances = {
				'DataManager'			: DataManagerInstance
			}
		}


/*――――――――――――――*/
/*Settings Start*/
/*――――――――――――――*/
		,defineClassName: function() {
			var thisObj = this;
				var formtable = $('form.NT_mainForm>table>tbody>tr>td>table').addClass('formtable')
//Placeholder,住所自動入力	（全パターンここに記載する）
//必須 NT_V_req_SP / メール NT_V_mail_SP / 数字 NT_V_num_SP / ハイフン数字 NT_V_num_hifun_SP / カナ NT_V_katakana_SP / かな NT_V_hiragana_SP
// 一致メール1 NT_V_mailSame1_SP / 一致メール2 NT_V_mailSame2_SP /
//最低X桁 NT_V_numLengthMin_X_SP / 最大X桁 NT_V_numLengthMax_X_SP / ジャストX桁 NT_V_numLengthJust_X_SP
// 年 NT_V_year_SP / 月 NT_V_month_SP / 日 NT_V_day_SP
// 時間24 NT_V_time24_SP / 時間12 NT_V_time12_SP
				thisObj._ClassName =	[
					 {'Selecter'	: $('select[name="col_29"]') 			,'classname': 'NT_V_req_select_SP'}
					,{'Selecter'	: $('#col_HP') 							,'classname': 'NT_V_req_select_SP'}
					,{'Selecter'	: $('#AddIDforSP_31') 					,'classname': 'NT_V_req_select_SP'}
					,{'Selecter'	: $('#AddIDforSP_32') 					,'classname': 'NT_V_req_select_SP'}
					,{'Selecter'	: $('#AddIDforSP_33') 					,'classname': 'NT_V_req_select_SP'}
					,{'Selecter'	: $('input[name="col_4"]') 				,'classname': 'NT_firstName 			NT_V_req_SP'}
					,{'Selecter'	: $('input[name="col_5"]') 				,'classname': 'NT_lastName 				NT_V_req_SP'}
					,{'Selecter'	: $('input[name="col_14"]') 			,'classname': 'NT_firstNameKatakana 	NT_V_req_SP NT_V_katakana_SP'}
					,{'Selecter'	: $('input[name="col_15"]') 			,'classname': 'NT_lastNameKatakana 		NT_V_req_SP NT_V_katakana_SP'}
					,{'Selecter'	: $('input[name="col_19_1"]')			,'classname': 'NT_AddrNum_2_1 			NT_V_req_SP	NT_V_num_SP	NT_AutoAddrNum_2_1 	'}
					,{'Selecter'	: $('input[name="col_19_2"]')			,'classname': 'NT_AddrNum_2_2 			NT_V_req_SP	NT_V_num_SP	NT_AutoAddrNum_2_2 	'}
					// ,{'Selecter'	: $('#AutoAddressNum2')					,'classname': 'NT_AddrNum_1_1 			NT_V_req_SP	NT_AutoAddrNum_1_1 	'}
					,{'Selecter'	: $('input[name="col_12"]')				,'classname': 'NT_AddrText_pref 		NT_V_req_SP	NT_AutoAddrText_1 	'}
					,{'Selecter'	: $('input[name="col_21"]')				,'classname': 'NT_AddrText_shiku 		NT_V_req_SP	NT_AutoAddrText_2 	'}
					,{'Selecter'	: $('input[name="col_22"]')				,'classname': 'NT_AddrText_tyoson 		NT_V_req_SP	NT_AutoAddrText_3 	'}
					// ,{'Selecter'	: $('#AutoAddressText3') 				,'classname': 'NT_AddrText_shiku_tyoson 		NT_V_req_SP'}
					// ,{'Selecter'	: $('#AutoAddressText3') 				,'classname': 'NT_AddrText_pref_shiku_tyoson 	NT_V_req_SP'}
					// ,{'Selecter'	: $('#AutoAddressText3') 				,'classname': 'NT_AddrText_tyome_banchi_home 	NT_V_req_SP'}
					,{'Selecter'	: $('#town_id') 						,'classname': 'NT_AddrText_tyome_banchi 		NT_V_req_SP'}
					,{'Selecter'	: $('#build_id') 						,'classname': 'NT_AddrText_home'}
					,{'Selecter'	: $('#pc_mail_id') 						,'classname': 'NT_Mail 		NT_V_req_SP 	NT_V_mail_SP'}

					,{'Selecter'	: $('input[name="col_13[]"]:eq(0)')				,'classname': 'NT_Tel_3_1 	NT_V_req_SP 	NT_V_num_SP'}
					,{'Selecter'	: $('input[name="col_13[]"]:eq(1)')				,'classname': 'NT_Tel_3_2	NT_V_req_SP 	NT_V_num_SP'}
					,{'Selecter'	: $('input[name="col_13[]"]:eq(2)')				,'classname': 'NT_Tel_3_3	NT_V_req_SP 	NT_V_num_SP'}

					,{'Selecter'	: $('#birth_year_id')							,'classname': 'NT_BirthYear	NT_V_req_SP 	NT_V_num_SP 	NT_V_numLengthMax_4_SP'}
					,{'Selecter'	: $('#birth_month_id')						,'classname': 'NT_BirthMonth	NT_V_req_SP 	NT_V_num_SP'}
					,{'Selecter'	: $('#birth_day_id')						,'classname': 'NT_Birthdate	NT_V_req_SP 	NT_V_num_SP'}
					,{'Selecter'	: $('#age_id') 							,'classname': 'NT_Age	NT_V_req_SP 	NT_V_num_SP'}
					,{'Selecter'	: $('#AddIDforSP_34') 							,'classname': 'NT_Familiy_Num	NT_V_req_SP 	NT_V_num_SP'}

					,{'Selecter'	: $('input[name="choice1[]"]:eq(0)') 	,'classname': 'NT_V_num_SP'}
					,{'Selecter'	: $('input[name="choice1[]"]:eq(1)') 	,'classname': 'NT_V_num_SP'}
					,{'Selecter'	: $('input[name="choice1[]"]:eq(2)') 	,'classname': 'NT_V_num_SP'}
					,{'Selecter'	: $('input[name="choice2[]"]:eq(0)') 	,'classname': 'NT_V_num_SP'}
					,{'Selecter'	: $('input[name="choice2[]"]:eq(1)') 	,'classname': 'NT_V_num_SP'}
					,{'Selecter'	: $('input[name="choice2[]"]:eq(2)') 	,'classname': 'NT_V_num_SP'}

//カーソルフォーカス
					,{'Selecter'	: $('input').not('[type="radio"]') 		,'classname': 'NT_CursorFocusEvent'}

//バリデーション　ValidationManager/ここ充実させる　メール　電話
// /*radioのinput*/
// 					,{'Selecter'	: formtable.eq(3).find('input[type="radio"]') 							,'classname': 'NT_V_RadioInput'}
// /*radio未選択の際に色を付けたい場所*/	
// 					,{'Selecter'	: formtable.eq(3).find('input[type="radio"]')
// 										.closest('form.NT_mainForm>table>tbody>tr>td>table>tbody>tr>td').not('')		,'classname': 'NT_V_RadioTd'}
/*checkboxのinput*/
					,{'Selecter'	: $('input[type="checkbox"]') 											,'classname': 'NT_V_CheckboxInput'}
/*checkbox未選択の際に色を付けたい場所*/
/*divではなくlabelでやりたい場合*/					// ,{'Selecter'	: $('label[for="privacy"]') 				,'classname': 'NT_V_CheckboxTd'}
/*divではなくlabelでやりたい場合*/					// ,{'Selecter'	: $('label[for="privacy2"]') 				,'classname': 'NT_V_CheckboxTd'}
					,{'Selecter'	: $('input[type="checkbox"]').closest('div') 				,'classname': 'NT_V_CheckboxTd'}
					,{'Selecter'	: $('select').closest('div') 				,'classname': 'NT_V_SelectboxTd'}



// /*checkbox未選択の際に色を付けたい場所*/
// 					,{'Selecter'	: $('input[name="wellith"]').closest('td.font2_1')
// 										.closest('table').closest('td.font2_1')								,'classname': 'NT_V_CheckboxTd'}
// /*checkbox未選択の際に色を付けたい場所*/
// 					,{'Selecter'	: $('#agree_privacy').closest('.font2_1') 								,'classname': 'NT_V_CheckboxTd'}
				]
/*――――――――――――――*/
/*Settings end  */
/*――――――――――――――*/
			console.log('Config defineClassname')
			thisObj._instances['DataManager'].setIniClass(thisObj._ClassName);
			// $(thisObj).trigger('onCompDefineIniClassname');
		}
		,defineAttrName: function() {
			var thisObj = this;
/*――――――――――――――*/
/*Settings Start*/
/*――――――――――――――*/
//カナ自動入力   /ここの設定だけでひらがなにも可能。
				thisObj._AttrName =	[
					 {'Selecter'	: $('input.NT_firstName')					,'name': 'NT_kanaEx_firstName'}
					,{'Selecter'	: $('input.NT_lastName')						,'name': 'NT_kanaEx_lastName'}
					,{'Selecter'	: $('input.NT_firstNameKatakana')			,'name': 'NT_kanaEx_firstNameKatakana'}
					,{'Selecter'	: $('input.NT_lastNameKatakana')				,'name': 'NT_kanaEx_lastNameKatakana'}
					,{'Selecter'	: $('input.NT_firstNameHiragana')			,'name': 'NT_kanaEx_firstNameHiragana'}
					,{'Selecter'	: $('input.NT_lastNameHiragana')				,'name': 'NT_kanaEx_lastNameHiragana'}

//住所自動入力
					// ,{'Selecter'	: $('input.NT_AutoAddrNum_1_1 	')				,'name': 'NT_AutoAddrNum_1'}
					,{'Selecter'	: $('input.NT_AutoAddrNum_2_1 	')				,'name': 'NT_AutoAddrNum_1'}
					,{'Selecter'	: $('input.NT_AutoAddrNum_2_2 	')				,'name': 'NT_AutoAddrNum_2'}
					,{'Selecter'	: $('input.NT_AutoAddrText_1		')				,'name': 'NT_AutoAddrText_1'}
					,{'Selecter'	: $('input.NT_AutoAddrText_2		')				,'name': 'NT_AutoAddrText_2'}
					,{'Selecter'	: $('input.NT_AutoAddrText_3		')				,'name': 'NT_AutoAddrText_3'}

				]
/*――――――――――――――*/
/*Settings end  */
/*――――――――――――――*/

			console.log('Config defineAttrname')
			thisObj._instances['DataManager'].setIniAttrName(thisObj._AttrName);
			// $(thisObj).trigger('onCompDefineIniAttrname');

		}
		,defineAttrType: function() {
			var thisObj = this;
/*――――――――――――――*/
/*Settings Start*/
/*――――――――――――――*/
				thisObj._AttrType =	[
					{'Selecter'	: $('#AddIDforSP_34		')				,'name': 'tel'}

				]
/*――――――――――――――*/
/*Settings end  */
/*――――――――――――――*/

			console.log('Config defineAttrType')
			thisObj._instances['DataManager'].setIniAttrType(thisObj._AttrType);
			// $(thisObj).trigger('onCompDefineIniAttrType');
		}
		,definePlaceholder: function() {
			var thisObj = this;
/*――――――――――――――*/
/*Settings Start*/
/*――――――――――――――*/
//カナ自動入力   /ここの設定だけでひらがなにも可能。
				thisObj._Placeholder =	[
		/*社名*/		 {'Selecter'	: $('input.NT_firstName')				,'name': '例: 入力'}
					,{'Selecter'	: $('input.NT_lastName')				,'name': '例: 太郎'}
		/*社名*/		,{'Selecter'	: $('input.NT_firstNameKatakana')		,'name': '例: ニュウリョク'}
					,{'Selecter'	: $('input.NT_lastNameKatakana')		,'name': '例: タロウ'}
		/*社名*/		,{'Selecter'	: $('input.NT_firstNameHiragana')		,'name': '例: にゅうりょく'}
					,{'Selecter'	: $('input.NT_lastNameHiragana')		,'name': '例: たろう'}
					,{'Selecter'	: $('input.NT_Tel_3_1')					,'name': '例: 03'}
					,{'Selecter'	: $('input.NT_Tel_3_2')					,'name': '例: xxxx'}
					,{'Selecter'	: $('input.NT_Tel_3_3')					,'name': '例: xxxx'}
					// ,{'Selecter'	: $('input.NT_Tel1_hyphen')				,'name': '例: 03-xxxx-xxxx'}
					// ,{'Selecter'	: $('input.NT_Tel1_nohyphen')			,'name': '例: 03xxxxyyyy'}
					,{'Selecter'	: $('input.NT_BirthYear')				,'name': '例: 1980'}
					,{'Selecter'	: $('input.NT_BirthMonth')				,'name': '例: 1'}
					,{'Selecter'	: $('input.NT_Birthdate')				,'name': '例: 1'}
					,{'Selecter'	: $('input.NT_Age')						,'name': '例: 33'}
					,{'Selecter'	: $('input.NT_Familiy_Num')				,'name': '例: 4'}
		/*社名*/		,{'Selecter'	: $('input.NT_Mail')					,'name': '例: xxxxx@aaa.com'}
					// ,{'Selecter'	: $('input.NT_Mail_beforeAt')			,'name': '例: ○○○○'}
		// /*社名*/		,{'Selecter'	: $('input.NT_Mail_afterAt')		,'name': '例: nyuryoku.co.jp'}
					// ,{'Selecter'	: $('input.NT_Address_Num_hyphen')		,'name': '例: xxx-yyyy'}
					// ,{'Selecter'	: $('input.NT_Address_Num_nohyphen')	,'name': '例: xxxyyyy'}
					,{'Selecter'	: $('input.NT_AddrNum_2_1')				,'name': '例: xxx'}
					,{'Selecter'	: $('input.NT_AddrNum_2_2')				,'name': '例: yyyy'}
					,{'Selecter'	: $('input.NT_AddrText_pref')			,'name': '例: 東京都'}
					,{'Selecter'	: $('input.NT_AddrText_shiku')			,'name': '例: 新宿区'}
					,{'Selecter'	: $('input.NT_AddrText_tyoson')			,'name': '例: 新宿'}
					,{'Selecter'	: $('input.NT_AddrText_tyome_banchi')	,'name': '例: 2-8-8'}
					,{'Selecter'	: $('input.NT_AddrText_home')			,'name': '例: とみん新宿ビル 8階'}
					,{'Selecter'	: $('input.NT_Reserve_Month')			,'name': '例: 4'}
					,{'Selecter'	: $('input.NT_Reserve_Day')				,'name': '例: 1'}
					,{'Selecter'	: $('input.NT_Reserve_Time')			,'name': '例: 14'}
					// ,{'Selecter'	: $('input.NT_CompanyName')				,'name': '例: プライム不動産株式会社'}

					// $('input.     ')					.attr('placeholder',$('#col_21').closest('td').text().replace('（','').replace('）',''))
					// $('input.     ')					.attr('placeholder',$('#col_22').closest('td').text().replace('（','').replace('）',''))
					// $('input.     ')					.attr('placeholder',$('#col_23').closest('td').text().replace('（','').replace('）',''))
					// $('input.     ')					.attr('placeholder',$('#col_24').closest('td').text().replace('（','').replace('）',''))
					// $('input.     ')					.closest('td').html($('#col_21').closest('td').find('input'))
					// $('input.     ')					.closest('td').html($('#col_22').closest('td').find('input'))
					// $('input.     ')					.closest('td').html($('#col_23').closest('td').find('input'))
					// $('input.     ')					.closest('td').html($('#col_24').closest('td').find('input'))

				]
/*――――――――――――――*/
/*Settings end  */
/*――――――――――――――*/

			console.log('Config defineAttrPh')
			thisObj._instances['DataManager'].setPlaceholder(thisObj._Placeholder);
			// $(thisObj).trigger('onCompDefineIniAttrname');

		}
		,defineSubmitComment: function() {
			var thisObj = this;
											//{nt_dd_num:値}
			thisObj._SubmitCommentObj = {  '16_0'		: 'お名前(姓)'
										 , '16_1'		: 'お名前(名)'
										 , '15_0'		: 'フリガナ(セイ)'
										 , '15_1'		: 'フリガナ(メイ)'
										 , '14_0'		: 'メールアドレス'
										 , '13_0'		: '電話番号'
										 , '13_1'		: '電話番号'
										 , '13_2'		: '電話番号'
										 , '12_0'		: 'ご住所(郵便番号)'
										 , '12_1'		: 'ご住所(郵便番号)'
										 , '11_0'		: 'ご住所(都道府県)'
										 , '10_0'		: 'ご住所(市区)'
										 , '9_0'		: 'ご住所(町村)'
										 , '8_0'		: 'ご住所(丁目・番地)'
										 , '6_0'		: '生年月日（年）'
										 , '6_1'		: '生年月日（月）'
										 , '6_2'		: '生年月日（日）'
										 , '6_3'		: '年齢'
										 , '5_0'		: 'ご予算'
										 , '4_0'		: 'このホームページをどこでお知りになりましたか？'
										 , '3_0'		: 'ご希望の広さ'
										 , '2_0'		: 'ご希望の間取り'
										 , '1_0'		: '現在のお住まい'
										 , '0_0'		: 'ご家族数'
										 , 'a_0'		: '資料請求、お問合わせについての個人情報保護規約への同意'
										 , 'a_1'		: 'プライムクラブへのご入会についての個人情報保護規約への同意'
										 , 'R_1_0'		: 'ご希望の来場日時（第一希望）'
										 , 'R_1_1'		: 'ご希望の来場日時（第一希望）'
										 , 'R_1_2'		: 'ご希望の来場日時（第一希望）'
										 , 'R_0_0'		: 'ご希望の来場日時（第二希望）'
										 , 'R_0_1'		: 'ご希望の来場日時（第二希望）'
										 , 'R_0_2'		: 'ご希望の来場日時（第二希望）'

										}
			console.log('Config defineAttrSCom')
			thisObj._instances['DataManager'].setSubmitComment(thisObj._SubmitCommentObj);
		}
		,setEvent: function() {
			var thisObj = this;
			thisObj.defineClassName();
			thisObj.defineAttrName();
			thisObj.definePlaceholder();
			thisObj.defineAttrType();
			thisObj.defineSubmitComment();
		}
	}
});