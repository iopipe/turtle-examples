var iopipe = require("iopipe")
module.exports = iopipe.define("https://hacker-news.firebaseio.com/v0/item/".concat
                               ,iopipe.fetch
                               ,JSON.parse)
module.exports.iopipe = {
  "in": 'HNitem.id'
  ,"out": 'HNitem'
}
