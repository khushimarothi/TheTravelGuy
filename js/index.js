
const colors=document.getElementsByClassName('theme-button');

let i;
for(i=0;i<colors.length ;i++){
    colors[i].addEventListener('click',changecolor );
}

function changecolor(){

  let color = this.getAttribute('data-color');
  document.documentElement.style.setProperty('--dark', color);

  let chng = this.getAttribute('data-color-light');
  document.documentElement.style.setProperty('--light', chng);
}

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');


btn1.addEventListener('click', () => {
  var div = document.getElementById('change');
  div.style.backgroundImage =" url('../images/trial.jpg')";
  var news = document.getElementById("news");
  news.style.backgroundImage =" url('../images/trial.jpg')";
  var review = document.getElementById("review");
  review.style.backgroundImage =" url('../images/trial.jpg')";
});

btn2.addEventListener('click', () => {
  var div = document.getElementById("change");
  div.style.backgroundImage =" url('../images/demobg.jpg')";
  var news = document.getElementById("news");
  news.style.backgroundImage =" url('images/demobg.jpg')";
  var review = document.getElementById("review");
  review.style.backgroundImage =" url('../images/demobg.jpg')";
});

//validation--------------------------------------------->

const form=document.getElementById('form');
const uname=document.getElementById('name');
const email=document.getElementById('email');
const from=document.getElementById('from');
const to=document.getElementById('to');
const date = document.getElementById('sdate');
const edate = document.getElementById('edate');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
  });

  function checkInputs(){
 
    const nameValue = uname.value.trim();
    const emailValue = email.value.trim();
   const dateValue = date.value.trim();
   const edateValue = edate.value.trim();
   
//name 
  if( nameValue === ''){
    setErrorFor(uname, 'Name cannot be blank');
  } 
  
  else if(nameValue.length<=4){
    setErrorFor(uname, 'Name minimum 5 character ');
  }

  else {
   setSuccessFor(uname);
  }
//email  
  if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank');
 }
 else if (!isEmail(emailValue)) {
   setErrorFor(email, 'Not a valid email');
 } 
 else{
   setSuccessFor(email);
 }
 //date--------------------------------------------------
 if( dateValue === '')
{
  setErrorFor(date, 'Date cannot be blank');
}
else{
  setSuccessFor(date);
}
//end date-----------------------------------------------
if( edateValue === '')
{
  setErrorFor(edate, 'Date cannot be blank');
}
else{
  setSuccessFor(edate);
}
 //compare------------------------------------------------

 if(edateValue < dateValue && date!='' )
{
  setErrorFor(edate, 'Enter valid Date');
}
//---------------------------------------------------------
 


  } 
  //start date
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
document.getElementById("sdate").setAttribute("min" , today);

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
document.getElementById("edate").setAttribute("min" , today);



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