document
  .getElementById("recipe-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const ingredient = document.getElementById("ingredient").value;
    await searchRecipes(ingredient);
  });

async function searchRecipes(ingredient) {
  const apiKey = "your_api_key"; // Replace with your API key
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${ingredient}&app_id=your_app_id&app_key=${apiKey}`
    );
    if (!response.ok) throw new Error("No recipes found");
    const data = await response.json();

    const recipesDiv = document.getElementById("recipes");
    recipesDiv.innerHTML = "";
    data.hits.forEach((hit) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.innerHTML = `
        <h3>${hit.recipe.label}</h3>
        <img src="${hit.recipe.image}" alt="${hit.recipe.label}">
        <p><a href="${hit.recipe.url}" target="_blank">View Recipe</a></p>
      `;
      recipesDiv.appendChild(recipeDiv);
    });
  } catch (error) {
    console.error("Error fetching recipe data:", error);
  }
}
