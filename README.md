# Social-Media-API

## Table of Contents
- [Description](#description)
- [Authors](#authors)
- [Github Link](#github-link)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribute)
- [Resources](#resources)

## Description

Instead of having to build your own API your new social network web application, we have built one for you to use utilizing MongoDB databases. Using this API, users wil be able to share their thoughts, react to friends thoughts, and create a friends list. The data is stored using MongoDB databases due to its speed working with large amounts of data and its flexibility with its unstructured data. This is only the backend features of a potential social network application. 

This project allowed me to gain experience working with MongoDB and on how to incorporate server requests to manipulate data within the database. The main obstacle I encountered was on fully understanding the syntax and on what the different commands in mongoose do to the data. Once I read over the documentation carefully and tested every route, I was able to complete the API. 

In the future, a frontend portion of the aplication would be a nice additional feature so that potential users can test the routes in a more interactive method rather than using insomnia. 
## Author 
- Takara Truong

## Github Link

* https://github.com/truont2/Social-Media-API

## Installation

To install this application:
1. clone the necessary files in the github repository.
2. Open up the terminal in the server.js file where you will open a new terminal and enter "npm install". This will install the necessary packages and dependancies needed to run this API. 
3. Application is ready to be used. Refer to the Usage section for futher instructions.

## Usage

The application will be invoked by using the following command:

```bash
node server.js 
```

1. First download any dependencies by opening your index.js terminal and entering "npm install". 
2. Once completed, you will need to download MongoDB and insomnia as well if you haven't done that yet. https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb
3. Once completed, you are ready to use the application by opening insomnia and creating the necessary routes to test the API. 
4. Enter node server.js. This activates the server to create the connection to the database. 
5. Open insomnia
6. Create routes for each table and their purpose(delete, update, get)
7. Run the routes with the correct host to use the database. All routes start off with http://localhost:3001/api
8. End server by doing Ctrl-C in the terminal

### Video Walkthrough: 

This video shows the steps to install any packages and run the application after the reposition has been cloned.

Use the application: 

- Users: 
![video walkthrough](./assets/usersfriends.gif)

- Thoughts
![video walkthrough](./assets/thoughts.gif)

- Reactions
![video walkthrough](./assets/reactions.gif)

## Contribute

To contribute, contact me at https://github.com/truont2/

## Resources 

* https://mongoosejs.com/docs/guide.html
* https://www.youtube.com/watch?v=DZBGEVgL2eE
