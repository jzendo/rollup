(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.myBundle = global.myBundle || {})));
}(this, (function (exports) { 'use strict';

	const foo = 1;
	const bar = 2;


	var namespace = (Object.freeze || Object)({
		foo: foo,
		bar: bar
	});

	console.log( Object.keys( namespace ) );

	const a = 1;
	const b = 2;

	exports.a = a;
	exports.b = b;

})));