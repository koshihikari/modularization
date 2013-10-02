$(document).bind("mobileinit", function(){
	if (navigator.userAgent.indexOf('Android') != -1) {
		$.mobile.ajaxLinksEnabled = false;
	    $.mobile.ajaxFormsEnabled = false;
	}
	if (navigator.userAgent.indexOf('T-01A') != -1) {
		$.mobile.ajaxLinksEnabled = false;
	    $.mobile.ajaxFormsEnabled = false;
	}
});