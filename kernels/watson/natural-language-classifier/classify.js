module.exports = function(event, context) {
  var nlc = require('watson-developer-cloud').natural_language_classifier({
    username: event.username,
    password: event.password,
    version: 'v1'
  });

  nlc.classify({
    text: event.string,
    classifier_id: event.classifier_id,
    function(err, response) {
      if (err)
        console.log('error:', err);
      else
        context(response);
    }
  });
}
