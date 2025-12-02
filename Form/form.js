const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const cpass = document.getElementById("cpass").value.trim();

    let valid = true;

    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters";
        valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        valid = false;
    }

    if (pass.length < 6) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (pass !== cpass) {
        document.getElementById("cpassError").innerText = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").innerText = "Registration Successful!";
        form.reset();
    }
}

function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("cpassError").innerText = "";
    document.getElementById("successMsg").innerText = "";
}
