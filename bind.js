/** returns a function with a context bound to this
 * const matt = {
 *  name: 'matt',
 *  shout: function() {
 *      alert(this.name);
 *  }
 * };
 * let boundShout = functionBind(matt.shout, matt); 
 * boundShout(); -> alerts 'matt;
 * boundShout = functionBind(matt.shout, {name: 'kim'});
 * boundShout(); -> alerts 'kim'
*/

function functionBind(func, context) {
  context.func = func;
  return function() {
    context.func();
  }
}
