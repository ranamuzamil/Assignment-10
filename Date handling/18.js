// 18. Write a JavaScript program to calculate age.   
function getAge(birth){
    let birthYear = birth.getFullYear();
    let birthMonth = birth.getMonth();
    let birthdate = birth.getDate();      
    let today = new Date();
    let currYear = today.getFullYear();
    let currMonth = today.getMonth();
    let currDate = today.getDate();
    let age = currYear - birthYear
    if (currMonth < birthMonth || currMonth === birthMonth && currDate < birthdate) {
        age--
    }
    console.log(age);
}
getAge(new Date(1982, 11, 4))
getAge(new Date(1962, 1, 1))