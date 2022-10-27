/*

【QuantumultX】 :
*************************
[rewrite_local]
^https?:\/\/mp\.weixin\.qq\.com/s\/?.* url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/wechat_auto_read.js
*************************

【Loon】 :
*************************
[Script]
http-response ^https?:\/\/mp\.weixin\.qq\.com/s\/?.* script-path=https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/wechat_auto_read.js, requires-body=true, timeout=10, tag=微信自动阅读
*************************

【Surge】 :
*************************
[Script]
微信自动阅读 = type=http-response,pattern=^https?:\/\/mp\.weixin\.qq\.com/s\/?.*,script-path=https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/wechat_auto_read.js, requires-body=true
*************************

【小火箭】 :
*************************
[Script]
微信自动阅读 = type=http-response,script-path=https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/wechat_auto_read.js,pattern=^https?:\/\/mp\.weixin\.qq\.com/s\/?.*,max-size=131072,requires-body=true,timeout=10,enable=true
*************************

[mitm]
hostname = mp.weixin.qq.com
*/

var body = $response.body
    .replace(/<\/script>/, 'setTimeout(()=>window.history.back(),6000); </script>');
$done({ body });
