
//get values from the form
function calculateTip(){

    var billAmt = document.getElementById('bill').value;
    var numPeople = document.getElementById('people').value;
    var serviceRate = document.getElementById('service').value;
    
    //validate the input
    
    if(billAmt === "" || serviceRate === "" || numPeople ===""){
        alert("Enter the required values");
        return;
    }
    
    //validating the number of people
    
    if(numPeople === "" || numPeople <= 1){
        document.getElementById('each').style.display="none";
    }else{
        document.getElementById('each').style.display="inline";
    }
    
    //calculating the tip
    
    var totalAmt = (billAmt * serviceRate)/numPeople;
    totalAmt = Math.floor(totalAmt);
    
    //converting the amount to two decimal places
    var totalAmt = totalAmt.toFixed(2);
    console.log(totalAmt);

    //displaying the tip amount
    document.getElementById('totalTip').style.display="block";
    document.getElementById("tip-amount").innerHTML = totalAmt;

}

//hide the tipAmount
document.getElementById('each').style.display="none";
document.getElementById('each').style.fontSize = "20px";

//runs the function when the button is clicked
document.getElementById("calculateTip").onclick = 
function(){
    calculateTip();
}
