

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('mojule.ConfigManager');
	MYNAMESPACE.mojule.ConfigManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.mojule.ConfigManager.prototype = {
		 _instances				: {}
		 ,_objBoxesSelector	: []
		,initialize: function(DataManagerInstance) {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'defineBoxSelector'
				,'setEvent'
			);
			this._instances = {
				'DataManager'			: DataManagerInstance
			}
			this.defineBoxSelector()
		}
		,defineBoxSelector: function() {
			var thisObj = this;
			thisObj._objBoxesSelector =	[
				{'Box':'LeftUpper'		,'Selector' : [
														'#ritMenuArea'
														 // $('#ritMenuArea')
														// ,$('#')
													] 
				}
				,{'Box':'RightUpper'	,'Selector'	 : [
														'#ritServiceHeader'
														 // $('#ritServiceHeader')
														// ,$('#')
													] 
				}
				,{'Box':'LeftLower'		,'Selector' : [
														'#riEventColumn'
														 // $('#riEventColumn')
														// ,$('#')
													] 
				}
				,{'Box':'RightLower'	,'Selector'	 : [
														'#riServiceColumn'
														 // $('#riServiceColumn')
														// ,$('#')
													] 
				}
			]


			// thisObj._objBoxesSelector =	[
			// 	 {'Selecter'	: $('#')				,'box': 'LeftUpper'}
			// 	,{'Selecter'	: $('#')				,'box': 'RightUpper'}
			// 	,{'Selecter'	: $('#')				,'box': 'Leftlower'}
			// 	,{'Selecter'	: $('#')				,'box': 'Rightlower'}
			// ]
			thisObj._instances['DataManager'].setBoxSelector(thisObj._objBoxesSelector);
			$(thisObj).trigger('onCompDefineBoxSelector');
		}
		,setEvent: function() {
			var thisObj = this;
		}
	}
});