# Online Market Application

This is a Node.js and Express REST API project for an Online Market Application that interacts with a MongoDB database using the Mongoose ODM. It provides endpoints for managing products and categories.

## Table of Contents

- [Project Overview](#project-overview)
- [Database Setup](#database-setup)
- [Getting Started](#getting-started)
- [REST API Documentation](#rest-api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Online Market Application consists of the following components:

- **Database**: It uses a MongoDB database with a `Marketplace` database and two collections: `product` and `categories`.

- **Server**: The server is built using Node.js and Express.js. It handles incoming HTTP requests and interacts with the database.

- **API Endpoints**: The application provides various REST API endpoints for managing products and categories.

### Database Setup

1. Create a MongoDB database named `Marketplace`.

2. Create the following collections in the database:

   a. `product` with the following properties:
      - `name` (string)
      - `description` (string)
      - `price` (number)
      - `quantity` (number)
      - `category` (string)

   b. `categories` with the following property:
      - `name` (string)

3. Obtain your MongoDB connection string (URL or URI).

### Getting Started

1. Clone the repository to your local machine:

   ```bash
   https://github.com/aysosa1111/Online-Market-Application-Backend.git


## Install the required dependencies:

  ```bash
Copy code
npm install
Create a .env file in the root directory and add your MongoDB connection string and port:
```
## env
  ```bash
MONGODB_URI=mongodb://localhost:27017/Marketplace
PORT=5000
```
## Start the server:

  ```bash
npm start
```
The server should now be running. You can access it at http://localhost:5000.

## REST API Documentation
## Product Endpoints:

GET /api/products: Get a list of all products.
GET /api/products/:id: Get details of a specific product by ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update an existing product by ID.
DELETE /api/products/:id: Delete a product by ID.

## Category Endpoints:

GET /api/categories: Get a list of all categories.
GET /api/categories/:id: Get details of a specific category by ID.
POST /api/categories: Create a new category.
PUT /api/categories/:id: Update an existing category by ID.
DELETE /api/categories/:id: Delete a category by ID.

## Testing
You can test the REST APIs using tools like Postman, Thunder Client, or any other HTTP client you prefer. Import the provided collection and run the requests to interact with the API.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

## Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test thoroughly.
Create a pull request against the main branch of this repository.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
