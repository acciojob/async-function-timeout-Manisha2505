//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayMessage() {
    const message = textInput.value;
    const delayTime = parseInt(delayInput.value, 10);

    if (!message || isNaN(delayTime) || delayTime < 0) {
        output.innerText = "";
        return;
    }

    output.innerText = ""; // Ensure output is initially empty
    await delay(delayTime);
    output.innerText = message;
}

button.addEventListener("click", displayMessage);