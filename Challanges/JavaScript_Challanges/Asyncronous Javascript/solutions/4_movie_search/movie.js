document
  .getElementById("movie-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const title = document.getElementById("movie").value;
    await searchMovies(title);
  });

async function searchMovies(title) {
  const apiKey = "your_api_key"; // Replace with your API key
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
    );
    if (!response.ok) throw new Error("Movie not found");
    const data = await response.json();

    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";
    data.Search.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.innerHTML = `
        <h3>${movie.Title}</h3>
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p>${movie.Year}</p>
      `;
      moviesDiv.appendChild(movieDiv);
    });
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}
