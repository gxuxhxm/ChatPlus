# ChatPlus

🌟 **ChatPlus** is a real-time chat application built using the MERN stack, Socket.io, TailwindCSS, and Daisy UI. It offers seamless real-time messaging, user authentication, and online status tracking.

## Features

- **Tech Stack:** MERN (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, Daisy UI
- 🎃 **Authentication & Authorization:** Secure JWT-based login and user management.
- 👾 **Real-Time Messaging:** Instant communication powered by Socket.io.
- 🚀 **Online User Status:** Live user presence tracking using Socket.io and React Context.
- 👌 **Global State Management:** Utilized Zustand for efficient state management across components.
- 🐞 **Error Handling:** Comprehensive error management on both server and client.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gxuxhxm/ChatPlus.git
   ```
2. Navigate to the server folder and install dependencies:
   ```bash
   cd server
   npm install
   ```
3. Set up environment variables for the server (create a `.env` file):
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run start
   ```
5. Navigate to the client folder and install dependencies:
   ```bash
   cd ../client
   npm install
   ```
6. Start the client:
   ```bash
   npm run start
   ```

## Tech Stack

- **MongoDB**: Database for storing user and message data.
- **Express**: Backend framework to handle API requests.
- **React**: Frontend for building user interfaces.
- **Node.js**: Backend server environment.
- **Socket.io**: For real-time, bi-directional communication between client and server.
- **Zustand**: Lightweight state management for React.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Daisy UI**: Components for building responsive UIs.

## Contributing

Feel free to fork the project, create a new branch, and submit a pull request. Any contributions to improve **ChatPlus** are highly appreciated!

## License

This project is licensed under the MIT License.

---
