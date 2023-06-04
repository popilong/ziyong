let obj = JSON.parse($response.body);
   
    obj = {
   "state": 200,
   "message": "success",
   "content": {
     "isAnchor": 1,
     "isShowAppletWX": 1,
     "identityType": 1,
     "isShowAppletDY": 1,
     "levDesc": "超级会员",
     "headUrl": "https://www.1314zhilv.com/resources/lxwalkman/userLogo.png",
     "isShowGrey": 1,
     "phoneNum": "Traveler",
     "isMountSwitch": 0,
     "userName": "Traveler",
     "userId": "10086",
     "isActivate": 1
   },
   "success": true
 }

$done({body : JSON.stringify(obj)});
