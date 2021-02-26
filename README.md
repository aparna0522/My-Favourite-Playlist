<b>My Favourite Playlist</b>

Connected the node.js application with MongoDB at the backend to store and create database of the users and their favourite playlist. \
A user can be created, by simply visiting the webpage http://localhost:8000/user-create and their name and playlist can be viewed, modified deleted using the mongodb atlas. The list of names of users can also be seen in a JSON Format on the webpage http://localhost:8000/users \
This application is dockerised using Docker and made platform independent. 

<b>How to run this project?</b>
1. Clone this repository. 
2. Open the MongoDB atlas(on browser).
3. Create a cluster and get the connection URL for the same.
4. Paste this URL in the connection.js under src folder. 
5. Open your terminal, open this directory and use the command ```docker-compose up```
6. Now, visit http://localhost:8000/users and http://localhost:8000/user-create

Project Inspired From: https://itnext.io/dockerize-a-node-js-app-with-vs-code-bd471710dc22
