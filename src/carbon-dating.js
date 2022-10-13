const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(finalActivity) {
	const k = 0.693 / HALF_LIFE_PERIOD;
	let t = 0;
	if (typeof finalActivity !== 'string') {
		return false;
	}
	const activ = +finalActivity;
	if (!activ) {
		return false;
	}

	t = Math.ceil(Math.log(MODERN_ACTIVITY / activ) / k);

	return (t < 0 || !t) ? false : t;
}

module.exports = {
	dateSample
};
