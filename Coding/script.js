const searchInput = document.getElementById("searchInput");
const suggestionsContainer = document.getElementById("suggestionsContainer");

const suggestions = ["HTML", "CSS", "JavaScript", "Python", "Java", "PHP"];

function showSuggestions() {
  const userInput = searchInput.value.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(userInput)
  );

  displaySuggestions(filteredSuggestions);
}

function displaySuggestions(filteredSuggestions) {
  suggestionsContainer.innerHTML = "";

  filteredSuggestions.forEach((suggestion) => {
    const suggestionElement = document.createElement("div");
    suggestionElement.classList.add("suggestion");
    suggestionElement.textContent = suggestion;
    suggestionElement.addEventListener("click", () =>
      selectSuggestion(suggestion)
    );
    suggestionsContainer.appendChild(suggestionElement);
  });
}

function selectSuggestion(suggestion) {
  searchInput.value = suggestion;
  suggestionsContainer.innerHTML = ""; // Clear suggestions after selection

  // Add logic to redirect to html.html based on the selected suggestion
  if (suggestion.toLowerCase() === "html") {
    window.location.href = "html.html";
  } else if (suggestion.toLowerCase() === "css") {
    window.location.href = "css.html"; // You can add similar logic for other languages
  } else {
    // Handle other suggestions or provide a default behavior
  }
}
