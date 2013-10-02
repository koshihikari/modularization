

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('controller.Index');
	MYNAMESPACE.controller.Index = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.controller.Index.prototype = {
		_instances			: {}
		,_timer				: -1
		,_timerimit 		: -1
		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'newInstances'
				,'setup'
				,'setEvent'
			);
			var DataManager = new MYNAMESPACE.model.DataManager()
			this._instances = {
				// 'DataManager'	 				: new MYNAMESPACE.model.DataManager()
				// ,'PageManager'	 				: []
				'DataManager'	 				: DataManager//これでよい？
				,'ConfigManager'	 			: new MYNAMESPACE.mojule.ConfigManager(DataManager)
				,'PageManager'	 				: new MYNAMESPACE.view.PageManager(DataManager)
			}
			this.newInstances()
			this.setEvent(true)
		}
		,newInstances: function() {
			var thisObj = this;
			// var PageManager = new MYNAMESPACE.view.PageManager(DataManager);
			// thisObj._instances['PageManager'] = new MYNAMESPACE.view.PageManager(thisObj._instances['DataManager']);
		}
		,setup: function() {
			var thisObj = this;
			thisObj._instances['PageManager']					.setup()
		}
		,setEvent: function(isCorrect) {
			var thisObj = this;
			thisObj._instances['PageManager']					.setEvent(isCorrect)
		}
	}
});