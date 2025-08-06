const toggleButton = document.querySelector(".header__button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleButton.innerHTML = isDark
    ? `LIGHT <img class="button__icon" src="./assets/images/icon-sun.svg" alt="">`
    : `DARK <img class="button__icon" src="./assets/images/icon-moon.svg" alt="">`;
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  toggleButton.innerHTML = `LIGHT <img class="button__icon" src="./assets/images/icon-sun.svg" alt="">`;
} else {
  body.classList.remove("dark-theme");
  toggleButton.innerHTML = `DARK <img class="button__icon" src="./assets/images/icon-moon.svg" alt="">`;
}

const input = document.querySelector(".search-form__input");
const message = document.querySelector(".search-form__message");
const btnSearch = document.querySelector(".search-form__button");
const avatar = document.querySelector(".card__avatar");
const fullName = document.querySelector(".card__name");
const username = document.querySelector(".card__username");
const dateJoined = document.querySelector(".card__date");
const bio = document.querySelector(".card__bio");
const repos = document.querySelector(".profile-stats__item--repos");
const followers = document.querySelector(".profile-stats__item--followers");
const following = document.querySelector(".profile-stats__item--following");
const locationUser = document.querySelector(".profile-links__item--location");
const twitter = document.querySelector(".profile-links__item--twitter");
const blog = document.querySelector(".profile-links__item--blog");
const company = document.querySelector(".profile-links__item--company");

async function getUserInfo(username = "Octocat") {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user info");
  }
  const data = await response.json();
  return data;
}

function formatDate(dateInput) {
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getOrDefault(value, defaultValue = "Not Available") {
  return value ? value : defaultValue;
}

function updateProfileLink(
  container,
  iconSrc,
  value,
  isLink = true,
  isCompany = false
) {
  const textContent = getOrDefault(value);
  if (!value) container.classList.add("opacity");
  else container.classList.remove("opacity");
  if (!isLink) {
    container.innerHTML = `
    <img class="profile-links__icon" src="${iconSrc}" alt="">
    <p class="profile-links__text cursor-default">${textContent}</p>
  `;
  } else {
    container.innerHTML = `
    <img class="profile-links__icon" src="${iconSrc}" alt="">
    <a class="profile-links__text" target="_blank" href="${
      value ? (isCompany ? `https://github.com/${value.slice(1)}` : value) : "#"
    }">${textContent}</a>
  `;
  }
}

function renderUserProfile(data) {
  message.classList.add("display-none");
  avatar.src = data.avatar_url;
  fullName.innerHTML = getOrDefault(data.name, data.login);
  username.href = data.html_url;
  username.innerHTML = `@${data.login}`;
  dateJoined.innerHTML = `Joined ${formatDate(data.created_at)}`;

  bio.innerHTML = getOrDefault(data.bio, "This profile has no bio");

  repos.innerHTML = `
    <p class="profile-stats__label">Repos</p>
    <p class="profile-stats__number">${data.public_repos}</p>
  `;
  followers.innerHTML = `
    <p class="profile-stats__label">Followers</p>
    <p class="profile-stats__number">${data.followers}</p>
  `;
  following.innerHTML = `
    <p class="profile-stats__label">Following</p>
    <p class="profile-stats__number">${data.following}</p>
  `;

  updateProfileLink(
    locationUser,
    "./assets/images/icon-location.svg",
    data.location,
    false
  );
  updateProfileLink(
    twitter,
    "./assets/images/icon-twitter.svg",
    data.twitter_username
  );
  updateProfileLink(blog, "./assets/images/icon-website.svg", data.blog);
  updateProfileLink(
    company,
    "./assets/images/icon-company.svg",
    data.company,
    true,
    true
  );
}

btnSearch.addEventListener("click", async () => {
  try {
    const data = await getUserInfo(input.value);
    renderUserProfile(data);
  } catch (error) {
    message.classList.remove("display-none");
  }
});

async function main() {
  try {
    const data = await getUserInfo();
    renderUserProfile(data);
  } catch (error) {
    message.classList.remove("display-none");
  }
}

main();
