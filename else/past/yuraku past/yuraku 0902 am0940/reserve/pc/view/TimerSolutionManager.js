

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.TimerSolutionManager');
	MYNAMESPACE.view.TimerSolutionManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.TimerSolutionManager.prototype = {
		_instances			: {}
		,_timer				: -1
		,_timerIE10				: -1
		,_classNum			: -1
		,_currentIndex			: -1
		,_AutoAddressNum1Name  : null
		,_AutoAddressNum2Name  : null
		,_AutoAddressText1Name : null
		,_AutoAddressText2Name : null
		,_AutoAddressText3Name : null
		,initialize: function() {//初期設定的な
			var thisObj = this;
			this._instances = {//
			}
			_.bindAll(
				this
				,'timerSolutionAddressAndPlaceholder'
				,'timerSolutionAddressAndPlaceholderForIE10'
				,'timerSolutionKanaAndPlaceholder'
			);
			this._AutoAddressNum1Name  = $('.AutoAddressNum1').attr('name') 
			this._AutoAddressNum2Name  = $('.AutoAddressNum2').attr('name') 
			this._AutoAddressText1Name = $('.AutoAddressText1').attr('name')
			this._AutoAddressText2Name = $('.AutoAddressText2').attr('name')
			this._AutoAddressText3Name = $('.AutoAddressText3').attr('name')
		}
		,timerSolutionAddressAndPlaceholder: function() {//住所自動入力に伴うremoveClass(blank)とforIE文字黒
			var thisObj = this;
			var AutoAddressText1 = $('.AutoAddressText1')
			var AutoAddressText2 = $('.AutoAddressText2')
			var AutoAddressText3 = $('.AutoAddressText3')
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
					},
					100//setInterval(function(x){～},100) 100は0.1秒
				);
			})
		}
		,timerSolutionAddressAndPlaceholderForIE10: function(N1,N2,T1,T2,T3) {//住所自動入力に伴うremoveClass(blank)とforIE文字黒
			var thisObj = this;
			var AutoAddressNum1 = $('.AutoAddressNum1')
			var AutoAddressNum2 = $('.AutoAddressNum2')
			var AutoAddressText1 = $('.AutoAddressText1')
			var AutoAddressText2 = $('.AutoAddressText2')
			var AutoAddressText3 = $('.AutoAddressText3')
// 
// alert('here is timerSolutionAddressAndPlaceholderForIE10'+','+N1+','+N2+','+T1+','+T2+','+T3)
				// if (thisObj._timerIE10) {
				// 	clearInterval(thisObj._timerIE10);//タイマー回ってたら消す（２重防止）
				// }
				// thisInput.on('blur', function(event) {
				// // thisInput.on('blur', function(event) {
				// 	if (thisObj._timerIE10) {
				// 		clearInterval(thisObj._timerIE10);//blurしたら消す（２重防止）
				// 	}
				// })
				thisObj._timerIE10 = setInterval(
					function() {//name変換
						if(AutoAddressNum1.attr('name')  != N1){
						//	alert(1); 
							AutoAddressNum1 .attr('name', N1)
						};
						if(AutoAddressNum2.attr('name')  != N2){
						//	alert(2); 
							AutoAddressNum2 .attr('name', N2)
						};
						if(AutoAddressText1.attr('name') != T1){
						//	alert(3); 
							AutoAddressText1.attr('name', T1)
						};
						if(AutoAddressText2.attr('name') != T2){
						//	alert(4); 
							AutoAddressText2.attr('name', T2)
						};
						if(AutoAddressText3.attr('name') != T3){
						//	alert(5); 
							AutoAddressText3.attr('name', T3)
						};
						if ((AutoAddressText1.val() !== '') && (AutoAddressText1.val() !== AutoAddressText1.attr('placeholder'))){//value空じゃなかったら
							AutoAddressText1.removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								AutoAddressText1.css('color','black');
							}
							// if ((AutoAddressText2.length === 0) && (AutoAddressText3.length === 0)){
							// 	// if (thisObj._timerIE10) {
							// 	// 	clearInterval(thisObj._timerIE10);//blurしたら消す（２重防止）
							// 	// 	// console.log('1 end')
							// 	// }
							// }
							$(thisObj).trigger('onChangeBlankLength');
									// console.log(1)
						}
						if ((AutoAddressText2.length !== 0) && (AutoAddressText2.val() !== '') && (AutoAddressText2.val() !== AutoAddressText2.attr('placeholder'))){
							AutoAddressText2.removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								AutoAddressText2.css('color','black');
							}
							// if (thisObj._timerIE10) {
							// 	clearInterval(thisObj._timerIE10);//blurしたら消す（２重防止）
							// 	// console.log(2)
							// }
							$(thisObj).trigger('onChangeBlankLength');
						}
						if ((AutoAddressText3.length !== 0) && (AutoAddressText3.val() !== '') && (AutoAddressText3.val() !== AutoAddressText3.attr('placeholder'))){
							AutoAddressText3.removeClass('blank');
							if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
								AutoAddressText3.css('color','black');
							}
							// if (thisObj._timerIE10) {
							// 	clearInterval(thisObj._timerIE10);//（２重防止）
							// 	// console.log(3)
							// }
							$(thisObj).trigger('onChangeBlankLength');
						}
						// console.log('a')
					},
					100//setInterval(function(x){～},100) 100は0.1秒
					// 100//setInterval(function(x){～},100) 100は0.1秒
				);
			// })
		}
		,timerSolutionKanaAndPlaceholder: function() {//カナ自動入力に伴うremoveClass(blank)とforIE文字黒、PS消去
			$('form').on('blur', '.firstName', function() {
				$j('.firstNameKatakana,.firstNameHiragana').blur();
				 $('.firstNameKatakana,.firstNameHiragana').blur();
				$('#err_'+$('.firstNameKatakana').attr('id')).hide()
				$('#err_'+$('.firstNameHiragana').attr('id')).hide()

			})
			$('form').on('blur', '.lastName', function() {
				$j('.lastNameKatakana,.lastNameHiragana').blur();
				 $('.lastNameKatakana,.lastNameHiragana').blur();
				$('#err_'+$('.lastNameKatakana').attr('id')).hide()
				$('#err_'+$('.lastNameHiragana').attr('id')).hide()
			})

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