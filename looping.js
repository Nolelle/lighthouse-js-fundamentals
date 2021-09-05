function range(start, end, step) {
  let array = [];
  let incorrectArray = [];
  if (
    start > end ||
    step <= 0 ||
    start === undefined ||
    step === undefined ||
    end === undefined
  ) {
    return incorrectArray;
  }
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
}

console.log(range(0, 8, 2));
//console.log(range(10, 30, 5));
//console.log(range(-5, 2, 3));
