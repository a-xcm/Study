//字符串常用方法
var str = "Hello World JavaScript";
console.log(str.charAt(1)); //e
console.log(str.indexOf("ld")); //9
console.log(str.endsWith("t")); //true 判断字符串以什么结束
console.log(str.endsWith("tt")); //false
console.log(str.lastIndexOf("o"));//7
console.log(str.substr(5,5)); // " "Worl
console.log(str.substring(5,10));//" "Worl

var arr = str.split(" "); //字符串拆分，以怎样的参数拆分，这个参数将会从结果中删除
//split 方法还可以和正则表达式结合使用
console.log(arr);










