# 🚀 Node.js Backend Setup

A RESTful backend built with **Express**, **MongoDB (Mongoose)**, and **JWT Authentication**.

---

## 📁 Folder Structure

```
your-project/
├── config/           → DB connection, environment setup
├── controllers/      → Business logic
├── routes/           → API endpoints
├── models/           → Mongoose schemas
└── server.js         → Entry point
```

---

## ⚙️ Setup & Installation

### Step 1 — Create & Open Project

```bash
mkdir your-project
cd your-project
npm init -y
code .
```

### Step 2 — Install Dependencies

```bash
npm install bcrypt cors dotenv express jsonwebtoken mongoose nodemon
```

| Package | Version | Purpose |
|---|---|---|
| `express` | ^5.1.0 | Web framework |
| `mongoose` | ^8.17.0 | MongoDB ODM |
| `jsonwebtoken` | ^9.0.2 | JWT auth |
| `bcrypt` | ^6.0.0 | Password hashing |
| `dotenv` | ^17.2.1 | Environment variables |
| `cors` | ^2.8.5 | Cross-origin requests |
| `nodemon` | ^3.0.0 | automatically restarts your Node.js server whenever you make file changes. |

### Step 3 — Create `server.js`

```js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

### Step 4 — Run the Server

```bash
node server.js
```

> ✅ Output: `Server listening on port 3000`

---

## 🌿 Environment Variables

Create a `.env` file in the root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📦 Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 🛠️ Tech Stack

- **Runtime** — Node.js
- **Framework** — Express v5
- **Database** — MongoDB + Mongoose
- **Auth** — JWT + Bcrypt
- **Config** — Dotenv