# 📰 Desh Duniya - News Web App

A modern and responsive React-based News Application that delivers the latest headlines from around the world 🌍. Built with clean UI, category-wise filtering, and a sleek dark/light theme toggle for the best reading experience.

## 🚀 Features

• 🌐 Category Wise News – General, Technology, Sports, Business, Entertainment, Health, and more
• 🔍 Search Functionality – Instantly find articles by keyword
• 🌙 Dark/Light Mode – Smooth theme toggle using Context API
• ⚡ Fast & Responsive UI – Built with React + TailwindCSS
• 🔄 Dynamic API Integration – Real-time news fetching using Axios
• 🖼 Beautiful Cards UI – Clean and modern design for each article
• 📱 Responsive Layout – Works seamlessly on mobile, tablet, and desktop

## 🛠️ Tech Stack

• React.js (Frontend framework)

• React Router DOM (Routing between pages/categories)

• React Hooks (useState, useEffect, useContext for state management)

• Context API (Dark/Light mode theme management)

• Axios (API requests)

• TailwindCSS (Styling)

• Lucide React & React Icons (Icons)

## 🏗️ Project Structure
src/
 ┣ components/
 ┃ ┣ Navbar.jsx
 ┃ ┣ NewsCard.jsx
 ┃ ┗ Footer.jsx
 ┣ pages/
 ┃ ┣ Home.jsx
 ┃ ┣ News.jsx
 ┃ ┗ Categories.jsx
 ┣ context/
 ┃ ┗ ThemeContext.jsx
 ┣ App.js
 ┗ index.js

 ## 📸 Screenshots

🔲 Add your app screenshots here

## 💡 Challenges Faced

• ❌ API restrictions on free plan (CORS issues, 426/blocked requests)

• 🔑 Handling API keys securely with .env

• 🎨 Making dark/light mode work smoothly with Context API


## 🌟 Future Improvements

✅ Pagination for more articles

✅ Add multiple country filters

✅ Save favorite articles

✅ Deploy with backend proxy for better API handling

## 🌍 Deployment Notes

• 🚫 Tried deploying on Netlify, but faced CORS restrictions and 426 errors due to NewsAPI free plan limitations (only works on localhost).

• 🔑 Secure API handling requires a backend proxy (Node.js/Express) or switching to another news API that allows public deployment.

• 🚀 Future plan: Add a small backend to handle requests and then deploy seamlessly on Netlify / Vercel.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
