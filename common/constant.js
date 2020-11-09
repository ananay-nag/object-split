/**
 * Created by developer on 07/11/2020.
 */
module.exports = {
  HTTP_CONST: {
    RESPONSE_CODE: {
      NOT_ACCEPTABLE: 406,
      SUCCESS: 200,
      BAD_REQUEST: 400,
      FORBIDDEN: 403,
    },
  },
  ERROR_CONST: {
    CODE: {},
    MESSAGE: {
      IN_SUFFICIENT: "in-sufficient parameter in method.",
      IS_STRING: "message should be a string type.",
      IS_OBJECT: "replce value should be in key value pair.",
      IS_ARRAY: "replce value should be in Array.",
      KEYS_NOT_MATCHED: "replace keys did not match exact keys.",
    },
  },
  INIT_CONSTANT: {
    IS_CONSOLE: false,
  },
};
