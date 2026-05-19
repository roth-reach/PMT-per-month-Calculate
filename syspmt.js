const loanamount = document.getElementById("loanamount");
const interestrate = document.getElementById("interestrate");
const loanterm = document.getElementById("loanterm");
const pmtResult = document.getElementById("pmtResult");

document.getElementById("calculatePMT").addEventListener("click", function(){
const principal = document.getElementById("loanamount").value;
    const InterestRate = document.getElementById("interestrate").value / 100;
    const term = document.getElementById("loanterm").value;
    if(isNaN(principal) || isNaN(InterestRate) || isNaN(term)){
        document.getElementById("pmtResult").textContent = "Please enter valid numbers for all fields.";
        return;
    }
    const pmt = (principal * InterestRate) / (1 - Math.pow(1+InterestRate, -term));
    document.getElementById("pmtResult").textContent = pmt.toFixed(2);
});