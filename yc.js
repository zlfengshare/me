var objc = JSON['parse']($response['body']);
{
  "errcode": 0,
  "errmsg": "",
  "detailErrMsg": null,
  "data": {
    "yssHealthyStatus": {
      "isRed": "bb9a4db12cfcc3a0e12e58c73cecf4cf",
      "redReason": "",
      "reasonDetail": "",
      "removeGuide": "",
      "timestamp": "1665206028093",
      "pdsj": "",
      "pddw": "",
      "zdcsmc": "",
      "hsjcyq": "",
      "rylxdm": "",
      "rylxxxsm": ""
    },
    "hubeiHealthyStatus": null
  },
  "hint": "87c9face4b95408a9cd092f73246e672"
};
$done({
    'body': JSON['stringify'](objc)
});
