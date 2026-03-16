function calculateResult(){
    let n = document.getElementById("subjects").value;
    let total = 0;
    for(let i=1; i<=n; i++){
       let mark = parseFloat(prompt("Enter marks for subject "+ i + ":"));
        total = total + mark;
    }
    let average = total/n;
    let grade;
    let result;
    if(average>=90){
        grade = "A+";
    }
    else if(average>=80){
        grade = "A";
    }   
    else if(average>=70){
        grade = "B";
    }       
    else if(average>=60){
        grade = "C";
    }
    else if(average>=50){
        grade = "D";
    }
    else(average>=40)
        grade = "F";
    
    if(average>=40){
        result = "Pass";
    }   
    else{
        result = "Fail";
    }
    document.getElementById("result").innerHTML =
    "Total Marks: "+ total + "<br>"  +
     "Average Marks: "+ average.toFixed(2) +"<br>" +
     "Grade: "+ grade +"<br>"+
     "Result: "+ result;
}