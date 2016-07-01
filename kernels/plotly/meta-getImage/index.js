module.exports = (config) => {
  /* Takes input config:
   * {
   *  username:
   *  api_key:
   * }
   */
  var plotly = require('plotly')(config.username, event.api_key);

  return (event, context) => {
    /* Takes input event:
     * {
     *  options:
     *  figure:
     * }
     */
    plotly.getImage(event.figure, event.options, function (err, imageData) {
      (err) ? context.fail(err) : context(imageData);
    });
  }
}
