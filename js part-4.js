let arr1 = [1,2,3,4,5,6,2,3];

let num1 = 2;

for(let i = 0; i<arr1.length; i++)
{
    if(arr1[i] == num1)
    {
        arr1.splice(i,1);
    }
}

console.log(arr1);

let num2 = 143543543;

let count1 = 0;
 let copy = num2;
 while(copy>0)
 {
    count1++;
    copy = Math.floor(copy/10);
 }

 console.log(count1);

let num3 = 23255;
let sum=0;
let copy1 = num3;

while(copy1>0)
{
    digit = copy1%10;
    sum = sum +digit;
    copy1 = Math.floor(copy1/10);
}

let n = 5;
let factorial = 1;
for(let i = 1 ; i<=n; i++)
{
    factorial = factorial*i;
}
console.log(`factorial of ${n} is ${factorial}`);

let arr3 = [2,3,5,3,6,7,8,4,4];
let lar = 0;

for(let i = 0; i<arr3.length; i++)
{
    if(lar<arr3[i])
    {
        lar =arr3[i];
    }
}
console.log(lar);