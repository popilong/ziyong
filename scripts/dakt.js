let obj = JSON.parse($response.body);

    obj.data.vip_type = "皇冠会员",
    obj.data.vip_expire = "2099-12-14 12:12:12",
    obj.data.is_vip = V6,
    obj.data.vip_day = 99999,

$done({body: JSON.stringify(obj)});
