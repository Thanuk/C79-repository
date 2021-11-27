name_of_the_students = [];

function submit(){
    var Student_Name_1 = document.getElementById("Student1").value;
    var Student_Name_2 = document.getElementById("Student2").value;
    var Student_Name_3 = document.getElementById("Student3").value;
    var Student_Name_4 = document.getElementById("Student4").value;
    var Student_Name_5 = document.getElementById("Student5").value;
    var Student_Name_6 = document.getElementById("Student6").value;

    name_of_the_students.push(Student_Name_1);
    name_of_the_students.push(Student_Name_2);
    name_of_the_students.push(Student_Name_3);
    name_of_the_students.push(Student_Name_4);
    name_of_the_students.push(Student_Name_5);
    name_of_the_students.push(Student_Name_6);

    console.log(name_of_the_students);
    document.getElementById("display_name").innerHTML = name_of_the_students;
    document.getElementById("Submit_Button").style.display = "none";
    document.getElementById("Sort_Button").style.display = "inline-block";
}

function sorting(){
    name_of_the_students.sort();
    document.getElementById("display_name").innerHTML = name_of_the_students;
    console.log(name_of_the_students);
}