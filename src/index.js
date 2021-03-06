
exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  }
  else {
    let myMin = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < myMin) myMin = array[i];
    }
    return myMin;
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) {
    return 0;
}
else {
    let myMax = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > myMax) myMax = array[i];
    }
    return myMax;
}
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  }
  else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let myAvg = sum / array.length;
    return myAvg;
  }
}
