

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
// /*社名*/		$('input[markerPH="firstName"]')				.attr('placeholder','例：入力')
/*社名*/		$('input.firstName')			.attr('placeholder','例：入力')
			$('input.lastName')				.attr('placeholder','例：太郎')
/*社名*/		$('input.firstNameKatakana')	.attr('placeholder','例：ニュウリョク')
			$('input.lastNameKatakana')		.attr('placeholder','例：タロウ')
/*社名*/		$('input.firstNameHiragana')	.attr('placeholder','例：にゅうりょく')
			$('input.lastNameHiragana')		.attr('placeholder','例：たろう')
			$('input.Tel3_1')				.attr('placeholder','例：03')
			$('input.Tel3_2')				.attr('placeholder','例：xxxx')
			$('input.Tel3_3')				.attr('placeholder','例：xxxx')
			$('input.Tel1_hyphen')			.attr('placeholder','例：03-xxxx-xxxx')
			$('input.Tel1_nohyphen')		.attr('placeholder','例：03xxxxyyyy')
			$('input.BirthYear')			.attr('placeholder','例：1980')
			$('input.BirthMonth')			.attr('placeholder','例：1')
			$('input.Birthdate')			.attr('placeholder','例：1')
			$('input.Age')					.attr('placeholder','例：33')
			$('input.Familiy_Num')			.attr('placeholder','例：4')
/*社名*/		$('input.Mail')					.attr('placeholder','例：xxxxx@aaa.com')
			$('input.Mail_beforeAt')		.attr('placeholder','例：○○○○')
/*社名*/		$('input.Mail_afterAt')			.attr('placeholder','例：nyuryoku.co.jp')
			$('input.Address_Num_hyphen')	.attr('placeholder','例：xxx-yyyy')
			$('input.Address_Num_nohyphen')	.attr('placeholder','例：xxxyyyy')
			$('input.Address_Num_1st')		.attr('placeholder','例：xxx')
			$('input.Address_Num_2nd')		.attr('placeholder','例：yyyy')
			// $('input.Address_text_1st')		.attr('placeholder','例：東京都')
			$('input.Address_text_2nd')		.attr('placeholder','例：新宿区')
			$('input.Address_text_3rd')		.attr('placeholder','例：新宿')
			$('input.Address_text_4th')		.attr('placeholder','例：2-8-8')
			$('input.Address_HouseName')	.attr('placeholder','例：とみん新宿ビル')
			$('input.Reserve_Month')		.attr('placeholder','例：4')
			$('input.Reserve_Day')			.attr('placeholder','例：1')
			$('input.Reserve_Time')			.attr('placeholder','例：14')
			$('input.CompanyName')			.attr('placeholder','例：株式会社プライム不動産')

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

			$(window).on('beforeunload', function() {
				$('input').val('')//placeholderのみ削除の場合、「例:・・・」と照合
			});
		}
	}
});
