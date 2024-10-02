### **Project Task: Dashain Festival Celebration Platform**

**Objective:**  
Create a simple web application to celebrate the Dashain festival. The platform will allow users to connect with family, share blessings, and track festival events. You will build a backend using Node.js and connect it to a frontend using React.js.

#### **Project Features:**

1. **User Registration and Login:**

   - Implement a user registration and login system.
   - Each user should have a profile with basic details (name, email, and family connections).

2. **Tika and Blessings Exchange:**

   - Allow users to send virtual tika and blessings to their family members.
   - Implement a simple notification system to inform users when they receive tika or blessings.

3. **Dashain Events and Calendar:**

   - Create a feature to display important Dashain events (e.g., Ghatasthapana, Fulpati, Vijaya Dashami).
   - Users should be able to add their family events and view them in a calendar format.

4. **Family Tree Visualization:**

   - Implement a basic family tree feature that visualizes user connections within the family.
   - Users can add family members to their tree.

5. **Media Sharing:**

   - Enable users to upload and share photos related to their Dashain celebrations.
   - Create a gallery to display these photos.

6. **User Profiles:**
   - Each user should have a profile page that displays their family tree and shared photos.
   - Allow users to edit their profile information.

---

### **Database Model Schema Design:**

Design the following MongoDB schema to store the necessary data for the application:

1. **User Schema:**

   - **name**: String (required)
   - **email**: String (required, unique)
   - **password**: String (required)
   - **familyMembers**: Array of ObjectIds (references to User schema, for family connections)
   - **profilePicture**: String (URL for profile picture)
   - **createdAt**: Date (default to current date)

   ```json
   {
     "name": "String",
     "email": "String",
     "password": "String",
     "familyMembers": ["ObjectId"],
     "profilePicture": "String",
     "createdAt": "Date"
   }
   ```

2. **Tika Exchange Schema:**

   - **senderId**: ObjectId (reference to User schema)
   - **receiverId**: ObjectId (reference to User schema)
   - **message**: String
   - **createdAt**: Date (default to current date)

   ```json
   {
     "senderId": "ObjectId",
     "receiverId": "ObjectId",
     "message": "String",
     "createdAt": "Date"
   }
   ```

3. **Event Schema:**

   - **title**: String (required)
   - **date**: Date (required)
   - **description**: String
   - **userId**: ObjectId (reference to User schema)

   ```json
   {
     "title": "String",
     "date": "Date",
     "description": "String",
     "userId": "ObjectId"
   }
   ```

4. **Photo Schema:**

   - **userId**: ObjectId (reference to User schema)
   - **imageUrl**: String (URL of the uploaded photo)
   - **description**: String
   - **createdAt**: Date (default to current date)

   ```json
   {
     "userId": "ObjectId",
     "imageUrl": "String",
     "description": "String",
     "createdAt": "Date"
   }
   ```

---

### **Instructions for the Backend:**

1. **Set Up Backend:**

   - Create a Node.js application with Express.js.
   - Set up MongoDB using Mongoose for database management.
   - Implement RESTful API endpoints for user registration, login, sending tika, creating events, and uploading photos.

2. **End Points:**

   you can add more :

   | **Endpoint**    | **Method** | **Description**                                    |
   | --------------- | ---------- | -------------------------------------------------- |
   | `/api/register` | POST       | Register a new user                                |
   | `/api/login`    | POST       | Authenticate user and return a token               |
   | `/api/tika`     | POST       | Send tika to another user                          |
   | `/api/tika`     | GET        | Retrieve all tika sent to the logged-in user       |
   | `/api/events`   | POST       | Create a new Dashain event                         |
   | `/api/events`   | GET        | Retrieve all events for the logged-in user         |
   | `/api/family`   | POST       | Add a family member to the user's family tree      |
   | `/api/family`   | GET        | Retrieve all family members                        |
   | `/api/photos`   | POST       | Upload a photo related to Dashain celebrations     |
   | `/api/photos`   | GET        | Retrieve all photos uploaded by the logged-in user |

   ***

3. **Real-Time Communication:**
   - Integrate **Socket.IO** into your Node.js application.
   - Set up WebSocket connections to allow users to send and receive tika in real time.
   - Emit events when a user sends tika, notifying the receiver immediately.

### **Instructions for the Frontend (React.js):**

1. **Set Up the Project Structure:**

   - Organize your React application with components for each feature.
   - Use Tailwind css For professional Style. ( you can use flowbite)

2. **Implement the Following Components:**

   - **Registration Component**: A form to register new users.
   - **Login Component**: A form for users to log in.
   - **Tika Component**: A form to send tika and display received tika messages.
   - **Event Creation Component**: A form to create new events and display all events.
   - **Family Tree Component**: A visualization of family members and the ability to add members.
   - **Photo Upload Component**: A form to upload photos and display a gallery of uploaded photos.
   - **Navbar Component**: A navigation bar to switch between different sections.

3. **Real-Time Communication:**
   - Use **Socket.IO** on the frontend to connect to the backend server.
   - Implement event listeners to receive real-time notifications for new tika sent to the user.
   - Update the Tika Component to display incoming tika messages instantly without needing to refresh.

---

### Project Format

- You can make as your own format.
  For example

```
/dashain-celebration-platform
├── /backend
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── server.js
├── /frontend
│   ├── /src
│      ├── /components
│      ├── /pages
│      ├── App.js

```

### **Submission:**

- Submit your project as a Git repository with clear documentation on how to set up and run the application.

---
