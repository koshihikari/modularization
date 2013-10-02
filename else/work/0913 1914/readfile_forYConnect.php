<?php
function readFilesEcho($ua,$type,$path,$urlpath,$converttype){
	$url = $urlpath . $type . '/';
	// $time = time();
	// $pcCss .= '?' .$time;
	// $spCss .= '?' .$time;
	// $pcJs .= '?' .$time;
	// $spJs .= '?' .$time;
	// $ConfigPcJs .= '?' .$time;
	// $ConfigSpJs .= '?' .$time;



　　$dir_path = './plugin/yconnect_php_sdk/lib';
　　$dir = opendir( $dir_path );
　　while( false !== ($file_name = readdir( $dir ) ) ){
		echo 'document.write("<script src=\"' . $urlpath . 'plugin/yconnect_php_sdk/lib/' . $file_name . '\" charset=\"UTF-8\"></script>");';　　　　
　　}
　　closedir( $dir_path );



	// $arr = array(
	// 		'0':'ClientCredential',
	// 		'0':'HttpClient',
	// 		'0':'IdToken',
	// 		'0':'IdTokenException',
	// 		'0':'IdTokenUtil',
	// 		'0':'OAuth2ApiClient',
	// 		'0':'OAuth2ApiException',
	// 		'0':'OAuth2AuthorizationClient',
	// 		'0':'OAuth2AuthorizationCodeClient',
	// 		'0':'OAuth2AuthorizationException',
	// 		'0':'OAuth2BearerToken',
	// 		'0':'OAuth2ClientCredentialsClient',
	// 		'0':'OAuth2GrantType',
	// 		'0':'OAuth2RefreshToken',
	// 		'0':'OAuth2RefreshTokenClient',
	// 		'0':'OAuth2ResponseType',
	// 		'0':'OAuth2TokenClient',
	// 		'0':'OAuth2TokenException',
	// 		'0':'OIDConnectAuthorizationClient',
	// 		'0':'OIDConnectDisplay',
	// 		'0':'OIDConnectPrompt',
	// 		'0':'OIDConnectScope',
	// 		'0':'UserInfoClient',
	// 		'0':'YConnectClient',
	// 		'0':'YConnectLogger',

	// 	   )

	// for (var i=0,len=; i<len; i++) {

	// }

}
?>