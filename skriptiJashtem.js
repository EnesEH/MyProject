function validateLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Invalid password. It should contain at least 8 characters, start with an uppercase letter, and include at least one number or symbol.");
        return;
    }

    
    alert("Login successful!");
}

function validateSignup() {
    var signupEmail = document.getElementById("signupEmail").value;
    var signupPassword = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(signupEmail)) {
        alert("Invalid email address");
        return;
    }

    if (!passwordRegex.test(signupPassword)) {
        alert("Invalid password. It should contain at least 8 characters, start with an uppercase letter, and include at least one number or symbol.");
        return;
    }

    if (signupPassword !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return;
    }

    
    alert("Signup successful!");
}
