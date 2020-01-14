"use strict";
/**
 * 不定数字求和
 * @param  {number} num 
 */
function sum(...num) {
	let sum = 0;
	num.forEach(item => {
		sum += item;
	})
	return sum;
}

/**
 * 两个数组去重
 * @param {*Array} arry1 
 * @param {*Array} arry2 
 */
function uniq(arry1, arry2) {
	return Array.from(new Set([...arry1,...arry2]))
}

/**
 * 判断数组类型
 * @param {*Array} arr 
 */
function isArray(arr) {
	return arr instanceof Array
}