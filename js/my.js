
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
//        alert("Name must be filled out");
        return false;
    }


function submit_by_id() {
var name = document.getElementById("inputName").value;
var email = document.getElementById("inputEmail").value;
var city = document.getElementById("inputCity").value;

if (validation()) 
{
document.getElementById("form").submit(); 
alert(" Name : " + name + " \n Email : " + email + " \n City : " + city + " \n Form Id : " + document.getElementById("form").getAttribute("id") + "\n\n Form Submitted Successfully......");
}
}