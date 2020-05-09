//Math对象
(function () {
    var a = 12.6;

    console.log(Math.floor(a));//12  对数进行下舍入
    console.log(Math.ceil(a));//13 对数进行上舍入
    console.log(Math.round(a));//13  四舍五入为最接近的整数
    var a = -12.6;
    console.log(Math.floor(a));//-13
    console.log(Math.ceil(a));//-12
    console.log(Math.round(a));//-13

    console.log(Math.random());//随机0~1但不包含1
    console.log("=========");
    console.log(Math.pow(2, 3));//2的3次方

    console.log(Math.sqrt(9)); //返回数的平方根。

})();