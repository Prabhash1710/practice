function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var age = document.forms["myForm"]["age"].value;
    var mobile = document.forms["myForm"]["mobile"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["confirm_password"].value;

    // Validate Name
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate Age
    if (age == "" || age <= 0) {
        alert("Please enter a valid age");
        return false;
    }

    // Validate Mobile Number
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate Password and Confirm Password
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

