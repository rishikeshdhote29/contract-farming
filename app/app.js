async function fetchCropPrices() {
    const apiKey = "579b464db66ec23bdd00000101c67c938889443347e000b81542ec71";
    const apiUrl = "https://data.gov.in/resource/current-daily-price-various-commodities-various-markets-mandi/api"; // Replace with the actual API URL

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const priceList = document.getElementById("crop-prices");
        priceList.innerHTML = "";

        data.prices.forEach(crop => {
            const listItem = document.createElement("li");
            listItem.textContent = `${crop.name}: $${crop.price} per unit`;
            listItem.classList.add("p-2", "border-b");
            priceList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching crop prices:", error);
    }
}

// Fetch prices when the page loads
document.addEventListener("DOMContentLoaded", fetchCropPrices);
