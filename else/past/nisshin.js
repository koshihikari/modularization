jQuery.noConflict();
jQuery('html').hide();
jQuery(document).ready(function($){
	jQuery('html').show();
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
		$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">');
		var tokenVal = $('form').find('input[type="hidden"][name="token"]').val() !== undefined ? $('form').find('input[type="hidden"][name="token"]').val() : 'complete';
		$('body').addClass('sp ' + tokenVal);
		var dlElem = $('<dl></dl>');
		var privacyElem;
		var baseTable = $('form > table:eq(1)');
		$('form > table:eq(0)').attr('id', 'infoTable');
			baseTable.find('> tbody > tr> td > table > tbody > tr > td > table > tbody > tr').each(function(i) {
			if ($(this).find('> td').length === 1) {
				privacyElem = $(this).find('> td table');
			} else {
				if (0 < $(this).find('>td').eq(1).find('> table').length) {
					var fixedTable = $('<table>');
					$(this).find('>td').eq(1).find('> table td').each(function(j) {
						var id = 'radio-' + j;
						var radio = $(this).find('input[type="radio"]').attr('id', id);
						var label = $('<label>').attr('for', id).html($(this).text());
						var label2 = $('<label>').addClass('labelclass').append(radio);
						fixedTable.append($('<tr>').append($('<td>').append(label2)));
						radio.after(label);
						var text = $(this).find('input[type="text"]');
						if (0 < text.length) {
							label.after(text);
						}
						// fixedTable.append($('<tr>').append($('<td>').append(radio).append(label)));
					});
					$(this).find('>td').eq(1).find('> table').remove().end().append(fixedTable);
				} else if ($(this).find('>td').eq(1).find('input[type="text"]').length === 2) {
					$(this).find('>td').eq(1).find('input[type="text"]:last-child').css('display', 'block');
				}

				var dtClass = $(this).find('> td:eq(0)').attr('class');
				var ddClass = $(this).find('> td:eq(1)').attr('class');
				// var isRequired = $(this).find('>td').eq(0).html().indexOf('[必須]') !== -1 ? 1 : 0;
				$('<dt>' + $(this).find('>td').eq(0).html() + '</dt>').appendTo(dlElem).addClass(dtClass);
				// var ddElem = $('<dd>' + $(this).find('>td').eq(1).html() + '</dd>').appendTo(dlElem).addClass(ddClass).attr('data-is-required', isRequired);
				var ddElem = $('<dd>' + $(this).find('>td').eq(1).html() + '</dd>').appendTo(dlElem).addClass(ddClass);

				if ($('body').hasClass('answer') === true) {
					if (ddClass.indexOf('form-style-22') !== -1 && 0 < $(this).find('> td:eq(1)').find('input[type="text"]').length) {
						var baseElem = ddElem.find('input[type="text"]');
						var inputElem = $('<input>').attr({'type':'tel', 'name':baseElem.attr('name'), 'size':baseElem.attr('size'), 'pattern':'[0-9]*'});
						ddElem.find('input[type="text"]').remove().end().prepend(inputElem);
					} else if (ddClass.indexOf('form-style-24') !== -1) {
						var text = ddElem.text();
						ddElem.text('');
						$(this).find('> td > input[type="text"]').each(function(j) {
							var baseElem = $(this)
							var inputElem = $('<input>').attr({'type':'email', 'name':baseElem.attr('name'), 'size':baseElem.attr('size')});
							ddElem.append(inputElem);
						})
						ddElem.find('input[type="text"]').remove().end().find('br').remove();
						ddElem.find('input:eq(0)').after(text);
						// ddElem.append(text);
					} else if (ddClass.indexOf('form-style-14') !== -1 || ddClass.indexOf('form-style-26') !== -1 || ddClass.indexOf('form-style-28') !== -1) {
						ddElem.find('input[type="text"]').attr('pattern', '[0-9]*');
					}
				}

			}
		})
		$('#infoTable')
			.after(dlElem);
		dlElem
			.after($('input[type="submit"]'))
			.after(privacyElem);
		dlElem.attr('id', 'formDl');
		var errorListElem = baseTable.find('> tbody > tr:first-child > td > ul');
		if (errorListElem.length) {
			errorListElem.attr('id', 'messageList');
			dlElem.prepend(errorListElem);
		}
		baseTable.remove();













		if($('body').hasClass('answer') === true){
			//目次
			AjaxZip3Action();
			addattr();//キーボード対応　属性付与
			InputColor();//必須入力項目の空白時の色追加
			// SelectBoxPlus();//セレクトボックスの項目追加
			Placeholder();//テキスト記入例の挿入
			blurAction();//ブラーアクション時の挙動　（入力、数値、メールアドレスの確認、セレクトボックス、ラジオボタン確認）
			SubmitAction()
			FocusColor();//フォーカス時の色変更
		};
		function AjaxZip3Action() {
			$('form')
				.on('keyup', '.form-style-14 > input', function(event) {
					var countval = $('.form-style-14 > input').val().replace('-', '');
					var count = countval.length;
					if(count == 7){
						$(this).blur();
					}
				})
				.on('change', '.form-style-14 > input', function(event) {
					var countval = $('.form-style-14 > input').val().replace('-', '');
					var count = countval.length;
					if(count == 7){
						$('.form-style-14 > input').val(countval)
						AjaxZip3.zip2addr($(this).get(0),'',$('.form-style-16 select').attr('name'),$('.form-style-18 input').attr('name'));
					}
				});
		}
		function SubmitAction() {
			// 必須入力項目とエラー時のメッセージ
			var obj = {
				'string'	: 
					[
						{
							'errorMessage'	: 'お名前（姓）を入力してください。',
							'element'		: $('.form-style-6 > input[type="text"]')
						},
						{
							'errorMessage'	: 'お名前（名）を入力してください。',
							'element'		: $('.form-style-8 > input[type="text"]')
						},
						{
							'errorMessage'	: 'フリカナ（セイ）を入力してください。',
							'element'		: $('.form-style-10 > input[type="text"]')
						},
						{
							'errorMessage'	: 'フリカナ（メイ）を入力してください。',
							'element'		: $('.form-style-12 > input[type="text"]')
						},
						{
							'errorMessage'	: '市区町村番地を入力してください。',
							'element'		: $('.form-style-18 > input[type="text"]')
						}
					],
				'number'	:
					[
						{
							'errorMessage'	: '郵便番号を入力してください。',
							'element'		: $('.form-style-14 > input')
						},
						{
							'errorMessage'	: '電話番号を入力してください。',
							'element'		: $('.form-style-22 > input')
						},
						{
							'errorMessage'	: '年齢を入力してください。',
							'element'		: $('.form-style-26 > input')
						},
						{
							'errorMessage'	: '人数を入力してください。',
							'element'		: $('.form-style-28 > input')
						}
					],
				'selectbox'	:
					[
						{
							'errorMessage'	: '都道府県を選択してください。',
							'element'		: $('.form-style-16 > select')
						}
					]
			}
			
			$('body').on('submit', 'form', validate);

			function validate(event) {
				// event.preventDefault();
				// event.stopPropagation();
				$('.error-message').remove();
				$('.error-mail').remove();
				var isCorrect = true;
				// 入力確認
				isCorrect = checkString(obj['string']) === true && isCorrect === true ? true : false;

				// 数値確認
				isCorrect = checkNumber(obj['number']) === true && isCorrect === true ? true : false;

				// メールアドレス確認
				isCorrect = checkMailAddress() === true && isCorrect === true ? true : false;

				// セレクトボックス確認
				isCorrect = checkSelectbox(obj['selectbox']) === true && isCorrect === true ? true : false;

				// ラジオボタン確認
				isCorrect = checkRadiobutton() === true && isCorrect === true ? true : false;

				if (isCorrect === false) {
					var ddElem = $('.error-message:eq(0)').closest('dd');
					var index = ddElem.parent('dl').children().index(ddElem);
					var dtElem = $(ddElem.parent('dl').children().get(index - 1));
					var targetY = dtElem.offset().top;
					$('html,body').animate({scrollTop: targetY}, 200);
				}
				return isCorrect;
			}
			function checkString(arr) {
				var isCorrect = true;
				for (var i=0,len=arr.length; i<len; i++) {
					var targetElement = arr[i]['element'];
					var errorElement = $('<p class="error-message">').html(arr[i]['errorMessage']);
					if(targetElement.closest('dd').prev().text().indexOf('必須') !== -1){//必須でなければ表示せず
						if (targetElement.val() === '') {
							targetElement.closest('dd').append(errorElement);
						 	isCorrect = false;
						}
					};
				}
				return isCorrect;
			}
			function checkNumber(arr) {
				var isCorrect = true;
				for (var i=0,len=arr.length; i<len; i++) {
					var targetElement = arr[i]['element'];
					var errorElement = $('<p class="error-message">').html(arr[i]['errorMessage']);
					if(targetElement.closest('dd').prev().text().indexOf('必須') !== -1){//必須でなければ表示せず
						if ($.isNumeric(targetElement.val()) === false) {
							targetElement.closest('dd').append(errorElement);
						 	isCorrect = false;
						}
					} else {
						if (targetElement.val() && $.isNumeric(targetElement.val()) === false) {
							var errorElement = $('<p class="error-message">').html('半角英数字で入力してください。');
							targetElement.closest('dd').append(errorElement);
						}
					}
				}
				return isCorrect;
			}
			function checkMailAddress() {//必須判定していない
				var isCorrect = true;
				var mailAddress1 = $('.form-style-24 > input:eq(0)').val();
				var mailAddress2 = $('.form-style-24 > input:eq(1)').val();
				var reg = /[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i;
				var errorMessage = '';
				if (mailAddress1 === '') {
					var errorElement = $('<p class="error-message">').html('メールアドレスを入力してください。');
					$('.form-style-24').find('input:eq(0)').after(errorElement);
					isCorrect = false;
				} else if (mailAddress2 === '') {
					var errorElement = $('<p class="error-message">').html('確認用のメールアドレスを入力してください。');
					$('.form-style-24').find('input:eq(1)').after(errorElement);
					isCorrect = false;
				} else if (mailAddress1 !== mailAddress2) {
					var errorElement = $('<p class="error-message">').html('確認用のメールアドレスと一致しません。');
					$('.form-style-24').find('input:eq(1)').after(errorElement);
					isCorrect = false;
				} else if (!mailAddress1.match(reg)) {
					var errorElement = $('<p class="error-message">').html('メールアドレスの形式が正しくありません。');
					$('.form-style-24').find('input:eq(0)').after(errorElement);
					isCorrect = false;
				} else if (!mailAddress2.match(reg)) {
					var errorElement = $('<p class="error-message">').html('メールアドレスの形式が正しくありません。');
					$('.form-style-24').find('input:eq(1)').after(errorElement);
					isCorrect = false;
				}
				return isCorrect;
			}
			function checkSelectbox(arr) {//必須判定していない
				var isCorrect = true;
				for (var i=0,len=arr.length; i<len; i++) {
					var targetElement = arr[i]['element'];
					var errorElement = $('<p class="error-message">').html(arr[i]['errorMessage']);
					if (arr[i]['element'].val() - 0 === 0) {
						targetElement.closest('dd').append(errorElement);
					 	isCorrect = false;
					}
				}
				return isCorrect;
			}
			function checkRadiobutton() {//必須判定していない
				var isCorrect = true;
				var errorMessage = '';
				var selectedVal = $('.form-style-30 input[type="radio"]:checked').val();
				if (selectedVal === undefined) {
					errorMessage = '項目を選択してください。';
					isCorrect = false;
				} else if (selectedVal === '20' && $('.form-style-30 input[type="text"]').val() === '') {
					errorMessage = 'その他の内容を入力してください。';
				}
				if (errorMessage !== '') {
					var errorElement = $('<p class="error-message">').html(errorMessage);
					$('.form-style-30').closest('dd').append(errorElement);
				}
				return isCorrect;
			}
		};














		function addattr(){
			$('.form-style-14,.form-style-22,.form-style-26,.form-style-28').find('input').attr('type','tel');
		};

		//focus & blurアクションパート　実行
	    function FocusColor() {//focus&blurカラー
			$("input").focus(function(){
		    	$(this).removeClass('blank');
		    	$(this).addClass('focus');
			});
			$("input").blur(function(){
		    	$(this).removeClass('focus');
		    });
	    };
	    function InputColor() {//addClass('blank')の設置
			$('#formDl > dd').each(function(i){
				if ($('#formDl > dt').not($('.form-style-30')).eq(i).text().indexOf('必須') !== -1) {//カウントは0が１ 必須が０ではないdtNode
					$('#formDl > dd').not($('.form-style-30')).eq(i).find('input').addClass('blank');
					$('#formDl > dd').not($('.form-style-30')).eq(i).find('select').addClass('blank');
				};
			});
			$('.form-style-30').addClass('blank');
		};
	  //   function SelectBoxPlus() {//セレクトボックス　項目追加//selectedは消えていない
	 	// 	var SelectBoxOption = $('<option>').attr('value','none').text(' -未選択- ').addClass('NoSelected');
			// $('#formDl > dd select').prepend(SelectBoxOption);
			// $('#formDl > dd select').val(SelectBoxOption);

			// $("select").val('none');//未選択を予めセレクト
			// SelectValRemove();//val消去
	  //   };
	  //   function SelectValRemove(){
	  //   	$('select[name="u13"] > option').each(function(i) {//すべてのoptionのvalを消去
	  //   		if($(this).attr('value') !== 'none'){
			// 		$(this).attr('value', '');
			// 	};
			// })
	  //   };
	  //   function SelectValAdd(){
	  //   	$('select[name="u13"] > option').each(function(i) {//すべてのoptionのvalを付与
	  //   		if($(this).attr('value') !== 'none'){
			// 		$(this).attr('value',i-1);
			// 	};
			// })
	  //   };
		function blurAction() {
			var BlurInputNode = null;

			// blurNameKiboubi(BlurInputNode); // 「希望日」の項目変換
			// blurNameKiboujikan(BlurInputNode); // 「希望時間」の項目変換
			blurNameKanjiSei(BlurInputNode); // 「お名前」の項目変換
			blurNameKanjiMei(BlurInputNode); // 「お名前」の項目変換
			blurNameKanaSei(BlurInputNode); // 「お名前」の項目変換
			blurNameKanaMei(BlurInputNode); // 「フリガナ」の項目変換
			blurAddressNumber(BlurInputNode); // 「郵便番号」 数字チェック
			blurAddressSelect(BlurInputNode); // 「都道府県」 セレクトチェック
			blurAddressText(BlurInputNode); // 「ご住所」の空欄チェック
			blurTelNumber(BlurInputNode); // 「住所」 ブランクチェック
			blurEmail(BlurInputNode); // 「e-mail」　空欄・メアド形式チェック
			blurAge(BlurInputNode); // 「郵便番号」 数字チェック
			blurPeople(BlurInputNode); // 「郵便番号」 数字チェック
			blurRadio(BlurInputNode); // チェックボックス、submit後にチェックしたとき、背景が消える。
		}
	    // function blurNameKiboubi(BlurInputNode) {
	    // 	SelectBox(BlurInputNode);
	    // };
	    // function blurNameKiboujikan(BlurInputNode) {
	    // 	SelectBox(BlurInputNode);
	    // };
	    function blurNameKanjiSei(BlurInputNode) {
	 		BlurInputNode = $('.form-style-6 input');
	    	BlurBlank(BlurInputNode);
	    };
	    function blurNameKanjiMei(BlurInputNode) {
	 		BlurInputNode = $('.form-style-8 input');
	    	BlurBlank(BlurInputNode);
	    };
	    function blurNameKanaSei(BlurInputNode) {
	 		BlurInputNode = $('.form-style-10 input');
	    	BlurBlank(BlurInputNode);
	    };
	    function blurNameKanaMei(BlurInputNode) {
	 		BlurInputNode = $('.form-style-12 input');
	    	BlurBlank(BlurInputNode);
	    };
	    function blurAddressNumber(BlurInputNode) {
	 		BlurInputNode = $('.form-style-14 input');
	    	NumberCheck(BlurInputNode);
	    	InputAddressNumber(BlurInputNode)
		};
	    function blurAddressSelect(BlurInputNode) {
	 		BlurInputNode = $('.form-style-16 select');
	    	SelectBox(BlurInputNode);
	    };
	    function blurAddressText(BlurInputNode) {
	 		BlurInputNode = $('.form-style-18 input');
	    	BlurBlank(BlurInputNode);
	    };
	    function blurTelNumber(BlurInputNode) {
	 		BlurInputNode = $('.form-style-22 input');
	    	NumberCheck(BlurInputNode);
		};
	    function blurEmail(BlurInputNode) {
	 		BlurInputNode = $('.form-style-24 input').eq(0);
	    	MailCheck(BlurInputNode);
	 		BlurInputNode = $('.form-style-24 input').eq(1);
	    	MailCheck(BlurInputNode);
	    };
	    function blurAge(BlurInputNode) {
	 		BlurInputNode = $('.form-style-26 input');
	    	NumberCheck(BlurInputNode);
		};
	    function blurPeople(BlurInputNode) {
	 		BlurInputNode = $('.form-style-28 input');
	    	NumberCheck(BlurInputNode);
		};
	    function blurRadio(BlurInputNode) {
	 		BlurInputNode = $('.form-style-30 input');
	    	ClickRadio(BlurInputNode);
	 		BlurInputNode = $('.form-style-30 input[type="text"]');
	    	BlurRadioElse(BlurInputNode);
	    };

		//――――――――――――――各処理―――――――――――――――――――――
		function BlurBlank(BlurInputNode) {
			BlurInputNode.blur( function () {
				var mustdd = $(this).closest('dd');//親要素取得
				var mustdt = mustdd.prev();
				var musttxt = $(this).val();
				if (mustdt.text().indexOf('必須') !== -1) {//カウントは0が１ 必須が０ではないdtNode //付け足し.not！
					if (!musttxt){//もし必須のテキストの長さにブランクがあったら
						mustdd.find('input').addClass('blank');
						mustdd.find('.error-message').remove();
						var errorElement = $('<p class="error-message">').html('必須入力項目です。');
						errorElement.hide();
						mustdd.append(errorElement);
						errorElement.fadeIn("slow");
					} else {
						mustdd.find('input').removeClass('blank');
						mustdd.find('.error-message').fadeOut('slow', function(){ mustdt.find('.error-message').remove(); });
					};
				};
			});
		};
		function NumberCheck(BlurInputNode) {
			BlurInputNode.blur( function () {
				var mustdd = $(this).closest('dd');//親要素取得
				var mustdt = mustdd.prev();
				var numtxt = $(this).val();
				if (numtxt && !isNaN(numtxt) === false) {//ブラーしたとこに異物あり
					mustdd.find('.error-message').remove();
					var errorElement = $('<p class="error-message">').html('半角英数字で入力してください。');
					errorElement.hide();
					mustdd.append(errorElement);
					errorElement.fadeIn("slow");
					// if (BlurInputNode.closest('dd').attr('class') === 'form-style-26'
						// || BlurInputNode.closest('dd').attr('class') === 'form-style-30'){
					mustdd.find('input').addClass('blank');
					// };
				} else if　(numtxt && !isNaN(numtxt) !== false) {//ブラーしたとこ正解
					mustdd.find('input').removeClass('blank');
					mustdd.find('.error-message').fadeOut('slow', function(){ mustdd.find('.error-message').remove(); });
				} else {//ブラーしたとこブランク
					if (mustdt.text().indexOf('必須') !== -1){
						mustdd.find('input').addClass('blank');
						mustdd.find('.error-message').remove();
						var errorElement = $('<p class="error-message">').html('必須入力項目です。');
						errorElement.hide();
						mustdd.append(errorElement);
						errorElement.fadeIn("slow");
					} else {
						mustdd.find('input').removeClass('blank');
						mustdd.find('.error-message').fadeOut('slow', function(){ mustdd.find('.error-message').remove(); });
					};
				};
			});
	    };
		function MailCheck(BlurInputNode) {
			BlurInputNode.blur( function() {
				BlurInputNode.closest('dd').find('.error-message').remove();
				var mailtxt = BlurInputNode.val();
				BlurInputNode.closest('dd').find('.mailcheck').remove()//「２つのメアドが～」MSの消去
				BlurInputNode.closest('dd').find('.' + BlurInputNode.attr('name')).remove();//ブラー箇所のエラーMSの消去
				if(mailtxt === ''){//ブラーinputが空白の時
					BlurInputNode.addClass('blank');
					// if(BlurInputNode.closest('dd').find('p').hasClass(BlurInputNode.attr('name')) === false){
					var errorElement = $('<p class="error-mail">').html('メールアドレスを入力してください。').addClass(BlurInputNode.attr('name'));
					errorElement.hide();
					BlurInputNode.after(errorElement);
					errorElement.fadeIn("slow");
					// };
				} else if(!mailtxt.match(/.+@.+\..+/g)){//ブラーinputが空白ではなく、誤り
					BlurInputNode.addClass('blank');
					var errorElement = $('<p class="error-mail">').html('メールアドレスの形式が正しくありません。').addClass(BlurInputNode.attr('name'));
						errorElement.hide();
						BlurInputNode.after(errorElement);
						errorElement.fadeIn("slow");
				} else {//ブラーinputは正しい
					BlurInputNode.removeClass('blank');
	    			MailEachCheck();//もう一つのinputと比較
				};
			});
	    };
    	function MailEachCheck(){//もう一つのinputと比較
    		var MailDd = $('.form-style-24')
    		if(MailDd.find('input').eq(0).val().match(/.+@.+\..+/g) && MailDd.find('input').eq(1).val().match(/.+@.+\..+/g)){
    			//どっちもメアド形式OK
				MailDd.find('p').remove();//一応
				MailDd.find('.blank').removeClass('blank');

    			if(MailDd.find('input').eq(0).val() === MailDd.find('input').eq(1).val()){//一致
    			} else {//相違
					MailDd.find('input').addClass('blank')
					var errorElement = $('<p class="error-mail">').html('確認用のメールアドレスと一致しません。').addClass('mailcheck');
					errorElement.hide();
					MailDd.append(errorElement);
					errorElement.fadeIn("slow");
    			};
    		};
    	};
		function SelectBox(BlurInputNode) {
			BlurInputNode.change( function () {
				var mustdd = $(this).closest('dd');//親要素取得
				var mustdt = mustdd.prev();
				if ($(this).children(':selected').val()-0 === 0){//空欄だったら
					mustdd.find('select').addClass('blank');
					mustdd.remove('.error-message');
					var errorElement = $('<p class="error-message">').html('ご希望日を選択してください。').addClass('mailcheck');
					errorElement.hide();
					mustdd.append(errorElement);
					errorElement.fadeIn("slow");
				} else {
					mustdd.find('select').removeClass('blank');
					mustdd.find('.error-message').fadeOut('slow', function(){ mustdd.find('.error-message').remove(); });
				};
			});
		};
    	function ClickRadio(BlurInputNode){
			BlurInputNode.click(function(){
				var mustdd = $(this).closest('dd');//親要素取得
				var checkval = BlurInputNode.filter('[type="radio"]:checked').val();
				if (checkval == 20){
					mustdd.removeClass('blank');
					if(BlurInputNode.filter('[type="text"]').val() === ''){
						mustdd.find('.error-message').remove();
						BlurInputNode.not('input[type=radio]').addClass('blank')
						var errorElement = $('<p class="error-message">').html('その他の内容を入力してください。');
						errorElement.hide();
						mustdd.append(errorElement);
						errorElement.fadeIn("slow");					};
				} else
				if (checkval !== undefined){
					mustdd.removeClass('blank');
					mustdd.find('input[type="text"]').removeClass('blank');
					mustdd.find('.error-message').remove();
				};
			});
	    };
    	function BlurRadioElse(BlurInputNode){
			BlurInputNode.blur( function () {

				var mustdd = $('.form-style-30');//親要素取得
				var mustdt = mustdd.prev();
				var checkval = mustdd.find('input[type="radio"]:checked').val();
				var musttxt = mustdd.find('input[type="text"]').val();
				if (checkval == 20){
					if (!musttxt){//もし必須のテキストの長さにブランクがあったら
						mustdd.find('.error-message').remove();
						mustdd.find('input[type="text"]').addClass('blank');
						var errorElement = $('<p class="error-message">').html('その他の内容を入力してください。');
						errorElement.hide();
						mustdd.append(errorElement);
						errorElement.fadeIn("slow");
					} else {//入力あり
						mustdd.find('input[type="text"]').removeClass('blank');
						mustdd.find('.error-message').fadeOut('slow', function(){ mustdt.find('.error-message').remove(); });
					};
				};

			});
	    };
    	function InputAddressNumber(BlurInputNode){
			BlurInputNode.bind("change keyup",function(){//BlurInputNodeは郵便番号
				var AddressDd = $('.form-style-16')
				var count = $(this).val().length;
				if(count == 7){
					var mustdd = AddressDd.find('select').closest('dd');//親要素取得
					var mustdt = mustdd.prev();
					var listText = AddressDd.find('select').children(':selected').text();
					if ($(this).children(':selected').val()-0 === 0){//空欄だったら
						mustdd.find('select').addClass('blank');
					} else {//空欄じゃない
						mustdd.find('select').removeClass('blank');
						mustdd.find('.error-message').fadeOut('slow', function(){ mustdd.find('.error-message').remove(); });
					};
				}
			});
	    };
	    function Placeholder(){
	    	$('.form-style-6 input').attr('placeholder','例:日神');
	    	$('.form-style-8 input').attr('placeholder','例:太郎');
	    	$('.form-style-10 input').attr('placeholder','例:ニッシン');
	    	$('.form-style-12 input').attr('placeholder','例:タロウ');
	    	$('.form-style-24 input').attr('placeholder','例:○○○○@nisshin.co.jp');
	    	$('.form-style-26 input').attr('placeholder','例:34');
	    	var PHdd = $('.form-style-14,.form-style-18,.form-style-20,.form-style-22')
	    	PHdd.each(function(i) {
		    	PHdd.eq(i).find('input').attr('placeholder',PHdd.eq(i).text().replace(/\s+/g,'').replace('：',':'));
				jQuery.trim(PHdd.eq(i).attr('placeholder'));
			// 	PHdd.eq(i).contents().filter(function(){
		 //        		return this.nodeType==3 // テキストノードか否か
			// 	}).remove();
			// });
	    	// PHdd.each(function(i) {
				PHdd.eq(i).after($('<dd>')
					.attr('class', PHdd.eq(i).attr('class'))
					.append(
						$('<input>')
							.attr({'type':PHdd.eq(i).find('input').attr('type'), 'name':PHdd.eq(i).find('input').attr('name'), 
								'size':PHdd.eq(i).find('input').attr('size'), 'pattern':PHdd.eq(i).find('input').attr('pattern'), 'class':PHdd.eq(i).find('input').attr('class'), 'placeholder':PHdd.eq(i).find('input').attr('placeholder')})
					)
				);
				PHdd.eq(i).remove();
			});

			var PHtext = $('.form-style-28')
	    			.text()
	    			.replace('人','')
	    			.replace('人','')
	    			.replace(/\s+/g,'')
	    			.replace('：',':')
	    	$('.form-style-28 input').attr('placeholder',PHtext);
	    	$('.form-style-28 input').attr('placeholder');
	    	var PtextNode2 = $('<dt>').html($('.form-style-28').html());
			var PHtext2 = PtextNode2
	    			.text()
	    			.replace('人','')
	    			.replace(/\s+/g,'')
	    			.replace('：',':')
	    			.replace('例:4','')
	    	$('.form-style-28').append($('<span>').text(PHtext2));

	    	$('.form-style-28')
	    		.contents() // テキストノード含む全要素
	    		.filter(function(){
	        		return this.nodeType==3 // テキストノードか否か
				}).remove();

		};
	}
});