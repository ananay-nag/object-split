/**
 * Created by developer on 07/11/2020.
 */
const lib = {
  startSplitByLength,
  startSplitByKeyName,
};
module.exports.lib = lib;
function startSplitByLength(object, options, isMerge) {
  let objectToArray = Object.entries(object);
  let finalArray = [];
  options.map((option) => {
    let start = option[0],
      end = option[1];
    let newSplitObj = JSON.parse(JSON.stringify(objectToArray.slice(start, end)));
    if (newSplitObj && newSplitObj.length)
      if (isMerge) {
        let o = {};
        for (let item of newSplitObj) {
          o[item[0]] = item[1];
        }
        finalArray.push(o);
      } else {
        finalArray.push(
          newSplitObj.map((item) => {
            let o = {};
            o[item[0]] = item[1];
            return Object.assign({}, o);
          })
        );
      }
    else finalArray.push([]);
  });
  return finalArray;
}
function startSplitByKeyName(object, KeyName, isMerge) {
  let objectToArray = Object.entries(object);
  let finalArray = [];
  let exactIndex = 0;
  objectToArray.map((item, index) => {
    if (item[0] === KeyName) exactIndex = index;
  });
  finalArray = startSplitByLength(
    object,
    [
      [0, exactIndex],
      [exactIndex, objectToArray.length],
    ],
    isMerge
  );
  return finalArray;
}
