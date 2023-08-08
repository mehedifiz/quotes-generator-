const quoteElement = document.querySelector(".quote");
const replaceButton = document.querySelector(".replace-button");
const loaderElement = document.querySelector(".loader");

async function getRandomQuoteFromAPI() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error("Error fetching quote from API:", error);
        return null;
    }
}

async function updateQuote() {
    showLoadingAnimation();
    const randomQuote = await getRandomQuoteFromAPI();
    if (randomQuote) {
        quoteElement.textContent = randomQuote;
    } else {
        quoteElement.textContent = "Failed to fetch quote. Please try again later.";
    }
    hideLoadingAnimation();
}

replaceButton.addEventListener("click", updateQuote);

function showLoadingAnimation() {
    loaderElement.style.display = "block";
    quoteElement.style.visibility = "hidden";
}

function hideLoadingAnimation() {
    loaderElement.style.display = "none";
    quoteElement.style.visibility = "visible";
}

// Initial quote on page load
updateQuote();
