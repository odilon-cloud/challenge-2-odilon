const form = document.querySelector('form');
const button = form.queryselector('[type="submit"]')
const msg = 'Please provide a valid email address';

const error = document.createElement ('p');
error.classlist.add('error_text');
error.textContent =msg;

function checkmail(e){
    e.preventDefault();
    const email = e.target.querySelector('[type="email"]').value;
    if(!ValidateEmail(email)) {
        form.classlist.add('error');
        form.insertBefore(error,button)
    } else {
        form.classlist.remove('error');
        form.removechild(error);
    }
    console.log(email);
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
form.addEventListener('submit',checkmail);