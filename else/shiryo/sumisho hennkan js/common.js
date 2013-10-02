function isErrorColor(obj) {
	obj.className = obj.className.replace(/(?:^|\s)necolor(?!\S)/, "ecolor");
	return obj.className;
}

function isNoErrorColor(obj) {
	obj.className = obj.className.replace(/(?:^|\s)ecolor(?!\S)/, "necolor");
	return obj.className;
}

function isEmtyVal(obj) {
	if (obj.value.replace(/\s|　/g,"") == "") {
		obj.className = isErrorColor(obj);
		return true;
	} else {
		obj.className = isNoErrorColor(obj);
		return false;
	}
}

function chkEmtyVal(obj,fl){
	if(fl == 1){
		if(obj.value != ""){
			isEmtyVal(obj);
		}else{
			obj.className = isNoErrorColor(obj);
			return true;
		}
	}else{
		isEmtyVal(obj);
	}
} 

function isNumberVal(obj) {
	if(obj.value.match(/^[0-9]+$/)) {
		obj.className = isNoErrorColor(obj);
		return true;
	} else {
		obj.className = isErrorColor(obj);
		return false;
	}
}

function isJapanZenkaku(obj) {
	if (obj.value.match(/[あ-んア-ンｱｰﾝａ-ｚＡ-Ｚ０-９]/)) {
		obj.className = isErrorColor(obj);
		return true;
	} else {
		obj.className = isNoErrorColor(obj);
		return false;
		
	}
}

function isJapanHankaku(obj) {
	if (obj.value.match(/[ｱ-ﾝa-zA-Z0-9 ]/)) {
		obj.className = isErrorColor(obj);
		return true;
	} else {
		obj.className = isNoErrorColor(obj);
		return false;
	}
}

function isMailStr(obj) {
	//if (obj.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
	//if(obj.value.match(/^[A-Za-z0-9]([A-Za-z0-9_-]|(\.[A-Za-z0-9]))+@[A-Za-z0-9](([A-Za-z0-9]|(-[A-Za-z0-9]))+)\.([A-Za-z]{2,6})(\.([A-Za-z]{2}))?$/)){
	if(obj.value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
		obj.className = isNoErrorColor(obj);
		return true;
	} else {
		obj.className = isErrorColor(obj);
		return false;
	}
}

// check Hiragana UTF-8
function isHiraganaUTF8(obj) {
	if (obj.value.match(/^[ぁ-ん]+$/)) {
		obj.className = isNoErrorColor(obj);
		return true;
	} else {
		obj.className = isErrorColor(obj);
		return false;
	}
}

// check Katakana UTF-8
function isKatakanaUTF8(obj) {
	if (obj.value.match(/^[ァ-ンー　]+$/)) {
		obj.className = isNoErrorColor(obj);
		return true;
	} else {
		obj.className = isErrorColor(obj);
		return false;
	}
}

function isChecked(obj1, obj2) {
	if (obj1.checked == true) {
		obj2.className = obj2.className.replace(/(?:^|\s)ecolor(?!\S)/,"tblcolor1");
		return true;
	} else {
		obj2.className = obj2.className.replace(/(?:^|\s)tblcolor1(?!\S)/,"ecolor");
		return false;
	}
}

function chkMailStr(obj) {
	if (isEmtyVal(obj) || isJapanZenkaku(obj) || !isMailStr(obj)) {
		obj.className = isErrorColor(obj);
		return false;
	} else {
		obj.className = isNoErrorColor(obj);
		return true;
	}
}

function chkEmtyValHankaku(obj) {
	if (isEmtyVal(obj) || isJapanHankaku(obj)) {
		obj.className = isErrorColor(obj);
		return false;
	} else {
		obj.className = isNoErrorColor(obj);
		return true;
	}
}

function chkNameHira(obj) {
	obj.value = obj.value.replace(/\s/ig, "　");
	//obj.value = obj.value.replace(/^[\s　]+|[\s　]+$/g, '');
	return chkEmtyValHankaku(obj);
}

