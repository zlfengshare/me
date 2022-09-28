/******************************
xrk.js

^https?:\/\/api\.v1\.esread\.com url script-response-body xrk.js

[mitm] 

hostname = api.v1.esread.com

******************************/

var body = $response.body
			.replace(/vipStatus\" : .*?,/g, 'vipStatus" : 1,')
			.replace(/vipType\" : .*?,/g, 'vipType" : 1,')
			.replace(/isLock\" : .*?,/g, 'isLock" : 1,')
			.replace(/enabled\" : .*?,/g, 'enabled" : 1,')
			.replace(/expireDate\" : .*?,/g, 'expireDate" : "2033.10.26到期",')
      
      
$done({ body });
