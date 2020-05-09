//正则表达式

//定义
var reg1 = /[abc]/;//-----该正则表达式，要测试的字符串中是否含有a,b,c中的任意一个字符
console.log(reg1.test("hhgjk"));//false
console.log(reg1.test("ahhgjk"));//true

var reg2 = /\d/;//判断字符串中是否包含数字
console.log("===================")
console.log(reg2.test("dsadasfsaasf3f56"));//true
console.log(reg2.test("dsadasfsaasfsafaf"));//false


var reg3 = /\d{3}/;//表示3个数字。
console.log("============");
console.log(reg3.test("5645sdasdasdasdsaf"));//true
console.log(reg3.test("sd4wasdas3das2dsaf"));//false

var reg4 = /\d{1,3}/;//表示出现1个数字、2个数字、3个数字。
console.log("============");
console.log(reg4.test("45445sdasdasdasdsaf"));//true
console.log(reg4.test("sd4wasdas3das2dsaf"));//true


var reg5 = /^\d+$/;//表示只能是数字，出现1或多次

//^：表示以xxx开始，$：表示以xxx结束


//正则表达式与String字符串方法的结合使用
/*
search
match
replace
split
 */
var str = "sads54s4d5as4fas";

//使用replace方法将所有的数字替换为”->“
//第一个参数表示要替换的字符串，第二个参数表示要替换为的字符串
//该方法不会改变原字符串的值
console.log(str.replace("4", "->"));//sads5->s4d5as4fas
//默认情况下，只会替换从左到右第一个匹配的字符串
console.log(str.replace(/4/g, "->"));// sads5->s->d5as->fas   用正则表达式g修饰符

var str1 =  "222ssdas55ss22sdf";
console.log(str1.replace(/\d+/g, "->"));//->ssdas->ss->sdf

var str2 = "222ssdas55ss22sdf";
//要得到，str中的数字
var arr = str2.split(/[A-z]+/);// ["222", "55", "22", ""]
console.log(arr);