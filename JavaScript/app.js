const form = document.getElementById("form");
const date = document.getElementById("date");
const month = document.getElementById("month");
const century= document.getElementById("century");
const year = document.getElementById("year");

const akanFemales = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const akanMales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];




form.addEventListener("submit",(e) =>{
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
  const DD = date.value
  const MM = month.value
  const CC= century.value
  const YY = year.value
  let d = Math.floor( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)

  let gender = document.form.gender.value;
  

  if (gender == "Male") {
    document.getElementById("results").textContent="Your Akan name is: "+   akanMales[d];
  } else {
   
    document.getElementById("results").textContent="Your Akan name is: "+ akanFemales[d];
  }
 
}




@@ -0,0 +1,110 @@
var CC, YY, aMM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.m
qoc-jusx-qtr