let reviewsContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextAreaEl = document.getElementById("reviewTextarea");


function onAddReview() {
    let movieTitle = titleInputEl.value;
    let movieReview = reviewTextAreaEl.value;
    if (movieTitle === "") {
        alert("Please enter a movie title");
        return;
    }
    let movieTitleEl = document.createElement("h1");
    movieTitleEl.textContent = " Movie Title: " + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewsContainerEl.appendChild(movieTitleEl);

    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = " Review: " + movieReview;
    reviewsContainerEl.appendChild(movieReviewEl);
    let horizEl = document.createElement("hr");
    reviewsContainerEl.appendChild(horizEl);

    titleInputEl.value = "";
    reviewTextAreaEl.value = "";

}