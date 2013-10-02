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
				// var isRequired = $(this).find('>td').eq(0).html().indexOf('[�K�{]') !== -1 ? 1 : 0;
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
			//�ڎ�
			AjaxZip3Action();
			addattr();//�L�[�{�[�h�Ή��@�����t�^
			InputColor();//�K�{���͍��ڂ̋󔒎��̐F�ǉ�
			// SelectBoxPlus();//�Z���N�g�{�b�N�X�̍��ڒǉ�
			Placeholder();//�e�L�X�g�L����̑}��
			blurAction();//�u���[�A�N�V�������̋����@�i���́A���l�A���[���A�h���X�̊m�F�A�Z���N�g�{�b�N�X�A���W�I�{�^���m�F�j
			SubmitAction()
			FocusColor();//�t�H�[�J�X���̐F�ύX
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
			// �K�{���͍��ڂƃG���[���̃��b�Z�[�W
			var obj = {
				'string'	: 
					[
						{
							'errorMessage'	: '�����O�i���j����͂��Ă��������B',
							'element'		: $('.form-style-6 > input[type="text"]')
						},
						{
							'errorMessage'	: '�����O�i���j����͂��Ă��������B',
							'element'		: $('.form-style-8 > input[type="text"]')
						},
						{
							'errorMessage'	: '�t���J�i�i�Z�C�j����͂��Ă��������B',
							'element'		: $('.form-style-10 > input[type="text"]')
						},
						{
							'errorMessage'	: '�t���J�i�i���C�j����͂��Ă��������B',
							'element'		: $('.form-style-12 > input[type="text"]')
						},
						{
							'errorMessage'	: '�s�撬���Ԓn����͂��Ă��������B',
							'element'		: $('.form-style-18 > input[type="text"]')
						}
					],
				'number'	:
					[
						{
							'errorMessage'	: '�X�֔ԍ�����͂��Ă��������B',
							'element'		: $('.form-style-14 > input')
						},
						{
							'errorMessage'	: '�d�b�ԍ�����͂��Ă��������B',
							'element'		: $('.form-style-22 > input')
						},
						{
							'errorMessage'	: '�N�����͂��Ă��������B',
							'element'		: $('.form-style-26 > input')
						},
						{
							'errorMessage'	: '�l������͂��Ă��������B',
							'element'		: $('.form-style-28 > input')
						}
					],
				'selectbox'	:
					[
						{
							'errorMessage'	: '�s���{����I�����Ă��������B',
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
				// ���͊m�F
				isCorrect = checkString(obj['string']) === true && isCorrect === true ? true : false;

				// ���l�m�F
				isCorrect = checkNumber(obj['number']) === true && isCorrect === true ? true : false;

				// ���[���A�h���X�m�F
				isCorrect = checkMailAddress() === true && isCorrect === true ? true : false;

				// �Z���N�g�{�b�N�X�m�F
				isCorrect = checkSelectbox(obj['selectbox']) === true && isCorrect === true ? true : false;

				// ���W�I�{�^���m�F
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
					if(targetElement.closest('dd').prev().text().indexOf('�K�{') !== -1){//�K�{�łȂ���Ε\������
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
					if(targetElement.closest('dd').prev().text().indexOf('�K�{') !== -1){//�K�{�łȂ���Ε\������
						if ($.isNumeric(targetElement.val()) === false) {
							targetElement.closest('dd').append(errorElement);
						 	isCorrect = false;
						}
					} else {
						if (targetElement.val() && $.isNumeric(targetElement.val()) === false) {
							var errorElement = $('<p class="error-message">').html('���p�p�����œ��͂��Ă��������B');
							targetElement.closest('dd').append(errorElement);
						}
					}
				}
				return isCorrect;
			}
			function checkMailAddress() {//�K�{���肵�Ă��Ȃ�
				var isCorrect = true;
				var mailAddress1 = $('.form-style-24 > input:eq(0)').val();
				var mailAddress2 = $('.form-style-24 > input:eq(1)').val();
				var reg = /[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i;
				var errorMessage = '';
				if (mailAddress1 === '') {
					var errorElement = $('<p class="error-message">').html('���[���A�h���X����͂��Ă��������B');
					$('.form-style-24').find('input:eq(0)').after(errorElement);
					isCorrect = false;
				} else if (mailAddress2 === '') {
					var errorElement = $('<p class="error-message">').html('�m�F�p�̃��[���A�h���X����͂��Ă��������B');
					$('.form-style-24').find('input:eq(1)').after(errorElement);
					isCorrect = false;
				} else if (mailAddress1 !== mailAddress2) {
					var errorElement = $('<p class="error-message">').html('�m�F�p�̃��[���A�h���X�ƈ�v���܂���B');
					$('.form-style-24').find('input:eq(1)').after(errorElement);
					isCorrect = false;
				} else if (!mailAddress1.match(reg)) {
					var errorElement = $('<p class="error-message">').html('���[���A�h���X�̌`��������������܂���B');
					$('.form-style-24').find('input:eq(0)').after(errorElement);
					isCorrect = false;
				} else if (!mailAddress2.match(reg)) {
					var errorElement = $('<p class="error-message">').html('���[���A�h���X�̌`��������������܂���B');
					$('.form-style-24').find('input:eq(1)').after(errorElement);
					isCorrect = false;
				}
				return isCorrect;
			}
			function checkSelectbox(arr) {//�K�{���肵�Ă��Ȃ�
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
			function checkRadiobutton() {//�K�{���肵�Ă��Ȃ�
				var isCorrect = true;
				var errorMessage = '';
				var selectedVal = $('.form-style-30 input[type="radio"]:checked').val();
				if (selectedVal === undefined) {
					errorMessage = '���ڂ�I�����Ă��������B';
					isCorrect = false;
				} else if (selectedVal === '20' && $('.form-style-30 input[type="text"]').val() === '') {
					errorMessage = '���̑��̓��e����͂��Ă��������B';
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

		//focus & blur�A�N�V�����p�[�g�@���s
	    function FocusColor() {//focus&blur�J���[
			$("input").focus(function(){
		    	$(this).removeClass('blank');
		    	$(this).addClass('focus');
			});
			$("input").blur(function(){
		    	$(this).removeClass('focus');
		    });
	    };
	    function InputColor() {//addClass('blank')�̐ݒu
			$('#formDl > dd').each(function(i){
				if ($('#formDl > dt').not($('.form-style-30')).eq(i).text().indexOf('�K�{') !== -1) {//�J�E���g��0���P �K�{���O�ł͂Ȃ�dtNode
					$('#formDl > dd').not($('.form-style-30')).eq(i).find('input').addClass('blank');
					$('#formDl > dd').not($('.form-style-30')).eq(i).find('select').addClass('blank');
				};
			});
			$('.form-style-30').addClass('blank');
		};
	  //   function SelectBoxPlus() {//�Z���N�g�{�b�N�X�@���ڒǉ�//selected�͏����Ă��Ȃ�
	 	// 	var SelectBoxOption = $('<option>').attr('value','none').text(' -���I��- ').addClass('NoSelected');
			// $('#formDl > dd select').prepend(SelectBoxOption);
			// $('#formDl > dd select').val(SelectBoxOption);

			// $("select").val('none');//���I����\�߃Z���N�g
			// SelectValRemove();//val����
	  //   };
	  //   function SelectValRemove(){
	  //   	$('select[name="u13"] > option').each(function(i) {//���ׂĂ�option��val������
	  //   		if($(this).attr('value') !== 'none'){
			// 		$(this).attr('value', '');
			// 	};
			// })
	  //   };
	  //   function SelectValAdd(){
	  //   	$('select[name="u13"] > option').each(function(i) {//���ׂĂ�option��val��t�^
	  //   		if($(this).attr('value') !== 'none'){
			// 		$(this).attr('value',i-1);
			// 	};
			// })
	  //   };
		function blurAction() {
			var BlurInputNode = null;

			// blurNameKiboubi(BlurInputNode); // �u��]���v�̍��ڕϊ�
			// blurNameKiboujikan(BlurInputNode); // �u��]���ԁv�̍��ڕϊ�
			blurNameKanjiSei(BlurInputNode); // �u�����O�v�̍��ڕϊ�
			blurNameKanjiMei(BlurInputNode); // �u�����O�v�̍��ڕϊ�
			blurNameKanaSei(BlurInputNode); // �u�����O�v�̍��ڕϊ�
			blurNameKanaMei(BlurInputNode); // �u�t���K�i�v�̍��ڕϊ�
			blurAddressNumber(BlurInputNode); // �u�X�֔ԍ��v �����`�F�b�N
			blurAddressSelect(BlurInputNode); // �u�s���{���v �Z���N�g�`�F�b�N
			blurAddressText(BlurInputNode); // �u���Z���v�̋󗓃`�F�b�N
			blurTelNumber(BlurInputNode); // �u�Z���v �u�����N�`�F�b�N
			blurEmail(BlurInputNode); // �ue-mail�v�@�󗓁E���A�h�`���`�F�b�N
			blurAge(BlurInputNode); // �u�X�֔ԍ��v �����`�F�b�N
			blurPeople(BlurInputNode); // �u�X�֔ԍ��v �����`�F�b�N
			blurRadio(BlurInputNode); // �`�F�b�N�{�b�N�X�Asubmit��Ƀ`�F�b�N�����Ƃ��A�w�i��������B
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

		//�\�\�\�\�\�\�\�\�\�\�\�\�\�\�e�����\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\
		function BlurBlank(BlurInputNode) {
			BlurInputNode.blur( function () {
				var mustdd = $(this).closest('dd');//�e�v�f�擾
				var mustdt = mustdd.prev();
				var musttxt = $(this).val();
				if (mustdt.text().indexOf('�K�{') !== -1) {//�J�E���g��0���P �K�{���O�ł͂Ȃ�dtNode //�t������.not�I
					if (!musttxt){//�����K�{�̃e�L�X�g�̒����Ƀu�����N����������
						mustdd.find('input').addClass('blank');
						mustdd.find('.error-message').remove();
						var errorElement = $('<p class="error-message">').html('�K�{���͍��ڂł��B');
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
				var mustdd = $(this).closest('dd');//�e�v�f�擾
				var mustdt = mustdd.prev();
				var numtxt = $(this).val();
				if (numtxt && !isNaN(numtxt) === false) {//�u���[�����Ƃ��Ɉٕ�����
					mustdd.find('.error-message').remove();
					var errorElement = $('<p class="error-message">').html('���p�p�����œ��͂��Ă��������B');
					errorElement.hide();
					mustdd.append(errorElement);
					errorElement.fadeIn("slow");
					// if (BlurInputNode.closest('dd').attr('class') === 'form-style-26'
						// || BlurInputNode.closest('dd').attr('class') === 'form-style-30'){
					mustdd.find('input').addClass('blank');
					// };
				} else if�@(numtxt && !isNaN(numtxt) !== false) {//�u���[�����Ƃ�����
					mustdd.find('input').removeClass('blank');
					mustdd.find('.error-message').fadeOut('slow', function(){ mustdd.find('.error-message').remove(); });
				} else {//�u���[�����Ƃ��u�����N
					if (mustdt.text().indexOf('�K�{') !== -1){
						mustdd.find('input').addClass('blank');
						mustdd.find('.error-message').remove();
						var errorElement = $('<p class="error-message">').html('�K�{���͍��ڂł��B');
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
				BlurInputNode.closest('dd').find('.mailcheck').remove()//�u�Q�̃��A�h���`�vMS�̏���
				BlurInputNode.closest('dd').find('.' + BlurInputNode.attr('name')).remove();//�u���[�ӏ��̃G���[MS�̏���
				if(mailtxt === ''){//�u���[input���󔒂̎�
					BlurInputNode.addClass('blank');
					// if(BlurInputNode.closest('dd').find('p').hasClass(BlurInputNode.attr('name')) === false){
					var errorElement = $('<p class="error-mail">').html('���[���A�h���X����͂��Ă��������B').addClass(BlurInputNode.attr('name'));
					errorElement.hide();
					BlurInputNode.after(errorElement);
					errorElement.fadeIn("slow");
					// };
				} else if(!mailtxt.match(/.+@.+\..+/g)){//�u���[input���󔒂ł͂Ȃ��A���
					BlurInputNode.addClass('blank');
					var errorElement = $('<p class="error-mail">').html('���[���A�h���X�̌`��������������܂���B').addClass(BlurInputNode.attr('name'));
						errorElement.hide();
						BlurInputNode.after(errorElement);
						errorElement.fadeIn("slow");
				} else {//�u���[input�͐�����
					BlurInputNode.removeClass('blank');
	    			MailEachCheck();//�������input�Ɣ�r
				};
			});
	    };
    	function MailEachCheck(){//�������input�Ɣ�r
    		var MailDd = $('.form-style-24')
    		if(MailDd.find('input').eq(0).val().match(/.+@.+\..+/g) && MailDd.find('input').eq(1).val().match(/.+@.+\..+/g)){
    			//�ǂ��������A�h�`��OK
				MailDd.find('p').remove();//�ꉞ
				MailDd.find('.blank').removeClass('blank');

    			if(MailDd.find('input').eq(0).val() === MailDd.find('input').eq(1).val()){//��v
    			} else {//����
					MailDd.find('input').addClass('blank')
					var errorElement = $('<p class="error-mail">').html('�m�F�p�̃��[���A�h���X�ƈ�v���܂���B').addClass('mailcheck');
					errorElement.hide();
					MailDd.append(errorElement);
					errorElement.fadeIn("slow");
    			};
    		};
    	};
		function SelectBox(BlurInputNode) {
			BlurInputNode.change( function () {
				var mustdd = $(this).closest('dd');//�e�v�f�擾
				var mustdt = mustdd.prev();
				if ($(this).children(':selected').val()-0 === 0){//�󗓂�������
					mustdd.find('select').addClass('blank');
					mustdd.remove('.error-message');
					var errorElement = $('<p class="error-message">').html('����]����I�����Ă��������B').addClass('mailcheck');
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
				var mustdd = $(this).closest('dd');//�e�v�f�擾
				var checkval = BlurInputNode.filter('[type="radio"]:checked').val();
				if (checkval == 20){
					mustdd.removeClass('blank');
					if(BlurInputNode.filter('[type="text"]').val() === ''){
						mustdd.find('.error-message').remove();
						BlurInputNode.not('input[type=radio]').addClass('blank')
						var errorElement = $('<p class="error-message">').html('���̑��̓��e����͂��Ă��������B');
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

				var mustdd = $('.form-style-30');//�e�v�f�擾
				var mustdt = mustdd.prev();
				var checkval = mustdd.find('input[type="radio"]:checked').val();
				var musttxt = mustdd.find('input[type="text"]').val();
				if (checkval == 20){
					if (!musttxt){//�����K�{�̃e�L�X�g�̒����Ƀu�����N����������
						mustdd.find('.error-message').remove();
						mustdd.find('input[type="text"]').addClass('blank');
						var errorElement = $('<p class="error-message">').html('���̑��̓��e����͂��Ă��������B');
						errorElement.hide();
						mustdd.append(errorElement);
						errorElement.fadeIn("slow");
					} else {//���͂���
						mustdd.find('input[type="text"]').removeClass('blank');
						mustdd.find('.error-message').fadeOut('slow', function(){ mustdt.find('.error-message').remove(); });
					};
				};

			});
	    };
    	function InputAddressNumber(BlurInputNode){
			BlurInputNode.bind("change keyup",function(){//BlurInputNode�͗X�֔ԍ�
				var AddressDd = $('.form-style-16')
				var count = $(this).val().length;
				if(count == 7){
					var mustdd = AddressDd.find('select').closest('dd');//�e�v�f�擾
					var mustdt = mustdd.prev();
					var listText = AddressDd.find('select').children(':selected').text();
					if ($(this).children(':selected').val()-0 === 0){//�󗓂�������
						mustdd.find('select').addClass('blank');
					} else {//�󗓂���Ȃ�
						mustdd.find('select').removeClass('blank');
						mustdd.find('.error-message').fadeOut('slow', function(){ mustdd.find('.error-message').remove(); });
					};
				}
			});
	    };
	    function Placeholder(){
	    	$('.form-style-6 input').attr('placeholder','��:���_');
	    	$('.form-style-8 input').attr('placeholder','��:���Y');
	    	$('.form-style-10 input').attr('placeholder','��:�j�b�V��');
	    	$('.form-style-12 input').attr('placeholder','��:�^���E');
	    	$('.form-style-24 input').attr('placeholder','��:��������@nisshin.co.jp');
	    	$('.form-style-26 input').attr('placeholder','��:34');
	    	var PHdd = $('.form-style-14,.form-style-18,.form-style-20,.form-style-22')
	    	PHdd.each(function(i) {
		    	PHdd.eq(i).find('input').attr('placeholder',PHdd.eq(i).text().replace(/\s+/g,'').replace('�F',':'));
				jQuery.trim(PHdd.eq(i).attr('placeholder'));
			// 	PHdd.eq(i).contents().filter(function(){
		 //        		return this.nodeType==3 // �e�L�X�g�m�[�h���ۂ�
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
	    			.replace('�l','')
	    			.replace('�l','')
	    			.replace(/\s+/g,'')
	    			.replace('�F',':')
	    	$('.form-style-28 input').attr('placeholder',PHtext);
	    	$('.form-style-28 input').attr('placeholder');
	    	var PtextNode2 = $('<dt>').html($('.form-style-28').html());
			var PHtext2 = PtextNode2
	    			.text()
	    			.replace('�l','')
	    			.replace(/\s+/g,'')
	    			.replace('�F',':')
	    			.replace('��:4','')
	    	$('.form-style-28').append($('<span>').text(PHtext2));

	    	$('.form-style-28')
	    		.contents() // �e�L�X�g�m�[�h�܂ޑS�v�f
	    		.filter(function(){
	        		return this.nodeType==3 // �e�L�X�g�m�[�h���ۂ�
				}).remove();

		};
	}
});