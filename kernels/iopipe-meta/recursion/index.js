/* How deep does the stack go? */
module.exports = function(x) {
  return arguments.callee(x)
}
