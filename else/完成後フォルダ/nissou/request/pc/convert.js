jQuery.noConflict();
jQuery('html').hide();
jQuery(document).ready(function($){
	jQuery('html').show();


	var validation = $("form")
		.submit(function() {
			$('div.formError.userformError.form_form1.absolute').hide();
			return false;
		})
		.exValidation({
			// customSubmit: function() {
			// 	alert('')
			// }
			firstValidate: true
			,rules: {
				txtNAMAE1		: "chkrequired"
				,txtNAMAE2		: "chkrequired"
				,txtFURIGANA1	: "chkrequired chkkatakana"
				,txtFURIGANA2	: "chkrequired chkkatakana"
				,txtZIPCODE1	: "chknumonly chkrequired chk3num"
				,txtZIPCODE2	: "chknumonly chkrequired chk4num"
				,txtSHIKUGUN	: "chkrequired"
				,txtCHOUBAN		: "chkrequired"
				,txtTEL1_1		: "chknumonly chkrequired"
				,txtTEL1_2		: "chknumonly chkrequired"
				,txtTEL1_3		: "chknumonly chkrequired"
				,txtEMAIL		: "chkemail chkhankaku chkrequired"
				,cboKEN			: "chkselect"
				,cboKI_KEN1		: "chkselect"
				,cboKI_SHIKU1	: "chkselect"
				,cboKIKKAKE1	: "chkselect"
				,cboKYOMI1		: "chkselect"
				,rdoDOUI		: "chkradio"
				,rdoSEIBETU		: "chkradio"
				,rdoACCOUNT		: "chkradio"
			}
			,stepValidation: true
			,errFocus:true
			,errMsgPrefix:''
			// ,errHoverHide:true
			,scrollToErr:false

			// ,customSubmit: function() {

			// }
			// ,errInsertPos: 'after'
		 //    ,errPosition: 'fixed'
		})


			//目次
			AjaxZip3Action();
				// addattr();//キーボード対応　属性付与
			
			InputColor();//必須入力項目の空白時の色追加
			RadioButtonOn();//ラジオボタンON
			ReadValidate();
			Insertdiv();
			// RadioButtonOff();//ラジオボタンOFF
			// RadioClass();//必須入力項目の空白時の色追加
			
				// SelectBoxPlus();//セレクトボックスの項目追加
			// Placeholder();//テキスト記入例の挿入
				// SubmitAction()
			
			FocusColor();//フォーカス時の色変更
			// MouseValidate()
			MouseAnimate()
			blurAction();//ブラーアクション時の挙動　（入力、数値、メールアドレスの確認、セレクトボックス、ラジオボタン確認）
			autoEm();//ブラーアクション時の挙動　（入力、数値、メールアドレスの確認、セレクトボックス、ラジオボタン確認）
			time2()
			CheckBlankNum()

	    function ReadValidate() {
			$('#txtNAMAE1,#txtNAMAE2,#txtFURIGANA1,#txtFURIGANA1,#txtFURIGANA2,#txtZIPCODE1,#txtZIPCODE2,#txtSHIKUGUN,#txtCHOUBAN,#txtTEL1_1,#txtTEL1_2,#txtTEL1_3,#txtEMAIL,#cboKEN,#cboKI_KEN1,#cboKI_SHIKU1,#cboKIKKAKE1,#cboKYOMI1,#rdoDOUI,#rdoSEIBETU,#rdoACCOUNT').blur()
			$('div.formError.userformError.form_form1.absolute').hide();
	    }
	    function blurAction() {
			$('#rdoDOUI_0,#rdoDOUI_1').click(function(){
				if($('#rdoDOUI_0:checked').length > 0){
					$('#agree-select').removeClass('blank')
				}
				if($('#rdoDOUI_1:checked').length > 0){
					$('#agree-select').addClass('blank')
				}
			})
	    	$('input,select').blur(function(){
	    		if($('select.blank,input,blank,div.blank,td.blank').length !== 0){
	    			$('#float').removeClass('countOk')
					$('.countspanOk').remove()
		    		$('li.countli').find('span').show('slow');
		    		$('span.countspanNum').text($('select.blank,input.blank,div.blank').length)
		    	} else {
			    	if($('span').hasClass('countspanOk') === false){

			    		$('li.countli').find('span').hide();
			    		var countspanOk1 = $('<span>').addClass('countspanOk').text('ここをクリックして')
			    		var countspanOk2 = $('<span>').addClass('countspanOk').text('入力内容を確認する')
			    		countspanOk1.hide()
			    		countspanOk2.hide()
			    		$('#float').addClass('countOk').append(countspanOk1).append(countspanOk2)
			    		countspanOk1.fadeIn('slow')
			    		countspanOk2.fadeIn('slow')

			    		// countspanOk2.show('slow')
			    	}
		    		// $('#float').append($('<button>'));
//		    		$('#float').append($('<input>')).attr({'type':'','name':'btnPreview','class':'rollover','src':'https://www.ns-jisho.co.jp/form/req/Img/btn_confirm.gif','onclick':'previewClick();WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;btnPreview&quot;, &quot;&quot;, true, &quot;Post&quot;, &quot;&quot;, false, false))','style':'border-width:0px;','alt':'入力内容を確認する'});
		    		// $('#float').append($('<p>').append($('<input>')).attr({'type':'image','name':'btnPreview','class':'rollover','src':'https://www.ns-jisho.co.jp/form/req/Img/btn_confirm.gif','onclick':'previewClick();WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;btnPreview&quot;, &quot;&quot;, true, &quot;Post&quot;, &quot;&quot;, false, false))','style':'border-width:0px;','alt':'入力内容を確認する'}));
		    	}
	    	})
	    }
		function CheckBlankNum() {//addClass('blank')の設置
			$('#seibetu_td, #account_td, #form1 > div.agree-area > div.select').find('input').click(function(){
	    		if($('select.blank,input.blank,div.blank').length !== 0){
	    			$('#float').removeClass('countOk')
					$('.countspanOk').remove()
		    		$('li.countli').find('span').show('slow');
		    		$('span.countspanNum').text($('select.blank,input.blank,div.blank').length)
		    	} else {
			    	if($('span').hasClass('countspanOk') === false){

			    		$('li.countli').find('span').hide();
			    		var countspanOk1 = $('<span>').addClass('countspanOk').text('ここをクリックして')
			    		var countspanOk2 = $('<span>').addClass('countspanOk').text('入力内容を確認する')
			    		countspanOk1.hide()
			    		countspanOk2.hide()
			    		$('#float').addClass('countOk').append(countspanOk1).append(countspanOk2)
			    		countspanOk1.fadeIn('slow')
			    		countspanOk2.fadeIn('slow')
			    	}
		    	}
			})
	    }
	    function Insertdiv() {//addClass('blank')の設置
			$('#popup').append($('<div>').attr('id','float'));
			var ulNode = $('<ul>').addClass('floatul')
			for (var i=0,len=17; i<len; i++) {
				// var liNode = $('<li>').addClass('floatli');
				// liNode.append($('<span>').addClass('floatspan').addClass('fs' + i).text('' + i + ''));
				// ulNode.append(liNode);
			}
			ulNode.append(
				$('<li>').addClass('countli')
					.append($('<span>').addClass('countspantext1').text('必須入力項目は'))
					.append($('<span>').addClass('countspantext2').text('残り'))
					.append($('<span>').addClass('countspanNum').text($('select.blank,input.blank,div.blank').length))
					.append($('<span>').addClass('countspantext3').text('項目です'))
				);
			$('#float').append(ulNode);
		};
	    function InputColor() {//addClass('blank')の設置
			$('#form1 > div.agree-area > div.select').attr('id','agree-select')

			var trNode = $('#form1 > div.input-form > table > tbody > tr')
			trNode.each(function(i){
				if ($(this).find('th > font').text().indexOf('*') !== -1) {//カウントは0が１  *が０ではないdtNode
					$(this).not(trNode.eq(7)).not(trNode.eq(8)).find('input[type = "text"]').addClass('blank');
					$(this).find('select').eq(0).addClass('blank');
				};
				$('#cboKI_SHIKU1,#seibetu_td,#account_td,#form1 > div.agree-area > div.select').addClass('blank');
			});
		};
	    function RadioButtonOn() {
			$('#cboKI_SHIKU1,#seibetu_td,#account_td,#form1 > div.agree-area > div.select').removeClass('blank');
			$('#seibetu_td, #account_td, #form1 > div.agree-area > div.select').find('input[value="0"]').attr("checked",true);
		};
	    function RadioButtonOff() {//addClass('blank')の設置
			$('#seibetu_td, #account_td, #form1 > div.agree-area > div.select').find('input').attr("checked",false);
		};
	    function RadioClass() {//addClass('blank')の設置
			$('#seibetu_td, #account_td, #form1 > div.agree-area > div.select').find('input').click(function(){
				var checkval = $(this).filter('[type="radio"]:checked').val();
				if (checkval !== undefined){
					$(this).closest('td.blank,div.blank').removeClass('blank');
				};
			});
			// 		alert($('#form1 > div.agree-area > div.select').find('input').filter('[type="radio"]:checked').val()-0);
			// if($('#form1 > div.agree-area > div.select').find('input').filter('[type="radio"]:checked').val()-0 !== 1){
			// 	$('input#rdoDOUI_1').click(function(){
			// 		alert($('#form1 > div.agree-area > div.select').find('input').filter('[type="radio"]:checked').val()-0);
			// 		// alert('資料請求を行う場合、個人情報保護方針への同意は必須となります。');
			// 	});
			// };
		};
	    function FocusColor() {//focus&blurカラー
			$("input,textarea,select#lbxOTHER").focus(function(){
			// $("input,textarea,select").focus(function(){
		    	$(this).removeClass('blank');
		    	$(this).addClass('focus');
			});
			$("input,textarea,select#lbxOTHER").blur(function(){
			// $("input,textarea,select").blur(function(){
		    	$(this).removeClass('focus');
		    });
	    };

	    function MouseValidate() {
	    	var validation = $('form').exValidation();
	    	var id = null;

			// MouseValidateDd = $('#agree-select, #namae_td, #furigana_td, #seibetu_td, #UpdatePanel1, #ki_ken_td, #tel1_td, #kikkake_td, #email_td, #kyomi_td, #account_td');
			$('#agree-select').mouseenter(function() {
				validation.laterCall('#rdoDOUI');
				var thisinput = $(this);
				setTimeout (function (){
					$("#err_rdoDOUI").fadeOut();
				}, 1000);
			})
			$('#namae_td').mouseenter(function() {
				validation.laterCall('#txtNAMAE1');
				validation.laterCall('#txtNAMAE2');
				// id = txtNAMAE1;
				// onsetTimeout(id)
				var thisinput = $(this);
				setTimeout (function (){
					$("#err_txtNAMAE1").fadeOut();
					$("#err_txtNAMAE2").fadeOut();
				}, 1000);
			})
			$('#furigana_td').mouseenter(function() {
				validation.laterCall('#txtFURIGANA1');
				validation.laterCall('#txtFURIGANA2');
				setTimeout (function (){
					$("#err_txtFURIGANA1").fadeOut();
					$("#err_txtFURIGANA2").fadeOut();
				}, 1000);
			})
			$('#seibetu_td').mouseenter(function() {
				validation.laterCall('#rdoSEIBETU');
				setTimeout (function (){
					$("#err_rdoSEIBETU").fadeOut();
				}, 1000);
			})
			$('#UpdatePanel1').mouseenter(function() {
				validation.laterCall('#cboKEN');
				validation.laterCall('#txtZIPCODE1');
				validation.laterCall('#txtZIPCODE2');
				validation.laterCall('#txtSHIKUGUN');
				validation.laterCall('#txtCHOUBAN');
				setTimeout (function (){
					$("#err_cboKEN").fadeOut();
					$("#err_txtZIPCODE1").fadeOut();
					$("#err_txtZIPCODE2").fadeOut();
					$("#err_txtSHIKUGUN").fadeOut();
					$("#err_txtCHOUBAN").fadeOut();
				}, 1000);
			})
			$('#ki_ken_td').mouseenter(function() {
				validation.laterCall('#cboKI_KEN1');
				validation.laterCall('#cboKI_SHIKU1');
				setTimeout (function (){
					$("#err_cboKI_KEN1").fadeOut();
					$("#err_cboKI_SHIKU1").fadeOut();
				}, 1000);
			})
			$('#tel1_td').mouseenter(function() {
				validation.laterCall('#txtTEL1_1');
				validation.laterCall('#txtTEL1_2');
				validation.laterCall('#txtTEL1_3');
				setTimeout (function (){
					$("#err_txtTEL1_1").fadeOut();
					$("#err_txtTEL1_2").fadeOut();
					$("#err_txtTEL1_3").fadeOut();
				}, 1000);
			})
			$('#email_td').mouseenter(function() {
				validation.laterCall('#txtEMAIL');
				setTimeout (function (){
					$("#err_txtEMAIL").fadeOut();
				}, 1000);
			})
			$('#kikkake_td').mouseenter(function() {
				validation.laterCall('#cboKIKKAKE1');
				setTimeout (function (){
					$("#err_cboKIKKAKE1").fadeOut();
				}, 1000);
			})
			$('#kyomi_td').mouseenter(function() {
				validation.laterCall('#cboKYOMI1');
				setTimeout (function (){
					$("#err_cboKYOMI1").fadeOut();
				}, 1000);
			})
			$('#account_td').mouseenter(function() {
				validation.laterCall('#rdoACCOUNT');
				setTimeout (function (){
					$("#err_rdoACCOUNT").fadeOut();
				}, 1000);
			})
			$('.formError.userformError.form_form1.absolute').css('display','none')
	    };
	    function MouseAnimate() {
	    	$('div.input-form > table.input-form > tbody > tr > td,#agree-select').hover(
	    		function(){
					// if ($(this).closest('td').find('th > font').text().indexOf('*') !== -1) {//カウントは0が１  *が０ではないdtNode
					var checkval = $('#rdoSEIBETU').find('[type="radio"]:checked').val()-0;
// alert($('#rdoSEIBETU').find('[type="radio"]:checked').val())
					// if (checkval === 0){
		   //  			$(this).addClass('tdfocusmen')
					// } else if (checkval === 1){
		   //  			$(this).addClass('tdfocuswomen')
					// } else {
		    			$(this).addClass('tdfocus')
					// }
			
					// };
				},
	    		function(){
	    			$(this).removeClass('tdfocus')
	    			// $(this).removeClass('tdfocusmen')
	    			// $(this).removeClass('tdfocuswomen')
				}
			)
	    };
		function autoEm() {
			var EmSelector = 'input:not(input[type="select"],input[type="radio"])'
			$('form').on('blur',EmSelector,function(){
				var replaceVal = $(this).val().replace('－','-').replace('＠','@').replace('＿','_').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})
				$(this).val(replaceVal)
			});
		};
		function AjaxZip3Action() {
			var code1 = $('#txtZIPCODE1')
			var code2 = $('#txtZIPCODE2')
			code1.keyup(function(){
				if(code1.val().length == 3){

					var code1valR = code1.val().replace('－','-').replace('＠','@').replace('＿','_').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})
					code1.val(code1valR)
					code2.focus();
				}
				
			})
			code2.keyup(function(){
				if(code2.val().length == 4){
					var code2valR = code2.val().replace('－','-').replace('＠','@').replace('＿','_').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})
					code2.val(code2valR)
					AjaxZip3.zip2addr('txtZIPCODE1','txtZIPCODE2','cboKEN','txtSHIKUGUN','','txtCHOUBAN');
					time1()
				}
				
			})
			var EmSelector = 'input:not(input[type="select"],input[type="radio"])'
			$('form').on('blur',EmSelector,function(){
				var replaceVal = $(this).val().replace('－','-').replace('＠','@').replace('＿','_').replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)})
				$(this).val(replaceVal)
			});
		};
		function time1() {
			var cboKEN = $('#cboKEN')
			var txtSHIKUGUN = $('#txtSHIKUGUN')
			var txtCHOUBAN = $('#txtCHOUBAN')
			var timer = setInterval(function(){
				if( (cboKEN.val().length >0) && (cboKEN.hasClass('blank')) ){
					cboKEN.removeClass('blank')
				}
				if( (txtSHIKUGUN.val().length >0) && (txtSHIKUGUN.hasClass('blank')) ){
					txtSHIKUGUN.removeClass('blank')
				}
				if( (txtCHOUBAN.val().length >0) && (txtCHOUBAN.hasClass('blank')) ){
					txtCHOUBAN.removeClass('blank')
				}
				console.log('time')
				},100
			);
		}
		function time2() {
			$('#txtNAMAE1,#txtNAMAE2').blur(function(){
				$('#txtFURIGANA1,#txtFURIGANA2').blur()
				$('#err_txtFURIGANA1').hide();
				$('#err_txtFURIGANA2').hide();
			})
		}
		// function Placeholder() {
		// 	var arr = [
		// 		{'id'	: ''			,'placeholder': '例) 日綜'}
		// 		{'id'	: ''			,'placeholder': '例) 太郎'},
		// 		{'id'	: ''			,'placeholder': '例) 太郎'},
		// 	]
		// 	for (var i=0,len=arr.length; i<len; i++) {
		// 		$('#'+arr[i]['id']).attr('placeholder',arr[i]['placeholder'])
		// 	}
		// }





})