# Week 11: CommunityHub API – Database Integration & Authentication

## Author
- **Name:** Ian Mutugi
- **GitHub:** [@hunted104](https://github.com/hunted104)

---

## Project Description

This project is a backend REST API built for the CommunityHub platform as part of the IYF Season 10 Week 11 assignment.

The goal of this project was to integrate MongoDB for persistent data storage and implement secure authentication and authorization using JSON Web Tokens (JWT).

The API allows users to register, log in, create posts, manage comments, and access protected routes securely.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Git
- GitHub
- Postman

---

## Features

- User registration and login
- JWT authentication
- Password hashing
- Protected routes
- Role-based authorization
- CRUD operations for posts
- Like post functionality
- Comment system
- MongoDB relationships
- Global error handling

---

## How to Run

### 1. Clone this repository

```bash
git clone https://github.com/hunted104/iyf-s10-week-11-hunted104.git
```

### 2. Navigate into project folder

```bash
cd iyf-s10-week-11-hunted104
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file and add:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

### 5. Start the server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## Lessons Learned

Through this project, I learned:

- How to work with MongoDB using Mongoose
- How JWT authentication protects APIs
- How middleware improves backend security and structure

---

## Challenges Faced

### MongoDB Connection Issues
At first, connecting to MongoDB Atlas failed because of incorrect connection settings.

**Solution:**  
I corrected the MongoDB connection string and updated cluster access settings.

---

### Authorization Logic
Ensuring users could only manage their own posts and comments required ownership checks.

**Solution:**  
I implemented ObjectId comparison and role-based authorization.

---

## Screenshots

API endpoints were tested successfully using Postman.

---

## Live Demo

Not deployed.

---

## Project Status

✅ MongoDB connected  
✅ Authentication completed  
✅ Authorization completed  
✅ CRUD operations completed  
✅ Relationships implemented  
✅ Week 11 requirements completed
