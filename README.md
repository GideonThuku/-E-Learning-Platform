# 📚 Zuberi Academy E-Learning Platform

This is a single-page, responsive web application for an online learning academy, styled with a modern, bright, and engaging design palette inspired by the vibrant learning environment of Nairobi.

It features a course catalog, course detail modals, and a simple client-side login/authentication simulation.

---
View the Live Website here: https://e-learning-platform-rexu.vercel.app/
---

## ✨ Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
- **Hero Section Slideshow:** Dynamic image slideshow showcasing the academy's environment in Nairobi.
- **Bright and Modern UI:** Uses a fresh and energetic color scheme (Teal and Bright Orange/Coral) suitable for an innovative learning platform.
- **Course Catalog:** Displays a grid of available courses with titles, descriptions, and reliable images.
- **Course Modals:** Click on any course card to view detailed lessons and mark the course as complete.
- **Client-Side Authentication:** Simulates user login/logout functionality using localStorage to persist the user's "logged in" state.

---

## 🛠️ Technology Stack

The entire application is built using standard web technologies for simplicity and speed:

- **HTML5 (`index.html`)** – Provides the structure and content.  
- **CSS3 (`style.css`)** – Handles all styling, responsiveness, and animations.  
- **JavaScript (`script.js`)** – Manages course data, UI interactions (modals, login), and the hero slideshow logic.

---

## 💻 Running Locally

Since this project is a single-page HTML application with no server dependencies, you can run it immediately.

1. **Clone or Download:** Get the three project files (`index.html`, `style.css`, `script.js`).  
2. **Open:** Double-click the `index.html` file in your web browser (e.g., Chrome, Firefox).

---

## 📂 File Structure Overview

| File | Purpose | Key Details |
|------|----------|--------------|
| `index.html` | Structure | Defines the main layout, includes the hero slideshow container, course grid, and modal structures for authentication and course details. |
| `style.css` | Styling | Defines the color palette (Vibrant Teal and Coral), applies typography, responsiveness, and necessary styles for the hero slideshow animations. |
| `script.js` | Functionality | Contains the core logic: course data array, course rendering, modal handling, authentication simulation via localStorage, and the slideshow interval logic. |

---

## 🔑 Simulated Authentication

The app uses the browser's **localStorage** for a simple, non-secure authentication prototype:

- **Login/Signup:** Enter an email to "log in." The username is derived from the part of the email before the @ symbol.  
- **State:** The login status is saved, and the header changes from "Login/Sign Up" buttons to a "Welcome, [User]!" message.  
- **Logout:** Clears the stored user data, returning the UI to the logged-out state.

---

© 2025 Zuberi Academy | Designed for Learning with Purpose 🎓
