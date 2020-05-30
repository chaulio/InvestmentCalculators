 function updateCalc() {
     // Get input data
     var start = parseFloat(document.getElementById('start').value);
     var final = parseFloat(document.getElementById('final').value);
     var monthly = parseFloat(document.getElementById('monthly').value);
     var returnRate = parseFloat(document.getElementById('returnRate').value);
     var returnType = document.getElementById('returnType').selectedIndex;
     
     // Handle months/years
     var ret = 0.0;
     if (returnType == 0) {
         ret = Math.pow(1.0+returnRate/100.0,1.0/12.0) - 1.0;
     }   
     else {
         ret = returnRate/100.0;
     }
     
     // Output
     time = Math.log((ret*final+monthly)/(ret*start+monthly))/Math.log(1+ret);
     
     time = time/12.0;
     
     if (time > 0) { 
         document.getElementById('outputDiv').innerHTML = "Years required: " + time.toFixed(2);
         
     }
     else {
         document.getElementById('outputDiv').innerHTML = 'Check your input data.';     
     }
     
     return false;   
 }
 
 updateCalc();
