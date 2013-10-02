//有楽仕様あり

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.RealtimeCheckManager');
	MYNAMESPACE.view.RealtimeCheckManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.RealtimeCheckManager.prototype = {
		_instances			: {}
		,_classNum			: -1
		,_currentIndex			: -1

		,initialize: function(ExValidationObj) {//初期設定的な
			var thisObj = this;
			this._instances = {//
			}
			this._ExValidationObj = ExValidationObj
			_.bindAll(
				this
				,'realtimeCheck'
				,'setExValidation'
				,'setBlurAction'
				,'setRadioAction'
				,'setCheckboxAction'
				,'firstValidate'
			);
		}
		,realtimeCheck: function() {
			var thisObj = this;
			thisObj.setExValidation();
			thisObj.setBlurAction();
			thisObj.setRadioAction();
			thisObj.setCheckboxAction();
			thisObj.firstValidate();
		}
		,setExValidation: function() {
			var thisObj = this;
/*check!!!!*/	var validation = $j("form")
				.exValidation({
					firstValidate: true
					,rules: thisObj._ExValidationObj//convert.jsで定義
					,stepValidation: true
					,errFocus:true
					,errMsgPrefix:''
					// ,errHoverHide:true
					,scrollToErr:false
					// ,customSubmit: function() {}
					// ,errInsertPos: 'after'
					 //	,errPosition: 'fixed'
			})
		}
		,setBlurAction: function() {
			var thisObj = this;

			$('.ValidationTextInputAndSelect').blur(function(){
				$(thisObj).trigger('onChangeBlankLength');
			})
		}
		,setRadioAction: function() {
			var thisObj = this;
			$('.ValidationRadioInput').click(function(){
				//判定
				var thisClosestTd = $(this).closest('.ValidationRadioTd')
				if(thisClosestTd.find('.ValidationRadioInput').filter(':checked').val() !== undefined){
					thisClosestTd.removeClass('blank');
				}
				//insertdiv処理
				$(thisObj).trigger('onChangeBlankLength');
			})
		}
		,setCheckboxAction: function() {
			var thisObj = this;
			$('.ValidationCheckboxInput').click(function(){
				var thisClosestTd = $(this).closest('.ValidationCheckboxTd')

//有楽仕様↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
				if(($(this).attr('name') === 'wellith') || ($(this).attr('name') === 'agree_privacy')){
					if($('input[name="wellith"]:checked').val() !== undefined){//wにチェックあり
						if($('input[name="agree_privacy"]:checked').val() === undefined){
							$('input[name="agree_privacy"]').closest('.ValidationCheckboxTd').addClass('blank');
						} else {
							$('input[name="agree_privacy"]').closest('.ValidationCheckboxTd').removeClass('blank');
						}
					} else {
						$('input[name="agree_privacy"]').closest('.ValidationCheckboxTd').removeClass('blank');
					}
				} else {
//有楽仕様↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
					if(thisClosestTd.find('.ValidationCheckboxInput').filter(':checked').val() === undefined){
						thisClosestTd.addClass('blank');
					} else {
						thisClosestTd.removeClass('blank');
					}
//有楽仕様↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
				}
//有楽仕様↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

				//insertdiv処理
				$(thisObj).trigger('onChangeBlankLength');

			});
		}
		,firstValidate: function() {
			var thisObj = this;
			$j('.ValidationTextInputAndSelect').blur()
			$('.formError').hide()
			// $j('input[name="col_4"]').focus()
			// $j('input[name="col_4"]').blur()
			// $j('input[name="col_5"]').focus()
			// $j('input[name="col_5"]').blur()
			// $('.formError').hide()

			$('.ValidationRadioTd').each(function(){
				if($(this).find('.ValidationRadioInput').filter(':checked').val() === undefined){
					$(this).addClass('blank');
				}
			})
			$('.ValidationCheckboxTd').each(function(){
				var thisFindInput = $(this).find('.ValidationCheckboxInput')
//チェックボックスが複数ある場合、eachは無駄になる
//有楽仕様↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
				if(thisFindInput.attr('name') === 'wellith'){
				} else if(thisFindInput.attr('name') === 'agree_privacy'){
					if($('input[name="wellith"]:checked').val() !== undefined){//wにチェックあり
						if($('input[name="agree_privacy"]:checked').val() === undefined){
							$('input[name="agree_privacy"]').closest('.ValidationCheckboxTd').addClass('blank');
						} else {
							$('input[name="agree_privacy"]').closest('.ValidationCheckboxTd').removeClass('blank');
						}
					} else {
						$('input[name="agree_privacy"]').closest('.ValidationCheckboxTd').removeClass('blank');
					}
				} else {
//有楽仕様↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
					if(thisFindInput.filter(':checked').val() === undefined){
						$(this).addClass('blank');
					} else {
						$(this).removeClass('blank');
					}
//有楽仕様↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
				}
//有楽仕様↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
			})
		}
	}
});