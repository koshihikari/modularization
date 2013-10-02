//目次
//ブラウザ判定、body,formのid,class付与
//ID付与（IDがない場合）
//事前コンバート
//new

// window.onunload = function(){}
// if(window.name != "xyz"){
// 	location.reload();
// 	window.name = "xyz";
// }
jQuery.noConflict();
jQuery('html').hide();
jQuery(document).ready(function($){
var undefined;
	jQuery('html').show();
//ブラウザ判定、body,formのid,class付与―――――――――――――――――――――――――――――――――――
	if($('div[data-theme="b"]').css('display') == 'none'){
		$('html').addClass('requestSP');
	} else {
		$('html').addClass('reserveSP');
	}
	if($('body').attr('id') === undefined){//css point用
		$('body').attr('id','bodyID')
	}

	//一個のformタグにだけつけるよう注意
	var formIDElement = $('#bodyID>#request>#sch>form').addClass('NT_mainForm')
	if(formIDElement.attr('id') === undefined){//css point用
		formIDElement.attr('id','formID')
	}
//ブラウザ判定、body,formにid,classマーキング―――――――――――――――――――――――――――――――――――

//ID付与(
	for (var i=0,len=$('input,select').length; i<len; i++) {
		if($('input,select').eq(i).attr('id') === undefined){//undefinedでok?//
			$('input,select').eq(i).attr('id', 'AddIDforSP_'+i);
		}
	}
//ID付与ここまで―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

// //事前コンバート―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

	$('#privacy').attr('checked','true');
	$('#AddIDforSP_19').remove()
	var strObj = [{'attrfor':'city_id','num':3},{'attrfor':'city2_id','num':3},{'attrfor':'town_id','num':4},{'attrfor':'build_id','num':11}]
	for (var i=0,len=strObj.length; i<len; i++) {
		var strThisObj = $('label[for="'+strObj[i]['attrfor']+'"]')
		var str = strThisObj.text().slice(0,strObj[i]['num'])
		var HissuObj = strThisObj.find('span')
		strThisObj.text(str).append(HissuObj)
	}

//エラーメッセージ挿入部分を確保するためdldtdd要素で作成
//inlineblock,:empty displaynone

	$('#formID > div:eq(0)').attr('id','divID')
	var divID1 = $('#divID')
	var labelNode = divID1.children('label')
	var inputNode = $('#divID>input,select')
	var dlNode = $('<dl id=NT_dlforMS>');

	for (var i=0,len=labelNode.length; i<len; i++) {
		var j = len-i-1
		var ddMSNode=$('<dd class="NT_DD_MS_'+i+' NT_DD_MS">')
		var ddNode=$('<dd class="NT_DD_'+i+'">').append(divID1.children('label:eq('+j+')').nextAll())
		var dtNode=$('<dt class="NT_DT_'+i+'">').append(divID1.children('label:eq('+j+')'))
		// var ddinput = ddNode.find('input')
		var ddinput = ddNode.find('input,select')

		if(ddinput.length >= 1){
			ddinput.each(function(k){
				$(this).attr('nt_dd_num',i+'_'+k)
				ddMSNode.append($('<div class="NT_divforMS">').attr('nt_dd_num',i+'_'+k))
			})
		}
		dlNode.prepend(ddMSNode).prepend(ddNode).prepend(dtNode)
	}
	divID1.html(dlNode)
	var S = '<span class="fortext">';
		$('input[name="col_13[]"]:not(:eq(2))').after($(S).text('―'))
		var inputCol16 = $('input[name="col_16[]"]')
		inputCol16.eq(0).before($(S).text('西暦'))
		inputCol16.eq(1).before($(S).text('年'))
		inputCol16.eq(2).before($(S).text('月'))
		inputCol16.eq(2).after($(S).text('日'))

		$('#AddIDforSP_34').after($(S).text('人'))

	TempDivNode = $('<div>')
	TempDivNode.append($('<dd class="NT_DD_6">').append($('dd.NT_DD_6>span.age')))
	TempDivNode.append($('<dd class="NT_DD_MS_6 NT_DD_MS">').append($('div[nt_dd_num="6_3"]')))
	$('#birth_year_id').closest('dd.NT_DD_6').next().after(TempDivNode.html())

	$('dd.NT_DD_MS:last>div:not(:first)').remove()
	$('dd.NT_DD_MS:last').after($('#AddIDforSP_34').next('span').nextAll())

	$('#privacy').closest('div').attr('nt_dd_num','a_0')
	$('#privacy2').closest('div').attr('nt_dd_num','a_1')





	$('#NT_dlforMS>dt.NT_DT_0>label').removeAttr('for')

//エラーメッセージ挿入部分を確保するためdldtdd要素で作成　ここまで―――――――――――――――――――――――――



	var Index	 	= new MYNAMESPACE.controller.Index();
	// $('body.sp').readyKanaEx()



// // ―――――――――――――――――――――――――sp,positionfixed
// 	var myScroll;
// 	var a = 0;
// 	function loaded() {
// 		setHeight();
// 		myScroll = new iScroll('scroller', {desktopCompatibility:true});
// 	}
// 	function setHeight() {
// 		var headerH = document.getElementById('header').offsetHeight,
// 			footerH = document.getElementById('footer').offsetHeight,
// 			wrapperH = window.innerHeight - headerH - footerH;
// 		document.getElementById('wrapper').style.height = wrapperH + 'px';
// 	}
// 	window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', setHeight, false);
// 	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
// 	document.addEventListener('DOMContentLoaded', loaded, false);
// // ―――――――――――――――――――――――――sp,positionfixed

});