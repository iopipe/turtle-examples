var gpio = require("rpi-gpio")
var iopipe = require("iopipe")()

var pipeline = iopipe.define("rjmetrics-upsert",
                             "https://pipeline-gateway.rjmetrics.com/push")

gpio.on('change', function(channel, value) {
  if (channel == 7) {
    pipeline(value)
  }
})
gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH);
