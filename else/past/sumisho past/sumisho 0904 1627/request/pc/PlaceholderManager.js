

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.PlaceholderManager');
	MYNAMESPACE.view.PlaceholderManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.PlaceholderManager.prototype = {
		_instances			: {}
		,_classNum			: -1
		,_currentIndex			: -1

		,initialize: function() {//初期設定的な
			var thisObj = this;
			this._instances = {//
			}
			_.bindAll(
				this
				,'placeholder'
				,'placeholderForIE'
			);
		}
		,placeholder: function(arr) {
			var thisObj = this;
/*社名*/		$('input.firstName')				.attr('placeholder','例:住商')
			$('input.lastName')					.attr('placeholder','例:太郎')
/*社名*/		$('input.firstNameKatakana')		.attr('placeholder','例:スミショウ')
			$('input.lastNameKatakana')			.attr('placeholder','例:タロウ')
			$('input.Tel3_1')					.attr('placeholder','例:03')
			$('input.Tel3_2')					.attr('placeholder','例:1234')
			$('input.Tel3_3')					.attr('placeholder','例:5678')
			$('input.BirthYear')				.attr('placeholder','例:1980')
			$('input.BirthMonth')				.attr('placeholder','例: 1')
			$('input.Birthdate')				.attr('placeholder','例: 1')
			$('input.Age')						.attr('placeholder','例:33')
			$('input.Familiy_Num')				.attr('placeholder','例:4')
/*社名*/		$('input.Mail')						.attr('placeholder','例:abc@abcdfgh.co.jp')
/*社名*/		$('input.MobileMail')				.attr('placeholder','例:abc@abcdfgh.co.jp')
			$('input.Address_Num_1st')			.attr('placeholder','例:000')
			$('input.Address_Num_2nd')			.attr('placeholder','例:0001')
			$('input.Address_text_2nd')			.attr('placeholder','例:中央区')
			$('input.Address_text_3rd')			.attr('placeholder','例:晴海１丁目')
			$('input.Address_text_4th')			.attr('placeholder','例:８－１１－１０１')
			$('input.Address_HouseName')		.attr('placeholder','例:クラッシィ〇〇')
			$('input.Familiy_Num')				.attr('placeholder','例:4')
			$('input.CompanyName')				.attr('placeholder','例:住友商事株式会社')
			$('input.SelfMoney')				.attr('placeholder','例:600')
			$('input.AreaSize')					.attr('placeholder','例:80')
			$('input.HopeArea')					.attr('placeholder','例:世田谷区')

// /*社名*/		$('input[markerPH="firstName"]')				.attr('placeholder','有楽')
// /*社名*/		$('input.firstNameHiragana')		.attr('placeholder','にゅうりょく')
			// $('input.lastNameHiragana')			.attr('placeholder','たろう')
			// $('input.Tel1_hyphen')				.attr('placeholder','03-xxxx-xxxx')
			// $('input.Tel1_nohyphen')			.attr('placeholder','03xxxxyyyy')
			// $('input.Mail_beforeAt')			.attr('placeholder','○○○○')
// /*社名*/		$('input.Mail_afterAt')				.attr('placeholder','yuraku.co.jp')
			// $('input.Address_Num_hyphen')		.attr('placeholder','xxx-yyyy')
			// $('input.Address_Num_nohyphen')		.attr('placeholder','xxxyyyy')
			// $('input.Address_text_1st')		.attr('placeholder','東京都')
			// $('input.Reserve_Month')			.attr('placeholder','4')
			// $('input.Reserve_Day')				.attr('placeholder','1')
			// $('input.Reserve_Time')				.attr('placeholder','14')
			// $('input.     ')					.attr('placeholder',$('#col_21').closest('td').text().replace('（','').replace('）',''))
			// $('input.     ')					.attr('placeholder',$('#col_22').closest('td').text().replace('（','').replace('）',''))
			// $('input.     ')					.attr('placeholder',$('#col_23').closest('td').text().replace('（','').replace('）',''))
			// $('input.     ')					.attr('placeholder',$('#col_24').closest('td').text().replace('（','').replace('）',''))
			// $('input.     ')					.closest('td').html($('#col_21').closest('td').find('input'))
			// $('input.     ')					.closest('td').html($('#col_22').closest('td').find('input'))
			// $('input.     ')					.closest('td').html($('#col_23').closest('td').find('input'))
			// $('input.     ')					.closest('td').html($('#col_24').closest('td').find('input'))
		}
		,placeholderForIE: function() {
			var thisObj = this;

//pluginとの競合処理
			$('[placeholder]').ahPlaceholder({
				placeholderColor : '#a9a9a9',
				placeholderAttr : 'placeholder',
				likeApple : false
			});
//placeholderの値がsubmitされないための処理はsubmitmannagerへ
			var FirstNameFurigana = null;
			var lastNameFurigana = null;

			// if($('.firstNameKatakana').length !== 0){
				FirstNameFurigana = $('.firstNameKatakana')
			// }
			// if($('.firstNameHiragana').length !== 0){
				FirstNameFurigana = $('.firstNameHiragana')
			// }
			// if($('.lastNameKatakana').length !== 0){
				lastNameFurigana = $('.lastNameKatakana')
			// }
			// if($('.lastNameHiragana').length !== 0){
				lastNameFurigana = $('.lastNameHiragana')
			// }

				$('input.firstName')
					.blur(function() {
						FirstNameFurigana.blur()
					})
					.keyup(function() {
						if ((FirstNameFurigana.val() !== '') && (FirstNameFurigana.val() !== FirstNameFurigana.attr('placeholder'))){//value空じゃなかったら
							FirstNameFurigana.css('color','black');
						}
					})
				$('input.lastName')
					.blur(function() {
						lastNameFurigana.blur()
					})
					.keyup(function() {
						if ((lastNameFurigana.val() !== '') && (lastNameFurigana.val() !== lastNameFurigana.attr('placeholder'))){//value空じゃなかったら
							lastNameFurigana.css('color','black');
						}
					})

				$(window).on('beforeunload', function() {
					$('input').val('')//placeholderのみ削除の場合、「例:・・・」と照合
				});
		}
	}
});
