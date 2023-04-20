// 23. Write a js program to find sum of elements of array using function.
function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]       
    } 
    console.log(sum);    
}
sumOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);