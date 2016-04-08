var iopipe = require("iopipe")
module.exports = iopipe.define(iopipe.property("text"))
module.exports.iopipe = {
  "in": "HNitem"
  ,"out": "HNitem.text"
};
