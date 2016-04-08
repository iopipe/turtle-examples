/* Expects repo name as input. example: "iopipe/iopipe" */
var iopipe = require("iopipe")()
module.exports = iopipe.define(
  iopipe.to_async("https://api.github.com/repos/".concat),
  iopipe.to_async("/stats/contributors".concat))
)
