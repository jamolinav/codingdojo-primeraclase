function largestElement(x) {
    var max = x[0];
    for(var i=1; i<x.length; i++) {
      if (max < x[i])
        max = x[i]
    }
    return max;
  }
  console.log( largestElement([1,30,5,7]) ); // debería imprimir 30
  