let books=['bangla','english','math','physics','cemestry','biology','computer'];
console.log(books)

for (let i=0; i<books.length;  i=i+1 ){
    console.log(books[i]);
}

const rev_books=books.reverse(); //reverse kore 
console.log('This the Reverse Array : =  '+rev_books);


const sort_books=books.sort(); //a-z projonto crom onusare sajay
console.log('This Sorted List: : ---' +sort_books);


const gadget=[
    {name:'laptop', price:100000, color:'black', brand:'Apple'},
    {name:'lapop', price:5000, color:'green', brand:'xiomi'},
    {name:'computer', price:40000, color:'poink', brand:'Gigabite'}
]

console.log(gadget[1].name);
for (let single_gadget of gadget){
    console.log('Name :'+single_gadget.name, "Brand :"+single_gadget.brand, "Price :"+single_gadget.price);
}
//console.log(gadget.name, gadget.color);//eita eivabe kokhonoi use kora jay na