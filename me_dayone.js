/*****************

let obj = JSON.parse($response.body);

obj={
  "featureBundle": {
        "bundleName": "free",
        "reason": "unknown",
        "features": [
            {
                "name": "imagesPerEntry",
                "limit": 30,
                "canUpgrade": true
            },
            {
                "name": "journalLimit",
                "limit": 30,
                "canUpgrade": true
            },
            {
                "name": "backup",
                "limit": null,
                "canUpgrade": false
            },
            {
                "name": "sync",
                "limit": null,
                "canUpgrade": false
            }
        ],
        "featuresFull": [
            {
                "name": "journalLimit",
                "limit": 30,
                "canUpgrade": true
            },
            {
                "name": "backup",
                "enabled": true,
                "canUpgrade": false
            },
            {
                "name": "sync",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "discountedSubscription",
                "enabled": true,
                "canUpgrade": false
            },
            {
                "name": "printingDiscount",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "prioritySupport",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "scanToPDF",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "attachmentsPerEntry",
                "limit": 30,
                "canUpgrade": false
            },
            {
                "name": "journalViaSMS",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "canAttachPhoto",
                "enabled": true,
                "canUpgrade": false
            },
            {
                "name": "canAttachVideo",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "canAttachAudio",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "canAttachDrawing",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "canAttachPDF",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "instagram",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "ifttt",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "colors",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "emailToJournal",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "appIcons",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "moonPhase",
                "enabled": true,
                "canUpgrade": true
            },
            {
                "name": "foursquareNearbyVenues",
                "enabled": true,
                "canUpgrade": true
            }
        ]
    },
    "subscription": {
        "premium": false,
        "plus_on_ios": true,
        "plus_on_mac": false,
        "source": [
            "Min",
            [
                "Unknown"
            ]
        ],
        "auto_renew": false,
        "is_trial": false,
        "expires": null,
        "product_id": null,
        "is_eligible_for_trial": false
    },
}
$done({body: JSON.stringify(obj)});

********************/


var body = $response.body
	
  .replace(/limit\" :1,/g, 'limit\": 30,');
			
      
$done({ body });
