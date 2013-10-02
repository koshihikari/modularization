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
/*check!!!!*/	var validation = $j("form.NT_mainForm")
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

			$('input.ValidationTextInputAndSelect,select.ValidationTextInputAndSelect').blur(function(){
				$(thisObj).trigger('onChangeBlankLength');
			})
		}
		,setRadioAction: function() {
			var thisObj = this;
			$('input.ValidationRadioInput').click(function(){
				//判定
				var thisClosestTd = $(this).closest('.ValidationRadioTd')
				if(thisClosestTd.find('input.ValidationRadioInput').filter(':checked').val() !== undefined){
//有楽仕様↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
					if(thisClosestTd.find('.ValidationRadioInput').filter(':checked').val() !== '同意しない'){
//有楽仕様↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
						thisClosestTd.removeClass('blank');
//有楽仕様↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
					} else {
						thisClosestTd.addClass('blank');
					}
//有楽仕様↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
				}
				//insertdiv処理
				$(thisObj).trigger('onChangeBlankLength');
			})
		}
		,setCheckboxAction: function() {
			var thisObj = this;
			$('input.ValidationCheckboxInput').click(function(){
				var thisClosestTd = $(this).closest('.ValidationCheckboxTd')
					if(thisClosestTd.find('.ValidationCheckboxInput').filter(':checked').val() === undefined){
						thisClosestTd.addClass('blank');
					} else {
						thisClosestTd.removeClass('blank');
					}

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
				if(thisFindInput.filter(':checked').val() === undefined){
					$(this).addClass('blank');
				} else {
					$(this).removeClass('blank');
				}
			})
		}
	}
});