# Social-Media-API

![badgeImg](https://shields.io/badge/license-MIT-green)
## Table of Contents
- [Description](#description)
- [Authors](#authors)
- [Github Link](#github-link)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [How to Contribute](#contribute)
- [Resources](#resources)

## Description

Instead of having to build your own API your new social network web application, we have built one for you to use utilizing MongoDB databases. Using this API, users wil be able to share their thoughts, react to friends thoughts, and create a friends list. The data is stored using MongoDB databases due to its speed working with large amounts of data and its flexibility with its unstructured data. This is only the backend features of a potential social network application. 

This project allowed me to gain experience working with MongoDB and on how to incorporate server requests to manipulate data within the database. The main obstacle I encountered was on fully understanding the syntax and on what the different commands in mongoose do to the data. Once I read over the documentation carefully and tested every route, I was able to complete the API. 

In the future, a frontend portion of the aplication would be a nice additional feature so that potential users can test the routes in a more interactive method rather than using insomnia. 
## Author 
- Takara Truong

## Github Link

* https://github.com/truont2/Employee-Tracker-App

## Installation

To install this application:
1. clone the necessary files in the github repository.
2. Open up the terminal in the index.js file where you will enter npm install. This will install the necessary packages needed to run this application. 
3. Application is ready to be used. Refer to the Usage section for futher instructions.

## Usage

The application will be invoked by using the following command:

```bash
node index.js
```

1. First download any dependencies by opening your index,js terminal and entering "npm install". 
2. Once completed, you must enter mysql -u root -u and then provide your password for mysql. MySQL must be already downlaoded for this to work. If not donwloaded, go here: https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide 
3. Once completed, in the terminal, type "SOURCE db/schema.sql then db/seeds.sql. This initializes the database compnay_db to be used. 
4. enter node index.js to run the application. 
5. Choose one of the available options provided in the list and answer any questions that come up to complete the task.
6. Terminal will display a text to notifying the user that the desired task they chose has been completed altering the database in any way. If a user chooses to view data, a table will appear in the console.

### Video Walkthrough: 

This video shows the steps to install any packages and run the application after the reposition has been cloned.

Set up Database
![video walkthrough](./assets/sql.gif)

Use the application: 
![video walkthrough](./assets/functionality.gif)

## Test 

screenshot of some options to choose from:

![screenshot](./assets/mainMenu.PNG)
![screenshot](./assets/allemployees.PNG)
![screenshot](./assets/roles.PNG)

## Contribute

To contribute, contact me at https://github.com/truont2/

## Resources 

* https://www.youtube.com/watch?v=p3qvj9hO_Bo&t=1575s
* https://www.youtube.com/watch?v=L72fhGm1tfE
