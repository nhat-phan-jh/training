let array = [1,2,2,3,4,4,4,5,6];
const removeDuplicateElement  = (arr)=>{
    const obj = {};
    const result  = [];

    for(let i = 0 ;i< arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}
removeDuplicateElement(array);

const removeDuplicateElement1 = (arr) => {
  const result = [];
    let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count = 1;
        break;
      }
    }
    if (count === 0) {
      result.push(arr[i]);
    } else {
      count = 0;
    }
  }
  count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[arr.length - 1]) {
      count = 1;
      break;
    }
  }
  if (count === 0) {
    result.push(arr[arr.length - 1]);
  }
  return result;
};
removeDuplicateElement1(array);


const removeDuplicateElement2 = (arr) => {
  const arrTemp = [...arr];
  for (let i = 0; i < arrTemp.length-1; i++) {
    for (let j = i + 1; j < arrTemp.length; j++) {
      if (arrTemp[i] === arrTemp[j]) {
          arrTemp.splice(j,1);
          j--;
      }
    }
  }
  return arrTemp;
};
removeDuplicateElement2(array);