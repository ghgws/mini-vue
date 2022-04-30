import observe from "./observe";
import { proxyData } from "./proxy";
function initState(vm) {
  var options = vm.$options;
  if (options.data) {
    initData(vm)
  }
}

function initData(vm) {
  var data = vm.$options.data;
  vm._data = data = typeof data === "function" ? data() : data || {};

  for (var key in data) {
    proxyData(vm, "_data", key);
  }
  observe(vm._data);
}
export {
  initState
};

