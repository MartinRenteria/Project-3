const validatorFactory = require("./validatorFactory");

const registerValidator = validatorFactory({
  email: { type: "email" },
  password: { type: "string", empty: false },
  firstName: { type: "string" },
  lastName: { type: "string" },
  title: { type: "string" },
  individualContributor: { type: "boolean" }
});

module.exports = registerValidator;
