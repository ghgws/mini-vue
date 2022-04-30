var ARR_METHODS = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
]

var arrProto = Array.prototype;
export var arrayMethods = Object.create(arrProto);

ARR_METHODS.forEach(function (method) {
  var origin = arrProto[method];
  Object.defineProperty(arrayMethods, method, {
    value: function () {
      var args = [].slice.call(arguments);
      return origin.apply(this, args);
    },
    enumerable: false,
    writable: true,
    configurable: true
  })
})