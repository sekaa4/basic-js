const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	const stack = [];
	const result = [];

	if (!Array.isArray(arr)) {
		throw Error(`'arr' parameter must be an instance of the Array!`);
	}

	if (arr.length === 0) {
		return arr;
	}

	arr.forEach((el, i) => {
		if (stack.length !== 0) {
			result.push(arr[i]);
			result.pop();
			stack.pop();
			return;
		}

		if ((typeof el === 'string')) {
			const operation = el;

			switch (operation) {
				case '--double-next':
					if (i + 1 >= arr.length) {
						return result;
					}
					result.push(arr[i + 1]);
					break;

				case '--double-prev':
					if (i - 1 < 0) {
						break;
					}
					if (result[result.length - 1] === arr[i - 1]) {
						result.push(arr[i - 1]);
					}
					break;

				case '--discard-next':
					if (i + 1 >= arr.length) {
						return result;
					}
					stack.push(el);
					break;

				case '--discard-prev':
					if (i - 1 < 0) {
						break;
					}
					if (result[result.length - 1] === arr[i - 1]) {
						result.pop();
					}
					break;

				default: result.push(el);
			}
		} else {
			result.push(el);
		}
	});

	return result;
}

module.exports = {
	transform
};
