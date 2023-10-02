//
let n = 23;
if (n%10==0)
{
    console.log("Good");
}
else{
    console.log("Bad");
}
/*
let name = prompt("Enter your name");
let age = prompt("Enter you age");

alert(`${name} is ${age} years old.`);

let quarter = 1;
switch(quarter)
{
    case 1:
        console.log("January , February , March");
        break;
    case 2:
        console.log("April , May , June");
        break;
    case 3:
        console.log("July , August , September");
        break;
    case 4:
        console.log("October , November , December");
        break;
    default:
        console.log("Quarter of month is invalid");
        break;

}
*/
let word = "Ashef";
if((word[0]=='A'|| word[0]=='a') &&(word.length>5))
{
    console.log("Golden");
}
else{
    console.log("not");
}

let a = 83;
let b = 34;
let c = 45;

if(a>b && a>c)
{
    console.log("a is big");
}
else if(b>a && b>c)
{
    console.log("b is big");
}
else{
    console.log("c is big");
}


let num1 = 28849;
let num2 = 72879;

if((num1%10)==(num2%10))
{
    console.log("same last digit");
}
else{
    console.log(" last digit not same");
}