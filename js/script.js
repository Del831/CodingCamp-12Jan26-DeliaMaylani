// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name?");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}! to Delia Website.`;
}

// Placeholder for form validation function
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    let now = new Date();
    let options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    let currentTime = now.toLocaleString("en-GB", options);

    document.getElementById("result-content").innerHTML = `
        <p><b>Current time :</b> ${currentTime}</p>
        <p><b>Name :</b> ${name}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Message :</b> ${message}</p>
    `;

    document.getElementById("result").classList.remove("hidden");

    return false;
}

function clearResult() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    document.getElementById("result").classList.add("hidden");
}
