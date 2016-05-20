module.exports = function(event, context) {
  var watson = require('watson-developer-cloud');
  var speech_to_text = watson.speech_to_text({
    username: event.username,
    password: event.password,
    version: 'v1'
  });

  var params = {
    audio: event.audio,
    content_type: event.context_type,
    timestamps: true,
    word_alternatives: 0.9
  };

  speech_to_text.recognize(params, function(err, transcript) {
    if (err)
      console.log(err);
    else
      context(transcript)
  });
}
