/**
 * Created by developer on 07/11/2020.
 */
const { utility } = require("./utils/index");
const { lib } = require("./lib/index");
const { CustomError } = require("./utils/error");
const splitObject = {
  byLength,
  byKeyName,
};
function byLength(object, options, isMerge) {
  if (!utility.isObject(object)) throw new CustomError(400, "Not a valid object parameter.", "InvalidParam");
  this.object = object;
  if (utility.checkByLengthParam(options)) {
    return lib.startSplitByLength(this.object, options, isMerge);
  }
}
function byKeyName(object, options, isMerge) {
  if (!utility.isObject(object)) throw new CustomError(400, "Not a valid object parameter.", "InvalidParam");
  this.object = object;
  if (utility.checkByKeyNameParam(options)) {
    return lib.startSplitByKeyName(this.object, options, isMerge);
  }
}
module.exports.splitObject = splitObject;