function chkEmtyValWithCond(obj, flg) {
	if (flg == 1) {
		if (!isEmtyVal(obj)) {
			isJapanHankaku(obj);
		} else {
			obj.className = isNoErrorColor(obj);
			return true;
		}
	} else {
		chkEmtyValHankaku(obj);
	}
}

function chkNumberValWithSpeChar(obj) {
	if (isEmtyVal(obj) || obj.value.match(/[^0-9-]/) || isJapanZenkaku(obj)) {
		obj.className = isErrorColor(obj);
		return false;
	} else {
		obj.className = isNoErrorColor(obj);
		return true;
	}
}

function chkNumberVal(obj, lm) {
	if (isEmtyVal(obj) || !isNumberVal(obj) || obj.value.length < lm || parseInt(obj.value,10) <= 0) {
		obj.className = isErrorColor(obj);
		return false;
	} else {
		obj.className = isNoErrorColor(obj);
		return true;
	}
}

function chkNumberValWithCond(obj, flg) {
	if (flg == 1) {
		if (!isEmtyVal(obj)){
			isNumberVal(obj);
		} else {
			obj.className = isNoErrorColor(obj);
			return true;
		}
	} else {
		chkNumberVal(obj, 0);
	}
}

function chkMonthOrDay(obj1,obj2,obj3,mx){
	var dt = new Date();
	var crrYear = dt.getFullYear(); 
	
	if(isEmtyVal(obj1) || !isNumberVal(obj1) || parseInt(obj1.value,10) <= 0 || parseInt(obj1.value,10) > mx || (!invalidDateTime(obj2.value,obj3.value,crrYear) && mx == 31)){
		obj1.className = isErrorColor(obj1);
		return false;
	}else {
		obj1.className = isNoErrorColor(obj1);
		return true;
	}
}

function chkMonthOrDayWithCond(obj1,obj2,obj3,mx,flg){
	if (flg == 1) {
		if (!isEmtyVal(obj1)) {
			chkMonthOrDay(obj1,obj2,obj3,mx);
		} else {
			obj1.className = isNoErrorColor(obj1);
			return true;
		}
	} else {
		chkMonthOrDay(obj1,obj2,obj3,mx);
	}
}

function chkNameKana(obj) {
	if (!isKatakanaUTF8(obj)||obj.value.replace(/\s|　/g,"") == "") {
		obj.value = hiraganaToKatakana(obj);
		if (!isKatakanaUTF8(obj)||obj.value.replace(/\s|　/g,"") == ""){
			obj.className = isErrorColor(obj);
			return false;
		}else{
			obj.className = isNoErrorColor(obj);
			return true;
		}
	}else{
		obj.className = isNoErrorColor(obj);
		return true;
	} 
}

function chkBirthday(obj1, obj2, lm, fl, obj3, obj4, obj5,obj6){
	var today 	= new Date(); 
	var year 	= today.getFullYear();
	//if(isEmtyVal(obj1) || !isNumberVal(obj1) || obj1.value.length < lm){
	if(isEmtyVal(obj1) || !isNumberVal(obj1)){
		obj1.className = isErrorColor(obj1);
		obj6.value		= "";
		obj2.innerHTML 	= '';
		return false;
	}
	else if((((parseInt(obj1.value,10)<= 1899 || year - parseInt(obj1.value,10) <= 0) && fl == 1) || (parseInt(obj1.value,10)> 12 && fl == 2) || (parseInt(obj1.value,10)> 31 && fl == 3)) || parseInt(obj1.value,10) <= 0){
		//obj2.innerHTML = FONT_START_TAG + birthDayAlert['input'] + FONT_END_TAG;
		obj1.className = isErrorColor(obj1);
		return false;
	}
	else {
		obj1.className = isNoErrorColor(obj1);
		obj2.innerHTML = '';
	}
	if((obj3.value.length + obj4.value.length + obj5.value.length) >= 6 && (obj3.value != "" && obj4.value != "" && obj5.value != "")){
		if(invalidDateTime(obj4.value,obj5.value,obj3.value)){
			obj1.className = isNoErrorColor(obj1);
			obj6.value	= calAge(obj3, obj4, obj5);
			return true;
		}else{
			obj1.className = isErrorColor(obj1);
			return false;
		}
	}
}

