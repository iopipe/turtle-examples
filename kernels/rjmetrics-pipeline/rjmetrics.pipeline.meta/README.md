# IOpipe pipescript for RJ Metrics Pipeline

Usage:

```javascript
var iopipe = require("iopipe")()
var pipeline = iopipe.define("rjmetrics.pipeline.meta")({
  "client_id": 1,
  "table_name": "users",
  "key_names": ["id"]
})

/* In practice, this would be used as such: */
iopipe.define("https://get.this.data/",
              (e, cb) => { cb(do_something_with_data) },
              pipeline)
```

--------------------------------------------
# WARNING: changes since the below instructions...

Usage:

1. Fork project & edit index.js to indicate your
   RJ Metrics client id, table name, and key names.

   **NOTE:** Future versions of iopipe will allow providing
   configuration data to pipescripts eliminating this step.

  ```bash
  $ git clone https://github.com/ewindisch/iopipe-rjpipeline
  $ cd iopipe-rjpipeline
  $ nano index.js  # or vim, or emacs, etc.
  ```

2. Import into iopipe:

  **NOTE:** Future versions of iopipe will allow pulling a script
  via a marketplace a la "iopipe subscribe" or a similar command.

  ```bash
  $ iopipe import --name rjupsert $PWD/index.js
  ```

3. Login to RJ Metrics Pipeline with iopipe:

  **NOTE: NOT IMPLEMENTED YET**

  ```bash
  # The 'login' feature of iopipe is yet forthcoming as of this writing.
  $ iopipe login --url https://pipeline-gateway.rjmetrics.com/
  ```

4. Use iopipe to upload data into RJ Metrics Pipeline:

  ```bash
  # Example 1 (pipe data from CLI output into RJ Metrics Pipeline):
  $ cat data | iopipe exec - rjupsert https://pipeline-gateway.rjmetrics.com/push

  # Example 2 (pipe Twitter analytics summary data into RJ Metrics Pipeline):
  $ TWITTER_ID=<your_twitter_id>
  $ iopipe exec https://ads-api.twitter.com/0/stats/accounts/${TWITTER_ID} \
                rjupsert https://pipeline-gateway.rjmetrics.com/push
  ```

## Example IoT integration with NodeJS application on RaspberryPI:

Sends an update to RJ Metrics Pipeline whenever a button is pressed or
released on pin 7 of a Raspberry PI:

```javascript
var gpio = require("rpi-gpio")
var iopipe = require("iopipe")
var pipeline = iopipe.define("rjupsert", "https://pipeline-gateway.rjmetrics.com/push")

gpio.on('change', function(channel, value) {
  if (channel == 7) {
    pipeline(value)
  }
})
gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH);
```
