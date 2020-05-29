 function updateCalc() {
     // Get input data
     var start = parseFloat(document.getElementById('start').value);
     var final = parseFloat(document.getElementById('final').value);
     var returnRate = parseFloat(document.getElementById('returnRate').value);
     var returnType = document.getElementById('returnType').selectedIndex;
     var time = parseFloat(document.getElementById('time').value);
     var timeType = document.getElementById('timeType').selectedIndex;
     
     // Handle months/years
     var ret = 0.0;
     if (returnType == 0) {
         ret = Math.pow(1.0+returnRate/100.0,1.0/12.0) - 1.0;
     }   
     else {
         ret = returnRate/100.0;
     }
     
     var months = time*12;
     var years = time;
     if (timeType == 1) {
         months = time;
         years = time/12;
     }
     
     // Output
     var finalValueOfStart = start * Math.pow(1.0+ret, months);
     var finalValueOfMonthlyInvestments = final - finalValueOfStart
     var monthlyInvestments = (finalValueOfMonthlyInvestments * ret / (Math.pow(1.0+ret,months) -1)).toFixed(2);
     
     if (monthlyInvestments >= 0) { 
         document.getElementById('outputDiv').innerHTML = 'You should invest <br>$' + monthlyInvestments +' every month.';     
     }
     else if (monthlyInvestments < 0) {
         document.getElementById('outputDiv').innerHTML = 'You could withdraw <br>$' + -monthlyInvestments +' every month.';     
     }
     else {
         document.getElementById('outputDiv').innerHTML = 'Check your input data.';     
     }
     
     return false;   
 }
 
 updateCalc();
