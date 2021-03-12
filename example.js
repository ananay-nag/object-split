const { splitObject } = require("./index");
let object = { A: "A", B: "B", C: "C", D: "D", E: "E" };
let options = [
  [1, 3],
  [2, 4],
  [4, 5],
];

let isMerge = true;

try {
  console.log("By Length");
  console.log(splitObject.byLength(object,options,isMerge));
  console.log("By KeyName");
  console.log(splitObject.byKeyName(object, "B", isMerge));
} catch (err) {
  console.log("err " + err);
}
