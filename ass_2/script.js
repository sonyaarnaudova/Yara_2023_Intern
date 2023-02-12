const form = document.getElementById("myForm");

form.addEventListener("change", validateData); //select input
let isDataTrue = true;
 
const paragraph =  document.createElement('p');
document.querySelector('body').appendChild(paragraph); //paragraph->html

function validateData(){
   
  isDataTrue = true;
    const button = document.querySelector('button');
    paragraph.textContent = '';
    const myUsername = document.getElementById('name').value; //value!!!
    const myPass = document.getElementById('pass').value;
    const myEmail = document.getElementById('mail').value;
 
    const usernamePattern = /^a\d{5,}$/;
    const emailPattern = /@yara\.com/;

// validate username 

    if(!myUsername.match(usernamePattern)){
        paragraph.textContent += " Incorrect username";
        isDataTrue = false;
    }
 
// validate password

  let letters = /[A-Z]/g;
  let symbols = /[!@#$%^&*(),.?":{}|<>]/g;
  let hyphens = /[-]/g;

  let letterCount = myPass.match(letters) ? myPass.match(letters).length:0;
  let symbolsCount = myPass.match(symbols) ? myPass.match(symbols).length:0;
  let hyphensCount = myPass.match(hyphens) ? myPass.match(hyphens).length:0;

    if(!(letterCount>=5&&symbolsCount>=6&&hyphensCount>=2)){
      paragraph.textContent += " Incorrect password";
      isDataTrue = false;
    }

 // validate mail
    
    if(!myEmail.match(emailPattern)){
        paragraph.textContent += " Incorrect email";
        isDataTrue = false;
    }
 
    if(isDataTrue){
        button.disabled = false;
        console.log(`Valid inputs. 
        Username: ${myUsername}
        Password: ${myPass}
        E-Mail: ${myEmail}`);
    }
    else{
        button.disabled = true;
    }
}
 
function submitHandler(e){
    e.preventDefault();
    
     form.reset();
}
