//  日期类
var date = new Date();
console.log(date);
//--打印年份
console.log(date.getFullYear());
//--打印月份表示范围：0~11；0表示1月
console.log(date.getMonth());
//---打印日期
console.log(date.getDate());
//---打印星期范围：0~6  0表示周日
console.log(date.getDay());
//---打印小时：0~23
console.log(date.getHours());
//---打印分钟：0~59
console.log(date.getMinutes());
//---打印秒：0~59
console.log(date.getSeconds());-1
//---打印毫秒 0~999
console.log(date.getMilliseconds());

//---打印当前到1970年1月1日0时0分0秒0毫秒 的毫秒数
console.log(date.getTime());

//----创建一个日期，2010年02月02日 12：00 ：58.98

var date1 = new Date();
date1.setFullYear(2010);
date1.setMonth(1);//0~11  1表示2月
date1.setDate(2);
date1.setHours(12);
date1.setMinutes(0);
date1.setSeconds(58);
date1.setMilliseconds(98);
console.log("===============================");
 console.log(date1);
console.log("===============================");
