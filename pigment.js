/*
pigment
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers(.+) url script-response-body pigment.js

hostname：api.revenuecat.com

*/

let obj = JSON.parse($response.body);

obj = {
  "request_date": "2022-09-03T12:43:36Z",
  "request_date_ms": 1662209016696,
  "subscriber": {
    "entitlements": {
      "premium_access": {
        "expires_date": "2032-09-02T16:51:53Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.pixite.pigment.1weekR",
        "purchase_date": "2022-08-26T16:51:53Z"
      }
    },
    "first_seen": "2020-01-18T13:11:53Z",
    "last_seen": "2022-09-03T11:29:19Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "AC9CCC46-E7C9-437B-8790-F7EC9C9F9E67",
    "original_application_version": "1.1.0.2",
    "original_purchase_date": "2016-02-26T03:06:52Z",
    "other_purchases": {},
    "subscriptions": {
      "com.pixite.pigment.1weekR": {
        "billing_issues_detected_at": null,
        "expires_date": "2032-09-02T16:51:53Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-08-26T16:51:54Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-08-26T16:51:53Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-08-26T18:23:47Z"
      }
    }
  }
}

$done({body: JSON.stringify(obj)});
