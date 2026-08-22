const cal_ele=document.getElementById("cal_btn");
const year=document.getElementById("age");

function calculateAge() {
    const dob_ele = new Date(document.getElementById("dob").value);
    const current_date = new Date();

    let years = current_date.getFullYear() - dob_ele.getFullYear();
    let months = current_date.getMonth() - dob_ele.getMonth();

    if (current_date.getDate() < dob_ele.getDate()) {
        months--;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    year.innerText = `Your age is ${years} years ${months} months`;
}

//console.log(calculateYear());

cal_ele.addEventListener("click",calculateAge);



