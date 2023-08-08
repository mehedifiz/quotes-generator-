const quoteElement = document.querySelector(".quote");
const replaceButton = document.querySelector(".replace-button");
const loaderElement = document.querySelector(".loader");

replaceButton.addEventListener("click", updateQuote);

function showLoadingAnimation() {
    loaderElement.style.display = "block";
    quoteElement.style.visibility = "hidden";
}

function hideLoadingAnimation() {
    loaderElement.style.display = "none";
    quoteElement.style.visibility = "visible";
}

async function getRandomQuoteFromAPI(category) {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
            headers: {
                'X-Api-Key': 'LgSSzUh0zsxo3QLnkMMZww==gbGBU9E2KAQXq5ic'
            }
        });
        const data = await response.json();
        if (data && data.length > 0) {
            return data[0].quote;
        } else {
            return "No quotes available for the selected category.";
        }
    } catch (error) {
        console.error("Error fetching quote from API:", error);
        return "Failed to fetch quote. Please try again later.";
    }
}

async function updateQuote() {
    showLoadingAnimation();
    const category = 'happiness'; // Change this to the desired category
    const randomQuote = await getRandomQuoteFromAPI(category);
    quoteElement.textContent = randomQuote;
    hideLoadingAnimation();
}

// Initial quote on page load
updateQuote();
