export const mergeSort = (list) => {
  if (list == null) {
    return null;
  }
  if (list.length != 1) {
    let mid = parseInt(list.length / 2);
    let left_array = mergeSort(list.slice(0, mid));
    let right_array = mergeSort(list.slice(mid, list.length));
    let left_index = 0;
    let right_index = 0;
    let newList = [];

    // Compare element from two array choose which to push to new array
    while (left_index < left_array.length && right_index < right_array.length) {
      if (left_array[left_index] <= right_array[right_index]) {
        newList.push(left_array[left_index++]);
      } else {
        newList.push(right_array[right_index++]);
      }
    }
    // Push the left element left_array to result array
    while (left_index < left_array.length) {
      newList.push(left_array[left_index++]);
    }

    // Push the left element right_array to result array
    while (right_index < right_array.length) {
      newList.push(right_array[right_index++]);
    }
    return newList
  } else {
    return list;
  }
}

export const listParser = (list) => {

  let sortedList = mergeSort(list);
  // Remove duplicate value in soted array
  return sortedList.filter((e, i, a) => e !== a[i - 1]);

}
