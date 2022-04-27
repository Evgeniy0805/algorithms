function binarySearch(num, arr) {

    let high = arr.length-1,
        low = 0, 
        count = 0;

    while (low <= high) {
        let mid = Math.trunc((low + high) / 2);
        console.log(`item = ${arr[mid]}; low = ${low}; mid = ${mid}; high = ${high}`);
        if (arr[mid] === num) {
            return {number: arr[mid], count: count};
        }
        arr[mid] > num ? high = mid - 1 : low = mid + 1;
        count++;
    }
    return `Number ${num} not found`;
  }
