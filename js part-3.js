let arr1 = [1,3,5,4];
console.log(arr1);
let n = 2;
let arr2 = arr1.slice(0,n);
console.log(arr2);
let arr3 = arr1.slice(arr1.length-n);
console.log(arr3);

 let str1 = "jf";

 if(str1.length==0)
 {
    console.log("Empty");
 }
 else
 {
    console.log("Not empty");
 }

let str2="fsgHfl";
if(str2==str2.toLowerCase())
{
    console.log("all in lower case");
}
else{
    console.log("not in lower case");
}


let str3 = "hhf aafhj af";
console.log(str3);

console.log(str3.trim());


let arr4 = [34,5,4,6,76,];
let ele = 4;

if(arr4.indexOf(ele)!=-1) 
{
    console.log("Element found");
}
else{
    console.log("Element not found");
}