module.exports = require("./impl");

if (process.env.PET_MOCK === "mock") {
  module.exports = require("./mock");
}

module.exports.ANIMALS = require("./animals");
