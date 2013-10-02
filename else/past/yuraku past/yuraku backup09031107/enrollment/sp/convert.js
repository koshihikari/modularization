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
	if($('body').attr('id') === undefined){//css point用
		$('body').attr('id','bodyID')
	}

	//一個のformタグにだけつけるよう注意
	// var formIDElement = $('#bodyID>#request>#sch>form')
	// if(formIDElement.attr('id') === undefined){//css point用
	// 	formIDElement.attr('id','formID')
	// }
//ブラウザ判定、body,formにid,classマーキング―――――――――――――――――――――――――――――――――――

//ID付与(
	for (var i=0,len=$('input,select').length; i<len; i++) {
		if($('input,select').eq(i).attr('id') === undefined){//undefinedでok?//
			$('input,select').eq(i).attr('id', 'AddIDforSP_'+i);
		}
	}
	$('input,select').filter(function(i){
		$(this).attr('id') === undefined;//undefinedでok?//
	}).not('input[type="radio"]').each(function(j) {
		$(this).attr('id', 'AddIDforSP_'+j);
	})
//ID付与ここまで―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

// //事前コンバート―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――



// /*住所検索*/	$('#AddIDforSP_16').remove()
	var strObj = [{'attrfor':'city_id','num':3},{'attrfor':'city2_id','num':3},{'attrfor':'town_id','num':4},{'attrfor':'build_id','num':11}]
	for (var i=0,len=strObj.length; i<len; i++) {
		var strThisObj = $('label[for="'+strObj[i]['attrfor']+'"]')
		var str = strThisObj.text().slice(0,strObj[i]['num'])
		var HissuObj = strThisObj.find('span')
		strThisObj.text(str).append(HissuObj)
	}

// エラーメッセージ挿入部分を確保するためdldtdd要素で作成
// inlineblock,:empty displaynone

	$('#frm > div:eq(0)').attr('id','divID')
	var divID1 = $('#divID')
	var labelNode = divID1.children('label')
	var inputNode = $('#divID>input,#divID>select')
	var dlNode = $('<dl id=NT_dlforMS>');
	var TopNode = $('label[for="vcname1_id"]').prevAll().toArray().reverse()

	for (var i=0,len=labelNode.length; i<len; i++) {
		var j = len-i-1
		var ddMSNode=$('<dd class="NT_DD_MS_'+i+' NT_DD_MS">')
		var ddNode=$('<dd class="NT_DD_'+i+'">').append(divID1.children('label:eq('+j+')').nextAll())
		var dtNode=$('<dt class="NT_DT_'+i+'">').append(divID1.children('label:eq('+j+')'))
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
	dlNode.before(TopNode)
	var S = '<span class="fortext">';
		$('input[name="col_13[]"]:not(:eq(2))').after($(S).text('―'))
		var inputCol16 = $('input[name="col_16[]"]')
		inputCol16.eq(0).before($(S).text('西暦'))
		inputCol16.eq(1).before($(S).text('年'))
		inputCol16.eq(2).before($(S).text('月'))
		inputCol16.eq(2).after($(S).text('日'))

		$('#AddIDforSP_34').after($(S).text('人'))


	var TempDivNode = $('<div>')
	TempDivNode.append($('<dd class="NT_DD_15">').append($('dd.NT_DD_15>span.age')))
	TempDivNode.append($('<dd class="NT_DD_MS_15 NT_DD_MS">').append($('div[nt_dd_num="15_3"]')))
	$('#NT_dlforMS>dd.NT_DD_MS_15').after(TempDivNode.html())

	// $('dd.NT_DD_MS:last>div:not(:first)').remove()
	// $('dd.NT_DD_MS:last').after($('#AddIDforSP_34').next('span').nextAll())

	$('#club').closest('div').attr('nt_dd_num','a_0')
	$('#privacy2').closest('div').attr('nt_dd_num','a_1')
	// $('#privacy2').closest('div').attr('nt_dd_num','a_1')
	var selectall = $('.NT_V_SelectboxTd')
	for (var i=0,len=selectall.length; i<len; i++) {
		selectall.eq(i).attr('nt_dd_num','s_'+i)
	}


	// $('#NT_dlforMS>dt.NT_DT_0>label').removeAttr('for')

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