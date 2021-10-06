function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length) && arr1.every ((element, index) => element === arr2[index]); 
}

compareArrays([2, 45, 33], [33, 45, 33]);



// задание 2
function advancedFilter(arr) {
  return arr.filter((number) => number > 0) && arr.filter((number) => number % 3 === 0).map((number) => number * 10);
}

advancedFilter([-4, 5, 8, 55, 33,-25]);
