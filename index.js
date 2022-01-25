const slider=document.getElementById("slider");
const length=document.getElementById("length");

slider.addEventListener('input',()=>{
    length.innerHTML=`Length :${slider.value}`;
})

const generatePassword=document.getElementById("generate-password");
function array(start,end){
    let arr=[];
    for(let i=start;i<=end;i++){
        arr.push(i);
    }
    return arr;
}
const uppercase=document.getElementById("uppercase");
const lowercase=document.getElementById("lowercase");
const numbers=document.getElementById('numbers');
const symbols=document.getElementById('symbols');

const uppercaseArray=array(65,90);
const lowercaseArray=array(97,122);
const numberArray=array(48,57);
const symbolArray=array(33,42);

generatePassword.addEventListener('click',()=>{
    
let length=slider.value;
let resultArray=[];
if(uppercase.checked){
   resultArray= resultArray.concat(uppercaseArray);
}
if(lowercase.checked){
    resultArray= resultArray.concat(lowercaseArray);
 }
 if(numbers.checked){
    resultArray= resultArray.concat(numberArray);
 }
 if(symbols.checked){
    resultArray= resultArray.concat(symbolArray);
 }
let password=[];
for(let j=0;j<length;j++){
    let num =resultArray[ Math.floor(Math.random()*resultArray.length)];
    password.push(String.fromCharCode(num));
}
 document.querySelector(".click-generate").innerHTML=password.join('');
});
