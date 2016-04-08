var iopipe = require("iopipe")
module.exports = iopipe.define(iopipe.property("id"))
module.exports.iopipe = {
  "in": "HNitem"
  ,"out": "HNitem.id"
}
