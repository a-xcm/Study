//数组的常用方法
(function () {
    var arr = [];
    arr.push("a"); //追加一个字符串
    arr.push(1); //追加一个数字
    //建议：数组中的元素尽量时同一个类型
    arr.push("a", "b", "c");//追加多个元素

    arr.push(["q", "g"]);//可以直径二添加一个数组到arr数组中
    console.log(arr);
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    console.log(arr1.concat(arr2));//concat 方法不会改变原数组的值
    console.log(arr1);
    console.log(arr2);

    console.log(arr1.join("->"));//所有元素放入一个字符串，通过指定
    arr1.reverse();   //reverse  方法，颠倒数组元素顺序，会改变数组
    console.log(arr1);
    console.log("--------------------");
    var arr3 = [3, 2, 5, 1, 8, 10, 6];
    //sort 函数进行排序
    arr3.sort(function (a, b) {
        return a - b;
    });
    console.log(arr3);
    arr3.reverse();//颠倒元素实现
    console.log(arr3);


    //数组相加
    var arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var arr2 = [[6, 9, 2], [8, 3, 1], [7, 5, 4]];
    var arr3 = [[], [], []];
    var iLen = arr1.length;
    var jLen = arr1[0].length;
    for (var i = 0; i < iLen; i++) {
        for (var j = 0; j < jLen; j++) {
            arr3[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    console.log("===============");
    console.log(arr3);
    /**
     * 7, 11, 5
     12, 8, 7
     14, 13, 13
     */


})();
