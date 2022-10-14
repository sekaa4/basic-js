const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(direct) {
		this.direct = direct ?? true;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw Error('Incorrect arguments!');
		}

		let newKey = key;
		let newMassage = message.split(' ');

		let value = Math.ceil(message.length / newKey.length);
		newKey = newKey.repeat(value);
		newKey = newKey.slice(0, message.length);
		newKey = [...newKey.toUpperCase()].map(el => el.codePointAt(0));

		newMassage = newMassage.map(el => {
			const words = [...el.toUpperCase()].map(el => {
				if (/^[A-Z]+$/i.test(el)) {
					return el.codePointAt(0)
				}
				return el;
			});

			const crypt = words.map((el, i) => {
				if (typeof el === 'number') {
					let num = el + newKey[i] - 65 > 90 ? el + newKey[i] - 91 : el + newKey[i] - 65;
					return String.fromCodePoint(Math.abs(num));
				}
				return el;
			});
			newKey = newKey.slice(crypt.length);
			if (this.direct === true) {
				return crypt.join('');
			}
			return crypt.reverse().join('');
		});
		if (this.direct === true) {
			return newMassage.join(' ');
		}
		return newMassage.reverse().join(' ');
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw Error('Incorrect arguments!');
		}

		let newKey = key;
		let newMassage = message.split(' ');

		let value = Math.ceil(message.length / newKey.length);
		newKey = newKey.repeat(value);
		newKey = newKey.slice(0, message.length);
		newKey = [...newKey.toUpperCase()].map(el => el.codePointAt(0));

		newMassage = newMassage.map(el => {
			const words = [...el.toUpperCase()].map(el => {
				if (/^[A-Z]+$/i.test(el)) {
					return el.codePointAt(0);
				}
				return el;
			});

			const crypt = words.map((el, i) => {
				if (typeof el === 'number') {
					let num = el - newKey[i] < 0 ? el - newKey[i] + 91 : el - newKey[i] + 65;
					return String.fromCodePoint(Math.abs(num));
				}
				return el;
			});
			newKey = newKey.slice(crypt.length);
			if (this.direct === true) {
				return crypt.join('');
			}
			return crypt.reverse().join('');
		});
		if (this.direct === true) {
			return newMassage.join(' ');
		}
		return newMassage.reverse().join(' ');
	}
}

module.exports = {
	VigenereCipheringMachine
};
