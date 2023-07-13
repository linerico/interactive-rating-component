const items = document.querySelectorAll(".item");
const result = document.getElementById("result");
const submitButton = document.getElementById("submit");
const cardRate = document.getElementById("card-rate");
const cardThank = document.getElementById("card-thank");

function handleRatingClick(event) {
  const itemClicked = event.target;
  const rating = itemClicked.getAttribute("data-rating");

  items.forEach((item) => {
    if (item.getAttribute("data-rating") == rating) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  result.textContent = rating;
}

function handleSubmit(event) {
  if (result.innerText === "") {
    return alert("Rate First!");
  }

  cardRate.classList.add("hide");
  cardThank.classList.remove("hide");
}

items.forEach((item) => {
  item.addEventListener("click", handleRatingClick);
});

submitButton.addEventListener("click", handleSubmit);
