/* Should be rewritten to use the hacker news kernels... */
var http = require('http')
var iopipe = require('iopipe')
var topstories = iopipe.define("https://hacker-news.firebaseio.com/v0/topstories.json"
                               ,JSON.parse
                               ,iopipe.map(
                                 /*iopipe.define(
                                   "https://hacker-news.firebaseio.com/v0/items/".concat
                                   ,iopipe.exec
                                   ,JSON.parse
                                   ,iopipe.property("title")))*/
                               function(i) {
                                 return iopipe.exec("https://hacker-news.firebaseio.com/v0/item/"+i+".json", JSON.parse, iopipe.property("title"))
                               })
                               ,console.log)
topstories()

/*
#http.createServer(function (req, res) {
#  res.writeHead(200, {'Content-Type': 'text/plain'});
#  try {
#    topstories()
#    //,function(i) { res.end(i) })()
#  }
#  catch (e) {
#    res.end(500)
#  }
#}).listen(999);
#console.log('Server listening on port 80');*/
