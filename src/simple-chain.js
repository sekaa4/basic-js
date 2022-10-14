const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length;
	},
	addLink(value) {
		(value === undefined) ?
			this.arr.push(`( )`) :
			this.arr.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		const index = position - 1;
		if (this.arr[index]) {
			this.arr.splice(index, 1);
			return this;
		}
		this.arr = [];
		throw Error('You can\'t remove incorrect link!');
	},
	reverseChain() {
		this.arr.reverse();
		return this;
	},
	finishChain() {
		const result = this.arr.join('~~');
		this.arr = [];
		return result;
	},
};

module.exports = {
	chainMaker
};
