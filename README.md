# ShopperX �️

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A feature-rich, modern e-commerce web application built with React**

[🌐 Live Demo](https://shopperx-web-dsbu.vercel.app) • [📋 Features](#-features) • [🚀 Getting Started](#-getting-started) • [📸 Screenshots](#-screenshots)

</div>

---

## ✨ Overview

ShopperX is a fully functional e-commerce frontend application showcasing professional-grade React development. Built with modern best practices, it demonstrates real-world implementation of state management, routing, authentication flows, and responsive UI design — perfect for portfolios and technical interviews.

---

## 🎯 Features

### 🛒 Shopping Experience
- **Product Catalog** — Browse products by category (Men, Women, Kids)
- **Product Search** — Real-time search functionality with instant results
- **Quick View Modal** — Preview products without leaving the page
- **Product Details** — Comprehensive product pages with size selection & quantity controls
- **Related Products** — Smart product recommendations

### 💝 Wishlist System
- **Save Favorites** — Add/remove products to your wishlist
- **Persistent Wishlist** — Wishlist count displayed in navbar
- **Dedicated Wishlist Page** — Manage all saved items in one place

### 🛍️ Cart & Checkout
- **Smart Cart** — Add, remove, update quantities
- **Cart Summary** — Real-time price calculations
- **Empty Cart State** — Beautiful UI for empty cart
- **Checkout Flow** — Complete checkout page with order summary

### 👤 User Authentication
- **Login/Signup** — Toggle between login and signup modes
- **Form Validation** — Real-time input validation with error messages
- **User Profile Dropdown** — Quick access to account features
- **Social Login UI** — Google sign-in button (UI ready)

### 🔔 User Experience
- **Toast Notifications** — Elegant success/error/info messages
- **Smooth Animations** — CSS transitions & hover effects throughout
- **Scroll Management** — Smart scroll-to-top behavior
- **Responsive Design** — Mobile-first, works on all devices

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18 with Vite |
| **Routing** | React Router DOM v6 |
| **State Management** | Context API + useReducer pattern |
| **Styling** | CSS3 with Flexbox & Grid |
| **Animations** | CSS Transitions & Keyframes |
| **Build Tool** | Vite (Lightning fast HMR) |
| **Deployment** | Vercel |

---

## 📂 Project Architecture

```
shopperx-web/
├── 📁 public/
├── 📁 src/
│   ├── 📁 assets/              # Images, icons, product data
│   ├── 📁 Components/
│   │   ├── 🧩 Navbar/          # Navigation with search & user menu
│   │   ├── 🧩 SearchBar/       # Real-time product search
│   │   ├── 🧩 Hero/            # Landing page banner
│   │   ├── 🧩 Item/            # Product card with quick actions
│   │   ├── 🧩 QuickView/       # Product preview modal
│   │   ├── 🧩 ProductDisplay/  # Detailed product view
│   │   ├── 🧩 CartItems/       # Shopping cart management
│   │   ├── 🧩 Toast/           # Notification system
│   │   ├── 🧩 Popular/         # Popular products section
│   │   ├── 🧩 NewCollections/  # New arrivals section
│   │   ├── 🧩 Offers/          # Promotional banners
│   │   ├── 🧩 Footer/          # Site footer
│   │   └── 🧩 ...more
│   ├── 📁 Context/
│   │   └── 🔄 ShopContext.jsx  # Global state (cart, wishlist, auth)
│   ├── 📁 Pages/
│   │   ├── 📄 Shop.jsx         # Home page
│   │   ├── 📄 ShopCategory.jsx # Category browsing
│   │   ├── 📄 Product.jsx      # Product detail page
│   │   ├── 📄 Cart.jsx         # Shopping cart
│   │   ├── 📄 Wishlist.jsx     # Saved items
│   │   ├── 📄 Checkout.jsx     # Checkout flow
│   │   └── 📄 LoginSignUp.jsx  # Authentication
│   ├── 📄 App.jsx              # Main app with routing
│   └── 📄 main.jsx             # Entry point
├── 📄 package.json
├── 📄 vite.config.js
└── 📄 README.md
```

---

## ⚛️ React Concepts Demonstrated

| Concept | Implementation | Purpose |
|---------|---------------|---------|
| **useState** | Forms, modals, menus | Local component state management |
| **useContext** | ShopContext | Global state for cart, wishlist, auth |
| **useEffect** | Scroll behavior, toasts | Side effects & lifecycle management |
| **useNavigate** | Post-login redirect | Programmatic navigation |
| **useParams** | Product pages | URL parameter extraction |
| **Custom Hooks** | Context consumers | Reusable stateful logic |
| **Conditional Rendering** | Auth forms, empty states | Dynamic UI based on state |
| **Component Composition** | All components | Building complex UIs from simple parts |
| **Props Drilling vs Context** | Mixed approach | Optimal data flow patterns |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/shopperx-web.git

# Navigate to project directory
cd shopperx-web

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Page
*Hero section with featured products and categories*

### Product Catalog
*Grid layout with quick view, wishlist, and cart actions*

### Product Details
*Size selection, quantity controls, and related products*

### Shopping Cart
*Full cart management with price summary*

### Wishlist
*Saved items with quick add-to-cart*

### Authentication
*Clean login/signup with form validation*

</details>

---

## 🔮 Roadmap

- [ ] Backend API integration (Node.js + MongoDB)
- [ ] Payment gateway (Stripe/Razorpay)
- [ ] Order history & tracking
- [ ] Product reviews & ratings
- [ ] Admin dashboard
- [ ] PWA support

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Paras Rawat**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/parasrawat)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/parasrawat)

*Full Stack Developer | React Enthusiast | Open Source Contributor*

</div>

---

<div align="center">

**Built with ❤️ by Paras Rawat**

⭐ Star this repo if you found it helpful!

</div>
