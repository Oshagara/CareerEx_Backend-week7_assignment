## Lost & Found System

This project is a simple **Lost & Found** system built for a university campus. It allows users (students and security staff) to log found items and manage them efficiently. The system supports adding, viewing, updating, and deleting items.

### 🛠 Tech Stack

* **Backend:** Node.js, Express.js, MongoDB, Mongoose
* **Frontend:** React.js, Tailwind CSS
* **API Client:** Axios

---

### 📁 Folder Structure

```
lost-found-app
│
├── lost-found-system/
│   ├── controllers/
│   │   └── itemController.js
│   ├── models/
│   │   └── Item.js
│   ├── routes/
│   │   └── itemRoute.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── README.md
│
└── lost-found-client/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── ItemForm.jsx
    │   │   └── ItemList.jsx
    │   ├── App.jsx
    │   ├── index.js
    │  
    ├── .gitignore
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    └── README.md

```

---

### ⚙️ Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd lost-found-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

---

### 🎨 Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd lost-found-client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the frontend:

   ```bash
   npm run dev
   ```

> Make sure your frontend is making API requests to the correct backend URL (e.g., `http://localhost:5000/api/items`)

---

### 🧩 Features

* Add a new found item
* View all lost and found items
* Update item details or mark as claimed
* Delete irrelevant entries

---

### 📝 API Routes

* `GET /api/items/all` - Get all items
* `POST /api/items/add` - Add a new item
* `GET /api/items/:id` - Get a specific item
* `PUT /api/items/:id` - Update or claim an item
* `DELETE /api/items/:id` - Remove an item