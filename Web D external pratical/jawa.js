function calculate()
{
    let total = 0;

  
    for(let i = 1; i <= 4; i++)
    {
        total += Number(document.getElementById("s" + i).value);
    }

    let avg = total / 4;
    let grade;

    if(avg >= 90)
    {
        grade = "A";
    }
    else if(avg >= 75)
    {
        grade = "B";
    }
    else if(avg >= 60)
    {
        grade = "C";
    }
    else if(avg >= 40)
    {
        grade = "D";
    }
    else
    {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks = " + total +
        "<br>Average = " + avg.toFixed(2) +
        "<br>Grade = " + grade;
}