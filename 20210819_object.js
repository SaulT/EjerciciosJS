/*
1. Write a JavaScript program to list the properties of a JavaScript object. 
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
console.log(Object.keys(student).join());
/*
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
console.log(student);
delete student.rollno;
console.log(student);