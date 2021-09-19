// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  let avg = 0;

  for (let i=0; i < arr.lenght; i++){
    if (arr[i] < min){
      min = arr[i];
    }else if(arr[i]>max){
      max = arr[i];
    }
    sum = sum + arr[i];
    avg = (sum / arr.lenght).toFixed(2);
  }

  // Ваш код

  return { min:min, max:max, avg:Number(avg) };
}

getArrayParams([99,-12,11]);



// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i=0; i<arr.lenght; i++){
    sum+=arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for ( let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    console.log(sum);
    if ( sum > max) {
      max = sum;
    }
  }
  return max;
  return makeWork(arrOfArr, worker);
}



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
