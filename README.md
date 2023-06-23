# NoFriendsNoFrownsNoSQL
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
The API is built using a NoSQL database and provides routes for users and thoughts. The routes will allow for the data to be displayed in a formatted JSON. Additionally, the application is designed to allow users to create, update, and delete users and thoughts from the database, as well as add and remove friends to a users's friend list, add and delete reactions to thoughts.




## Table of Contents

* [TITLE](#title)
* [DESCRIPTION](#description)
* [INSTALLATION](#installation)
* [USAGE](#usage)
* [CREDITS](#credits)
* [BADGES](#badges)
* [FEATURES](#features)
* [CONTRIBUTING](#contributing)
* [TESTS](#tests)
* [QUESTIONS](#questions)
* [CONTACT](#contact)
* [GITHUB](#github)
* [EMAIL](#email)





## Installation

1. Install the necessary dependencies with ``npm install`` 

2. To start the server, type ``node server.js``

3. To test the API, open Insomnia and enter the GET routes for users and thoughts (e.g. http://localhost:3001/api/users). Note that data from the database should appear as a formated JSON.

4. Test the API POST, PUT and DELETE routes in Insomnia to create, update, and delete users and thoughts in the database. 

5. Additionally, test the API POST and DELETE routes to add and remove friends to a user’s friend list, and create and delete reactions to thoughts.



## Usage

To use the social media startup API, the user must enter the command to invoke the application in the terminal. This will start the server and sync the Mongoose models to the MongoDB database. The user can then open API GET routes in Insomnia for users and thoughts to receive formatted JSON data. The user can also test API POST, PUT, and DELETE routes in Insomnia to successfully create, update, and delete users and thoughts in the database. Additionally, the user can test API POST and DELETE routes in Insomnia to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.


## Credits
This project was assigned by ![Alt text](image.png). The project was made possible by the NOde.js, Express, MongoDB, and Mongoose technologies. The APIs were tested with Insomnia. Finally, this project was made possible by the support of a lot of hours figuring this out.

## license
MIT



## Features  

VIEW VIDEOS BY CATEGORIE BELOW!

STARTING SERVER:

https://drive.google.com/file/d/1m4oMmwd5iluPSvtwq4WFBBSC4ojfzQef/view

USERS:

https://drive.google.com/file/d/1_1-QIdRERIbQBj970CPE6AxcVmtzPrgp/view

FRIENDS:

https://drive.google.com/file/d/14gyY0uUGgSa6zcK6wUYnDO8qZo_c7PRS/view

THOUGHTS:

https://drive.google.com/file/d/1bhy9yPxzQABrbFYFHszNG8SjJecgki3O/view

REACTIONS:

https://drive.google.com/file/d/1bGbmWMCduxHg3zsZOnGkS9yw6nF57Ce_/view

STILL IMAGE BELOW:

![MODULE 18 NOSQL](https://github.com/ReidRym/NoFriendsNoFrownsNoSQL/assets/123789106/7cb508b1-cd8b-4975-a07e-b5fb4715ff96)


- An API for a social network that uses a NoSQL database to handle large amounts of unstructured data
- Ability to launch a server and sync Mongoose models to a MongoDB database
- APIs GET routes to view formatted user and thought data in JSON format
- APIs POST, PUT and DELETE routes to create, update and delete users and thoughts
- APIs POST and DELETE routes to create and delete reactions to thoughts
- APIs to add and remove friends to a user's friend list


## Tests  

1. Run tests to ensure the API is configured correctly and the server successfully started when the command to invoke the application is entered:
    - Use npm test to invoke the command to start the server
    - Verify the Mongoose models synced to the MongoDB database successfully

2. Use Insomnia to test GET routes:
    - Open API GET routes for the 'USERS' and 'THOUGHTS' models
    - Verify the data for each route is displayed in a formatted JSON

3. Use Insomnia to test POST, PUT, and DELETE routes:
    - Test API POST, PUT, and DELETE routes for the 'USERS' and 'THOUGHTS' models
    - Verify that you can successfully create, update, and delete users and thoughts in the database
    - Test API POST and DELETE reactions
    - Verify that you can successfully create and delete reactions to thoughts 
    - Test API POST and DELETE routes for a user’s friend list
    - Verify that you can successfully add and remove friends to a user’s friend list



## Questions

Q: What type of database does this social network API use?
A: The social network API uses a NoSQL database powered by MongoDB.

Q: How can I start the server for this application? 
A: To start the server for this application, you can enter the command to invoke the application.

Q: Can I test API routes with Insomnia? 
A: Yes, you can test API GET, POST, PUT, and DELETE routes in Insomnia.

Q: What JSON data will be displayed when I test the API GET routes? 
A: When you test the API GET routes in Insomnia, it will display the data for users and thoughts in a formatted JSON.

Q: Can I create, update, or delete users and thoughts in my database?
A: Yes, you can test API POST, PUT, and DELETE routes in Insomnia to create, update, and delete users and thoughts in your database.

Q: Can I create and delete reactions to thoughts and add and remove friends to a user’s friend list?
A: Yes, you can test API POST and DELETE routes in Insomnia to create



## Contact
 Please see email for contact.


## GitHub
GitHub: [Ryan Reid](https://github.com/Ryan Reid)


## Email
Email: [Irishreid@gmail.com](mailto:Irishreid@gmail.com);
