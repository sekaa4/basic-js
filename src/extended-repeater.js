const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const repeatTimes = options?.repeatTimes;
	const separator = options?.separator ?? '+';
	let addition = options?.addition;
	const additionRepeat = options?.additionRepeatTimes;
	const additionSeparator = options?.additionSeparator ?? '|';
	const arr = [];

	str = String(str);
	addition = String(addition);

	if (repeatTimes && str) {
		for (let i = 0; i < repeatTimes; i++) {
			arr.push(str);

			if (additionRepeat && addition !== 'undefined') {
				for (let i = 0; i < additionRepeat; i++) {
					arr.push(addition);
					if (i < additionRepeat - 1) {
						arr.push(additionSeparator);
					}
				}
			} else {
				if (addition !== 'undefined') {
					arr.push(addition);
				}
			}
			if (i < repeatTimes - 1) {
				arr.push(separator);
			}
		}
	} else {
		arr.push(str);
		if (additionRepeat && addition !== 'undefined') {
			for (let i = 0; i < additionRepeat; i++) {
				arr.push(addition);
				if (i < additionRepeat - 1) {
					arr.push(additionSeparator);
				}
			}
		} else {
			if (addition !== 'undefined') {
				arr.push(addition);
			}
		}
	}

	return arr.join('');
}

module.exports = {
	repeater
};
