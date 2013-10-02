

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.TimerSolutionManager');
	MYNAMESPACE.view.TimerSolutionManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.TimerSolutionManager.prototype = {
		_instances			: {}
		,_timer				: -1
		,_classNum			: -1
		,_currentIndex			: -1

		,initialize: function() {//初期設定的な
			var thisObj = this;
			this._instances = {//
			}
			_.bindAll(
				this
				,'timerSolutionAddressAndPlaceholder'
				,'timerSolutionKanaAndPlaceholder'
			);
		}
		,timerSolutionAddressAndPlaceholder: function() {//住所自動入力に伴うremoveClass(blank)とforIE文字黒
			var thisObj = this;
			$('form').on('focus', '#AutoAddressText1,#AutoAddressText2,#AutoAddressText3', function(event) {
				var thisInput = $(this)
				if (thisObj._timer) {
					clearInterval(thisObj._timer);//タイマー回ってたら消す（２重防止）
				}
				thisInput.on('blur', function(event) {
					if (thisObj._timer) {
						clearInterval(thisObj._timer);//blurしたら消す（２重防止）
					}
				})
				thisObj._timer = setInterval(
					function() {
						if (($('#AutoAddressText1').val() !== '') && ($('#AutoAddressText1').val() !== $('#AutoAddressText1').attr('placeholder'))){//value空じゃなかったら
							$('#AutoAddressText1').removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								$('#AutoAddressText1').css('color','black');
							}
							if (($('#AutoAddressText2').length === 0) && ($('#AutoAddressText3').length === 0)){
								if (thisObj._timer) {
									clearInterval(thisObj._timer);//blurしたら消す（２重防止）
									// console.log('1 end')
								}
							}
							$(thisObj).trigger('onChangeBlankLength');
									// console.log(1)
						}
						if (($('#AutoAddressText2').length !== 0) && ($('#AutoAddressText2').val() !== '') && ($('#AutoAddressText2').val() !== $('#AutoAddressText2').attr('placeholder'))){
							$('#AutoAddressText2').removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								$('#AutoAddressText2').css('color','black');
							}
							if (thisObj._timer) {
								clearInterval(thisObj._timer);//blurしたら消す（２重防止）
								// console.log(2)
							}
							$(thisObj).trigger('onChangeBlankLength');
						}
						if (($('#AutoAddressText3').length !== 0) && ($('#AutoAddressText3').val() !== '') && ($('#AutoAddressText3').val() !== $('#AutoAddressText3').attr('placeholder'))){
							$('#AutoAddressText3').removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								$('#AutoAddressText3').css('color','black');
							}
							if (thisObj._timer) {
								clearInterval(thisObj._timer);//blurしたら消す（２重防止）
								// console.log(3)
							}
							$(thisObj).trigger('onChangeBlankLength');
						}
						// console.log('a')
					},
					100//setInterval(function(x){～},100) 100は0.1秒
				);
			})
		}
		,timerSolutionKanaAndPlaceholder: function() {//カナ自動入力に伴うremoveClass(blank)とforIE文字黒、PS消去
			var firstNameKatakana = $('input.firstNameKatakana')
			var firstNameHiragana = $('input.firstNameHiragana')
			var lastNameKatakana = $('input.lastNameKatakana')
			var lastNameHiragana = $('input.lastNameHiragana')

			$('form').on('blur', 'input.firstName', function() {
				$j('input.firstNameKatakana,input.firstNameHiragana').blur();
				 $('input.firstNameKatakana,input.firstNameHiragana').blur();
				$('#err_'+firstNameKatakana.attr('id')).hide()
				$('#err_'+firstNameHiragana.attr('id')).hide()
			})
			$('form').on('blur', 'input.lastName', function() {
				$j('input.lastNameKatakana,input.lastNameHiragana').blur();
				 $('input.lastNameKatakana,input.lastNameHiragana').blur();
				$('#err_'+lastNameKatakana.attr('id')).hide()
				$('#err_'+lastNameHiragana.attr('id')).hide()
			})

			if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
				//placeholderの色が残ってしまった時に黒にする。
				$('form').on('keyup blur', 'input.firstName', function() {
					if ((firstNameKatakana.length !== 0) && (firstNameKatakana.val() !== '') && (firstNameKatakana.val() !== firstNameKatakana.attr('placeholder'))){//value空じゃなかったら
						firstNameKatakana.css('color','black');
					}
					if ((firstNameHiragana.length !== 0) && (firstNameHiragana.val() !== '') && (firstNameHiragana.val() !== firstNameHiragana.attr('placeholder'))){//value空じゃなかったら
						firstNameHiragana.css('color','black');
					}
				})
				$('form').on('keyup blur', 'input.lastName', function() {
					if ((lastNameKatakana.length !== 0) && (lastNameKatakana.val() !== '') && (lastNameKatakana.val() !== lastNameKatakana.attr('placeholder'))){//value空じゃなかったら
						lastNameKatakana.css('color','black');
					}
					if ((lastNameHiragana.length !== 0) && (lastNameHiragana.val() !== '') && (lastNameHiragana.val() !== lastNameHiragana.attr('placeholder'))){//value空じゃなかったら
						lastNameHiragana.css('color','black');
					}
				})
// //住商 ↓
// 				var InputAge = $('#txtAge')
// 				$('form').on('keyup blur', '#txtYeaar,#txtMonth,#txtDay', function() {
// 					if ((InputAge.val() !== '') && (InputAge.val() !== InputAge.attr('placeholder'))){//value空じゃなかったら
// 						lastNameKatakana.css('color','black');
// 					}
// 					if ((lastNameHiragana.length !== 0) && (lastNameHiragana.val() !== '') && (lastNameHiragana.val() !== lastNameHiragana.attr('placeholder'))){//value空じゃなかったら
// 						lastNameHiragana.css('color','black');
// 					}
// 				})
// //住商 ↑
				//漢字のみ入力があり、かつ漢字へ追加入力した際や、フォーカスしてすぐに入力した際でも、placeholderが残らないようにする施策。
				$('form').on('focus', 'input.lastName', function() {
					if(lastNameKatakana.val() === lastNameKatakana.attr('placeholder')){
						lastNameKatakana.val('')
					}
					if(lastNameHiragana.val() === lastNameHiragana.attr('placeholder')){
						lastNameHiragana.val('')
					}
				})
				$('form').on('focus', 'input.firstName', function() {
					if(firstNameKatakana.val() === firstNameKatakana.attr('placeholder')){
						firstNameKatakana.val('')
					}
					if(firstNameHiragana.val() === firstNameHiragana.attr('placeholder')){
						firstNameHiragana.val('')
					}
				})
			}
		}
	}
});