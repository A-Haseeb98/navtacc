var obMarks1 = +prompt("Enter Obtained marks in subject 1 ");
var obMarks2 = +prompt("Enter Obtained marks in subject 2");
var obMarks3 = +prompt("Enter Obtained marks in subject 3");
var totalMarks = +prompt("Enter Total marks of subject ") * 3;
var grade, remarks;
var perc = (obMarks1 + obMarks2 + obMarks3) / totalMarks *100; 
if (perc >= 80 ){
 grade = "A-one";
 remarks = " Excellent";
}

else if (perc >= 70 ){
    grade = "A";
    remarks = " good";
}
else if (perc >= 60 ){
    grade = "B";
    remarks = " You need to improve";
}

else if (perc < 60 ){
    grade = "Fail";
    remarks = " Sorry";
}
else {
    alert("You Entered Wrong Information");
}

document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total Marks: " + totalMarks);
document.write("<br>Marks Obtained: " + (obMarks3 + obMarks2 + obMarks1));
document.write("<br>Percentage: " + perc + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Remarks: " + remarks);
