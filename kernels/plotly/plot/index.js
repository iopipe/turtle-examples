module.exports = (event, context) => {
  /* Takes input event:
   * {
   *  username:
   *  api_key:
   *  graph_options:
   *  data:
   * }
   */
  var plotly = require('plotly')(event.username, event.api_key);
  plotly.plot(event.data, event.graph_options, function (err, msg) {
    /* The msg object has the following attributes :
     * msg.url,msg.filename,msg.message,msg.warning,msg.error
     */
    context(msg);
  });
}
