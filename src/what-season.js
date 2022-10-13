const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	try {
		const season = [
			[11, 0, 1],
			[2, 3, 4],
			[5, 6, 7],
			[8, 9, 10]];

		const month = [
			'winter',
			'spring',
			'summer',
			'autumn'];

		if (date === undefined) {
			return 'Unable to determine the time of year!';
		}

		if (isNaN(date.getTime())) {
			Error('Invalid date!');
		}

		const monthNumber = date.getMonth();

		for (let i = 0; i < season.length; i++) {
			for (let j = 0; j < season[0].length; j++) {
				if (season[i][j] === monthNumber) {
					return month[i];
				}
			}
		}
	} catch {
		throw Error('Invalid date!');
	}
}

module.exports = {
	getSeason
};
