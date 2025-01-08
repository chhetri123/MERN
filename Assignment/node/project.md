# Project and Task Management System with Real-Time Updates and User Authentication

## Overview

Build a RESTful API that allows users to manage projects and tasks, where each task is assigned to a specific project. The application will include user authentication and real-time updates using Socket.IO. Users will be able to create projects and assign multiple tasks to each project. The tasks and projects will support pagination, search, and sorting, while tasks will be linked to specific projects using Mongoose's population feature.

## Endpoints to Implement

### 1. User Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Authenticate a user

### 2. Project Management

- `POST /projects` - Create a new project

  - Accepts name and description
  - Only authenticated users can create projects

- `GET /projects` - Retrieve a list of projects

  - Add support for pagination (e.g., `?page=1&limit=10`)
  - Allow search by project name (e.g., `?search=projectname`)
  - Support sorting (e.g., `?sortBy=createdAt&order=asc`)

- `PUT /projects/{id}` - Update a specific project

  - Allow updates to name and description

- `DELETE /projects/{id}` - Delete a project
  - Only the user who created the project can delete it

### 3. Task Management

- `POST /projects/{projectId}/tasks` - Create a new task within a specific project

  - Accepts title and description
  - Assigns the task to the project using projectId
  - Only authenticated users can create tasks

- `GET /projects/{projectId}/tasks` - Retrieve tasks for a specific project

  - Add support for pagination, search, and sorting within the project's tasks
  - Populate task details, including user information

- `PUT /projects/{projectId}/tasks/{taskId}` - Update a specific task within a project

  - Allow updates to title and description
  - Ensure the task is linked to the correct project

- `DELETE /projects/{projectId}/tasks/{taskId}` - Delete a task within a project
  - Only the user who created the task or project can delete it

## WebSocket (Real-Time Updates)

### 1. Socket.IO Implementation

- Use Socket.IO to enable real-time updates
- Notify all connected users when a project or task is created, updated, or deleted
- Broadcast real-time messages for task updates inside a project

### 2. Example Real-Time Features

- Notify users when:
  - A task is added or removed from a project
  - A project is updated or deleted

## Mongoose Population

When retrieving tasks for a project, use `.populate()` to include related project and user details.

### Example for Populating Project and User Info in Task:

```javascript
Task.find({ projectId: projectId })
  .populate("createdBy", "username email")
  .populate("projectId", "name description")
  .exec();
```

## Data Models

### 1. Project Model

Fields:

- name
- description
- createdBy (User)
- createdAt

Tasks will be associated with specific projects.

### 2. Task Model

Fields:

- title
- description
- projectId (Project)
- createdBy (User)
- createdAt

## Additional Guidelines

### Socket.IO Setup

- Use Socket.IO to notify users about project and task updates in real time

### Model Relations

- Use Mongoose to relate tasks with projects and users

### Advanced Querying

- Support pagination, search, and sorting for both projects and tasks

## Deliverables

1. A fully functional RESTful API with projects and tasks
2. Real-time task and project updates using WebSocket (Socket.IO)
3. Documentation on API endpoints, WebSocket events, and instructions on running the project
