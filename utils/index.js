/**
 * Created by developer on 07/11/2020.
 */
const { HTTP_CONST, INIT_CONSTANT } = require("../common/constant");
const { CustomError } = require("./error");
const utility = {
  infoLogger,
  handleError,
  isString,
  isArray,
  isObject,
  isExactMatchObject,
  isExactMatchArray,
  handleResponse,
  checkByLengthParam,
  checkByKeyNameParam,
};
module.exports.utility = utility;
function infoLogger(message, type = "INFO", isLogged = INIT_CONSTANT.IS_CONSOLE) {
  if (isLogged) {
    console.log(
      JSON.stringify({
        message: message,
        type: type,
      })
    );
  }
}
function handleError(message, code) {
  return {
    success: false,
    data: "",
    message: message ? message : "unknown error",
    code: code ? code : HTTP_CONST.RESPONSE_CODE.BAD_REQUEST,
  };
}
function handleResponse(data) {
  return {
    success: true,
    data: data,
    message: "success",
    code: HTTP_CONST.RESPONSE_CODE.SUCCESS,
  };
}
function isString(string) {
  return (typeof string === "String" || typeof string === "string") && string.trim().length !== 0;
}
function isArray(array) {
  return array instanceof Array && array.length > 0;
}
function isObject(object) {
  return typeof object === "object" && Object.keys(object).length > 0;
}
function isExactMatchObject(text, data) {
  return Object.keys(data).length >= text.match(/{(\w+)}/gi).length;
}
function isExactMatchArray(text, data) {
  return data.length >= text.match(/{(\w+)}/gi).length;
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
