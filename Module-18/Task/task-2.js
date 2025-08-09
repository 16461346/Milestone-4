let numbers=[35,25,42,55,44,66,32,12,41,23,22,14,18,20];
let even_number=[];

for(let i=0; i<numbers.length; i+=1){
    if(numbers[i]%2 === 0){
        even_number.shift(numbers[i]);
    }
}
console.log(even_number);