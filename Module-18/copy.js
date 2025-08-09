const price=25;
const copy_price=price;

console.log(price);
console.log(copy_price);// Normal variable e jodi kono variable ke copy kora hoy tahole porobortite copy kora variable er man change ba jetake copy kora hoye sei man ke alada vabe change kora jay ate **aktar sathe onno vabiabler Maner kono jamela hoy na **-eke bole ----Primitve Data Type-----;


const product = [1,2,3,4,5,6,7];// eita ar akta --Non Premitiv Data Type 
const copy_product=product;//eitar moddhe diya product er Array er value ke change kora jay 

copy_product[1]= 9; //eikhane copy_product er 1-number index er manke change kora hoyeche 
console.log(product);//kintu ei copy poddhoti ---Non-Premitive---Data Type Tal gol pakaya fale
console.log(copy_product);



//Copy kora array ke othoba jekono array ke nicher Poddhotite save vabe change kora jay 

const names=['rony','robin','yasin','afsana','ammu','abbu'];
//const copy_names=names;---//eitar poriborte ami nicher line use korte pari 

//const copy_numes=Array.from(names); //Poddhoti--1
//const copy_numes=[].concat(names); //Poddhot--2
const copy_numes=[...names];
copy_numes.shift();
//push array er ses e kono kichu add kore
//pop array er ses theke kono kichu bad deya 
//unshift array er prothom a kono kishu add kora
//shift array er prothom theke kono kiscu bad deya

console.log(names);
console.log(copy_numes);




