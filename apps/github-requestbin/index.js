// Get number of commits by the top 100 contributors to iopipe
var iopipe = require("iopipe")

iopipe.define("http://requestb.in/api/v1/bins", JSON.parse, iopipe.property("name"), function(name) {
  var rbin = "http://requestb.in/"+name

  iopipe.exec(
    "https://api.github.com/repos/iopipe/iopipe/stats/contributors"
    ,JSON.parse
    ,iopipe.map(iopipe.property("total"))
    ,iopipe.reduce(function(x, y) { return x + y })
    ,rbin
  )
  console.log("POST data sent to " + rbin + "?inspect")
})("")
