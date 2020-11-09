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
