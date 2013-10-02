

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.TimerSolutionManager');
	MYNAMESPACE.view.TimerSolutionManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.TimerSolutionManager.prototype = {
		_instances			: {}
		,_timer				: -1
		,_Text1				: null
		,_Text2				: null
		,_Text3				: null

		,initialize: function(DataManagerInstance) {//初期設定的な
			var thisObj = this;
			this._instances = {
				'DataManager'			: DataManagerInstance
			}
			_.bindAll(
				this
				,'ontimerSolutionAddress'
				,'onKanaAutoValidate'
				,'setEvent'
			);
		}
		,ontimerSolutionAddress: function() {//住所自動入力に伴うremoveClass(blank)とforIE文字黒
			var thisObj = this;
			$(thisObj._instances['DataManager']).on('onUserFocusAction', function(event,EventObj,index) {
				if((EventObj.hasClass('NT_AutoAddrText_1')===true)||(EventObj.hasClass('NT_AutoAddrText_2')===true)||(EventObj.hasClass('NT_AutoAddrText_3')===true)){
					thisObj._Text1 = $('input.NT_AutoAddrText_1')
					thisObj._Text2 = $('input.NT_AutoAddrText_2')
					thisObj._Text3 = $('input.NT_AutoAddrText_3')
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
							if (thisObj._Text1.val() !== ''){//value空じゃなかったら
	/*blank付与*/				thisObj._Text1.removeClass('blank');
								$('span.errorMS,span.blankMS,span.okMS').filter('[nt_MS_index="'+thisObj._Text1.attr('nt_base_index')+'"]').remove()
								var thisDivClosestDd = $('div[nt_dd_num="'+thisObj._Text1.attr('nt_dd_num')+'"]').closest('dd')
								if(thisDivClosestDd.find('span').length === 0){
									thisDivClosestDd.addClass('NT_NoMS')
								} else {
									thisDivClosestDd.removeClass('NT_NoMS')
								}
								if ((thisObj._Text2.length === 0) && (thisObj._Text3.length === 0)){
									if (thisObj._timer) {
										clearInterval(thisObj._timer);
										// console.log('1 end')
									}
								}
								$(thisObj).trigger('onChangeBlankLength');
										// console.log(1)
							}
							if ((thisObj._Text2.length !== 0) && (thisObj._Text2.val() !== '')){
								thisObj._Text2.removeClass('blank');
								$('span.errorMS,span.blankMS,span.okMS').filter('[nt_MS_index="'+thisObj._Text2.attr('nt_base_index')+'"]').remove()
								var thisDivClosestDd = $('div[nt_dd_num="'+thisObj._Text2.attr('nt_dd_num')+'"]').closest('dd')
								if(thisDivClosestDd.find('span').length === 0){
									thisDivClosestDd.addClass('NT_NoMS')
								} else {
									thisDivClosestDd.removeClass('NT_NoMS')
								}
								if (thisObj._timer) {
									clearInterval(thisObj._timer);
									// console.log(2)
								}
								$(thisObj).trigger('onChangeBlankLength');
							}
							if ((thisObj._Text3.length !== 0) && (thisObj._Text3.val() !== '')){
								thisObj._Text3.removeClass('blank');
								$('span.errorMS,span.blankMS,span.okMS').filter('[nt_MS_index="'+thisObj._Text3.attr('nt_base_index')+'"]').remove()
								var thisDivClosestDd = $('div[nt_dd_num="'+thisObj._Text3.attr('nt_dd_num')+'"]').closest('dd')
								if(thisDivClosestDd.find('span').length === 0){
									thisDivClosestDd.addClass('NT_NoMS')
								} else {
									thisDivClosestDd.removeClass('NT_NoMS')
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
				}
			})
		}
		,onKanaAutoValidate: function() {//カナ自動入力に伴うremoveClass(blank)とforIE文字黒、PS消去
			var thisObj = this;
			$(thisObj._instances['DataManager']).on('onUserBlurAction', function(event,EventObj,index) {
				if(EventObj.hasClass('NT_firstName')){
					var validateObjK = $('input.NT_firstNameKatakana')
					var validateObjH = $('input.NT_firstNameHiragana')
					if(validateObjK.length != 0){
						thisObj._instances['DataManager'].sendOneValidateObj(validateObjK,'MS_OFF');//メッセージあり
					}
					if(validateObjH.length != 0){
						thisObj._instances['DataManager'].sendOneValidateObj(validateObjH,'MS_OFF');//メッセージあり
					}
				}
				if(EventObj.hasClass('NT_lastName')){
					var validateObjK = $('input.NT_lastNameKatakana')
					var validateObjH = $('input.NT_lastNameHiragana')
					if(validateObjK.length != 0){
						thisObj._instances['DataManager'].sendOneValidateObj(validateObjK,'MS_OFF');//メッセージあり
					}
					if(validateObjH.length != 0){
						thisObj._instances['DataManager'].sendOneValidateObj(validateObjH,'MS_OFF');//メッセージあり
					}
				}
			})
		}
		,setEvent: function() {
			var thisObj = this;
			thisObj.ontimerSolutionAddress()
			thisObj.onKanaAutoValidate()
		}
	}
});