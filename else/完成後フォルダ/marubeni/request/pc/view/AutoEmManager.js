

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.AutoEmManager');
	MYNAMESPACE.view.AutoEmManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.AutoEmManager.prototype = {
		_instances			: {}
		,_classNum			: -1
		,_currentIndex			: -1

		,initialize: function() {//初期設定的な
			var thisObj = this;
			this._instances = {//
			}
			_.bindAll(
				this
				,'autoEm'
				,'saveLength'
			);
		}
		,autoEm: function() {
			var thisObj = this;
			var EmSelector = 'input:not(input[type="select"],input[type="radio"])'
			$('form.NT_mainForm').on('blur',EmSelector,function(){
				var replaceVal = $(this).val().replace('－','-').replace('＠','@').replace('＿','_').replace('．','.').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})
				$(this).val(replaceVal)
			});
		}
		,saveLength: function() {
			var thisObj = this;
			$('input.Address_Num_1st').attr('maxlength','3')
			$('input.Address_Num_2nd').attr('maxlength','4')
		}
	}
});