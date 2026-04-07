 function calculateSum() {
      let N = parseInt(document.getElementById("numberInput").value);
      let sum = 0;

     
      for (let i = 2; i <= N; i += 2) {
       sum += i;
      }

      document.getElementById("result").innerText =  "Sum of even numbers from 1 to " + N + " is " + sum;
       
    }