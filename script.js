document.write('largest among three number ');




// largest among three number

let num1 = parseFloat(prompt('enter the number:'));
let num2 = parseFloat(prompt('enter the number:'));
let num3 = parseFloat(prompt('enter the number:'));
let largest;

//check condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;

}

//display
console.log("the largest number is "+ largest)