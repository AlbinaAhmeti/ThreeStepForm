document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript u ngarkua saktë!");

    let form = document.getElementById("detailsForm");

    if (!form) {
        console.error("Nuk u gjet forma me ID 'detailsForm'!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phoneNumber = document.getElementById("phoneNumber").value.trim();
        let agreeTerms = document.getElementById("agreeTerms").checked;
        let errorMessage = document.getElementById("error-message");
    
        errorMessage.style.display = "none";

        if (!firstName || !lastName || !email || !phoneNumber) {
            errorMessage.textContent = "Please fill all fields!";
            errorMessage.style.display = "block";
            return;
        }

        if (!agreeTerms) {
            errorMessage.textContent = "You must accept the terms!";
            errorMessage.style.display = "block";
            return;
        }

        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phoneNumber", phoneNumber);

        setTimeout(function () {
            window.location.href = "collectedFields.html"; 
        }, 500); 
    });
});
