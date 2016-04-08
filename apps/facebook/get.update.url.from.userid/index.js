/* Meta function...? */
module.exports = (input, context) => {
  context("https://graph.facebook.com/".concat(input).concat("/feed"))
}
