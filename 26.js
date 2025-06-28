const btnEl=document.getElementById("calculate");
const billInput=document.getElementById("bill");
const tipInput=document.getElementById("tip");
const totalSpan=document.getElementById("total");
console.log(billInput,tipInput);
function calculateTotal(){
  const billValue=parseFloat(billInput.value);
  const tipValue=parseFloat(tipInput.value);
  const totalValue=billValue + tipValue;
  console.log(totalValue);
  totalSpan.innerText=totalValue.toFixed(2);
};
btnEl.addEventListener("click", calculateTotal);