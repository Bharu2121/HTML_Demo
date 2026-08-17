const amount_ele=document.getElementById("amount");
const tip_ele=document.getElementById("percentage");
const cal_btn=document.getElementById("calculate_btn");
const total_bill=document.getElementById("total");

function calculateTotalBill(){
    let amount_value=amount_ele.value;
    let tip_value=tip_ele.value;
    const bill=amount_value*(1+tip_value/100);
    total_bill.innerText=bill.toFixed(2);
    console.log(total_bill);
}

cal_btn.addEventListener("click",calculateTotalBill);

