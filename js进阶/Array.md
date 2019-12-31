# Array

## 来自数组原型 Array.prototype 的遍历函数
### 1、forEach
forEach() 是一个专为遍历数组而生的方法，它没有返回值，也不会改变原数组，只是简单粗暴的将数组遍历一次

callback 参数：
+ item　	当前遍历到的数组元素
+ index	  当前元素的索引
+ array　	被遍历的数组本身

```
const arr = [1, 2, 3];
arr.forEach((item, index, array) => {
    console.log(index, item, array);
});
```
但 forEach() 无法中止遍历（除非出现错误），所以如果希望在遍历过程中跳出循环，不建议使用 forEach()

### 2、map
map() 在遍历数组的时候，会接收 callback() 的返回值作为新数组的元素，最后返回这个新数组

callback 参数：
+ item　	当前遍历到的数组元素
+ index	  当前元素的索引
+ array　	被遍历的数组本身

```
const arr = [1, 2, 3];
arr.map((item, index, array) => {
    return item + index;
});
// [1, 3, 5]
```

同样的，map() 不会修改原数组，也不能提前中止循环

由于 map() 会基于 callback() 的返回值创建新数组，所以有一些特别的用法，比如将字符串数组转为 Number 类型：

```
let arr = ['1', '2', '3'];
arr = arr.map(Number);
// [1, 2, 3]
```

### 3、filter
filter() 可以基于测试函数 callback() 的返回值，筛选出原数组中符合条件的元素，组成新数组并返回

callback 参数：
+ item　	当前遍历到的数组元素
+ index	当前元素的索引
+ array　	被遍历的数组本身

和 map() 不同的是，map() 中 callback() 的返回值会直接作为新数组的元素

而 filter() 会基于 callback() 的结果，判断是否将原数组的对应元素过滤掉

如果 callback() 的返回值为 true 或者等价于 true 的值（truthy），则保留该元素，否则排除该元素，最后返回新数组

```
const arr = [1, 3, 20, 8, 12, 18];
arr.filter((item, index, array) => {
    return item > 10;
});
// [20, 12, 18]
```
filter() 不会修改原数组，也不能提前结束遍历

### 4、every
every() 是一个检测数组的方法，可以传入一个检测函数作为 callback()

callback 参数：
+ item　	当前遍历到的数组元素
+ index	当前元素的索引
+ array　	被遍历的数组本身

如果这个检测函数每次都返回 true（truthy），则 every() 会返回 true

every() 会按照数组的顺序，为每个数组元素执行一次 callback() 方法，如果有一个返回值为 false，则停止遍历，并返回 false

```
const arr = [1, '2', 'name', 0];
arr.every((item, index, array) => {
    console.log(item);
    return typeof item === 'number';
});  
// 1  ->  '2'  -> false
```

### 5、some
some() 和 every() 类似，他们的区别仅仅是“且”和“或”的区别

every() 需要所有元素都满足条件才会返回 true，而 some() 只要有一个元素满足条件，就立刻返回 true

callback 参数：
+ item　	当前遍历到的数组元素
+ index	当前元素的索引
+ array　	被遍历的数组本身

```
const arr = [1, '2', 'name', 0];
arr.some((item, index, array) => {
    console.log(item);
    return typeof item === 'number';
});
//  1 -> true
```

### 6、find
find() 可以接收一个 callback() 作为检测函数，返回数组中第一个满足条件的元素并中止遍历，否则返回 undefined

callback 参数：
+ item　	当前遍历到的数组元素
+ index	当前元素的索引
+ array　	被遍历的数组本身

```
const arr = [
    { id: 1, name: 'lee' },
    { id: 2, name: 'rock' }, 
    { id: 3, name: 'poly' }
];
arr.find((item, index, array) => {
    return item.id > 1;
});
// {id: 2, name: "rock"}
```

### 7、findIndex
findIndex() 是 find() 的孪生兄弟，find() 会返回元素的值，而 findIndex() 会返回元素的索引

callback 参数：
+ item　	当前遍历到的数组元素
+ index	当前元素的索引
+ array　	被遍历的数组本身

```
const arr = [
    { id: 1, name: 'lee' },
    { id: 2, name: 'rock' }, 
    { id: 3, name: 'poly' }
];
arr.findIndex((item, index, array) => {
    return item.id > 1;
});
// 1
```
如果没有满足条件的元素，则返回 -1

### 8、indexOf
indexOf() 用于查找某个元素在数组中的第一个索引，若无则返回 -1

参数： 
+ item	必填	目标元素
+ startIndex 	可选	开始查找的位置，默认为 0，如果是负值，则从末尾开始查找

这里的 startIndex 即使传入负值，数组遍历的顺序也不会改变，依然是从前往后遍历

```
const arr = [1, 2, 3];
arr.indexOf(2);
// 1
```

如果目标值是一个 Object，这里就会有一些出乎意料的结果

