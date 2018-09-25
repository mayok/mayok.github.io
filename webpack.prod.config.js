const merge = require("webpack-merge");
const devconfig = require("./webpack.config.js");

module.exports = merge(devconfig, {
  mode: "production"
});
