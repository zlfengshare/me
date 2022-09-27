/******************************
qpy.js

^https?:\/\/apis40\.qupeiyin\.com\/member\/index url script-response-body https://raw.githubusercontent.com/zlfengshare/me/main/qpy.js

[mitm] 

hostname = apis40.qupeiyin.com

******************************/

var body = $response.body
      .replace(/vip\":.*?,/g, 'vip\": "1",')
      .replace(/endtime\":.*?,/g, 'endtime\": "1979889097",');
      
$done({ body });