```
const arr = [
    { id: 1, name: 'lee' },
    { id: 2, name: 'rock' }, 
    { id: 3, name: 'poly' }
];
arr.indexOf({ id: 1, name: 'lee' });
// -1
```
这里的目标元素  {id: 1, name: 'lee'} 明明存在于 arr 中，但 indexOf() 返回的索引却是 -1

这是因为 JS 的 Object 都存放在堆内存里面，上面的代码其实在堆内存中创建了两个对象 {id: 1, name: 'lee'}

虽然这两个对象看起来一模一样，但本身依旧是两个对象，所以 indexOf() 的返回值为 -1

```
const obj1 = {id: 1, name: 'lee'},
      obj2 = {id: 2, name: 'rock'},
      obj3 = {id: 3, name: 'poly'};

const arr = [obj1, obj2, obj3];

arr.indexOf(obj1); // 0
```
如果像上面这样，将对象保存在一个变量中，这个变量实际保存的是这个对象的指针

arr 基于指针添加元素，indexOf() 查找的也是指针，这样就能返回正确的索引

但实际业务中很少会有基于对象指针创建数组的情况，所以一般不用 indexOf 来检测对象数组

### 9、lastIndexOf
用于查找某个元素在数组中的第一个索引和indexOf的功能一样，不同的是从后往前查找,如果没有满足条件的元素，则返回 -1

```
let arr = [1,2,3,4,5,2]
let arr1 = arr.lastIndexOf(2)
console.log(arr1)  // 5
let arr2 = arr.lastIndexOf(9)
console.log(arr2)  // -1
```


### 10、includes
includes() 和 indexOf() 类似，区别在于 indexOf() 会返回索引，而 includes() 只返回 ture 或 false

参数： 
+ item	必填	目标元素
+ startIndex 	可选	开始查找的位置，默认为 0，如果是负值，则从末尾开始查找

```
const arr = ['a', 'b', 'c'];
arr.includes('a'); // true
arr.includes('a', -2); // false
```
由于上面提到过的原因，对象数组不能使用 includes 方法来检测

### 11、reduce
reduce() 会对数组的每一个元素执行 callback() 函数

在遍历过程中，每次 callback() 的返回值，都会在下次调用 callback() 的时候，作为参数 accumulator 传进去，最终汇总为单个返回值

参数
+ callback()			必填	在数组每一项上执行的函数																																	
+ initialValue　	可选	作为第一次调用 callback() 时的第一个参数。如果没有提供初始值，则使用数组中的第一个元素。	

callback 参数： 
+ accumulator	累计值
+ item　	当前遍历到的数组元素
+ index	当前元素的索引
+ array　	被遍历的数组本身

```
const arr = [1, 2, 3, 4, 5, 6];
arr.reduce((acc, item, index, array) => {
    return acc + item;
});
// 1 + 2 + 3 + 4 + 5 + 6 = 21
```

基于累加的特性，可以实现数组去重

```
const arr = [1, 2, 1, 2, 4, 5, 3, 5];
arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
        return acc.concat(item)
    } else {
        return acc
    }
}, []);
//  [1, 2, 4, 5, 3]
```

以及数组的扁平化 flat

```
 const arr = [1,2,3,[1,2,3,4, [2,3,4]]];
 
 function flattenDeep(arr) {
     return arr.reduce((acc, val) => Array.isArray(val) 
         ? acc.concat(flattenDeep(val)) 
         : acc.concat(val), 
         []
     );    
 }
 flattenDeep(arr);
 // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
 // 等价于 -> arr.flat(Infinity)
```
 需要注意的是，如果没有提供初始值 initialValue，reduce 会从第二个元素开始执行 callback()，跳过第一个元素
 
 如果提供初始值，则从第一个元素开始。如果数组为空且没有提供初始值，则报错
 
 如果数组仅有一个元素，且没有初始值， 或者有初始值但是数组为空，那么此唯一值将被返回，并且不会执行 callback

### 12、reduceRight
reduce() 是从左到右升序遍历，而 reduceRIght() 的顺序会反过来，从右到左降序遍历 

参数： 
+ callback()	必填	在数组每一项上执行的函数
+ initialValue　	可选	作为第一次调用 callback() 时的第一个参数。如果没有提供初始值，则使用数组中的第一个元素。
 

callback 参数： 
+ accumulator	累计值
+ item　	当前遍历到的数组元素
+ index	当前元素的索引
+ array　	被遍历的数组本身
```
const arr = [0, 1, 2, 3, 4];
arr.reduceRight((acc, item) => {
    console.log('item', item);
    return acc + item;
});
// 3 -> 2 -> 1 -> 0 -> 10
```


## Array
### 1、Array.from() 
将伪数组变成数组，就是只要有length的就可以转成数组 ---es6
```
let str = '12345'
console.log(Array.from(str))    // ["1", "2", "3", "4", "5"]
let obj = {0:'a',1:'b',length:2}
console.log(Array.from(obj))   // ["a", "b"]
```