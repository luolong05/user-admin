const path = require("path");
const alias = {
  "@": path.resolve(__dirname, "../src"),
  "@commonUI": path.resolve(__dirname, "../src/components/common"),
  "@modules": path.resolve(__dirname, "../src/components/modules"),
  "@styles": path.resolve(__dirname, "../src/styles/baseComponents"),
};

module.exports = {
  alias,
};
