

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
		,_isCorrect			: true
		,_isCorrect2			: true
		,_isCorrect3			: true
		,_isCorrect4			: true
		,_isCorrect5			: true

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
			if($('html').hasClass('ie9') === true){

				$j('.AutoAddressText2').blur(function(event) {
					if(thisObj._isCorrect3 === true){
						thisObj._isCorrect3 = false
						// alert('$j')
						if($j(this).val() == $j(this).attr('placeholder')){
							$j(this).val('')
						}
						// alert('$j2')
						$j(this).blur()
						$(this).blur()
					}
				})
				$j('.AutoAddressText3').blur(function(event) {
					if(thisObj._isCorrect4 === true){
						thisObj._isCorrect4 = false
						// alert('$j')
						if($j(this).val() == $j(this).attr('placeholder')){
							$j(this).val('')
						}
						// alert('$j2')
						$j(this).blur()
						$(this).blur()
					}
				})
				$j('#col_23').blur(function(event) {
					if(thisObj._isCorrect5 === true){
						thisObj._isCorrect5 = false
						// alert('$j')
						if($j(this).val() == $j(this).attr('placeholder')){
							$j(this).val('')
						}
						// alert('$j2')
						$j(this).blur()
						$(this).blur()
					}
				})

				$('form').on('blur', '.AutoAddressText2', function(event) {
					thisObj._isCorrect3 = true
				})
				$('form').on('blur', '.AutoAddressText3', function(event) {
					thisObj._isCorrect4 = true
				})
				$('form').on('blur', '#col_23', function(event) {
					thisObj._isCorrect5 = true
				})
			}






			$('form').on('focus', '.AutoAddressText1,.AutoAddressText2,.AutoAddressText3', function(event) {
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
						if (($('.AutoAddressText1').val() !== '') && ($('.AutoAddressText1').val() !== $('.AutoAddressText1').attr('placeholder'))){//value空じゃなかったら
							$('.AutoAddressText1').removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								$('.AutoAddressText1').css('color','black');
							}
							if (($('#AutoAddressText2').length === 0) && ($('#AutoAddressText3').length === 0)){
								
								if (thisObj._timer) {
									clearInterval(thisObj._timer);
									// console.log('1 end')
								}
							}
							$(thisObj).trigger('onChangeBlankLength');
									// console.log(1)
						}
						if (($('.AutoAddressText2').length !== 0) && ($('.AutoAddressText2').val() !== '') && ($('.AutoAddressText2').val() !== $('.AutoAddressText2').attr('placeholder'))){
							$('.AutoAddressText2').removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								$('.AutoAddressText2').css('color','black');
							}
							if (thisObj._timer) {
								clearInterval(thisObj._timer);
								// console.log(2)
							}
							$(thisObj).trigger('onChangeBlankLength');
						}
						if (($('.AutoAddressText3').length !== 0) && ($('.AutoAddressText3').val() !== '') && ($('.AutoAddressText3').val() !== $('.AutoAddressText3').attr('placeholder'))){
							$('.AutoAddressText3').removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								$('.AutoAddressText3').css('color','black');
							}
							if (thisObj._timer) {
								clearInterval(thisObj._timer);
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
			var thisObj = this;

//ie9専用↓↓↓↓↓↓―――――――――――――――――――――――――――――――――――
			if($('html').hasClass('ie9') === true){
				$j('.firstName').blur(function() {
					if(thisObj._isCorrect === true){
						thisObj._isCorrect = false
						// alert('$j')
						if($j(this).val() == $j(this).attr('placeholder')){
							$j('.firstName').val('')
						}
						// alert('$j2')
						$j('.firstName').blur()
						$('.firstName').blur()
					}
				})
				$j('.lastName').blur(function() {
					if(thisObj._isCorrect2 === true){
						thisObj._isCorrect2 = false
						// alert('$j')
						if($j(this).val() == $j(this).attr('placeholder')){
							$j('.lastName').val('')
						}
						// alert('$j2')
						$j('.lastName').blur()
						$('.lastName').blur()
					}
				})
			}
//ie9専用↑↑↑↑↑↑↑―――――――――――――――――――――――――――――――――――
			$('form').on('blur', '.firstName', function() {
				// alert('$')
				if($('html').hasClass('ie9') === true){//ie9
					thisObj._isCorrect = true
				}
				$j('.firstNameKatakana,.firstNameHiragana').blur();
				 $('.firstNameKatakana,.firstNameHiragana').blur();
				$('#err_'+$('.firstNameKatakana').attr('id')).hide()
				$('#err_'+$('.firstNameHiragana').attr('id')).hide()
// ―――――――――――――――――――――――――――――――――――
			})
 			$('form').on('blur', '.lastName', function() {
 				if($('html').hasClass('ie9') === true){//ie9
					thisObj._isCorrect2 = true
				}
				$j('.lastNameKatakana,.lastNameHiragana').blur();
 				 $('.lastNameKatakana,.lastNameHiragana').blur();
				$('#err_'+$('.lastNameKatakana').attr('id')).hide()
				$('#err_'+$('.lastNameHiragana').attr('id')).hide()
			})
// ―――――――――――――――――――――――――――――――――――







/*修正0823*/	
			if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){

				//placeholderの色が残ってしまった時に黒にする。

				$('form').on('keyup blur', '.firstName', function() {
					if (($('.firstNameKatakana').length !== 0) && ($('.firstNameKatakana').val() !== '') && ($('.firstNameKatakana').val() !== $('.firstNameKatakana').attr('placeholder'))){//value空じゃなかったら
						$('.firstNameKatakana').css('color','black');
					}
					if (($('.firstNameHiragana').length !== 0) && ($('.firstNameHiragana').val() !== '') && ($('.firstNameHiragana').val() !== $('.firstNameHiragana').attr('placeholder'))){//value空じゃなかったら
						$('.firstNameHiragana').css('color','black');
					}
				})
				$('form').on('keyup blur', '.lastName', function() {
					if (($('.lastNameKatakana').length !== 0) && ($('.lastNameKatakana').val() !== '') && ($('.lastNameKatakana').val() !== $('.lastNameKatakana').attr('placeholder'))){//value空じゃなかったら
						$('.lastNameKatakana').css('color','black');
					}
					if (($('.lastNameHiragana').length !== 0) && ($('.lastNameHiragana').val() !== '') && ($('.lastNameHiragana').val() !== $('.lastNameHiragana').attr('placeholder'))){//value空じゃなかったら
						$('.lastNameHiragana').css('color','black');
					}
				})
				//漢字のみ入力があり、かつ漢字へ追加入力した際や、フォーカスしてすぐに入力した際でも、placeholderが残らないようにする施策。
				$('form').on('focus', '.lastName', function() {
					if($('.lastNameKatakana').val() === $('.lastNameKatakana').attr('placeholder')){
						$('.lastNameKatakana').val('')
					}
					if($('.lastNameHiragana').val() === $('.lastNameHiragana').attr('placeholder')){
						$('.lastNameHiragana').val('')
					}
				})
				$('form').on('focus', '.firstName', function() {
					if($('.firstNameKatakana').val() === $('.firstNameKatakana').attr('placeholder')){
						$('.firstNameKatakana').val('')
					}
					if($('.firstNameHiragana').val() === $('.firstNameHiragana').attr('placeholder')){
						$('.firstNameHiragana').val('')
					}
				})
			}
		}
	}
});