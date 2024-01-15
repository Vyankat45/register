
function validateForm() {
    var name = document.forms["registrationForm"]["name"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var mobile = document.forms["registrationForm"]["mobile"].value;
    var whatsapp = document.forms["registrationForm"]["whatsapp"].value;
    var college = document.forms["registrationForm"]["college"].value;
    var classInput = document.forms["registrationForm"]["class"].value;

    // Regular expression to validate numeric input
    var numericPattern = /^\d+$/;

    // Regular expression to validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || mobile === "" || whatsapp === "" || college === "" || classInput === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    if (!numericPattern.test(mobile) || !numericPattern.test(whatsapp)) {
        alert("Mobile and WhatsApp numbers must be valid numeric values");
        return false;
    }
}
