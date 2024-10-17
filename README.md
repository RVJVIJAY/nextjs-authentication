🌐 Next.js Authentication App

A simple Next.js authentication app that lets users sign up, log in, and access a protected profile page using JWT tokens. This project demonstrates how to handle user authentication with middleware for route protection.

✨ Features :

🔐 JWT-based Authentication
🔒 Protected Profile Page
🔄 User Registration and Login
🚪 Logout Functionality
🛡️ Middleware for Route Protection

🛠️ Tech Stack :

* Next.js: React framework for server-side rendering
* JWT (JSON Web Token): Token-based authentication
* Tailwind CSS: Modern utility-first CSS framework
* Cookies & LocalStorage: For managing token and user data

📂 Project Structure:

C:.
├───app
│   ├───api
│   │   └───auth
│   │       ├───login
│   │       └───signup
│   ├───fonts
│   └───user
│       ├───login
│       ├───profile
│       └───signup
├───lib
└───models

🚀 Getting Started :

*1. Clone the Repository

  ```bash
 git clone https://github.com/RVJVIJAY/nextjs-authentication.git
 cd nextjs-authentication

*2. Install Dependencies 
  
  npm install

*3. Set Up Environment Variables
*Create a .env.local file in the project root and add the following:
  
  /JWT_SECRET=your_jwt_secret_key

*4. Run the Development Server

   npm run dev
*Open your browser and navigate to http://localhost:3000 to see the app in action. 🎉

```

📄 Pages
🖊️ Signup Page
Create a new account with an email and password.
Generates a JWT token upon successful registration.
🔑 Login Page
Enter your credentials to log in.
JWT token is generated and stored in cookies.
👤 Profile Page
A protected page that only authenticated users can access.
Middleware checks for a valid JWT token in the cookies before allowing access.
🚪 Logout
Logs out the user by clearing the JWT token and redirects to the login page.
🔧 Middleware for Route Protection
The middleware ensures that only authenticated users with a valid JWT token can access protected routes like the profile page. Users without a token are redirected to the login page.

🎨 Styling
Uses Tailwind CSS for a clean and responsive UI.
Components are styled for simplicity and a smooth user experience.
🚧 Future Enhancements
💾 Add a persistent database to store user data.
🔒 Implement password encryption using bcrypt.
📧 Add email validation and password strength check.
🛠️ Enhance UI with more interactive components 
