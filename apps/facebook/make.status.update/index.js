module.exports = iopipe.define(
  iopipe.tee(
    iopipe.define("facebook.format.status.update")(event.text)
    iopipe.define("facebook.get.update.url.from.userid")(event.user_id)
  ),
  (event, context) => {
    iopipe.define(event[1])(event[0])
  }
)
