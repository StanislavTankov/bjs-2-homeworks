function compareArrays(arr1, arr2) {
  let result = (arr1.length === arr2.length) && arr1.every ((Element, index) => Element === arr2[index]);
  return result; 
}

compareArrays([2, 45, 33], [33, 45, 33]);



// задание 2
function advancedFilter(arr) {
  let resultArr = arr.filter((number) => number > 0) && arr.filter((number) => % 3 === 0).map ((number) => number * 10);

  return resultArr; // array
}

advancedFilter([-4, 5, 8, 55, 33,-25]);
