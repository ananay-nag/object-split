/**
 * Created by developer on 07/11/2020.
 */
const { CustomError } = require("./error");
const utility = {
  isObject,isArray,isString,
  checkByLengthParam,
  checkByKeyNameParam,
};
module.exports.utility = utility;

function isString(string) {
  return (typeof string === "string") && string.trim().length !== 0;
}
function isArray(array) {
  return array instanceof Array && array.length > 0;
}
function isObject(object) {
  return typeof object === "object" && Object.keys(object).length > 0;
}
function checkByLengthParam(param) {
  if (isArray(param)) {
    param.map((item) => {
      if (!(isArray(item) || item.length === 2)) throw new CustomError(400, "Parameter accept array values with integer pair.", "InvalidParam");
      else
        item.map((v) => {
          if (isNaN(v)) throw new CustomError(400, "Parameter accept integer values.", "InvalidParam");
        });
    });
    return true;
  } else {
    throw new CustomError(400, "Parameter accept array values.", "InvalidParam");
  }
}
function checkByKeyNameParam(param) {
  if (!isString(param)) {
    throw new CustomError(400, "Parameter accept string value.", "InvalidParam");
  }
  return true;
}
