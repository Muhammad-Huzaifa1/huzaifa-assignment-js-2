// Q1 : Get user to input a number using prompt() check if number is multiple of 6 or not??

// Answer Q1 : 
// let num = +prompt("Please Enter Your Number")

// if(num%6 === 0){
//     document.write("your number is a multiple of 6")

// }
// else{
//     document.write("your number is not a multiple of 6")
// }

// ============================================================================================

// Q2 : Write a code which can give grades to students according to their scores?
// Answer Q2 : 

// let score = +prompt("Enter your marks secured")
// let grade;

// if(score >=90 && score <=100){
//     console.log("Congratulations! Your Grade is A+");
// }else if(score >=80 && score<=89){
//     console.log("Good Work! Your Grade is A")
// }else if(score >=70 && score <=79){
//     console.log("Your grade is B")
// }else if(score >=60 && score <=69){
//     console.log("Better Luck Next time! Your grade is C")
// }else if(score >=50 && score <=59){
//     console.log("OOPS! You are Fail.")
// }else if(score >=0 && score <=49){
//     console.log("You will have to re appear in your exams!")
// }

// ==========================================================================================

// Q3 : Create Marksheet using if else and else if condition?
// Answer Q3 : 

var name = prompt("Please Enter Student Name")
var eng = +prompt("Please Enter marks secured in subject - English")
var urdu = +prompt("Please Enter marks secured in subject - Urdu")
var pst = +prompt("Please Enter marks secured in subject - Pakistan Studies")
var islamiat = +prompt("Please Enter marks secured in subject - Islamiat")
var maths = +prompt("Please Enter marks secured in subject - Mathematics")
var total = eng + urdu + pst + islamiat + maths;
var percentage = (total / 500) * 100;


if(percentage >=90 && percentage <=100){
    document.write(name + " Your Grade is A+ and your percentage is " + percentage + " %")
}else if(percentage >=80 && percentage <=89){
    document.write(name + " Your Grade is A and your percentage is " + percentage + " %")
}else if(percentage >=70 && percentage <=79){
    document.write(name + " Your Grade is B and your percentage is " + percentage + " %")
}else if(percentage >=60 && percentage <=69){
    document.write(name + " Your Grade is C and your percentage is " + percentage + " %")
}else if(percentage >=50 && percentage <=59){
    document.write(name + " Your Grade is D and your percentage is " + percentage + " %")
}else{
    document.write(name + " Your Number is Invalid, Please Enter a valid number!")
}



// =========================================================================================





