const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		let count = 0;
		let prev = 0;

		if (Array.isArray(arr)) {
			count += 1;
			for (let prop of arr) {
				let result = this.calculateDepth(prop);
				prev = prev >= result ? prev : result;
			}
		}
		return count + prev;
	}
}

module.exports = {
	DepthCalculator
};
