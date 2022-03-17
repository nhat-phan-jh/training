let array = [1,2,2,3,4,4,4,5,6];
const removeDuplicateElement  = (arr)=>{
    let obj = {};
    let result  = [];

    for(let i = 0 ;i< arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    console.log(result);
}
removeDuplicateElement(array);

const removeDuplicateElement1 = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;
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
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[arr.length - 1]) {
      count = 1;
      break;
    }
  }
  if (count === 0) {
    result.push(arr[arr.length - 1]);
  }
  console.log(result);
};
removeDuplicateElement1(array);


const removeDuplicateElement2 = (arr) => {
  let arrTemp = [...arr];
  for (let i = 0; i < arrTemp.length-1; i++) {
    for (let j = i + 1; j < arrTemp.length; j++) {
      if (arrTemp[i] === arrTemp[j]) {
          arrTemp.splice(j,1);
          j--;
      }
    }
  }
  console.log(arrTemp);
};
removeDuplicateElement2(array);