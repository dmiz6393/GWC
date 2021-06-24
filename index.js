const dogUrl = "https://api.thedogapi.com/v1/images/search";
const dogImage = document.querySelector("#dogImage");
const btn = document.querySelector("#showDogs");

btn.addEventListener("click", () => handleDogClick());

function handleDogClick() {
  fetch(dogUrl)
    .then((response) => response.json())
    .then((dogs) => loadDog(dogs));
}

function loadDog(dog) {
  dogImage.src = dog[0].url;
}
