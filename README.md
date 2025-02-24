Movie Browser Documentation

---

Table of Contents
1. [Project Overview]
2. [Setup and Installation]
3. [Project Structure]
4. [Features Implemented]
5. [Design Decisions]
6. [Possible Improvements]
7. [How to Run the Application]
8. [Deployment]

---

Project Overview
The Movie Browser is a responsive web application that allows users to browse, search, and filter movies using a public movie API. Users can dynamically fetch movie results as they type, implement infinite scrolling, and save favorite movies locally.

---

Setup and Installation

Prerequisites:
- Node.js (>=14.0)
- npm

Steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd movie-browser
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

Project Structure
```
movie-browser/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Favorites.jsx
│   │   ├── Filters.jsx
│   │   ├── MovieCard.jsx
│   │   ├── SearchBar.jsx
│   ├── hooks/
│   │   └── useInfiniteScroll.js
│   ├── utils/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

Features Implemented
- Movie Listing: Displays a list of movies with title, poster, and release year.
- Search Feature: Allows users to search for movies dynamically as they type.
- Infinite Scrolling: Loads more movies as users scroll without using third-party solutions.
- Filtering Options (Optional): Code is implemented but disabled due to API request limits.
- Favorite Movies: Users can save favorite movies using local storage.
- Responsive UI: Optimized for both desktop and mobile views.
- Accessibility Features: Includes ARIA labels and keyboard navigation support.

---

Design Decisions
1. React.js for UI Development: Chosen for its component-based structure and efficient rendering.
2. Custom Infinite Scroll Hook: Implemented from scratch instead of using third-party libraries.
3. Local Storage for Favorites: Ensures persistence without requiring backend storage.

---

Possible Improvements
- Enhanced Filtering: Re-enable filtering once API request limits are managed.
- Pagination Instead of Infinite Scroll: Optional user preference.
- Dark Mode Support: Improve UI customization.
- Backend for User Authentication: To persist favorite movies across devices.
- Better Error Handling: Show user-friendly error messages on API failures.

---

How to Run the Application
1. Ensure you have all dependencies installed.
2. Run the application using:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

---

Submission
GitHub Link: https://github.com/saumya-jain20/Movie-Browser
Vercel Link: https://movie-browser-swart.vercel.app/

---

Thank you for reviewing the Movie Browser project!
Made with ❤️ by Saumya Jain

