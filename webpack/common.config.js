const path = require("path");
const alias = {
  "@": path.resolve(__dirname, "../src"),
  "@commonUI": path.resolve(__dirname, "../src/components/common"),
  "@modules": path.resolve(__dirname, "../src/components/modules"),
};

module.exports = {
  alias,
};
