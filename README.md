# Object-Split

`@ananay-nag/object-split` module is a comprehensive nodejs for spliting object with any speccific key or length with following features:

- Easy to use as modules
- Easy to install

# Versions-

`@ananay-nag/object-split` has released version `1.0.4`.

It is still able to use v1 with `@ananay-nag/object-split@1.0.4`

```js
// v1.0.4
const splitObject = require("@ananay-nag/object-split");
```

# Quick Start

- [As Library](#library)

## Library

### Installation

```
npm i --save @ananay-nag/object-split
```

### example -

```js
const { splitObject } = require("./index");

let object = { A: "A", B: "B", C: "C", D: "D", E: "E" };

let options = [
  [1, 3],
  [2, 4],
  [4, 5],
];

try {
  console.log("By Name");
  console.log(splitObject.byLength(object, options));
  console.log("By KeyName");
  console.log(splitObject.byKeyName(object, "D"));
} catch (err) {
  console.log("err" + err);
}

/*
By Name
[
  [ { B: 'B' }, { C: 'C' } ],
  [ { C: 'C' }, { D: 'D' } ],
  [ { E: 'E' } ]
]
By KeyName
[ [ { A: 'A' }, { B: 'B' }, { C: 'C' } ], [ { D: 'D' }, { E: 'E' } ] ]
*/
```

