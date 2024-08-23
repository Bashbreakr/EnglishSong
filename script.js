const verses = [
    "First verse of your song",
    "Second verse of your song",
    // Add more verses as needed
];

let currentVerse = 0;

function displayVerse() {
    document.getElementById('verse').innerText = verses[currentVerse];
    currentVerse = (currentVerse + 1) % verses.length;
}

setInterval(displayVerse, 5000); // Change verse every 5 seconds
