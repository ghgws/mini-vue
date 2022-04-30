import { arrayMethods } from "./array";
import observe from "./observe";
import defineReactive from "./reactive";
function Observer(val) {
  this.value = val;

  if (!Array.isArray(val)) {
    this.walk(val);
  } else {
    this.observeArray(val);
  }
}

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
}

Observer.prototype.observeArray = function (arr) {
  arr.__proto__ = arrayMethods;
  for (var i = 0; i < arr.length; i++) {
    observe(arr[i]);
  }
}

export default Observer;