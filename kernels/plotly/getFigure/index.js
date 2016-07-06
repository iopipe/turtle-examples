module.exports = (event, context) => {
  /* Takes input event:
   * {
   *  username:
   *  api_key:
   *  owner:
   *  filename:
   * }
   */
  var plotly = require('plotly')(event.username, event.api_key);
  plotly.plot(event.owner, event.filename, function (err, figure) {
    (err) ? context.fail(err) : context(figure)
  });
}
