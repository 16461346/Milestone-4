var startSellary=45000;
var exprience=30;
var endSellary=startSellary;

for(i=1;  i<=exprience; i=i+1){
    var increse=endSellary*(5/100);
    endSellary=endSellary+increse;
}
console.log(endSellary.toFixed(1));
console.log(typeof endSellary);