function invalidDateTime(mm1,dd1,yy1){
	var dt1 = mm1 + "/" + dd1 + "/" + yy1;
	dt2 = new Date(dt1);
	dd2 = dt2.getDate();
	mm2 = dt2.getMonth()+1;
	yy2 = dt2.getFullYear();
	
	if(parseInt(dd1,10)==parseInt(dd2,10) && parseInt(mm1,10)==parseInt(mm2,10) && parseInt(yy1,10)==parseInt(yy2,10)){
		return true; 
	}else{
		return false;
	}
}

function calAge(obj1,obj2,obj3){
	var today 	= new Date(); 
	var year 	= today.getFullYear();
	var month	= today.getMonth(); 
	var day		= today.getDate();
	var pyear 	= parseInt(obj1.value,10); 
	var pmonth 	= parseInt(obj2.value,10) - 1; 
	var pday 	= parseInt(obj3.value,10); 
	var age		= 0;
	if ( month < pmonth ){ 
		age = year - pyear - 1; 
	}else if ( month > pmonth ){ 
		age = year - pyear; 
	}else if ( month == pmonth ){ 
		if ( day < pday ){ 
			age = year - pyear - 1; 
		}else if ( day > pday ){ 
			age = year - pyear; 
		} else if ( day == pday ){ 
			age = year - pyear; 
		} 
	} 
	return age;
}

function hiraganaToKatakana(obj){
	var orginText = obj.value;
	txt = "ぁぃぅぇぉゃゅょっあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ ";
	zen = "ァィゥェォャュョッアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ　";
	var str = "";
	for (var i=0; i<orginText.length; i++){
		c = orginText.charAt(i);
    	n = txt.indexOf(c,0);
	    if (n >= 0) {
	      c = zen.charAt(n);
	    }
	    str += c;
	}
	
	return str;
}

function hankakuToZenkaku(obj){
	//文字定義
	half = "0123456789";
	half += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	half += "abcdefghijklmnopqrstuvwxyz";
	half += "!#$%'()*+,-./:;=?@[]^_`{|}~ ";
	half +=  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｯｬｭｮｰ"; 
	halfArr = new Array("ｳﾞ","ｶﾞ","ｷﾞ","ｸﾞ","ｹﾞ","ｺﾞ","ｻﾞ","ｼﾞ","ｽﾞ","ｾﾞ","ｿﾞ","ﾀﾞ","ﾁﾞ","ﾂﾞ","ﾃﾞ","ﾄﾞ","ﾊﾞ","ﾋﾞ","ﾌﾞ","ﾍﾞ","ﾎﾞ","ﾊﾟ","ﾋﾟ","ﾌﾟ","ﾍﾟ","ﾎﾟ");

	full = "０１２３４５６７８９";
	full += "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
	full += "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
	full += "！＃＄％’（）＊＋，－．／：；＝？＠［］＾＿｀｛｜｝￣　";
	full += "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョー";
	fullArr = new Array("ヴ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ");
	
	var orginText = obj.value;
	var newText	= "";
	for(var i=0; i<fullArr.length; i++){
		var reg 	= new RegExp(halfArr[i],"g"); 
		orginText 	= orginText.replace(reg, fullArr[i]);
	}
	for(i=0; i<orginText.length; i++){
		var oneStr 	= orginText.charAt(i);
		var num 	= half.indexOf(oneStr,0);
		oneStr = num >= 0 ? full.charAt(num) : oneStr;
		newText += oneStr;
	}
	return newText;
}

