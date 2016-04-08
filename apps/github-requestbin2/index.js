// Get number of commits by the top 100 contributors to iopipe
var iopipe = require("iopipe")

iopipe.exec("https://api.github.com/repos/iopipe/iopipe/stats/contributors"
            ,JSON.parse
            /* Extract each contributor's total contributions */
            ,iopipe.map(iopipe.property("total"))
            /* Sum the total of all contributions */
            ,iopipe.reduce(function(x, y) { return x + y })
            /* Create a requestb.in and return the URL */
            ,iopipe.exec("http://requestb.in/api/v1/bins"
                         ,JSON.parse
                         ,iopipe.property("name")
                         /* We could replace this if we had an iopipe.tee function... */
                         ,function(I) {
                            var rbin = "http://requestb.in/".concat(I)
                            iopipe.exec(rbin)
                            console.log("POST data sent to " + rbin + "?inspect")
                          }
                         )
)
