import test from 'ava';
import rowsFromArray from '.';

test('Should throw if args invalid', t => {
	t.throws(() => {
		rowsFromArray('string');
	}, TypeError);

	t.throws(() => {
		rowsFromArray([1, 2], {rowLength: '2'});
	}, TypeError);

	t.throws(() => {
		rowsFromArray([1], {rowLength: 2});
	}, Error);
});

test('Should convert array into rows', t => {
	t.is(rowsFromArray([1, 2, 3, 4]).length, 2);

	t.is(rowsFromArray([1, 2, 3, 4, 5, 6], {rowLength: 3}).length, 2);

	t.is(rowsFromArray([1, 2, 3, 4, 5, 6, 7], {rowLength: 3, fillRow: 0}).length, 3);
});

test('Should fill the rows to make array even when fillRow is not undefined', t => {
	t.is(rowsFromArray([1, 2, 3, 4, 5, 6, 7], {rowLength: 3, fillRow: 0})[2].length, 3);
	t.is(rowsFromArray([1, 2, 3, 4, 5, 6, 7], {rowLength: 2})[3].length, 1);
});
