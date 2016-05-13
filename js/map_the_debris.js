function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i=0 ; i<arr.length ; i++) {
    var formula = 4 * Math.pow(Math.PI, 2) * Math.pow(earthRadius + arr[i].avgAlt, 3) / GM;
    var a = Math.pow(formula, 0.5);
    a = Math.round(a);

    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = a;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
