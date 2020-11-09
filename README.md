# Object-Split

`@ananay-nag/object-split` module is a comprehensive nodejs for spliting object with any speccific key or length with following features:

- Easy to use as modules
- Easy to install

# Versions-

`@ananay-nag/object-split` has released version `1.0.2`.

It is still able to use v1 with `@ananay-nag/object-split@1.0.2`

```js
// v1.0.2
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
const splitObject = require("@ananay-nag/object-split");
//or
import splitObject from "@ananay-nag/object-split";

let object = { A: "A", B: "B", C: "C", D: "D", E: "E" };

let options = [
  [1, 3],
  [2, 9],
  [4, 5],
];

try {
  console.log("By Name");
  console.log(new splitObject(object).byLength(options));
  console.log("By KeyName");
  console.log(new splitObject(object).byKeyName("D"));
} catch (err) {
  console.log("err" + err);
}
/*
By Name
[
  [ { B: 'B' }, { C: 'C' } ],
  [ { C: 'C' }, { D: 'D' }, { E: 'E' } ],
  [ { E: 'E' } ]
]
By KeyName
[ [ { A: 'A' }, { B: 'B' }, { C: 'C' } ], [ { D: 'D' }, { E: 'E' } ] ]
*/
```

