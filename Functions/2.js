// Write a js program to find diameter, circumference and area of circle using functions.

function getDiameter(radius) {
    return radius * 2;
}

function getCircumference(radius) {
    return 2 * radius * Math.PI
}

function getArea(radius) {
    return Math.PI * radius ** 2
}
//Example
console.log("diameter of circle whose radius is 10 =",getDiameter(10));
console.log("Circumference of circle whose radius is 10 =",getCircumference(10));
console.log("Area of circle whose radius is 10 =",getArea(10));