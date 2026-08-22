const source_ele=document.getElementById("source_currency");
const dest_ele=document.getElementById("destination_currency");
const source_pick=document.getElementById("src_pick");
const dest_value=document.getElementById("dest_value");
const exh_rate=document.getElementById("exchange-rate");

getCurrency();

function getCurrency(){
    fetch(
        `https://v6.exchangerate-api.com/v6/689da9639ca974b52c1d68b2/latest/${source_ele.value}`
      )
      .then((res)=>res.json())
      .then((data)=>{
        const rate=data.conversion_rates[dest_ele.value];
        exh_rate.innerText=`1 ${source_ele.value} = ${rate} ${dest_ele.value}`;
        dest_value.value=(rate*source_pick.value).toFixed(2);
      });
}

source_ele.addEventListener("change",getCurrency)
dest_ele.addEventListener("change",getCurrency)
source_pick.addEventListener("input",getCurrency)