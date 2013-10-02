

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.AutoAddressManager');
	MYNAMESPACE.view.AutoAddressManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.AutoAddressManager.prototype = {
		 _instances				: null
		,_EventObj				: null
		,_index					: null
		,_Name2					: ''
		,_Name4					: ''
		,_isCorrect				: true
		,_InputNumCounts		: 7
		,_triggerClass			: 'NT_AutoAddrNum_1_1'
		,initialize: function(DataManagerInstance) {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'setOnceEvent'
				,'autoNextFocus'
				,'receiveEvent'
				,'setEvent'
			);

			this._instances = {
				'DataManager'			: DataManagerInstance
			}
		}
		,setOnceEvent : function() {
			var thisObj = this;
			if($('input.NT_AutoAddrNum_2_2').length !== 0) {
				thisObj._Name2 = 'NT_AutoAddrNum_2'
				thisObj._InputNumCounts = 4
				thisObj._triggerClass = 'NT_AutoAddrNum_2_2'
						console.log('ZipB')
			}
			if($('.NT_AutoAddrText_2').length !== 0){//true
				thisObj._Name4 = 'NT_AutoAddrText_2'
				if($('.NT_AutoAddrText_3').length !== 0){//false
					thisObj._isCorrect = false;
				}
			} else {
				thisObj._Name4 = 'NT_AutoAddrText_1'
			}
		}
		,autoNextFocus: function() {
			//次の項目へ移る
			var thisObj = this;
			// if(thisObj._EventObj.val().length == 3){
			// 				// if(thisObj._EventObj.val().replace('-', '').replace('－', '').length == 3){
			// 	$('input[nt_base_index="'+((thisObj._EventObj.attr('nt_base_index')-0+1))+'"]').focus();
			// };
		}
		,receiveEvent: function(EventObj,index) {
			var thisObj = this;
			thisObj._EventObj 	= EventObj
			thisObj._index 		= index
			var countval = thisObj._EventObj.val();
				console.log(thisObj._InputNumCounts)

			if(countval.length == thisObj._InputNumCounts){
				console.log('in')
				if(thisObj._isCorrect === true){
					console.log('AJAX,NAME2&NAME4'+thisObj._Name2+','+thisObj._Name4)
					AjaxZip3.zip2addr('NT_AutoAddrNum_1',thisObj._Name2,'NT_AutoAddrText_1',thisObj._Name4);//県・市区町村
				} else if (thisObj._isCorrect === false){
					console.log('AJAX,NAME2&NAME4'+thisObj._Name2+','+thisObj._Name4)
					AjaxZip3.zip2addr('NT_AutoAddrNum_1',thisObj._Name2,'NT_AutoAddrText_1','NT_AutoAddrText_2','','NT_AutoAddrText_3');//県・市区・町村
				}
			}
		}
		,setEvent: function() {
			var thisObj = this;
			thisObj.setOnceEvent()
			$(thisObj._instances['DataManager']).on('onUserKeyupAction', function(event,EventObj,index){
			// $(thisObj._instances['DataManager']).on('onUserKeyupAction', function(event,EventObj,index){
				if(EventObj.hasClass(thisObj._triggerClass) === true)
					thisObj.receiveEvent(EventObj,index)
			});
		}
	}
});