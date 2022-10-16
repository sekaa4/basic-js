const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let number = n + '';
	let numbers = [...number];
	let numbersArr = [];
	numbers.forEach((el, i) => {
		let arr = numbers.slice();
		arr.splice(i, 1);
		numbersArr.push(+arr.join(''));
	})
	return numbersArr.sort((a, b) => b > a ? 1 : -1)[0];
}

module.exports = {
	deleteDigit
};
