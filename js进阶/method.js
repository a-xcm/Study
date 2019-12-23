"use strict";
/**
 * 多个数字求和
 */
function sum(...num) {
	let sum = 0;
	num.forEach(item => {
		sum += item;
	})
	return sum;
}

/**
 * 数组去重
 * @param {Object} arry1
 * @param {Object} arry2
 */
function uniq(arry1, arry2) {
	return Array.from(new Set([...arry1,...arry2]))
}

