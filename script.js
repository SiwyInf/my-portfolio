document.getElementById("recommend_btn").addEventListener("click", addRecommendation);

function addRecommendation() {
    let recommendationInput = document.getElementById("new_recommendation");
    let nameInput = document.getElementById("name_input");
    let recommendationsContainer = document.getElementById("all_recommendations");
    let popup = document.getElementById("popup");

    let recommendationText = recommendationInput.value.trim();
    let nameText = nameInput.value.trim();

    if (recommendationText === "") {
        alert("Please enter a recommendation before submitting.");
        return;
    }

    let recommendationDiv = document.createElement("div");
    recommendationDiv.classList.add("recommendation");

    let nameFormatted = nameText ? `<strong>${nameText}</strong>: ` : "";
    recommendationDiv.innerHTML = `${nameFormatted}<span>&#8220;</span>${recommendationText}<span>&#8221;</span>`;

    recommendationsContainer.appendChild(recommendationDiv);

    recommendationInput.value = "";
    nameInput.value = "";

    showPopup(); 
}

function showPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}
