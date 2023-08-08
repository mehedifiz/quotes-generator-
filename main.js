const quotes = [
    "❝What we know is a drop. What we don’t know is an ocean❞ - Dark 🎥",
    "❝Most people are nothing but pawns on a chessboard led by an unknown hand.❞",
    "❝Life is what happens when you're busy making other plans. - John Lennon❞",
    "❝The greatest glory in living lies not in never falling, but in rising every time we fall.- Nelson Mandela❞",
    "❝The only thing we have to fear is fear itself.- Franklin D. Roosevelt❞",
    "❝You made me a, you made me a believer❞",
    "❝Everything is over❞",
    // Add more quotes as needed
];

const quoteElement = document.querySelector(".quote");
const replaceButton = document.querySelector(".replace-button");
const loaderElement = document.querySelector(".loader");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function showLoadingAnimation() {
    loaderElement.style.display = "block";
    quoteElement.style.visibility = "hidden";
}

function hideLoadingAnimation() {
    loaderElement.style.display = "none";
    quoteElement.style.visibility = "visible";
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
}

replaceButton.addEventListener("click", function () {
    showLoadingAnimation();
    setTimeout(hideLoadingAnimation, 4000); // Delay for 4 seconds (4000 milliseconds)
});

// Initial quote on page load
quoteElement.textContent = getRandomQuote();
