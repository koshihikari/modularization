

jQuery.noConflict();
jQuery(document).ready(function($){

	MYNAMESPACE.namespace('view.RemainingItemsManager');
	MYNAMESPACE.view.RemainingItemsManager = function() {
		this.initialize.apply(this, arguments);
	};
	MYNAMESPACE.view.RemainingItemsManager.prototype = {
		_instances			: {}
		,_classNum			: -1
		,_currentIndex		: -1
		,_timer				: -1
		,_timerimit			: 0
		,_floatDiv			: null
		,_blanklength		: -1
		,_windowWidth		: -1

		,initialize: function() {//初期設定的な
			var thisObj = this;
			_.bindAll(
				this
				,'insertdiv'
				,'draggableDiv'
				,'firstrRemainingItemsCheck'
				,'remainingItemsCheck'
				,'checkDivClick'
				,'setEvent'
			)
			this._instances = {//
			}
			this.insertdiv()
		}
		,insertdiv: function() {
			var thisObj = this;
			if($('#float').length !== 0){
				$('#float').remove()
			}
			var thisObj = this;
			thisObj._floatDiv = $('<div>').attr('id','float')

			var ulNode = $('<ul>').addClass('floatul')
			thisObj._blanklength = $('.blank').length

			//未入力なし
			var countspanOk1 = $('<span>').addClass('countspanOk').text('送信')
			var countspanOk2 = null;
			// var countspanOk2 = $('<span>').addClass('countspanOk').text('⇒')
			var countOkli = $('<li class="countOkli">').append(countspanOk1).append(countspanOk2)
			//未入力あり
			// var countspantext1 = null
			var countspantext1 = $('<span>').addClass('countspantext1').text('あと')
			var countspantext2 = $('<span>').addClass('countspantext2')
									// .append($('<span>').addClass('countspantext21').text('あと'))
									.append($('<span>').addClass('countspanNum').text(thisObj._blanklength))
													// .append($('<span>').addClass('countspanNum').text($('.blank').not('#MtxtEMAIL1,#MtxtEMAIL2').length))
									// .append($('<span>').addClass('countspantext22').text('項目'))
			var countli = $('<li>').addClass('countli').append(countspantext1).append(countspantext2)

			ulNode.append(countli).append(countOkli)
			thisObj._floatDiv.append(ulNode);
			thisObj._floatDiv.hide();
			// $('form.NT_mainForm').after(thisObj._floatDiv);
			$('form.NT_mainForm').closest('div').append($('<div>').attr('id','NT_remain').append(thisObj._floatDiv))

			if(thisObj._blanklength === 0){//未入力なし
				countli.hide();
				thisObj._floatDiv.addClass('countOk')
			} else {//未入力あり
				countOkli.hide();
			}

			// thisObj._timer = setInterval(function(){
			// 	thisObj.remainingItemsCheck()
			// 	thisObj._timerimit = thisObj._timerimit-0+1
			// 	if(thisObj._timerimit-0 === 10){
			// 		thisObj._floatDiv.fadeIn(500).fadeOut(500).fadeIn(500);
			// 		clearInterval(thisObj._timer);
			// 	}
			// },100);
		}
		,draggableDiv: function() {
			var thisObj = this;
			thisObj._windowWidth = $(window).width();
console.log('windowWidth = '+thisObj._windowWidth)
			var windowWidth2 = (thisObj._windowWidth-60-4);
			var windowWidthHelf = (windowWidth2/2);
			var X__NT_remain = null;
			$('#NT_remain').draggable(
				{
			        containment: 'document',
			        scroll: false,
			        // grid: [100, 100],
			        iframeFix: true,
			        opacity: 0.6,
			     //    start: function(e){
			     //    	// thisObj.setEvent(false)
			     //    },
			        stop: function(){
			        	var XY__NT_remain = $(this).position();
			        	if(XY__NT_remain.left < windowWidthHelf){
			        		X__NT_remain = 0
			        	} else {
			        		X__NT_remain = windowWidth2 //elementSize,誤差
			        	}
			        	$(this).animate({
			        		'top': XY__NT_remain.top,
			        		'left': (X__NT_remain)
			        	}, {
			        		'duration':100,
			        		// 'easing':'linear',
			        		// 'complete':function(){
			        		// console.log('owari')
			        		// }
			        	});
			        },
			    }
		    );
		}
		,firstrRemainingItemsCheck: function() {
			var thisObj = this;
			thisObj.remainingItemsCheck()
			thisObj._floatDiv.fadeIn(500).fadeOut(500).fadeIn(500);
		}
		,remainingItemsCheck: function() {
			var thisObj = this;
			thisObj._timer = setInterval(function(){
				if(thisObj._timer){
					clearInterval(thisObj._timer);
				}
				thisObj._timerimit = thisObj._timerimit-0+1
				thisObj._blanklength = $('.blank').length
				if(thisObj._blanklength !== 0){
				// if($('.blank').length !== 0){
					$('#float').removeClass('countOk')
					$('li.countOkli').hide();
					$('li.countli').show('slow');
					$('span.countspanNum').text(thisObj._blanklength)
				} else {
					if($('#float').hasClass('countOk') === false){
						$('li.countli').hide();
						$('#float').addClass('countOk')
						$('li.countOkli').fadeIn('slow');
					}
				}
				if(thisObj._timerimit-0 === 10){
					clearInterval(thisObj._timer);
				}
				console.log('remainingItemsCheck')
			},100);
		}
		,checkDivClick: function() {
			var thisObj = this;
			var divPositionX = $('#NT_remain').position().left;
console.log('positionX = '+divPositionX)
			if((divPositionX-0 < 30)||(divPositionX-0 > (thisObj._windowWidth-0-60-30))){//誤差30pxであればクリックイベント発動。
				if(thisObj._blanklength-0 > 0){
					alert('必須入力は、残り'+thisObj._blanklength+'項目です。')
				}
				$("a.NT_SubmitEvent").click()
			}
		}
		,setEvent: function(isCorrect) {
			var thisObj = this;
			// if(isCorrect === true){
				// console.log('remain setevent=true')
				$('#float').on('click',function(event){
					thisObj.checkDivClick()
				})
			// } else if(isCorrect === false){
			// 	console.log('remain setevent=false')
			// 	$('#float').off('click')
			// }
			$('input,select').on('change',function(){
				thisObj.remainingItemsCheck()
			})
			$('label').on('click',function(){
				thisObj.remainingItemsCheck()
			})
		}
	}
});