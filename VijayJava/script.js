let startTime;
let timer;
let isRunning = false;

function startTest() {
    if (isRunning) return;

    isRunning = true;
    document.getElementById("text-input").value = '';
    document.getElementById("time").innerText = '0';
    document.getElementById("wpm").innerText = '0';
    document.getElementById("text-input").focus();

    startTime = new Date();
    timer = setInterval(updateTime, 1000);

    document.getElementById("text-input").addEventListener('input', calculateWPM);
    document.getElementById("start-button").disabled = true;
    document.getElementById("stop-button").disabled = false;
}

function stopTest() {
    if (!isRunning) return;

    clearInterval(timer);
    isRunning = false;

    document.getElementById("start-button").disabled = false;
    document.getElementById("stop-button").disabled = true;
}

function updateTime() {
    const currentTime = new Date();
    const timeElapsed = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("time").innerText = timeElapsed;
}

function calculateWPM() {
    const textInput = document.getElementById("text-input").value.trim();
    const wordsTyped = textInput.split(/\s+/).length;
    const timeElapsed = Math.floor((new Date() - startTime) / 1000);
    const wpm = Math.floor((wordsTyped / timeElapsed) * 60);

    if (timeElapsed > 0) {
        document.getElementById("wpm").innerText = wpm;
    }

    if (textInput === document.getElementById("text-display").innerText) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("start-button").disabled = false;
        document.getElementById("stop-button").disabled = true;
    }
}
