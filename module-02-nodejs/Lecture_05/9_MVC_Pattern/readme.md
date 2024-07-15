### Additional Features and Endpoints

- **Mark Task as Completed**

  - **Endpoint:** `/api/tasks/:id/complete`
  - **Method:** `PATCH`
  - **Description:** Mark a task as completed.

- **Search Tasks by Title**

  - **Endpoint:** `/api/tasks/search/:title`
  - **Method:** `GET`
  - **Description:** Search tasks by title.

- **Get Completed Tasks**

  - **Endpoint:** `/api/tasks/completed`
  - **Method:** `GET`
  - **Description:** Retrieve all completed tasks.

- **Bulk Delete Tasks**

  - **Endpoint:** `/api/tasks/bulk-delete`
  - **Method:** `DELETE`
  - **Description:** Delete multiple tasks by their IDs.

- **Paginate Task List**
  - **Endpoint:** `/api/tasks?page=1&limit=10`
  - **Method:** `GET`
  - **Description:** Retrieve tasks with pagination support (e.g., 10 tasks per page).
