var set = new Set();
var wset = new WeakSet();

(function () {
  var a = { a: 1 };
  var b = { b: 2 };
  var c = { c: 3 };
  var d = { d: 4 };

  set.add(1).add(2).add(3).add(4);
  wset.add(a).add(b).add(b).add(d);
})();

console.dir(set);
console.dir(wset);
