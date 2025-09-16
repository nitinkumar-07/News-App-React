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

Home page <img width="1910" height="906" alt="Screenshot 2025-09-16 065933" src="https://github.com/user-attachments/assets/95f34eae-12dc-446f-bcb2-a861fedaadbe" />

Search <img width="1917" height="910" alt="Screenshot 2025-09-16 070010" src="https://github.com/user-attachments/assets/11328844-e0ea-4f13-b062-1b12d2416d68" />

News View <img width="1919" height="1008" alt="Screenshot 2025-09-16 071202" src="https://github.com/user-attachments/assets/afdb43d8-ae81-4863-beb8-d3e08fb47021" />


Dark Mode <img width="1919" height="912" alt="Screenshot 2025-09-16 070121" src="https://github.com/user-attachments/assets/f21fe8f0-d396-4be9-9d13-b26e1268cb32" />

Search & dark <img width="1919" height="905" alt="Screenshot 2025-09-16 070304" src="https://github.com/user-attachments/assets/02d8528b-698b-426f-8d29-eb60e1bffb29" />
 Mobile Responsive
 
<img width="364" height="799" alt="Screenshot 2025-09-16 070337" src="https://github.com/user-attachments/assets/07682d2e-1087-4a84-823c-ed7d1f4f0077" />


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

## 🤝 Connect with Me

👨‍💻 Nitin Kumar 

💼 LinkedIn :- [https://www.linkedin.com/in/nitin-kumar-491813336/]

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
