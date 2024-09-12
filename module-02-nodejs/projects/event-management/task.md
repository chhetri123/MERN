## Project Task: **Event Management System with Role-based Authorization**

### **Objective:**

Develop an event management system that includes user authentication, role-based authorization, and event management. The application will have three roles: **Admin**, **Organizer**, and **Attendee**. The functionality will differ based on the user's role.

---

### **Part 1: Schema Design**

Define the following schemas for your MongoDB models:

#### **1. User Schema:**

The **User** schema should define the following properties:

- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required, hashed)
- `role`: String (should be one of `'admin'`, `'organizer'`, or `'attendee'`, default: `'attendee'`)

```js
const userSchema = {
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "organizer", "attendee"],
    default: "attendee",
  },
};
```

#### **2. Event Schema:**

The **Event** schema should define the following properties:

- `name`: String (required)
- `description`: String
- `date`: Date (required)
- `location`: String
- `maxAttendees`: Number (required)
- `organizer`: ObjectId (reference to the `User` schema, required)
- `attendees`: Array of ObjectIds (references to the `User` schema)

```js
const eventSchema = {
  name: String,
  description: String,
  date: Date,
  location: String,
  maxAttendees: Number,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
};
```

---

### **Part 2: API Endpoints**

You need to create RESTful API endpoints for the following functionality:

#### **1. User Authentication Endpoints**

- **POST /auth/register**

  - Registers a new user (role defaults to `'attendee'`).
  - Required fields: `name`, `email`, `password`, `role` (optional).

- **POST /auth/login**
  - Authenticates a user and returns a JWT token.
  - Required fields: `email`, `password`.

#### **2. User Management (Admin-only)**

- **GET /admin/users**

  - Retrieves a list of all users (Admin-only).

- **PATCH /admin/users/:id/role**
  - Admin can assign or change the role of a user.
  - Required field: `role` (must be `'admin'`, `'organizer'`, or `'attendee'`).

#### **3. Event Management Endpoints**

**For Organizers:**

- **POST /events**
  - Allows only **Organizers** to create a new event.
  - Required fields: `name`, `description`, `date`, `location`, `maxAttendees`.

**For Attendees:**

- **POST /events/:id/join**
  - Allows **Attendees** to join an event if it's not full.
- **POST /events/:id/leave**
  - Allows **Attendees** to leave an event.

**For General Users:**

- **GET /events**
  - Retrieves all events. Include event details and information about the organizer and attendees. Use `populate()` to display relevant information instead of just ObjectIds.

---

### **Part 3: Middleware**

You must implement two key middleware components:

#### **1. Authentication Middleware (`auth.js`):**

- Verifies if the user is authenticated via a JWT token.
- If the token is valid, the user information should be available in `req.user`.

##### **Functionality**:

- Extract the JWT token from the `Authorization` header.
- Verify the token with your secret key.
- If valid, attach the user object to the `req.user` and call `next()`.
- If invalid, respond with a `401 Unauthorized` error.

```js
const auth = (req, res, next) => {
  // Logic to check JWT token and authenticate user
};
```

#### **2. Role-based Authorization Middleware (`role.js`):**

- Verifies if the authenticated user has the required role to access certain routes.

##### **Functionality**:

- Check if the `req.user.role` matches one of the roles specified.
- If the role is valid, proceed with the request. Otherwise, respond with a `403 Forbidden` error.

```js
const role = (roles) => {
  return (req, res, next) => {
    // Logic to check if user role is in the allowed roles
  };
};
```

---

### **Part 4: Aggregation and Population (Bonus Task)**

1. **Aggregation Task**:
   Implement an API that provides a summary of all events, including:

   - Total number of events.
   - Number of attendees for each event.
   - Number of events organized by each organizer.

   Use MongoDB's **aggregation** methods such as `$group` and `$lookup` for this task.

   Example:

   ```js
   const aggregation = await Event.aggregate([
     { $group: { _id: "$organizer", totalEvents: { $sum: 1 } } },
   ]);
   ```

2. **Populate Task**:
   Make sure to **populate** references when fetching events:
   - Populate `organizer` to display the organizer's name.
   - Populate `attendees` to show the list of attendee names instead of their ObjectIds.

---

### **Submission minimum Requirements**:

- Implement all the routes and middleware as described.
- Ensure JWT-based authentication and role-based access control (RBAC) is working.
- Test the system to ensure that:
  - Only Admin can manage users and assign roles.
  - Only Organizers can create events.
  - Attendees can join and leave events.
- Implement the aggregation and population functionality as part of the bonus task.
