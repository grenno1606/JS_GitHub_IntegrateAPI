const toggleButton = document.querySelector(".header__button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    toggleButton.innerHTML = `LIGHT <img class="button__icon" src="./assets/images/icon-sun.svg" alt="">`;
  } else
    toggleButton.innerHTML =
      'DARK <img class="button__icon" src="./assets/images/icon-moon.svg" alt="">';
});
