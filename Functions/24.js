// 24. Write a js program to find maximum and minimum elements in array using function.
function maxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]                                    
        }
    }
    console.log(`max: ${max} min: ${min}`);
}
// i.e
maxMin([1, 2, 3, 4, 5, 6, 7, 8, 9]);
maxMin([5, 2, 8, 0, 5, 31, 7, 56, -6]);