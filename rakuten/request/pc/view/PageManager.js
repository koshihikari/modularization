

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.PageManager');
	MYNAMESPACE.view.PageManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.PageManager.prototype = {
		_instances				: {}
		,_objBoxesSelector	: []

		,initialize: function(DataManagerInstance) {//
			var thisObj = this;
			this._instances = {//
				'DataManager'			: DataManagerInstance
				,'MenuBoxManager'			: []
			}
			_.bindAll(
				this
				,'setup'
				,'setEvent'
			);
			thisObj._objBoxesSelector = thisObj._instances['DataManager'].getBoxSelector()

				console.log('PageManager/for/_objBoxesSelector'+thisObj._objBoxesSelector)
			for (var i=0,len=thisObj._objBoxesSelector.length; i<len; i++) {
				console.log('PageManager/for/_objBoxesSelector'+thisObj._objBoxesSelector.length)
				thisObj._instances['MenuBoxManager'][i] = new MYNAMESPACE.view.MenuBoxManager(this._instances['DataManager'], thisObj._objBoxesSelector[i]);//これって削除してないよね？
			}
		}
		,setup: function() {//
			var thisObj = this;
		}
		,setEvent: function(isCorrect) {//
			var thisObj = this;
			if(isCorrect === true){
				// thisObj._
			} else {

			}
		}
	}
});