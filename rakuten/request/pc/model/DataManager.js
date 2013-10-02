

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('model.DataManager');
	MYNAMESPACE.model.DataManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.model.DataManager.prototype = {
		 _instances					: {}
		,_objBoxesSelector			: []

		,initialize: function() {
			var thisObj = this;
			_.bindAll(
				this
				,'setBoxSelector'
				,'getBoxSelector'
			);
		}
		,setBoxSelector : function(arrInObjBoxSelector) {
			var thisObj = this;
			thisObj._objBoxesSelector = arrInObjBoxSelector
			$(thisObj).trigger('onCompSetBoxSelector');
		}
		,getBoxSelector : function() {
			var thisObj = this;
			return thisObj._objBoxesSelector;
		}
		// ,sendValidateResult : function(EventObj,V_Result,AddMessage,checktype) {
		// 	var thisObj = this;
		// 	$(thisObj).trigger('onReceiveFormEvent', [EventObj,V_Result,AddMessage,checktype])
		// }
	}
});