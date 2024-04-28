const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

 form.addEventListener("submit", (e)=>{
   e.preventDefault();
   if(validateInput())
   window.location.href="index1.html";
 });

 function validateInput(){
 const usernameval = username.value.trim();
 const passwordval = password.value.trim();
 let success = true;

// validating username 
  if(usernameval === ""){
     success = false;
     seterror(username,"username is required");
  } 
 else{
     setsuccess(username); }

     // validating password

if(passwordval === ""){
          success = false;
          seterror(password,"password is required");
                   } 
   else if((passwordval).length < 6) {
      success = false; 
      seterror(password,"invalid !")
   }    
  else 
       setsuccess(password);  
  
     return success;
 }

function seterror(element,message){
const inputgroup = element.parentElement;
const errorelement = inputgroup.querySelector('.error');
errorelement.innerText = message;

inputgroup.classList.add('error')
inputgroup.classList.remove('success')
}


function setsuccess(element){

const inputgroup = element.parentElement;
const errorelement = inputgroup.querySelector('.error');
errorelement.innerText = ' ';

inputgroup.classList.add('success')
inputgroup.classList.remove('error')
}

