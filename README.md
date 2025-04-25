# Task Manager API – Backend Developer Assignment (House of Marktech)

This project is a simple RESTful API built using **Node.js** and **Express.js** for managing tasks with basic **user registration/login**, **token-based session logic**, and **file-based data handling**. It satisfies all requirements provided by House of Marktech for the backend role assessment.

---

## Project Structure

Features

- User Registration & Login (with username and password)
- Add, View, Delete tasks (User-specific)
- Token/session-based auth (custom implementation – no third-party lib)
- Data stored using JSON files (file-based storage)
- API built with Express.js
- Postman compatible

POST http://localhost:5000/api/auth/register

{
  "username": "rudra123",
  "password": "securepass"
}

response 
{
  "message": "User registered successfully"
}

POST http://localhost:5000/api/auth/login

{
  "username": "rudra123",
  "password": "securepass"
}

response
{
  "message": "Login successful",
  "token": "generated-token-string"
}

Authorization: Bearer <token>

1. GET Task
GET http://localhost:5000/api/tasks

Header
Authorization: Bearer <token>

response
[
  {
    "id": "task-id-1",
    "title": "Complete backend project",
    "completed": false
  }
]

2. Add Task
post http://localhost:5000/api/tasks

Header
Authorization: Bearer <token>

body
{
  "title": "New task title"
}

Response

{
  "message": "Task added successfully"
}


3. Delete Task

POST http://localhost:5000/api/tasks/1745575332789

Header
Authorization: Bearer <token>

Response
{
  "message": "Task deleted successfully"
}
