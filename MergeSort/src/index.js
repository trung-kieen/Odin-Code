
let list = [3, 2, 1, 13, 8, 5, 0, 1];
const mergeSort = (list) => {
  if (list.length != 1) {
    let mid = list.length / 2;
    let left_array = mergeSort(list.slice(0, mid));
    let right_array = mergeSort(list.slice(mid, list.length));
    let left_index = 0;
    let right_index = 0;
    let newList = [];
    while (left_index < left_array.length && right_index < right_array.length) {
      if (left_array[left_index] <= right_array[right_index]) {
        newList.push(left_array[left_index++]);
      } else {
        newList.push(right_array[right_index++]);
      }
    }
    while (left_index < left_array.length) {
      newList.push(left_array[left_index++]);
    }

    while (right_index < right_array.length) {
      newList.push(right_array[right_index++]);
    }
    return newList
  } else {
    return list;
  }
}
const newList = mergeSort(list);
console.log(newList);
