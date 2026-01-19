// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("error").innerText =
            "All fields are required!";
        return false;
    }

    alert("Feedback submitted successfully!");
    return true;
}
