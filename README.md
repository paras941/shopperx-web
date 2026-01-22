# ShopperX 🛒

A modern, responsive e‑commerce web application built with **React** showcasing real‑world usage of core React concepts like `useState`, `useContext`, `useEffect`, props, routing, and component‑based architecture.

This project is designed to demonstrate production‑style frontend structure suitable for placement portfolios and technical interviews.

---

Live Demo here : [click here](https://shopperx-web-dsbu.vercel.app)
## 🚀 Tech Stack

* React (Vite)
* JavaScript (ES6+)
* React Router DOM
* Context API
* CSS 

---

## 📂 Project Structure

```
shpper-site/
├──my-app
|   ├── src/
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── ProductCard/
│   │   └── Cart/
│   ├── Context/
│   │   └── ShopContext.jsx
│   ├── Pages/
│   │   ├── Shop.jsx
│   │   ├── Product.jsx
│   │   └── Cart.jsx
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## ⚛️ React Concepts Used

| Feature / Hook        | Where Used                  | Purpose                                            |
| --------------------- | --------------------------- | -------------------------------------------------- |
| `useState`            | Navbar, Cart, Product Pages | Manage UI state (menu, quantity, cart count, etc.) |
| `useContext`          | ShopContext                 | Global state management for cart & products        |
| `useEffect`           | Product, App                | Data fetching, side‑effects, lifecycle handling    |
| Props                 | All Components              | Passing data between parent and child components   |
| Context API           | ShopContext Provider        | Centralized store for cart logic                   |
| React Router          | App.jsx                     | Client‑side routing (Shop, Product, Cart)          |
| Conditional Rendering | Cart, Navbar                | Render UI based on state                           |
| Reusable Components   | ProductCard, Hero, Navbar   | Clean component architecture                       |

---

## 🧠 Core Functionalities

* Product Listing
* Product Detail Page
* Add to Cart / Remove from Cart
* Global Cart State (Context API)
* Responsive Navbar with Routing
* Clean Component Separation

---

## 🛠 Installation

```bash
git clone https://github.com/your-username/shopperx-web-react.git
cd shopperx-web-react
npm install
npm run dev
```

---

## 🔮 Future Improvements

* Authentication (Login / Signup)
* Payment Gateway Integration
* Admin Dashboard
* Backend API (Node + MongoDB)

---

> Built for learning, portfolio, and placement preparation.
