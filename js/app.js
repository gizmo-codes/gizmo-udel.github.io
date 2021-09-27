// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*
function phoneCheck(input) {
    var phoneno = "???";
    if (input.value.match(phoneno)) {
        return true;
    } else {
        return false;
    }
}

function textCheck(input){
    var regex=/^[a-zA-Z]+$/;
    if (input.value == regex){
        return true;
    }
    else{
        return false;
    }
}
*/

function emailCheck(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return true
  }
  else{
      return false
  }
}

function validate() {
    let submit = document.querySelector(".submit")
    submit.addEventListener("click", (e) => {

        let user_fname = document.querySelector(".user_fname")
        let user_lname = document.querySelector(".user_lname")
        let user_email = document.querySelector(".user_email")
        let user_phone = document.querySelector(".user_phone")
        let user_message = document.querySelector(".user_message")
    
        const full_name = user_fname.value + " " + user_lname.value;

        e.preventDefault()
/*
        if (phonenumber(user_phone.value) == false) {
            alert("Phone number must follow the following format: 123-456-7890");
            return false;
        }
        
        if (textCheck(user_fname.value == false || user_lname.value == false)){
            alert("Use alpha characters only.");
            return false;
        }
*/
        if (emailCheck(user_email == false))
        {
            alert("You have entered an invalid email address!")
            return false;
        }

        else{
            sendMail(full_name, user_email, user_phone, user_message);
            alert("Successfully sent.")
            modal.style.display = "none";
        }
    })
}
validate();

function sendMail(full_name, user_email, user_phone, user_message){
    emailjs.send("service_5o55bma","template_nula0di",{
        name: "Name: " + full_name,
        email: "eMail: " + user_email.value,
        phone: "Phone: " + user_phone.value,
        message: "Message: " + user_message.value
        });
}