// Get the contact form modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Phone number formatting (123-456-7890)
function phoneCheck(phoneno) {
    var numbers = /^\d{3}-\d{3}-\d{4}$/;
    if (phoneno.match(numbers)) {
        return true;
    } else {
        return false;
    }
}

// Name formatting (alpha characters only)
function textCheck(input) {
    var regName = /^[A-Za-z]+$/;
    if (!regName.test(input.value)) {
        return false;
    } else {
        return true;
    }
}

// eMail formatting check
function emailCheck(input) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(input.value)) {
        return false;
    } else {
        return true;
    }
}

function clearfname(){
    document.getElementById("user_fname").style.borderColor = "";
}

function clearlname(){
    document.getElementById("user_lname").style.borderColor = "";
}

function clearemail(){
    document.getElementById("user_email").style.borderColor = "";
}

function clearphone(){
    document.getElementById("user_phone").style.borderColor = "";
}

function clearmessage(){
    document.getElementById("user_message").style.borderColor = "";
}


// Large validation function to check all fields were entered correctly.
// If validation passes, the contact form is sent to the web owner through eMailJS.

// TODO: Implement logic so that ALL fields are checked all at once, instead of the current implementation of top to bottom.
// TODO: Implement a better error display than alert(), nothing I have tried worked :( 
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

        //Checking First Name for empty field
        if (user_fname.value.length == 0)
        { 
            document.getElementById("user_fname").style.borderColor = "red";
            document.getElementById("user_fname").placeholder = "Field required!";	
           return false; 
        } 
        // Alpha Character only validation for name, not needed for specs but working!
        /*
        if (textCheck(user_fname) == false){
            document.getElementById("user_fname").style.borderColor = "red";
            alert("Alpha characters only!");
            return false;
        }
        */

        // Checking Last Name for empty field.
        if (user_lname.value.length == 0)
        { 
            document.getElementById("user_lname").style.borderColor = "red";
            document.getElementById("user_lname").placeholder = "Field required!"; 	
           return false; 
        }
        // Alpha Character only validation for name, not needed for specs but working!
        /*
        if (textCheck(user_lname) == false){
            document.getElementById("user_lname").style.borderColor = "red";
            alert("Alpha characters only!");
            return false;
        }
        */

        // Checking eMail for empty field.
        if (user_email.value.length == 0)
        { 
            document.getElementById("user_email").style.borderColor = "red";
            document.getElementById("user_email").placeholder = "Field required!";	
           return false; 
        }
        // Checking eMail for correct formatting.
        if (emailCheck(user_email) == false) {
            document.getElementById("user_email").style.borderColor = "red";
            alert("You have entered an invalid email address.\nFormat example: xyz@domain.com");
            return false;
        }

        // Checking Phone Number for empty field.
        if (user_phone.value.length == 0)
        { 
            document.getElementById("user_phone").style.borderColor = "red";
            document.getElementById("user_phone").placeholder = "Field required!";	
           return false; 
        }
        // Checking phone number for 123-456-7890 format.
        if (phoneCheck(user_phone.value) == false) {
            document.getElementById("user_phone").style.borderColor = "red";
            alert("Incorrect format: 123-456-7890");
            return false;
        }

        // Checking message for empty field.
        if (user_message.value.length == 0)
        { 
            document.getElementById("user_message").style.borderColor = "red";
            document.getElementById("user_message").placeholder = "Field required!"; 	
           return false; 
        }

        // If all of the above pass, call the sendMail function and close the modal.
        else {
            sendMail(full_name, user_email, user_phone, user_message);
            modal.style.display = "none";
            alert("Successfully sent!")
        }
    })
}
validate();

// Send Mail function called if all validation passes, emailing the information through eMailJS.
function sendMail(full_name, user_email, user_phone, user_message) {
    emailjs.send("service_5o55bma", "template_nula0di", {
        name: "Name: " + full_name,
        email: "eMail: " + user_email.value,
        phone: "Phone: " + user_phone.value,
        message: "Message: " + user_message.value
    });
}