# Paytm Mart

**It is a full-featured eCommerce platform that enables users to browse, shop, and manage orders efficiently. It is built with MERN stack (MongoDB, Express.js, React, Node.js) and integrates JWT authentication, Cloudinary for image uploads, and Stripe for payments.**

**Features**

* 🔐 User Authentication & Authorization (JWT-based login/signup)
* 🛒 Product Management (Add, edit, delete, and list products)
* 📦 Order Processing (Cart, checkout, and order tracking)
* 💳 Payment Integration (Stripe payment gateway)
* 📸 Image Uploads (Cloudinary integration for product images)
* 📊 Admin Dashboard (Manage users, products, and orders)
* 🌍 Responsive UI (Optimized for mobile and desktop)

**🛠️ Tech Stack**

* Frontend: React.js, Redux Toolkit, TailwindCSS
* Backend: Node.js, Express.js, MongoDB
* Authentication: JSON Web Tokens (JWT), Cookies
* Storage: Cloudinary for image uploads
* Payments: Stripe Payment Gateway

**🎯 Installation & Setup**

* Clone the Repository
   ```bash
   git clone https://github.com/yourusername/paytm-mart.git
   cd paytm-mart```

* Backend Setup
  - Install dependencies:
    ```bash
    cd backend
    npm install```
  - Create a .env file and configure:
    ```bash
    PORT=4000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    COOKIE_EXPIRE=7
    STRIPE_API_ID=your_stripe_api__id
    STRIPE_SECRET_KEY=your_stripe_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret```
  - Start the backend server:
    ``` bash
    nodemon```

* Frontend Setup
  - Install dependencies:
    ```bash
    cd frontend
    npm install```
  - Start the frontend:
    ```bash
       npm start```

**💡 Contributing**

*Pull requests are welcome! Feel free to fork and contribute.*

***Developed with ❤️ by markdown 
[Saransh Chaurasia](https://www.linkedin.com/in/saransh-chaurasia-8b9091203/)***
