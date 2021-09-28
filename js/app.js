// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function phoneCheck(phoneno) {
    var numbers = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneno.match(numbers)) {
        return true;
    } else {
        return false;
    }
}

function textCheck(input) {
    var regName = /^[A-Za-z]+$/;
    if (!regName.test(input.value)) {
        return false;
    } else {
        return true;
    }
}

function emailCheck(input) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(input.value)) {
        return false;
    } else {
        return true;
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

        //Input Validation
        //Checking for appropriate input.
        if (user_fname.value.length == 0)
        { 
            document.getElementById("user_fname").style.borderColor = "red";
            document.getElementById("user_fname").placeholder = "Field required!";	
           return false; 
        } 
        if (textCheck(user_fname) == false){
            document.getElementById("user_fname").style.borderColor = "red";
            alert("Alpha characters only!");
            return false;
        }

        if (user_lname.value.length == 0)
        { 
            document.getElementById("user_lname").style.borderColor = "red";
            document.getElementById("user_lname").placeholder = "Field required!"; 	
           return false; 
        }
        if (textCheck(user_lname) == false){
            document.getElementById("user_lname").style.borderColor = "red";
            alert("Alpha characters only!");
            return false;
        }

        if (user_email.value.length == 0)
        { 
            document.getElementById("user_email").style.borderColor = "red";
            document.getElementById("user_email").placeholder = "Field required!";	
           return false; 
        }
        if (emailCheck(user_email) == false) {
            document.getElementById("user_email").style.borderColor = "red";
            alert("You have entered an invalid email address.\nFormat example: xyz@domain.com");
            return false;
        }

        if (user_phone.value.length == 0)
        { 
            document.getElementById("user_phone").style.borderColor = "red";
            document.getElementById("user_phone").placeholder = "Field required!";	
           return false; 
        }
        if (phoneCheck(user_phone.value) == false) {
            document.getElementById("user_phone").style.borderColor = "red";
            alert("Incorrect format: 123-456-7890");
            return false;
        }

        if (user_message.value.length == 0)
        { 
            document.getElementById("user_message").style.borderColor = "red";
            document.getElementById("user_message").placeholder = "Field required!"; 	
           return false; 
        }

        else {
            sendMail(full_name, user_email, user_phone, user_message);
            modal.style.display = "none";
            alert("Successfully sent!")
        }
    })
}
validate();

function sendMail(full_name, user_email, user_phone, user_message) {
    emailjs.send("service_5o55bma", "template_nula0di", {
        name: "Name: " + full_name,
        email: "eMail: " + user_email.value,
        phone: "Phone: " + user_phone.value,
        message: "Message: " + user_message.value
    });
}