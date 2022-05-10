// O(n**2)

function findSmallestValue(arr) {
    let smallestValue = arr[0];
    let index = 0;
    arr.forEach((element, i) => {
        if (element < smallestValue) {
            index = i;
            smallestValue = element;
        }
    });
    return index;
}

function sortArray(arr) {
    array = [];
    const iterations = arr.length;
    for (let i = 0; i < iterations; i++) {
        index = findSmallestValue(arr);
        array.push(arr[index]);
        arr.splice(index, 1);
    }
    return array;
  }

