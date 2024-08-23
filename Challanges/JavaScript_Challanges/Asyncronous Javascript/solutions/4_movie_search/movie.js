document
  .getElementById("movie-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const title = document.getElementById("movie").value;
    await searchMovies(title);
  });
const errMsg = document.getElementById("errorMsg");
const moviesDiv = document.getElementById("movies");
async function searchMovies(title) {
  try {
    const response = await fetch(
      `https://freetestapi.com/api/v1/movies?search=${title}`
    );
    if (!response.ok) throw new Error("Movie not found");
    const data = await response.json();
    if (data.length <= 0) {
      errMsg.textContent = "No movies found with the given title.";
      moviesDiv.innerHTML = "";
      return;
    }

    moviesDiv.innerHTML = "";
    errMsg.textContent = "";
    data.forEach((movie) => {
      const movieHTML = `<div class="card shadow-lg col-12 col-md-6 col-lg-4 mb-4">
  <img
    src="${movie.poster}"
    alt="${movie.title} Poster"
    class="card-img-top"
    style="height: 15rem; object-fit: cover;"
  />
  <div class="card-body">
    <h3 class="card-title text-dark font-weight-bold mb-2">
      ${movie.title}
    </h3>
    <p class="text-muted mb-2">
      ${movie.year} | ${movie.genre.join(", ")}
    </p>
    <p class="text-body mb-3">
      ${movie.plot}
    </p>
    <p class="text-warning font-weight-bold h5">
      Rating: ${movie.rating}
    </p>
  </div>
</div>
`;
      moviesDiv.innerHTML += movieHTML;
    });
  } catch (error) {
    errMsg.textContent = error.message;
  }
}
