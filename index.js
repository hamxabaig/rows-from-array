'use strict';

module.exports = (arr, options = {}) => {
	if (!Array.isArray(arr)) {
		throw new TypeError(`Expected an array, got ${typeof arr}`);
	}

	options.rowLength = options.rowLength || 2;
	const arrLength = arr.length;

	if (typeof options.rowLength !== 'number') {
		throw new TypeError(`Expected options.rowLength to be number, got ${typeof arr}`);
	}

	if (options.rowLength > arr.length) {
		throw new Error(`rowLength should be less than array length`);
	}

	if (typeof options.fillRow !== 'undefined' && (arrLength % options.rowLength) !== 0) {
		const itemsToAdd = [];
		for (let i = 0; i < (options.rowLength - (arrLength % options.rowLength)); i++) {
			itemsToAdd.push(options.fillRow);
		}
		arr = arr.concat(itemsToAdd);
	}

	return arr.reduce((rows, item, idx) => {
		if (idx % options.rowLength === 0 && idx > 0) {
			rows.push([]);
		}
		rows[rows.length - 1].push(item);
		return rows;
	}, [[]]);
};
