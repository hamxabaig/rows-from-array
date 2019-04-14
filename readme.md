# rows-from-array [![Build Status](https://travis-ci.com/hamxabaig/rows-from-array.svg?branch=master)](https://travis-ci.com/hamxabaig/rows-from-array)

> Create rows from an array with no bullshit! :sunglasses:


## Install

```
$ npm install rows-from-array
```


## Usage

```js
const createRows = require('rows-from-array');

createRows([1, 2, 3, 4, 5, 6], {rowLength: 2});
//=> [[1, 2], [3, 4], [5, 6]]
```


## API

### createRows(arr, [options])

#### arr

Type: `Array`

The Array to convert into rows

#### options

Type: `Object`

##### rowLength

Type: `number`<br>
Default: `2`

The length of the rows to divide the array into. Each element will be this length array.

##### fillRow

Type: `any`<br>
Default: `N/A`

Used to fill the array rows if the length is uneven. For instance,
```
createRows([1, 2, 3, 4, 5, 6, 7], {rowLength: 3, fillRow: 0});
//=> [[1, 2, 3], [4, 5, 6], [7, 0, 0]]
```

## Related

-	[cols-from-array](https://github.com/hamxabaig/cols-from-array) - Create columns from an array

## License

MIT © Made with ❤️ & ☕️ by [Hamza Baig](http://hamxabaig.github.io)

