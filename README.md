# Hackathon Project Starter 🚀

A quick starter template built with Node.js, Express, and MongoDB.

## 📁 Project Structure

```
hackathon/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # MongoDB Mongoose connection
│   │   ├── controllers/
│   │   │   └── checkController.js # Route logic & sample handlers
│   │   ├── models/
│   │   │   └── Item.js          # Sample Mongoose data model
│   │   ├── routes/
│   │   │   └── apiRoutes.js     # Express routes
│   │   └── server.js            # Express application entrypoint
│   ├── .env                     # Environment variables (PORT, MONGO_URI)
│   ├── .env.example             # Example environment variables
│   ├── .gitignore
│   └── package.json
├── package.json                 # Root convenience scripts
└── README.md
```

## ⚡ Quick Start

### 1. Install & Run Backend

```bash
cd backend
npm install
npm run dev
```

Or from the root `hackathon` folder:

```bash
npm run dev
```

### 2. Check the API

- **Root check:** [http://localhost:5000/](http://localhost:5000/)
- **API Check Route:** [http://localhost:5000/api/check](http://localhost:5000/api/check)
- **Sample Items Route:** [http://localhost:5000/api/items](http://localhost:5000/api/items)

### 3. Connect to MongoDB

By default, the server connects to `mongodb://localhost:27017/hackathon_db`.

If you use **MongoDB Atlas**, open `backend/.env` and set:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/hackathon_db?retryWrites=true&w=majority
```
