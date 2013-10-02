

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.Mediator');
	MYNAMESPACE.view.Mediator = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.Mediator.prototype = {
		 _instances				: {}
		,initialize: function(RemainingItemsManagerInstance,RealtimeCheckManagerInstance,TimerSolutionManagerInstance) {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'setEvent'
				,'onChangeReminingItemsLength'
			);
			this._instances = {//
				 'RemainingItemsManager'			: RemainingItemsManagerInstance
				,'RealtimeCheckManager'				: RealtimeCheckManagerInstance
				,'TimerSolutionManager'				: TimerSolutionManagerInstance
			}
		}
		,setEvent: function(event) {
			var thisObj = this;
			// $(thisObj._instances['RealtimeCheckManager'])
			// 	.on('onChangeBlankLength', function(event) {
			// 		thisObj._instances['RemainingItemsManager'].remainingItemsCheck();
			// 	})
			$(thisObj._instances['RealtimeCheckManager'])
				.on('onChangeBlankLength', thisObj.onChangeReminingItemsLength)
			$(thisObj._instances['TimerSolutionManager'])
				.on('onChangeBlankLength', thisObj.onChangeReminingItemsLength)
		}
		,onChangeReminingItemsLength: function(event) {
			var thisObj = this;
			thisObj._instances['RemainingItemsManager'].remainingItemsCheck();
		}
	}
});