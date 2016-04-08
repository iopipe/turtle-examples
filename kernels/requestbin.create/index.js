/* This is a tricky example because we need to construct
   one stream of data (the url) and still pass data into our
   function. It's tricky do this fully functionally, so
   we're cheating a bit...
*/
var iopipe = require("iopipe")()
module.exports = (input, callback) => {
  iopipe.define(
    "http://requestb.in/api/v1/bins"
    ,JSON.parse
    ,iopipe.property("name")
    ,iopipe.concat("http://requestb.in/")
    ,(url, cb) => {
      iopipe.define(url, cb, callback)(input)
    }
  )
}
