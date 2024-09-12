# Social-Media-API

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list!


Check out my Github --> https://github.com/CodyBarnes9624/Social-Media-API

Watch how it works--> https://drive.google.com/file/d/1yAK2R7GK3hiRHGQjKyU6j1u0xuR6U4n3/view

Installation

Clone the repository to your local machine: git clone https://github.com/valyastriz/social-startup-api.git

Install the required dependencies: npm install

Ensure MongoDB is installed and running locally.

Create a .env file with the following content: MONGODB_URI=mongodb://localhost:27017/socialnetwork

Seed the database by running the following command:node seed

Start the server: node index.js


Usage
The API can be tested using Insomnia or Postman. It includes the following routes:

User Routes
GET /api/users - Get all users
GET /api/users/:userId - Get a single user by ID
POST /api/users - Create a new user
PUT /api/users/:userId - Update a user by ID
DELETE /api/users/:userId - Delete a user by ID
Thought Routes
GET /api/thoughts - Get all thoughts
GET /api/thoughts/:thoughtId - Get a single thought by ID
POST /api/thoughts - Create a new thought
PUT /api/thoughts/:thoughtId - Update a thought by ID
DELETE /api/thoughts/:thoughtId - Delete a thought by ID
Friend Routes
POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list
Reaction Routes
POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction by reaction ID