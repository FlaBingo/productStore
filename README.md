# 🛒 ProductStore - Your Personal Product Saver

Welcome to **ProductStore**, a full-stack MERN application designed to help you save, organize, and manage your favorite products. Whether you're planning to buy later or just want to keep track of items, ProductStore has you covered!

---

## 🚀 Features

### 🌟 Core Features
- **Save Products**: Add product details like name, description, price, and purchase links.
- **Organized Layout**: View your saved products in a clean, responsive masonry grid.
- **Edit & Delete**: Update or remove products with ease.
- **Authentication**: Secure signup, login, and email verification.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

### 🔒 Security Features
- **JWT Authentication**: Secure user sessions with JSON Web Tokens.
- **Password Hashing**: User passwords are hashed using `bcrypt`.
- **CORS Configuration**: Cross-origin requests are securely handled.

---

## 🛠️ Tech Stack

### Frontend
- **React**: For building the user interface.
- **Chakra UI**: For beautiful and responsive components.
- **React Router**: For seamless navigation.
- **Vite**: For fast development and optimized builds.

### Backend
- **Node.js**: For server-side logic.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: For storing user and product data.
- **Mongoose**: For object data modeling (ODM).

### Other Tools
- **Zustand**: For state management.
- **Lucide Icons**: For modern and lightweight icons.
- **Nodemailer**: For sending email verifications and password resets.
- **Vercel**: For deployment.

---

## 📂 Project Structure

### Backend
```
backend/
├── api/
│   └── index.js                # Entry point for Vercel deployment
├── config/
│   └── db.js                   # MongoDB connection setup
├── controllers/
│   ├── product.controller.js
│   └── user.controller.js
├── emails/
│   ├── email.config.js         # Email configuration
│   ├── emailTemplate.js        # Email templates
│   └── nodemailer.js           # Nodemailer setup
├── middlewares/
│   └── verifyToken.js          # JWT verification middleware
├── models/
│   ├── product.model.js        # Product schema
│   └── user.model.js           # User schema
├── routes/
│   └── ...                     # API routes
├── utils/
│   └── handleResponses.js      # Utility functions for API responses
├── .env                        # Environment variables
├── server.js                   # Main server file
└── vercel.json                 # Vercel configuration
```

### Frontend
```
frontend/
├── public/
│   ├── productsaver-high-resolution-logo.png
│   └── vite.svg
├── src/
│   ├── assets/                 # Static assets
│   ├── components/             # Reusable components (e.g., Navbar, Footer, ProductCard)
│   ├── pages/                  # Application pages (e.g., HomePage, LoginPage)
│   ├── store/                  # Zustand stores for state management
│   ├── utils/                  # Utility functions (e.g., formatDate, applyStyles)
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

---

## 🖥️ Installation and Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Vercel CLI** (optional, for deployment)

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash  
   npm install
   ```
3. Create a `.env` file and add the following:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🌐 Deployment

### Deploying to Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the backend:
   ```bash
   cd backend
   vercel
   ```
3. Deploy the frontend:
   ```bash
   cd frontend
   vercel
   ```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
<!-- 
---

## 🛡️ License

This project is licensed under the MIT License. See the LICENSE file for details. -->

---

## 📧 Contact

- **Author**: Satyam Prajapati
- **Email**: satyamm1402@gmail.com
- **LinkedIn**: [Satyam Prajapati](https://www.linkedin.com/in/satyam-prajapati-m/)
- **Portfolio**: [satyam.42web.io](https://www.satyam.42web.io/)

---

## ⭐ Acknowledgments

- Chakra UI for the amazing component library.
- Lucide Icons for the beautiful icons.
- Vercel for seamless deployment.

---

Made with ❤️ by Satyam Prajapati