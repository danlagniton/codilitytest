function findMin(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return undefined; // or any appropriate value indicating an empty array
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log("Minimum element in the array:", min);
  return min;
}

// Example usage
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let minElement = findMin(array);

