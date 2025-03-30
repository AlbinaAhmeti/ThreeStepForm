document.addEventListener("DOMContentLoaded", function () {
    const summaryContainer = document.getElementById("summaryContainer");

    const selectedTime = localStorage.getItem("selectedTime") || "Not Provided";
    const firstName = localStorage.getItem("firstName") || "Not Provided";
    const lastName = localStorage.getItem("lastName") || "Not Provided";
    const email = localStorage.getItem("email") || "Not Provided";
    const phoneNumber = localStorage.getItem("phoneNumber") || "Not Provided";


    summaryContainer.innerHTML = `
        <p><strong>Best Time to Reach You:</strong> ${selectedTime}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    `;
});


function goHome() {
    window.location.href = "home.html"; 
}
