const numbers=[23,62,52,85,45,95,66,42,32];
let reverse=[];

for(let i=0; i<numbers.length; i+=1){ 
    reverse.pop(numbers[i]);
}
console.log(reverse);