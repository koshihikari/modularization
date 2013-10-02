

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
				,'setIntervalForCheck'
				,'timerSolutionKanaAndPlaceholder'
			);
		}
		,timerSolutionAddressAndPlaceholder: function() {//住所自動入力に伴うremoveClass(blank)とforIE文字黒
			var thisObj = this;
			if($('html').hasClass('ie9') === true){

				$j('#AutoAddressText2').blur(function(event) {
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
				$j('#AutoAddressText3').blur(function(event) {
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

				$('form').on('blur', '#AutoAddressText2', function(event) {
					thisObj._isCorrect3 = true
				})
				$('form').on('blur', '#AutoAddressText3', function(event) {
					thisObj._isCorrect4 = true
				})
				$('form').on('blur', '#col_23', function(event) {
					thisObj._isCorrect5 = true
				})
			}

			var thisInput = $('#AutoAddressText1,#AutoAddressText2,#AutoAddressText3')
			thisInput.on('blur', function(event) {
				if (thisObj._timer) {
					clearInterval(thisObj._timer);//blurしたら消す（２重防止）
				}
			})






			$('form').on('focus', '#AutoAddressText1,#AutoAddressText2,#AutoAddressText3', function(event) {
				if (thisObj._timer) {
					clearInterval(thisObj._timer);//タイマー回ってたら消す（２重防止）
				}
				thisObj.setIntervalForCheck()
			})
			$('form').on('click', '#B1', function(event) {
				if (thisObj._timer) {
					clearInterval(thisObj._timer);//タイマー回ってたら消す（２重防止）
				}
				thisObj.setIntervalForCheck()
			})
		}
		,setIntervalForCheck: function() {//カナ自動入力に伴うremoveClass(blank)とforIE文字黒、PS消去
			var thisObj = this;
			var AutoAddressText1 = $('#AutoAddressText1')
			var AutoAddressText2 = $('#AutoAddressText2')
			var AutoAddressText3 = $('#AutoAddressText3')
			thisObj._timer = setInterval(function(){
				if ((AutoAddressText1.val() !== '') && (AutoAddressText1.val() !== AutoAddressText1.attr('placeholder'))){//value空じゃなかったら
					AutoAddressText1.removeClass('blank');
					if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
						AutoAddressText1.css('color','black');
					}
					if ((AutoAddressText2.length === 0) && (AutoAddressText3.length === 0)){
						if (thisObj._timer) {
							clearInterval(thisObj._timer);//blurしたら消す（２重防止）
							// console.log('1 end')
						}
					}
					$(thisObj).trigger('onChangeBlankLength');
							// console.log(1)
				}
				if ((AutoAddressText2.length !== 0) && (AutoAddressText2.val() !== '') && (AutoAddressText2.val() !== AutoAddressText2.attr('placeholder'))){
					AutoAddressText2.removeClass('blank');
					if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
						AutoAddressText2.css('color','black');
					}
					if (thisObj._timer) {
						clearInterval(thisObj._timer);//blurしたら消す（２重防止）
						// console.log(2)
					}
					$(thisObj).trigger('onChangeBlankLength');
				}
				if ((AutoAddressText3.length !== 0) && (AutoAddressText3.val() !== '') && (AutoAddressText3.val() !== AutoAddressText3.attr('placeholder'))){
					AutoAddressText3.removeClass('blank');
					if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
						AutoAddressText3.css('color','black');
					}
					if (thisObj._timer) {
						clearInterval(thisObj._timer);//blurしたら消す（２重防止）
						// console.log(3)
					}
					$(thisObj).trigger('onChangeBlankLength');
				}
				// console.log('a')
				},100
			);//setInterval(function(x){～},100) 100は0.1秒
		}
		,timerSolutionKanaAndPlaceholder: function() {//カナ自動入力に伴うremoveClass(blank)とforIE文字黒、PS消去
			var thisObj = this;

//ie9専用↓↓↓↓↓↓―――――――――――――――――――――――――――――――――――
			if($('html').hasClass('ie9') === true){
				$j('input.firstName').blur(function() {
					if(thisObj._isCorrect === true){
						thisObj._isCorrect = false
						// alert('$j')
						if($j(this).val() == $j(this).attr('placeholder')){
							$j('input.firstName').val('')
						}
						// alert('$j2')
						$j('input.firstName').blur()
						$('input.firstName').blur()
					}
				})
				$j('input.lastName').blur(function() {
					if(thisObj._isCorrect2 === true){
						thisObj._isCorrect2 = false
						// alert('$j')
						if($j(this).val() == $j(this).attr('placeholder')){
							$j('input.lastName').val('')
						}
						// alert('$j2')
						$j('input.lastName').blur()
						$('input.lastName').blur()
					}
				})
			}
//ie9専用↑↑↑↑↑↑↑―――――――――――――――――――――――――――――――――――
			$('form').on('blur', 'input.firstName', function() {
				// alert('$')
				if($('html').hasClass('ie9') === true){//ie9
					thisObj._isCorrect = true
				}
				$j('input.firstNameKatakana,input.firstNameHiragana').blur();
				 $('input.firstNameKatakana,input.firstNameHiragana').blur();
				$('#err_'+$('input.firstNameKatakana').attr('id')).hide()
				$('#err_'+$('input.firstNameHiragana').attr('id')).hide()
// ―――――――――――――――――――――――――――――――――――
			})
 			$('form').on('blur', 'input.lastName', function() {
 				if($('html').hasClass('ie9') === true){//ie9
					thisObj._isCorrect2 = true
				}
				$j('input.lastNameKatakana,input.lastNameHiragana').blur();
 				 $('input.lastNameKatakana,input.lastNameHiragana').blur();
				$('#err_'+$('input.lastNameKatakana').attr('id')).hide()
				$('#err_'+$('input.lastNameHiragana').attr('id')).hide()
			})
// ―――――――――――――――――――――――――――――――――――







/*修正0823*/	
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