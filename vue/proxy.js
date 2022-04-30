function proxyData(vm, target, key) {
  Object.defineProperty(vm, key, {
    get: function () {
      return vm[target][key];
    },
    set: function (newVal) {
      vm[target][key] = newVal;
    }
  })
}

export {
  proxyData
};

