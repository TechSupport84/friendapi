
FriendAPI

FriendAPI is a powerful RESTful API designed for building social connections. It allows users to publish posts, update profiles, send messages, and make vocal and video calls seamlessly.

Features
Publishing:
Create and share posts to connect with friends and communities.
Updating:
Update your profile or content in real-time.
Messaging:
Send and receive instant messages with rich media support.
Vocal and Video Calling:
Engage in high-quality voice and video calls with other users.
Installation
Clone the repository:

bash
git clone https://github.com/username/FriendAPI.git  
Navigate to the project directory:

bash
cd FriendAPI  
Install dependencies:

bash
Copy code
npm install  
Configure the .env file with your environment variables:

makefile

DB_HOST=your_database_host  
DB_USER=your_database_user  
DB_PASS=your_database_password  
JWT_SECRET=your_secret_key  
Start the server:

bash
Copy code
npm start  
API Endpoints
Authentication
POST /api/auth/register – Register a new user.
POST /api/auth/login – Authenticate a user.
Posts
GET /api/posts – Get all posts.
POST /api/posts – Create a new post.
PUT /api/posts/:id – Update a post.
DELETE /api/posts/:id – Delete a post.
Messaging
GET /api/messages – Retrieve messages.
POST /api/messages – Send a new message.
Calling
POST /api/calls/vocal – Initiate a vocal call.
POST /api/calls/video – Start a video call.
Technologies Used
Backend: Node.js, Express.js
Database: MySQL with Sequelize
Authentication: JSON Web Tokens (JWT)
Real-time Features: Socket.IO for messaging and calling
Future Enhancements
Advanced search and filtering for posts and messages
Group chat functionality
Scheduled calls with reminders
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add a new feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.
License
This project is licensed under the JeancyTech License.
