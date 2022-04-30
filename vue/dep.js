function Dep() {
  this.deps = [];
}

Dep.prototype.addDep = function (dep) {
  this.deps.push(dep);
}

Dep.prototype.removeDep = function (dep) {
  this.remove(this.deps, dep);
}

Dep.prototype.depend = function () {
  if (window.target) {
    this.addDep(window.target);
  }
}

Dep.prototype.notify = function () {
  var deps = this.deps.slice();
  for (let i = 0; i < deps.length; i++) {
    deps[i].update();
  }
}

Dep.prototype.remove = function (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index !== -1) {
      return arr.splice(index, 1);
    }
  }
}

export default Dep;