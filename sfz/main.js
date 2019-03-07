function getIdNo() {
    var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"]; // 加权因子
    var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]; // 校验码
    var address = "440732"; // 住址
    var birthday = "19901201"; // 生日
    var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    var id_no_String = address + birthday + s + lastNumber;

    return id_no_String;
}

// 生成随机姓名
function getName() {
    var familyNames = new Array("赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹","诸葛","上官","操");
    var givenNames = new Array("阿猫", "阿狗", "狗蛋", "秋生", "建国", "爱华", "卫红", "沁", "国贤", "红军", "德华", "学友", "李白", "红卫", "东方", "栋", "辉", "庆", "春齐", "杨", "治国", "东东", "雄霖", "国庆", "爱民", "珂珂", "可可", "欣欣", "花粥", "陈宇", "建政", "美欣", "雯雯", "毛三", "环琪", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", "建林", "佳乐", "林", "冰洁", "丽娜", "涵涵", "禹辰", "淳美", "丹妮", "伟洋", "涵越", "润丽", "翔", "淑华", "艺璇", "凌晶", "丹妮", "丹妮", "嘉怡", "艺璇", "艺璇", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", "佳钰", "佳玉", "晓庆", "宇春", "玉清", "海涛", "十三", "雨泽", "雅晗", "雅涵", "清妍", "诗悦", "嘉乐", "心怡", "萌", "丹妮", "蕾蕾", "佳佩", "迥然", "丹妮");

    var i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var familyName = familyNames[i];

    var j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var givenName = givenNames[i];

    var name = familyName + givenName;
    return name;
}

//生成随机银行卡号
function getBankAccount() {

    // var bank_no = document.getElementById("bank_no_select").value; 
    var bank_no = '0102';
    var prefix = "";
    switch (bank_no) {
    case "0102":
        prefix = "625826";
        break;
    case "0103":
        prefix = "621661";
        break;
    case "0105":
        prefix = "955590";
        break;
    case "0301":
        prefix = "412963";
        break;
    case "104":
        prefix = "602907";
        break;
    case "0303":
        prefix = "622256";
        break;
    case "305":
        prefix = "436738";
        break;
    case "0306":
        prefix = "621098";
        break;
    case "0308":
        prefix = "622588";
        break;
    case "0410":
        prefix = "622155";
        break;
    case "302":
        prefix = "622199";
        break;
    case "304":
        prefix = "622630";
        break;
    case "309":
        prefix = "622908";
        break;
    case "310":
        prefix = "621717";
        break;
    case "315":
        prefix = "622323";
        break;
    case "316":
        prefix = "622309";
        break;
    default:
    }

    for (var j = 0; j < 13; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }

    // var x = document.getElementsByName("bank_no");
    // for (var i = 0; i < x.length; i++) {
    //     var o = x[i];
    //     o.value = bank_no;
    // }
    // var y = document.getElementsByName("bank_account");
    // for (var i = 0; i < y.length; i++) {
    //     var o = y[i];
    //     o.value = prefix;
    // }
    return prefix;
}
//随机生成手机号码
function getMobile(){
  var secondNums = new Array('3','9','5','7','8')
  var newMobile = '1' + secondNums[Math.floor(Math.random()*secondNums.length)] +Math.floor(Math.random()*899999999 + 100000000); return newMobile
}
function genrate() {
    trs = '';
    for (var i = 1; i <= 20; i++) {
        trs = trs + '<tr><td>' + i + '</td><td>' + getName() + '</td><td> 身份证：' + getIdNo() + ' <br/>银行卡：' + getBankAccount() + '<br/>手机号码：'+getMobile()+'</td></tr>';
    }
    trs = '<table>' + trs + '</table>';
    $("list").innerHTML = trs;
}
genrate();
