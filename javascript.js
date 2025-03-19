document.addEventListener("DOMContentLoaded", function() {
  const submitBtn = document.getElementById("submit-btn");
  const recList = document.getElementById("rec-list");
  const input = document.getElementById("new-rec");

  if (!submitBtn || !recList || !input) {
      console.error("Some elements are missing in the HTML.");
      return;
  }

  submitBtn.addEventListener("click", function() {
      addRecommendation(input, recList);
  });
});

function addRecommendation(input, recList) {
  const inputValue = input.value.trim();

  if (inputValue === "") {
      alert("Please enter a recommendation!");
      return;
  }

  // Create new recommendation element
  const newRec = document.createElement("p");
  newRec.textContent = `"${inputValue}" - Anonymous`;
  
  // Append the new recommendation
  recList.appendChild(newRec);

  // Clear the input field
  input.value = "";

  // Show confirmation message
  alert("Thank you for your recommendation!");
}
