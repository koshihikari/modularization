

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
		,_currentIndex		: -1
		,_AAT1				:null
		,_AAT2				:null
		,_AAT3				:null
		,_first				:null
		,_last				:null
		,_firstKana			:null
		,_firstKanaJ		:null
		,_lastKana			:null
		,_lastKanaJ			:null

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
			$('form').on('focus', '.AutoAddressText1,.AutoAddressText2,.AutoAddressText3', function(event) {
				var thisInput = $(this)
				thisObj._AAT1 = $('input.AutoAddressText1')
				thisObj._AAT2 = $('input.AutoAddressText2')
				thisObj._AAT3 = $('input.AutoAddressText3')

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
						if ((thisObj._AAT1.val() !== '') && (thisObj._AAT1.val() !== thisObj._AAT1.attr('placeholder'))){//value空じゃなかったら
							thisObj._AAT1.removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								thisObj._AAT1.css('color','black');
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
						if ((thisObj._AAT2.length !== 0) && (thisObj._AAT2.val() !== '') && (thisObj._AAT2.val() !== thisObj._AAT2.attr('placeholder'))){
							thisObj._AAT2.removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								thisObj._AAT2.css('color','black');
							}
							if (thisObj._timer) {
								clearInterval(thisObj._timer);//blurしたら消す（２重防止）
								// console.log(2)
							}
							$(thisObj).trigger('onChangeBlankLength');
						}
						if ((thisObj._AAT3.length !== 0) && (thisObj._AAT3.val() !== '') && (thisObj._AAT3.val() !== thisObj._AAT3.attr('placeholder'))){
							thisObj._AAT3.removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								thisObj._AAT3.css('color','black');
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
			$('form').on('blur', 'input.firstName', function() {
				$j('input.firstNameKatakana,input.firstNameHiragana').blur();
				 $('input.firstNameKatakana,input.firstNameHiragana').blur();
				$('#err_'+$('input.firstNameKatakana').attr('id')).hide()
				$('#err_'+$('input.firstNameHiragana').attr('id')).hide()
			})
			$('form').on('blur', 'input.lastName', function() {
				$j('input.lastNameKatakana,input.lastNameHiragana').blur();
				 $('input.lastNameKatakana,input.lastNameHiragana').blur();
				$('#err_'+$('input.lastNameKatakana').attr('id')).hide()
				$('#err_'+$('input.lastNameHiragana').attr('id')).hide()
			})

			if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
				//placeholderの色が残ってしまった時に黒にする。
				$('form').on('keyup blur', 'input.firstName', function() {
					if (($('input.firstNameKatakana').length !== 0) && ($('input.firstNameKatakana').val() !== '') && ($('input.firstNameKatakana').val() !== $('input.firstNameKatakana').attr('placeholder'))){//value空じゃなかったら
						$('input.firstNameKatakana').css('color','black');
					}
					if (($('input.firstNameHiragana').length !== 0) && ($('input.firstNameHiragana').val() !== '') && ($('input.firstNameHiragana').val() !== $('input.firstNameHiragana').attr('placeholder'))){//value空じゃなかったら
						$('input.firstNameHiragana').css('color','black');
					}
				})
				$('form').on('keyup blur', 'input.lastName', function() {
					if (($('input.lastNameKatakana').length !== 0) && ($('input.lastNameKatakana').val() !== '') && ($('input.lastNameKatakana').val() !== $('input.lastNameKatakana').attr('placeholder'))){//value空じゃなかったら
						$('input.lastNameKatakana').css('color','black');
					}
					if (($('input.lastNameHiragana').length !== 0) && ($('input.lastNameHiragana').val() !== '') && ($('input.lastNameHiragana').val() !== $('input.lastNameHiragana').attr('placeholder'))){//value空じゃなかったら
						$('input.lastNameHiragana').css('color','black');
					}
				})
				//漢字のみ入力があり、かつ漢字へ追加入力した際や、フォーカスしてすぐに入力した際でも、placeholderが残らないようにする施策。
				$('form').on('focus', 'input.lastName', function() {
					if($('input.lastNameKatakana').val() === $('input.lastNameKatakana').attr('placeholder')){
						$('input.lastNameKatakana').val('')
					}
					if($('input.lastNameHiragana').val() === $('input.lastNameHiragana').attr('placeholder')){
						$('input.lastNameHiragana').val('')
					}
				})
				$('form').on('focus', 'input.firstName', function() {
					if($('input.firstNameKatakana').val() === $('input.firstNameKatakana').attr('placeholder')){
						$('input.firstNameKatakana').val('')
					}
					if($('input.firstNameHiragana').val() === $('input.firstNameHiragana').attr('placeholder')){
						$('input.firstNameHiragana').val('')
					}
				})
			}
		}
	}
});