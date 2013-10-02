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
	// var userAgent = window.navigator.userAgent.toLowerCase();
	// if (userAgent.indexOf("msie") != -1) {
	// 	$('html').addClass('ie');
	// } else {
	// 	$('html').addClass('elseBL');
	// }
	// var tokenVal = $('form').find('input[type="hidden"][name="token"]').val() !== undefined ? $('form').find('input[type="hidden"][name="token"]').val() : 'complete';
	// $('body').addClass('sp');
	if($('body').attr('id') === undefined){//css point用
		$('body').attr('id','bodyID')
	}

	//一個のformタグにだけつけるよう注意
	var formIDElement = $('#bodyID>#request>#sch>form')
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
	// $('input,select').filter(function(i){
	// 	$(this).attr('id') === undefined;//undefinedでok?//
	// }).not('input[type="radio"]').each(function(j) {
	// 	$(this).attr('id', 'AddIDforSP_'+j);
	// })
//ID付与ここまで―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

// //事前コンバート―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

	$('#AddIDforSP_19').attr('onclick','AjaxZip3.zip2addr("NT_AutoAddrNum_1","NT_AutoAddrNum_2","NT_AutoAddrText_1","NT_AutoAddrText_2","","NT_AutoAddrText_3")')

// /*住所検索*/	$('#AddIDforSP_19').remove()
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



	//来場予約部分+++++++++++++++++++++++
	if($('html').hasClass('reserveSP') === true){
		$('#NT_dlforMS>div').attr('id','divID2').after($('#NT_dlforMS > div > div').attr('id','divID3'))
		var labelNode = $('#divID3>label')
		var inputNode = $('#divID3>input,select')
		var divID3 = $('#divID3')
		var divID3cache = divID3.clone()
		divID3.html('')
		for (var i=0,len=labelNode.length; i<len; i++) {
			var j = len-i-1
			var ddMSNode=$('<dd class="NT_DD_MS_R_'+i+' NT_DD_MS">')
			var ddNode=$('<dd class="NT_DD_R_'+i+'">').append(divID3cache.children('label:eq('+j+')').nextAll())
			var dtNode=$('<dt class="NT_DT_R_'+i+'">').append(divID3cache.children('label:eq('+j+')'))
			var ddinput = ddNode.find('input')
			// var ddinput = ddNode.find('input,select')

			if(ddinput.length >= 1){
				ddinput.each(function(k){
					$(this).attr('nt_dd_num','R_'+i+'_'+k)
					ddMSNode.append($('<div class="NT_divforMS">').attr('nt_dd_num','R_'+i+'_'+k))
				})
			}
			divID3.prepend(ddMSNode).prepend(ddNode).prepend(dtNode)
		}
		divID3.append($('#divID3>dd:last').prev('dd').children('p'))
		divID3.prepend($('<span id="divID3text">').text('ご希望の来場日時'))

		var S = '<span class="fortext">';
			$('input[nt_dd_num="R_1_0"]').after($(S).text('月'))
			$('input[nt_dd_num="R_1_1"]').after($(S).text('日'))
			$('input[nt_dd_num="R_1_2"]').after($(S).text('時'))
			$('input[nt_dd_num="R_0_0"]').after($(S).text('月'))
			$('input[nt_dd_num="R_0_1"]').after($(S).text('日'))
			$('input[nt_dd_num="R_0_2"]').after($(S).text('時'))
	}

	// //+++++++++++++++++++++++

	$('#NT_dlforMS>dt.NT_DT_0>label').removeAttr('for')

//エラーメッセージ挿入部分を確保するためdldtdd要素で作成　ここまで―――――――――――――――――――――――――



//ポップアップアラートの実装―――――――――――――――――――――――――
// $('input').blur(function(e){
// 	var areaOffset = $(this).offset();
// 	var offsetTop = (areaOffset.top);
// 	var offsetLeft = (areaOffset.left);
// 	console.log('X = ' + offsetLeft + 'px','Y = ' + offsetTop + 'px');
// })



// $('input').eq(0).each(function(i){
// var popupdiv = $('<div class="box" id="boxID">Content in PopBox goes here</div>')               
//             .append($('<div class="arrow" id="arrowID">'))        
//             .append($('<div class="arrow-border" id="arrow-borderID">')) 
//             .append($('<a href="#" class="close" id="closeID">close</a>'))


