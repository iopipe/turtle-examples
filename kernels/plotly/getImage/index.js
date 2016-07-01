module.exports = (event, context) => {
  /* Takes input event:
   * {
   *  username:
   *  api_key:
   *  options:
   *  figure:
   * }
   */
  var plotly = require('plotly')(event.username, event.api_key);
  plotly.getImage(event.figure, event.options, function (err, imageData) {
    (err) ? context.fail(err) : context(imageData);
  });
}
