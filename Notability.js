/******************************

脚本功能：Notability +解锁订阅
下载地址：http://mtw.so/6bQodv
特别说明：老版本解锁，然后同步新版本，
软件版本：11.7.1
脚本作者：彭于晏💞
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]


^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Notability.js

[mitm] 

hostname = notability.com

*******************************/

var obj = JSON['parse']($response['body']);
var modifiedStatus = 'HTTP/1.1 200 OK';
obj = {
    'data': {
        'processAppleReceipt': {
            '__typename': 'SubscriptionResult',
            'error': 0,
            'subscription': {
                '__typename': 'AppStoreSubscription',
                'status': 'active',
                'originalPurchaseDate': '2020-09-28T09:09:09.000Z',
                'originalTransactionId': '100109876543210',
                'expirationDate': '2999-09-28T09:09:09.000Z',
                'productId': 'com.yqc.premium_subscription',
                'tier': 'premium',
                'refundedDate': null,
                'refundedReason': null,
                'user': null
            }
        }
    }
};
$done({
    'status': modifiedStatus,
    'body': JSON['stringify'](obj)
});