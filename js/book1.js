const form1=document.getElementById('form1');
const uname1=document.getElementById('name1');
const email1=document.getElementById('email1');
var from1 = document.getElementById('from1');
var to1 =document.getElementById('to1');
const date1 = document.getElementById('sdate1');
const edate1 = document.getElementById('edate1');
form1.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputs1();
  });

 

function checkInputs1(){
 
   const useValue = uname1.value.trim();
   const mailValue = email1.value.trim();
   const dValue = date1.value.trim();
   const eValue = edate1.value.trim();
  // const fromValue = from.value.trim();
   var roomValue = from1.value;
   var typeValue = to1.value;
//name 
  if( useValue === ''){
    setErrorFor(uname1, 'Name cannot be blank');
  } 
  
  else if(useValue.length<=4){
    setErrorFor(uname1, 'Name minimum 5 character ');
  }

  else {
   setSuccessFor(uname1);
  }
//email  
  if(mailValue === ''){
    setErrorFor(email1, 'Email cannot be blank');
 }
 else if (!isEmail(mailValue)) {
   setErrorFor(email1, 'Not a valid email');
 } 
 else{
   setSuccessFor(email1);
 }
 //date--------------------------------------------------
 if( dValue === '')
{
  setErrorFor(date1, 'Check-in value cannot be blank');
}
else{
  setSuccessFor(date1);
}
//end date-----------------------------------------------
if( eValue === '')
{
  setErrorFor(edate1, 'Check-out cannot be blank');
}
else{
  setSuccessFor(edate1);
}
 //compare------------------------------------------------


//---------------------------------------------------------
if( roomValue === ''){
  setErrorFor(from1, 'Enter City you want to stay');
  from1.style.borderColor ="#e74c3c";
} 
else{
  setSuccessFor(from1);
  from1.style.borderColor ="#2ecc71";
}
//-------------------------------------------

if(typeValue === ''){
  setErrorFor(to1, 'Select your room type');
  to1.style.borderColor ="#e74c3c";
} 
else if(from1.selectedIndex != -1 && to1.selectedIndex != -1){
  if(from1.options[from1.selectedIndex].value == to1.options[to1.selectedIndex].value){
    setErrorFor(to1, 'Same destination not accepted');
    
  }
  else{
    setSuccessFor(to1);
    to1.style.borderColor ="#2ecc71";
  }
  }

//------------------------------------------------------------
successFor();

} 

var today1 = new Date();
var dd1 = today.getDate();
var mm1 = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd1<10)
{
  dd1='0'+ dd
} 
if(mm1<10)
{
  mm1='0'+mm1
}
today1=yyyy1+'-'+mm1+'-'+dd1;
document.getElementById("sdate1").setAttribute("min" , today1);


//end date
  
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
  dd='0'+ dd
} 
if(mm<10)
{
  mm='0'+mm
}
today=yyyy+'-'+mm+'-'+dd;
document.getElementById("edate1").setAttribute("min" , today);

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
   small.innerText = message;
   formControl.className = 'col-md-6 error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'col-md-6 success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}