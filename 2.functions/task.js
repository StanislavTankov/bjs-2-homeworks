// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

for(let i = 0; i<arr.length; i++){
  if(arr[i]>max){
    max = arr[i];
  } else if(arr[i]<min){
    min = arr[i];
  }
  sum = sum + arr[i];
  avg = (sum / arr.length).toFixed(2);
}
  return { min:min, max:max, avg:+avg};
}

getArrayParams([31,-15,61]);

//console.log(getArrayParams([31,-15,61])) - работает



// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

//console.log(worker([16, 25, 25])); - работает


function makeWork(arrOfArr, func){
  let max = 0;
  for(let i=0; i<arrOfArr.length; i++){
    let sum = worker(arrOfArr[i]);
    if (sum > max){
      max = sum
    }
  }
  return max;
  return makeWork(arrOfArr, worker);
}

//console.log(makeWork([10, 10, 10], [11,11,11]));



// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;

  for(let i=0; i<arr.lenght; i++)
  if (arr[i] < min){
    min = arr[i];
  }else if(arr[i]>max){
    max = arr[i];
  }
  avg = (min - max).toFixed(2);
  return avg;
}
