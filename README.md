# 🚀 Hackathon Backend Starter (Node.js + Express + MongoDB)

A lightweight, scalable, and modular REST API backend starter boilerplate designed for hackathons and rapid prototyping. Built with **Node.js (ES Modules)**, **Express**, and **MongoDB / Mongoose**.

---

## 🌟 Features

- ⚡ **Modern ES Modules:** Clean `import/export` syntax powered by Node.js.
- 🗄️ **MongoDB & Mongoose:** Graceful connection handling with auto-reconnect and status checks.
- 🔒 **Security & Utilities:** Integrated `cors`, `dotenv`, `express-validator`, and `multer`.
- 🔄 **Live Reloading:** Pre-configured `nodemon` for instantaneous development refresh.
- 🚦 **Health & Check API:** Built-in `/api/check` endpoint to verify server and database status in real-time.

---

## 📁 Project Structure

```
backend-hackathon/
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection & status tracker
│   ├── controllers/
│   │   └── checkController.js  # Controller logic for check & sample CRUD
│   ├── models/
│   │   └── Item.js             # Sample Mongoose Schema
│   └── routes/
│       └── apiRoutes.js        # Express API routes
├── .env                        # Environment variables
├── .env.example                # Sample environment config
├── .gitignore                  # Git ignore rules
├── package.json                # Project dependencies and scripts
├── server.js                   # Main application entry point
└── README.md
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **MongoDB** (Local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone <your-repo-url>
cd backend-hackathon
npm install
```

### 3. Environment Variables
Create or update your `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/hackathon_db
```
> **Tip:** For MongoDB Atlas, replace `MONGO_URI` with your connection string:
> `mongodb+srv://<username>:<password>@cluster.mongodb.net/hackathon_db?retryWrites=true&w=majority`

### 4. Run the Server
- **Development Mode (with auto-reload):**
  ```bash
  npm run dev
  ```
- **Production Mode:**
  ```bash
  npm start
  ```

Server will run on: `http://localhost:5000`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Server welcome message & endpoint directory |
| `GET` | `/api/check` | Real-time health check (Server status + DB connection) |
| `GET` | `/api/items` | Retrieve list of items from MongoDB |
| `POST` | `/api/items` | Create a new item in MongoDB |

---

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
