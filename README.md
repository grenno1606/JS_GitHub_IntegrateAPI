# GitHub User Search App

## 🚀 Overview

The **GitHub User Search App** is a responsive web application that enables users to search for GitHub profiles by username. The app precisely matches the provided design in terms of layout, colors, fonts, and spacing. Users can view detailed profile information, toggle between Light/Dark themes, and enjoy a smooth experience across all devices.

> **Demo Design:**  
> [Carvalhovincent's GitHub User Search App](https://carvalhovincent.github.io/GitHub-user-search-app/)

---

## 🧩 Features

- **Search by Username:** Instantly look up any GitHub user by typing their username.
- **User Details:** Displays avatar, name, bio, location, repository count, followers, and following.
- **Error Handling:** Clear error message when a user is not found.
- **Theme Toggle:** Switch between Light and Dark modes, with preferences saved in `localStorage`.
- **Responsive Layout:** Fully responsive for desktop, tablet, and mobile.
- **Clear Hover States:** All interactive elements have distinct hover effects.
- **Smooth Transitions:** Seamless theme switching and UI animations.

---

## 🛠️ Technologies Used

- **HTML5**
- **SCSS**
  - Variables (`_variables.scss`)
  - Mixins (`_mixins.scss`)
  - Nesting (max 3 levels)
  - Extend (`@extend`)
  - BEM Naming Convention
- **JavaScript (ES6+)**
  - `fetch()` for API requests
  - DOM manipulation & event handling

---

## 📂 Project Structure

```
github-user-search-app/
├── index.html
├── /scss
├── /js
├── /assets
└── /dist
```

- **scss/**: Modular SCSS files following BEM and best practices.
- **js/**: All script logic, including API calls and theme handling.
- **assets/**: Images, SVGs, or icons.
- **dist/**: Compiled CSS.

---
