// Write a function and tests to delete duplicates from an array.

function deleteDuplicates(arr) {
  const newArr = [];
  for (let element of arr) {
    if (newArr.includes(element)) {
      break;
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

//Write a function to delete duplicates from a nested array.

function deleteNestedDuplicates(arr, newArr = []) {
  console.log('1 ', newArr);

  //check every value in the nested arr. If it isn't already in the arr to return, add it.
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      console.log('2 ', newArr);
      return deleteNestedDuplicates(arr[i], newArr);
    }
    if (!containsValue(newArr, arr[i])) {
      console.log('3 ', newArr);
      newArr.push(arr[i]);
      console.log('4 ', newArr);
    }
  }
  console.log('5 ', newArr);
  return newArr;
}

//helper function to check recursively whether the newArray already contains a value or not
function containsValue(arr, value, count = 1) {
  if (count > 1) return true;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return containsValue(arr[i], value, count);
    }
    if (arr[i] === value) count++;
  }
  if (count > 1) return true;
  return false;
}

module.exports = { deleteDuplicates, deleteNestedDuplicates, containsValue };
