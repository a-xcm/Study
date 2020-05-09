/**
 * Date 类扩展方法，格式化日期
 *
 * @param format
 *            格式化字符串，如：yyyy-MM-dd
 * @param local
 *            本地化变量用于国际化，使用标准的语言格式， 如果中文：zh-CN或者zh 英文：en-US 或 en
 *            还可以是使用Date.EN或Date.ZH来表示
 *
 *
 * 格式化字符串格式：
 * (注意区分大小写)
 *  yyyy：4位数年份
 *  MM ：两位数月份
 *  dd : 两位数日期
 *  HH ：两位数小时
 *  mm ：两位数分钟
 *  ss：两位数秒
 *  SSS ：三位数毫秒
 *  E : 星期（默认使用中文格式）
 */
function formatDate(date,format,local){

    if(format == undefined || format == null){
        format = "yyyy-MM-dd";
    }

    if(local == undefined || local == null){
        local = "zh-CN";
    }

    // --this是当前日期
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dd = date.getDate();
    var HH = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var SSS = date.getMilliseconds();

    var day = date.getDay();
    var weeks = {
        'zh-CN' : ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],
        'zh'    : ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],
        'en'    : ["sun","mon","tue","wen","thu","fri","sat"],
        'en-US' : ["sun","mon","tue","wen","thu","fri","sat"]
    };

    var E = weeks[local][day];

    return format.replace(/yyyy/g,year).replace(/MM/g,month).replace(/dd/g,dd)
        .replace(/HH/g,HH).replace(/mm/g,mm).replace(/ss/g,ss).replace(/SSS/g,SSS)
        .replace(/E/g,E);
};