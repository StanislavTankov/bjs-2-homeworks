function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = (b ** 2 - 4 * a * c);
  if(d < 0){
    return arr;
  } else if(d === 0){
    let x = -b / (2*a);
    return arr.push(x);
  } else if (d > 0){
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return arr.push(x1, x2);
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
