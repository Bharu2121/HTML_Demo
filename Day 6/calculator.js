const buttonListEl=document.getElementsByTagName("button");
let resultEL=document.getElementById("result");
let justCalculated=false;

for(let i=0;i<buttonListEl.length;i++){
    buttonListEl[i].addEventListener("click",()=>{
        const buttonValue=buttonListEl[i].textContent;
        if(buttonValue==="C"){
            callClear();
        }
        else if(buttonValue==="="){
            calculateResult();
        }
        else{
            appendValue(buttonValue);
        }
    })
}

function callClear(){
    resultEL.value="";
}

function calculateResult(){
    if(/[+\-*/]/.test(resultEL.value)){
    resultEL.value=eval(resultEL.value);
    justCalculated=true;
    }
}

function appendValue(buttonValue){
    if(justCalculated&&(!isNaN(buttonValue)||buttonValue=='.')){
        resultEL.value="";
    }
    resultEL.value+=buttonValue;
    justCalculated=false;
}