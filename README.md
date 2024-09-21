# Blog App
Welcome to Blog App, a full-stack blogging platform designed to offer users a seamless experience in reading, liking, and commenting on blog posts. This application is built using the powerful MERN stack (MongoDB, Express, React, Node.js), with Redux Toolkit and Tailwind CSS to provide a modern, responsive interface.

## Key Features
- **Authentication**: Secure user authentication using JWT and Google OAuth.
- **User Interactions**: Users can read, like, and comment on blog posts.
- **Admin Dashboard**: Comprehensive admin dashboard for CRUD operations on posts, comments, and users.
- **Routing**: Integrated React Router Dom for efficient client-side routing.
- **State Management**: Utilized Redux Toolkit for managing the application state.
- **Styling**: Designed with Tailwind CSS for a modern and responsive UI.
  
## Installation Instructions
Get started with Blog App by following these simple steps:

### Prerequisites

Ensure you have the following installed:

Node.js
MongoDB

## Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Hritika-Ratnam/Mern_Blog.git
    cd MERN-BLOG
    ```

2. Navigate to the `api` directory and install dependencies:
    ```bash
    cd api
    npm install
    ```

3. Create a `.env` file in the `api` directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```


### Frontend Setup
1. Move to the `client` directory and install dependencies:
    ```bash
    cd ../client
    npm install
    ```

2. Create a `.env` file in the `api` directory and add the following environment variable:
    ```env
    REACT_APP_GOOGLE_CLIENT_ID= your_google_client_id
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```
    
## Usage

Once both the backend and frontend servers are running, open your browser and navigate to `http://localhost:5173/` to access Blog App.

## Project Structure

- `api`: Contains the server-side code (Express, MongoDB, JWT authentication).
- `client`: Contains the client-side code (React, Redux, Tailwind CSS).


## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)


---
Thank you for exploring Blog App!






