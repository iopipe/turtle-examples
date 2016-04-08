var iopipe = require("iopipe")()
var Dockaless = require("dockaless")
var dals = new Dockaless()

exports.handler = iopipe.define(
  iopipe.property("url"),
  iopipe.fetch,
  dals.make_lambda("ffmpeg", [ "-i", "pipe:0", "-vf", "scale=320:240", "pipe:1" ])
)

exports.handler(
  { "url": "http://127.0.0.1" },
  iopipe.make_context(console.log)
)
