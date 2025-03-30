document.addEventListener("DOMContentLoaded", function () {
    let times = [
        "8 AM CST", "9 AM CST", "10 AM CST", "11 AM CST", "12 PM CST",
        "1 PM CST", "2 PM CST", "3 PM CST", "4 PM CST", "5 PM CST"
    ];

    let dropdown = document.createElement("select");
    dropdown.id = "timeDropdown";
    dropdown.className = "time-dropdown";

    let defaultOption = document.createElement("option");
    defaultOption.text = "Choose Your Time";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    times.forEach(time => {
        let option = document.createElement("option");
        option.value = time;
        option.text = time;
        dropdown.appendChild(option);
    });

    document.getElementById("dropdownContainer").appendChild(dropdown);

    let errorMessage = document.createElement("p");
    errorMessage.id = "error-message";
    errorMessage.className = "error-message";
    errorMessage.textContent = "Please select a time before continuing.";
    errorMessage.style.display = "none";
    document.getElementById("dropdownContainer").appendChild(errorMessage);
});

function submitTime() {
    let dropdown = document.getElementById("timeDropdown");
    let selectedTime = dropdown.value;
    let errorMessage = document.getElementById("error-message");

    if (!selectedTime) {
        errorMessage.style.display = "block";
        dropdown.classList.add("error-border");
    } else {
        errorMessage.style.display = "none";
        dropdown.classList.remove("error-border");

        localStorage.setItem("selectedTime", selectedTime);

        window.location.href = "PersonalDetails.html";
    }
}
