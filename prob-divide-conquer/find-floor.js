function findFloor(arr, num, low = 0, high = arr.length - 1) {
    // If low index exceeds high index, return -1 indicating no floor found
    if (low > high) return -1;
    
    // If num is greater than or equal to the highest element in the array,
    // return the highest element as the floor
    if (num >= arr[high]) return arr[high];
  
    // Calculate the middle index
    let mid = Math.floor((low + high) / 2);
  
    // If the middle element is equal to num, return the middle element
    if (arr[mid] === num) return arr[mid];
  
    // If num is greater than the previous element and less than the middle element,
    // the previous element is the floor
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    // If num is less than the middle element, search in the left half
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    // If num is greater than the middle element, search in the right half
    return findFloor(arr, num, mid + 1, high);
  }
  
  module.exports = findFloor;
  
  