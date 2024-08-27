### 1. **User Role Management**

**Backend: Role-Based Access Control (RBAC)**

```javascript
// middleware/authorize.js
const authorize = (roles = []) => {
  // roles param can be a single role string (e.g., 'User') or an array of roles (e.g., ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      // User's role is not authorized
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

module.exports = authorize;
```

**Example Usage in Routes:**

```javascript
// routes/country.js
const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");

// Add a country (Admin only)
router.post("/add", authorize("Admin"), (req, res) => {
  // Logic to add a country
});

// Delete a country (Admin only)
router.delete("/:id", authorize("Admin"), (req, res) => {
  // Logic to delete a country
});

// Update a country (Admin only)
router.put("/:id", authorize("Admin"), (req, res) => {
  // Logic to update a country
});

// View countries (All users)
router.get("/", authorize(["Admin", "User"]), (req, res) => {
  // Logic to fetch countries
});

module.exports = router;
```

### 2. **Pagination and Search**

**Backend: Implement Pagination and Search**

```javascript
// routes/country.js
router.get("/", authorize(["Admin", "User"]), async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;

  const countries = await Country.find({
    name: { $regex: search, $options: "i" },
  })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  const count = await Country.countDocuments({
    name: { $regex: search, $options: "i" },
  });

  res.json({
    countries,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
});
```

**Frontend: Fetching Data with Pagination and Search**

```javascript
// hooks/useCountries.js
import { useState, useEffect } from "react";

const useCountries = (page, limit, search) => {
  const [countries, setCountries] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/countries?page=${page}&limit=${limit}&search=${search}`
        );
        const data = await response.json();
        setCountries(data.countries);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch countries", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [page, limit, search]);

  return { countries, totalPages, loading };
};

export default useCountries;
```

### 3. **Advanced Filtering and Sorting**

**Backend: Add Sorting and Filtering**

```javascript
// routes/country.js
router.get("/", authorize(["Admin", "User"]), async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    sort = "name",
    filter = {},
  } = req.query;

  const query = {
    ...filter,
    name: { $regex: search, $options: "i" },
  };

  const countries = await Country.find(query)
    .sort({ [sort]: 1 }) // 1 for ascending, -1 for descending
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  const count = await Country.countDocuments(query);

  res.json({
    countries,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
});
```

**Frontend: Update Fetching Logic for Filtering and Sorting**

```javascript
// hooks/useCountries.js
import { useState, useEffect } from "react";

const useCountries = (page, limit, search, sort, filter) => {
  const [countries, setCountries] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/countries?page=${page}&limit=${limit}&search=${search}&sort=${sort}&filter=${JSON.stringify(
            filter
          )}`
        );
        const data = await response.json();
        setCountries(data.countries);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch countries", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [page, limit, search, sort, filter]);

  return { countries, totalPages, loading };
};

export default useCountries;
```

### 4. **Real-time Updates with WebSockets**

**Backend: Set Up WebSockets with Socket.IO**

```javascript
// app.js or server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

// Notify clients on country changes
const notifyClients = (action, country) => {
  io.emit("countryChange", { action, country });
};

// Example: Notify on adding a country
app.post("/api/countries", async (req, res) => {
  const newCountry = await Country.create(req.body);
  notifyClients("add", newCountry);
  res.status(201).json(newCountry);
});

// Start the server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Frontend: Listen to Real-Time Updates**

```javascript
// hooks/useRealTimeCountries.js
import { useState, useEffect } from "react";
import io from "socket.io-client";

const useRealTimeCountries = () => {
  const [countries, setCountries] = useState([]);
  const socket = io.connect("http://localhost:3000");

  useEffect(() => {
    socket.on("countryChange", ({ action, country }) => {
      setCountries((prevCountries) => {
        switch (action) {
          case "add":
            return [...prevCountries, country];
          case "update":
            return prevCountries.map((c) =>
              c._id === country._id ? country : c
            );
          case "delete":
            return prevCountries.filter((c) => c._id !== country._id);
          default:
            return prevCountries;
        }
      });
    });

    return () => socket.disconnect();
  }, []);

  return { countries };
};

export default useRealTimeCountries;
```
