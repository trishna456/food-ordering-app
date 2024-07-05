# Munch Mate Food Order App

Welcome to the Munch Mate Food Order App! This is a full-stack food ordering application built with HTML, CSS, React, JavaScript, Node.js, and Express. The application allows users to browse a menu, add items to a cart, adjust quantities, and place orders.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Advanced React Concepts and Best Practices](#advanced-react--concepts-and-best-practices)
- [Backend Development](#backend-development)
- [Installation](#installation)
- [Usage](#usage)

  

## Demo
Check out the live demo of the application hosted on Netlify: [Munch Mate](https://munch-mate-trishna.netlify.app/)

## Features
- Browse menu items
- Add items to the cart
- Edit item quantities in the cart
- Checkout and place orders with customer details


## Technologies Used
- Frontend: HTML, CSS, React, JavaScript
- Backend: Node.js, Express
- State Management: Context API
- HTTP Requests: Custom React Hook
- Styling: Flexbox, Grid, CSS


## Advanced React Concepts and Best Practices

### Managing Side Effects with `useEffect`
- Using `useEffect` for side effects and their cleanup functions to avoid memory leaks and unexpected behaviors.

### Currency Formatter
- Utilizing `Intl.NumberFormat` for consistent and locale-specific currency formatting.

### Custom Reusable UI Components
- Building reusable components like `Input`, `Button`, and `Modals` to maintain consistency and reduce code duplication.

### Using Refs and Portals
- Leveraging refs for direct DOM manipulation and portals for rendering components outside the DOM hierarchy.

### Context API for State Management
- Implementing `ContextAPI` for efficient state management and ensuring state updates are immutable.

### Custom React Hook
- Creating a custom hook to encapsulate stateful logic, preventing code duplication.

### Flexbox and Grid for Responsive Design
- Using CSS Flexbox and Grid to create a responsive and adaptive layout.

### CSS Styling
- Importing Google Fonts and applying a modern, clean design with a consistent color palette and responsive elements.


## Backend Development

### Express Framework
- Using Express to set up the server and manage routing.

### Body Parsing Middleware
- Utilizing `body-parser` to parse incoming request bodies in a middleware before handling.

### Static Files
- Serving static files using `express.static`.

### Cross-Origin Resource Sharing (CORS)
- Setting headers to allow cross-origin requests, enabling the frontend and backend to communicate effectively.

### RESTful API Endpoints
- Creating RESTful endpoints to handle GET and POST requests for meals and orders.

### File System Operations
- Using Node.js `fs/promises` for asynchronous file operations to read and write data.

### Data Validation
- Validating incoming data for orders to ensure all required fields are present and correctly formatted.


## Installation

### Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/trishna456/munch-mate-food-order.git
   ```

2. **Install dependencies for the frontend**
   ```bash
   cd munch-mate-food-order
   npm install
   ```

3. **Navigate to the backend folder and install dependencies**
   ```bash
   cd backend
   npm install
   ```

## Usage

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the React frontend**
   ```bash
   cd ..
   npm run dev
   ```





   



   
