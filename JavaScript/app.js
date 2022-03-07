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

