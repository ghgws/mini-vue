// import Dep from "./dep";
import observe from "./observe";

function defineReactive(data, key, val) {
  // let deps = new Dep();
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log("reactive get", val);
      // deps.depend();
      return val;
    },
    set(newVal) {
      console.log("reactive set", newVal);
      if (val === newVal) {
        return;
      }
      observe(newVal);
      val = newVal;
      // deps.notify();
    }
  })
}

export default defineReactive;