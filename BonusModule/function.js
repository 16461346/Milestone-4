function biyogKorarMechin(input1,input2){
    let substaction=input1-input2;
    console.log("Function Er jog  " + substaction);
    return substaction;
}

let result= biyogKorarMechin(20,50);
console.log(result);

//Multipulation er code niche

function multipulation(Mul1,Mul2){
    let mul=Mul1*Mul2;
    console.log('The Multipulation is = '+mul);
    return mul;
}

const gunonKoraNumber=multipulation(30,3);
console.log(gunonKoraNumber);


//Division korar function 
function division(number1,number2){
    let div=number1/number2;
    console.log("The Division Number is = "+div);
    return div;
}

const divResult=division(400,3);
console.log(divResult.toFixed(1));