// var popbox = $('<div class="popbox" id="popboxID">')
//     .append('<a class="open" href="#" id="openID">Click Here!</a>')
//     .append($('<div class="collapse" id="collapseID">')              
//         .append(popupdiv
//         )
//     )

// 	$(this).after(popbox)
// })

	// $('form').click(function(){
	// 	// $('form').bind('click', methods.open)
	// })

	// $('#divID').before(popbox)



// $('div.popbox').popbox({
// //     'open'          : '.open',
// //     'box'           : '.box',
// //     'arrow'         : '.arrow',
// //     'arrow-border'  : '.arrow-border',
// //     'close'         : '.close'
// });


// $('input').click(function(e){
// 	$('#popboxID').click()
// })

//ポップアップアラートの実装―――――――――――――――――――――――――




	// var strObj = $('label[for="city2_id"]')
	// var str = strObj.text().slice(0, 3)
	// strObj.text(str)


// 元々の入力例を削除したい




// var input = $('input')//inputに重ねて文字表示
// input.each(function(i){
// 	$(this).after(
// 		$('<table id="NT_table_'+i+'" class="NT_table">')
// 			.append($('<tbody>')
// 				.append($('<tr>')
// 					.append(
// 						$('<td id="NT_td_'+i+'" class="NT_td">').append($(this).clone())
// 					)
// 					.append(
// 						$('<td id="NT_td_forspan_'+i+'" class="NT_td">')
// 					)
// 				)
// 			)
// 	)
// 	$(this).remove()
// })
// var input = $('input')//inputに重ねて文字表示
// input.each(function(i){
// 	$(this).after($('<span class="container" style="position:relative">').append($(this).clone()).append($('<div class="label" style="position:absolute;top:0;right:10">').text('aaa')))
// 	$(this).remove()
// })

// 	//backgroundColorを削除―――――――――――――――――――――――――――――――――――
// 	$('input[name="privacy"]').closest('td').attr('bgcolor','')

// 	//Radio,Checkをlabelで囲む。―――――――――――――――――――――――――――――――――――
// 	var formtable = $('form>table>tbody>tr>td>table')
// 	var tempradioNode = $('<div>')
// 	$('input[name="col_18"]').each(function(i){
// 		var gendertxt = $('<span>').html($(this).val() + ' ');
// 		var genderlabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(gendertxt)
// 		tempradioNode.append(genderlabelNode)
// 	})
// 	$('input[name="col_18"]').eq(0).closest('td').html('').addClass('labeltd').append(tempradioNode.html())
// 	$('input[type="radio"],input[type="checkbox"]').not('input[name="col_18"]').each(function(i){
// 		var radiotd = $(this).closest('td')
// 		var radiotxt = $('<span>').html(radiotd.text())
// 		var radiolabelNode = $('<label>').addClass('labelClass').append($(this).clone()).append(radiotxt)
// 		radiotd.html(radiolabelNode)
// 	})
// 	$('input[type="radio"]').not('input[name="col_18"]').closest('table').closest('td').addClass('labeltd')
// 	var doibuncheck = formtable.eq(6).find('>tbody>tr:eq(1)>td').add(formtable.eq(7).find('>tbody>tr:eq(0)>td:eq(1)')).add(formtable.eq(7).find('>tbody>tr:eq(1)>td')).add(formtable.eq(7).find('>tbody>tr:eq(2)>td:eq(1)'))
// 	doibuncheck.addClass('labeltd')

// 	//submit
// 	formtable.eq(8).find('a').attr('onclick','')
// 	$('input[name="task"]').closest('td').click(function(){
// 		$('form').submit();
// 	})

// 	//デフォルト記入例の削除―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
// 	$('#AutoAddressText2').closest('td').html($('#AutoAddressText2').closest('td').find('input'))
// 	$('#AutoAddressText3').closest('td').html($('#AutoAddressText3').closest('td').find('input'))
// 	$('#col_23').closest('td').html($('#col_23').closest('td').find('input'))
// 	$('#col_24').closest('td').html($('#col_24').closest('td').find('input'))

// //事前コンバートここまで―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

//EFO Start
//index new & setEvent
	var Index	 	= new MYNAMESPACE.controller.Index();
	// $('body.sp').readyKanaEx()

});