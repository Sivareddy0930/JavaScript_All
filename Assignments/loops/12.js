//reverse a number **     1234-->4321
let a=1234;
let reverse=0,reminder;
while(a !=0){
reminder=a%10;
reverse=(reverse*10)+reminder;
a=Math.floor(a/10);
}
console.log(reverse);
// In the given code snippet, number = Math.floor(number / 10) is used to update the value of the number variable by removing the last digit.

// When the code number / 10 is executed, it performs a division operation where the number is divided by 10. This operation would result in a decimal number if the original number variable is not perfectly divisible by 10.

// To ensure we obtain an integer value (without decimal places) after the division, the Math.floor() function is used. The Math.floor() function takes a number as input and returns the largest integer less than or equal to that number.