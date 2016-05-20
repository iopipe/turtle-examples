var iopipe = require("iopipe")
/*
  Pass event containing:
    audio - Audio to be transcribed
    context_type - audio/flac, audio/l16, audio/wav, audio/ogg
*/
module.exports = iopipe.define(
  "examples/watson-speech-to-text",
  iopipe.property("results")[0]["alternatives"][0]["transcript"],
  iopipe.tee(
    "examples/watson-natural-language-classifier", // Use ML to determine function
    iopipe.tee("find-subject", // Extract subject
               iopipe.echo)    // Original string
  ),
  lookup_exec,
)

function lookup_exec(event, context) {
  // Assume trained functions are registered under voice-assistant namespace.
  iopipe.define("voice-assistant/" + event[0])(event[1], context)
}
