const btnEl = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const totaSpan = document.getElementById("total")


function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totaSpan.innerText = totalValue.toFixed(2);

}


btnEl.addEventListener("click", calculateTotal)