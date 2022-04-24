let arr=[2,7,1,9,3]
console.log(...arr);
let sum=(a1,a2,a3,a4)=>{
 return a1+a2+a3+a4
}
console.log(sum(...arr));
arr.splice(2,0,5)
console.log(arr);