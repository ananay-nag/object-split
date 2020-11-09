/**
 * Created by developer on 07/11/2020.
 */
"use strict";

const { inherits } = require("util");

class CustomError {
  constructor(code, message, name) {
    Error.captureStackTrace(this, CustomError);
    this.name = name || CustomError.name;
    this.code = code;
    this.message = message;
  }
}

inherits(CustomError, Error);

// export default CustomError;
