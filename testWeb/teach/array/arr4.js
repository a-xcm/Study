//数组的函数

// concat()  连接两个或更多的数组，并返回结果。不影响原数组
var a1 = [1, 2];
var a2 = [3, 4];
console.log(a1.concat(a2));//1,2,3,4
console.log(a1);//1,2
console.log(a2);//3,4

// join()  把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
console.log("=============");
var a3 = [1, 3, 5, 7, 0];
console.log(a3.join("--"));//1--3--5--7--0
console.log(a3);//1,3,5,7,0

//pop()  删除并返回数组的最后一个元素  原数组会改变
console.log("=============");
var a4 = [1, 2, 3, 4, 5, 6];
console.log(a4.pop());//6
console.log(a4);//1,2,3,4,5

// push() 向数组的末尾添加一个或更多元素，并返回新的长度。
console.log("=============");
var a5 = [1, 2];
a5.push(5, 6);
console.log(a5);//1,2,5,6

//reverse() 颠倒数组中元素的顺序。会影响原数组
console.log("=============");
var a6 = [6, 5, 9, 0, 2];
console.log(a6.reverse());//2, 0, 9, 5, 6
console.log(a6);//2, 0, 9, 5, 6

//shift()  删除并返回数组的第一个元素  会影响原数组
console.log("=============");
var a7 = [2, 0, 3];
console.log(a7.shift());//2
console.log(a7);//0,3


//slice()   从某个已有的数组返回选定的元素
//slice(start,end)
// start必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
// 也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
//
// end可选。规定从何处结束选取,end值的下标的数不包括在内。该参数是数组片断结束处的数组下标。
// 如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。
// 如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
console.log("=============");
var a8 = [2, 0, 2, 3, 5];
console.log(a8.slice(0)); //2,0,2,3,5
console.log(a8.slice(2)); //2,3,5
console.log(a8.slice(4)); //5
console.log(a8.slice(-1)); //5  负数从最后一位为-1
console.log(a8.slice(-2)); //3,5
console.log(a8.slice(1, 3)); //0,2//从a8[1]=0开始，到a8[3]结束，但是不包含a8[3];
console.log(a8.slice(1, 5)); //0,2,3,5
console.log(a8.slice(0, 3)); //2,0,2
console.log(a8.slice(0, 5)); //2,0,2,3,5

//sort()  对数组的元素进行排序
console.log("=============");
var a9 = [8, 5, 6, 10, 12, 15];
a9.sort(function (a, b) {//从小到大排序
    return a - b;
});
console.log(a9);
var a10 = [10, 9, 2, 20, 8, 6];
a10.sort(function (a, b) {//从大到小排序
    return b - a;
});
console.log(a10);

// splice()
// 删除元素，并向数组添加新元素。
//splice(index,howmany,item1,.....,itemX)
// index    必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。

// howmany  必需。要删除的项目数量。如果设置为 0，则不会删除项目。

// item1, ..., itemX    可选。向数组添加的新项目。
console.log("===========");
var a11 = [2, 5, 6, 4, 8, 10, 9];
a11.splice(0, 3);//从下标为0开始，删除3个数
console.log(a11);//4,8,10,9
a11.splice(-2, 1, 1, 2);//从倒数第二开始，删除一个数，.在这个位置加上1,2
console.log(a11);//4,8,1,2,9

// toString()
// 把数组转换为字符串，并返回结果。
console.log("===========");
var a12 = [0, 2, 9, 3, 9];
console.log(a12.toString());

// unshift()
// 向数组的开头添加一个或更多元素，并返回新的长度。
console.log("===========");
var a13 = [8, 2, 6, 13, 59];
a13.unshift(1, 2);
console.log(a13);//1, 2, 8, 2, 6, 13, 59

// toLocaleString()
// 把数组转换为本地数组，并返回结果。
console.log("-===========");
var a14 = [8, 6, 8, 9];
console.log(a14.toLocaleString());

/*
toSource()
 返回该对象的源代码

valueOf()
返回数组对象的原始值
 */
