

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.TimerSolutionManager');
	MYNAMESPACE.view.TimerSolutionManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.TimerSolutionManager.prototype = {
		_instances				: {}
		,_timer					: -1
		,_timerIE10				: -1
		,_roopTimes				: -1
		,_classNum				: -1
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
				,'setIntervalForCheck'
				,'timerSolutionAddressAndPlaceholderForIE10'
				,'timerSolutionKanaAndPlaceholder'
				,'sameMailRealtimeBlur'
			);
			this._AutoAddressNum1Name  = $('.AutoAddressNum1').attr('name') 
			this._AutoAddressNum2Name  = $('.AutoAddressNum2').attr('name') 
			this._AutoAddressText1Name = $('.AutoAddressText1').attr('name')
			this._AutoAddressText2Name = $('.AutoAddressText2').attr('name')
			this._AutoAddressText3Name = $('.AutoAddressText3').attr('name')
		}
		,timerSolutionAddressAndPlaceholder: function() {//住所自動入力に伴うremoveClass(NT_blank)とforIE文字黒
			var thisObj = this;
			var thisInput = $('.AutoAddressText1,.AutoAddressText2,.AutoAddressText3')
			thisInput.on('blur', function(event) {
				if (thisObj._timer) {
					clearInterval(thisObj._timer);//blurしたら消す（２重防止）
				}
			})

			$('form.NT_mainForm').on('focus', '.AutoAddressText1,.AutoAddressText2,.AutoAddressText3', function(event) {
				if (thisObj._timer) {
					clearInterval(thisObj._timer);//タイマー回ってたら消す（２重防止）
				}
				thisObj.setIntervalForCheck()
			})
			$('form.NT_mainForm').on('click', '#B1', function(event) {
				if (thisObj._timer) {
					clearInterval(thisObj._timer);//タイマー回ってたら消す（２重防止）
				}
				thisObj.setIntervalForCheck()
			})
		}
		,setIntervalForCheck: function() {//カナ自動入力に伴うremoveClass(NT_blank)とforIE文字黒、PS消去
			var thisObj = this;
			var AutoAddressText1 = $('.AutoAddressText1')
			var AutoAddressText2 = $('.AutoAddressText2')
			var AutoAddressText3 = $('.AutoAddressText3')
			thisObj._timer = setInterval(function(){
				if ((AutoAddressText1.val() !== '') && (AutoAddressText1.val() !== AutoAddressText1.attr('placeholder'))){//value空じゃなかったら
					AutoAddressText1.removeClass('NT_blank');
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
					AutoAddressText2.removeClass('NT_blank');
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
					AutoAddressText3.removeClass('NT_blank');
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
		,timerSolutionAddressAndPlaceholderForIE10: function(N1,N2,T1,T2,T3,rimit) {//住所自動入力に伴うremoveClass(NT_blank)とforIE文字黒
			var thisObj = this;
			var AutoAddressNum1  = $('.AutoAddressNum1')
			var AutoAddressNum2  = $('.AutoAddressNum2')
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
						if((thisObj._roopTimes-0) === rimit-0){
							// alert('stop')
							clearInterval(thisObj._timerIE10);
						}
						if($('.AutoAddressNum1').attr('name')  != N1){
							// alert('NG1'); 
							$('.AutoAddressNum1') .attr('name', N1)
						} else {
							// alert('ok1')
						}
						if($('.AutoAddressNum2').attr('name')  != N2){
							// alert('NG2'); 
							$('.AutoAddressNum2') .attr('name', N2)
						} else {
							// alert('ok2')
						}
						if($('.AutoAddressText1').attr('name') != T1){
							// alert('NG3'); 
							$('.AutoAddressText1').attr('name', T1)
						} else {
							// alert('ok3')
						}
						if($('.AutoAddressText2').attr('name') != T2){
							// alert('NG4'); 
							$('.AutoAddressText2').attr('name', T2)
						} else {
							// alert('ok4')
						}
						if($('.AutoAddressText3').attr('name') != T3){
							// alert('NG5'); 
							$('.AutoAddressText3').attr('name', T3)
						} else {
							// alert('ok5')
						}
						if ((AutoAddressText1.val() !== '') && (AutoAddressText1.val() !== AutoAddressText1.attr('placeholder'))){//value空じゃなかったら
							AutoAddressText1.removeClass('NT_blank');
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
							AutoAddressText2.removeClass('NT_blank');
							// if (thisObj._timerIE10) {
							// 	clearInterval(thisObj._timerIE10);//blurしたら消す（２重防止）
							// 	// console.log(2)
							// }
							$(thisObj).trigger('onChangeBlankLength');
						}
						if ((AutoAddressText3.length !== 0) && (AutoAddressText3.val() !== '') && (AutoAddressText3.val() !== AutoAddressText3.attr('placeholder'))){
							AutoAddressText3.removeClass('NT_blank');
							// if (thisObj._timerIE10) {
							// 	clearInterval(thisObj._timerIE10);//（２重防止）
							// 	// console.log(3)
							// }
							$(thisObj).trigger('onChangeBlankLength');
						}
						// console.log('a')
						thisObj._roopTimes = (thisObj._roopTimes-0+1)
					},
					100//setInterval(function(x){～},100) 100は0.1秒
					// 100//setInterval(function(x){～},100) 100は0.1秒
				);
			// })
		}
		,timerSolutionKanaAndPlaceholder: function() {//カナ自動入力に伴うremoveClass(NT_blank)とforIE文字黒、PS消去
			$('form.NT_mainForm').on('blur', 'input.firstName', function() {
				$j('input.firstNameKatakana,input.firstNameHiragana').blur();
				 $('input.firstNameKatakana,input.firstNameHiragana').blur();
				$('#err_'+$('input.firstNameKatakana').attr('id')).hide()
				$('#err_'+$('input.firstNameHiragana').attr('id')).hide()

			})
			$('form.NT_mainForm').on('blur', 'input.lastName', function() {
				$j('input.lastNameKatakana,input.lastNameHiragana').blur();
				 $('input.lastNameKatakana,input.lastNameHiragana').blur();
				$('#err_'+$('input.lastNameKatakana').attr('id')).hide()
				$('#err_'+$('input.lastNameHiragana').attr('id')).hide()
			})

			if(($('html').hasClass('ie') === true)||($('html').hasClass('ie9') === true)){
				//placeholderの色が残ってしまった時に黒にする。
				$('form.NT_mainForm').on('keyup blur', 'input.firstName', function() {
					if (($('input.firstNameKatakana').length !== 0) && ($('input.firstNameKatakana').val() !== '') && ($('input.firstNameKatakana').val() !== $('input.firstNameKatakana').attr('placeholder'))){//value空じゃなかったら
						$('input.firstNameKatakana').css('color','black');
					}
					if (($('input.firstNameHiragana').length !== 0) && ($('input.firstNameHiragana').val() !== '') && ($('input.firstNameHiragana').val() !== $('input.firstNameHiragana').attr('placeholder'))){//value空じゃなかったら
						$('input.firstNameHiragana').css('color','black');
					}
				})
				$('form.NT_mainForm').on('keyup blur', 'input.lastName', function() {
					if (($('input.lastNameKatakana').length !== 0) && ($('input.lastNameKatakana').val() !== '') && ($('input.lastNameKatakana').val() !== $('input.lastNameKatakana').attr('placeholder'))){//value空じゃなかったら
						$('input.lastNameKatakana').css('color','black');
					}
					if (($('input.lastNameHiragana').length !== 0) && ($('input.lastNameHiragana').val() !== '') && ($('input.lastNameHiragana').val() !== $('input.lastNameHiragana').attr('placeholder'))){//value空じゃなかったら
						$('input.lastNameHiragana').css('color','black');
					}
				})
				//漢字のみ入力があり、かつ漢字へ追加入力した際や、フォーカスしてすぐに入力した際でも、placeholderが残らないようにする施策。
				$('form.NT_mainForm').on('focus', 'input.lastName', function() {
					if($('input.lastNameKatakana').val() === $('input.lastNameKatakana').attr('placeholder')){
						$('input.lastNameKatakana').val('')
					}
					if($('input.lastNameHiragana').val() === $('input.lastNameHiragana').attr('placeholder')){
						$('input.lastNameHiragana').val('')
					}
				})
				$('form.NT_mainForm').on('focus', 'input.firstName', function() {
					if($('input.firstNameKatakana').val() === $('input.firstNameKatakana').attr('placeholder')){
						$('input.firstNameKatakana').val('')
					}
					if($('input.firstNameHiragana').val() === $('input.firstNameHiragana').attr('placeholder')){
						$('input.firstNameHiragana').val('')
					}
				})
			}
		}
		,sameMailRealtimeBlur: function() {//住所自動入力に伴うremoveClass(NT_blank)とforIE文字黒
			var thisObj = this;
			var index = 'chkretype-';
			var indexSelector = $('input[class *= "'+index+'"]')
			var arrSameValClass = []

			for (var i=0,len=indexSelector.length; i<len; i++) {
// alert(indexSelector.eq(i).attr('name'))

				var arrayClass = indexSelector.eq(i).attr('class').split(" ")
				for (var j=0,lenJ=arrayClass.length; j<lenJ; j++) {
					if(arrayClass[j].indexOf(index)-0 !== -1){
						arrSameValClass.push(arrayClass[j].replace(index,''))
					}
				}
				$('#'+arrSameValClass[i]).blur(function(){
					var idSameValid = index+$(this).attr('id')
					$j('.'+idSameValid).blur()
					var idSameValSelector = $j('.'+idSameValid).attr('id')
					$('#err_'+idSameValSelector).hide()
				})
			}
		}
	}
});