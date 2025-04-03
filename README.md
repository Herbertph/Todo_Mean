# Todo_MEAN

This project is a RESTful API for managing application entities, allowing users to create, read, update, and delete application records. It is designed for developers looking to integrate application management features into their services. The API is built with Node.js, Express, and MongoDB, utilizing Mongoose for schema definition and data validation.

## Description

The Application Management API provides endpoints for CRUD operations on application entities, each identified by a unique ID. Entities include details such as name, technology stack, deployment status, monthly cost, and cloud hosting platform. This project also includes error handling and meaningful response codes to assist in integration and troubleshooting.

## Getting Started

These instructions will guide you through setting up and running the project on your local machine for development and testing.

### Prerequisites

Ensure you have Node.js, Angular and MongoDB installed on your machine.

### Installation

Clone this repository to your local machine.

(The next 2 steps need to be done for both folders Backend and Frontend)
- Using CMD, navigate into the project directory.
- Install the necessary dependencies:
npm install

Backend:
Set up your MongoDB connection by creating a `.env` file in the root directory of the project and adding your MongoDB connection string:

MONGODB_KEY=your_mongodb_connection_string

### Running the Project

*In the Backend folder
Start the server with the following command: npm start
The server will run on `http://localhost:3000`.

*In the Frontend folder
Start the server with the following command: ng serve
the server will run on `http://localhost:4200/`.

## API Usage

Below are examples of how to use the API endpoints.

### Create an Application

- **Endpoint**: `POST /applications`
- **Body**:

  ```json
  {
    "name": "Example App",
    "techStack": "MERN",
    "deployed": true,
    "monthlyCost": 200,
    "cloudHostingPlatform": "AWS"
  }
Success Response: Code: 201 (Created)
Get All Applications
Endpoint: GET /applications

Success Response: Code: 200 (OK)

Get An Application by ID
Endpoint: GET /applications/:id

Success Response: Code: 200 (OK)

Update an Application by ID
Endpoint: PUT /applications/:id

Body:

json
Copy code
{
  "monthlyCost": 300
}
Success Response: Code: 200 (OK)

Delete an Application by ID
Endpoint: DELETE /applications/:id

Success Response: Code: 200 (OK)