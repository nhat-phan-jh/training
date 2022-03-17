let array = [1, 2, 2, 3, 4, 4, 4, 5, 2, 6, 8];
const mostRepetitions = (arr) => {
  let obj = {};
  let result = [];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
      if (obj[arr[i]] > max) {
        max = obj[arr[i]];
      }
    }
  }

  for (var number in obj) {
    if (obj[number] === max) {
      result.push(number);
    }
  }
  console.log(result, max);
};
mostRepetitions(array);
