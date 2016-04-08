# Users (developers) write functions similar to this which are
# highly reusable and portable from local systems, to the cloud (AWS Lambda),
# and even IoT / Mobile.
module.exports = function(input, context) {
  var query = ""
  for (var k in input) {
    if (query === "") {
      query += "?"
    } else {
      query += "&"
    }
    query = k + "=" + input[k]
  }
  context(iopipe.define("https://hacker-news.firebaseio.com/v0/topstories.json".concat,
                       ,JSON.parse)(query))
}
module.exports.iopipe = {
  "in": "FirebaseQuery"
  ,"out": "[]HNitem.id"
}
