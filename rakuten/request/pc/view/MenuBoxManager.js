

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.MenuBoxManager');
	MYNAMESPACE.view.MenuBoxManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.MenuBoxManager.prototype = {
		_instances			: {}
		,_arrBoxSelector	: []
		,_BoxName			: null
		,_BoxDiv			: null

		,initialize: function(DataManagerInstance,arrBoxSelector) {//
			var thisObj = this;
			this._instances = {//
				'DataManager'			: DataManagerInstance,
			}
			_.bindAll(
				this
				,'setup'
				,'setEvent'
			);
			this._arrBoxSelector = arrBoxSelector['Selector']
			this._BoxName		 = arrBoxSelector['Box']
			thisObj._BoxDiv		 = $('<div>').attr('id','BoxDiv' + this._BoxName)

			for (var i=0,len=thisObj._arrBoxSelector.length; i<len; i++) {
				$(thisObj._arrBoxSelector[i]).css('display','none').appendTo(thisObj._BoxDiv)
				// thisObj._BoxDiv.append($(thisObj._arrBoxSelector[i]))
			}
			$('#ritWrapper').prepend(thisObj._BoxDiv)
		}
		,setup: function() {//
			var thisObj = this;
		}
		,setEvent: function() {//
			var thisObj = this;
		}
	}
});