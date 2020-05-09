/**
 * 数组的访问
 */
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//通过下标访问
console.log(arr1[3]);
console.log("---------------");
//数组的遍历（依次打印数组的值）
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
//请使用循环，定义1个一维数组
//1 2 3 4 5 6 7 8 9
//var  arr2 =new Array(9);//java中数组定义时必须定义长度
var arr2 = [];
for (var i = 1; i <= 9; i++) {
    arr2[i - 1] = i;
    // arr2.push(i);//一般不使用push来初始化
}
console.log("---------------");
console.log(arr2);
//请使用双重循环定义一个二维数组
/*
                1      2    3
                4      5    6
                7      8    9
                提示：使用push方法  arr.push(元素);
 */
var arr3 = [];
var count = 1;
for (var i = 0; i < 3; i++) {
    var arr11 = [];
    for (var j = 0; j < 3; j++) {
        arr11[j] = count++;
    }
    arr3[i] = arr11;
}
console.log("--------------");
console.log(arr3);

//上题使用单重循环
function fn() {
    var arr = [];
    var innerArr = [];
    for (var i = 1; i <= 9; i++) {
        innerArr.push(i);
        if (i % 3 == 0) {
            arr.push(innerArr);
            innerArr = [];
        }
    }
    return arr;
}
console.log("---------------");
console.log(fn());