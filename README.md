# extend

Merge two or more objects together into the first object. This is a vanilla JavaScript equivalent to [jQuery's `.extend()`](https://api.jquery.com/jquery.extend/) method, retaining the same functionality & method signature.

This project was forked from Chris Ferdinandi's original [`extend`](https://github.com/cferdinandi/extend) and updated to match `jQuery.extend()`'s method signature. This was done to limit confusion & frustration if switching to & from jQuery & vanilla JS when using the `extend()` function, but also to gain the benefit of jQuery's excellent documentation on the method. The major difference between this version and Chris's original is that objects will be merged into the first object (which is also returned for easy call chaining), while Chris's doesn't modify any of the original objects and instead returns a new object with the others merged into it.

[Download extend](https://github.com/morgant/extend/archive/master.zip)

<hr>

Many thanks to Chris Ferdinandi for the original code. Check out his original blog posts regarding his implementation of `extend()`:

* 2018-06-30: [Vanilla JavaScript version of jQuery.extend()](https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/)
* 2017-08-15: [Merging objects with vanilla JavaScript](https://gomakethings.com/merging-objects-with-vanilla-javascript/)

Also check out his ["Vanilla JS Guidebook"](https://gomakethings.com/vanilla-js-guidebook/) and level-up as a web developer. 🚀

<hr>

## Getting Started

### 1. Include extend on your site.

Include the code in your script, or load it as an external file.

```js
var extend = function () {
	...
};
```

### 2. Extend your objects

Pass in two or more objects to extend. For a deep or recursive merge, set the first argument to `true`.

```js
// Example objects
var object1 = {
    apple: 0,
    banana: { weight: 52, price: 100 },
    cherry: 97
};
var object2 = {
    banana: { price: 200 },
    durian: 100
};
var object3 = {
    apple: 'yum',
    pie: 3.214,
    applePie: true
};

// Modify object1 by combining two or more objects into it
var object1Shallow = extend( object1, object2, object3 );
var object1Deep = extend( true, object1, object2, object3 );

// Create a new object combining two or more objects into it
var newObject = extend( {}, object2, object3 );
```



## Browser Compatibility

extend works in all modern browsers, and IE 6 and above.



## How to Contribute

Please review the [contributing guidelines](CONTRIBUTING.md).



## License

The code is available under the [MIT License](LICENSE.md).