function zenkakuToHankaku(obj){
	//文字定義
	half = "0123456789";
	half += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	half += "abcdefghijklmnopqrstuvwxyz";
	half += "!#$%'()*+,-./:;=?@[]^_`{|}~ ";
	half +=  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｯｬｭｮｰ"; 
	halfArr = new Array("ｳﾞ","ｶﾞ","ｷﾞ","ｸﾞ","ｹﾞ","ｺﾞ","ｻﾞ","ｼﾞ","ｽﾞ","ｾﾞ","ｿﾞ","ﾀﾞ","ﾁﾞ","ﾂﾞ","ﾃﾞ","ﾄﾞ","ﾊﾞ","ﾋﾞ","ﾌﾞ","ﾍﾞ","ﾎﾞ","ﾊﾟ","ﾋﾟ","ﾌﾟ","ﾍﾟ","ﾎﾟ");

	full = "０１２３４５６７８９";
	full += "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
	full += "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
	full += "！＃＄％’（）＊＋，－．／：；＝？＠［］＾＿｀｛｜｝￣　";
	full += "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョー";
	fullArr = new Array("ヴ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ");
	
	var orginText = obj.value;
	var newText	= "";
	for(var i=0; i<halfArr.length; i++){
		var reg = new RegExp(fullArr[i],"g"); 
		orginText = orginText.replace(reg, halfArr[i]);
	}
	for(i=0; i<orginText.length; i++){
		var oneStr = orginText.charAt(i);
		var num = full.indexOf(oneStr,0);
		oneStr = num >= 0 ? half.charAt(num) : oneStr;
		newText += oneStr;
	}
	return newText;
}

function chkZenkakuCond(obj,flg){
	if(flg == 1){
		if(!isEmtyVal(obj)){
			obj.value = hankakuToZenkaku(obj);
			chkEmtyValHankaku(obj);
		} else {
			obj.className = isNoErrorColor(obj);
			return true;
		}
	}
	else{
		obj.value = hankakuToZenkaku(obj);
		chkEmtyValHankaku(obj);
	}
}

function isTime(obj){ 
	if(regs = obj.value.match(/^(\d{1,2}):(\d{2})(:00)?([ap]m)?$/)) {
		var i = 0;
		if(regs[3]) {
			// 12-hour time format with am/pm
			if(regs[1] < 1 || regs[1] > 12) {
				i++;
			}
		}else {
			// 24-hour time format
			if(regs[1] > 23) { 
				i++;
			}
		}
		if(i > 0 || regs[2] > 59) { 
			obj.className = isErrorColor(obj);
			return false;
		}else{
			obj.className = isNoErrorColor(obj);
			return true;
		}
	}else{
		obj.className = isErrorColor(obj);
		return false;
	}
}

function chkTime(obj){
	if(isTime(obj)){
		return true;
	}
	else{
		return false;
	}
}

function chkMailStrWithCond(obj, flg) {
	if (flg == 1) {
		if (!isEmtyVal(obj)) {
			isMailStr(obj);
		} else {
			obj.className = isNoErrorColor(obj);
			return true;
		}
	} else {
		chkMailStr(obj, 0);
	}
}

function chkTimeWithCond(obj,fl){
	if(fl == 1){
		if(!isEmtyVal(obj)){
			isTime(obj);
		}else{
			obj.className = isNoErrorColor(obj);
			return true;
		}
	}else{
		chkTime(obj);
	}
}

function haveChecked(arr){
	var ct = 0;
	 for(var i = 0; i < arr.length; i++){
		 if(arr[i].checked == true){
			 ct++;
		 }
	 }
	 if(ct > 0){
		 return true;
	 }else{
		 return false;
	 }
}

function resetErrorMsg(){
	var spans = document.getElementsByTagName("span");
	for (var i=0;i<spans.length;i++) {
		spans[i].innerHTML = "";
	}
}

function openWindow(link,title,width,height){
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);
	var prop = 'menubar=no, width= '+width+',height='+height+',toolbar=no,scrollbars=yes,resizable=no, copyhistory=no, top='+top+', left='+left;
	
	window.open(link,title,prop);
}
