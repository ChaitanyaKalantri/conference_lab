# Conference Lab: 6-Hours Coding Task

## Introduction:
- I was asked to develop a Conference Lab application using ***NodeJS***, ***Express*** and ***MongoDb*** within ***6 hours***.

## Task:
- Consider there is a conference for which you need to develop an application, such that any person can login to the application and can purchase the course of the interest.
- Ensure that the frontend of the application should consist of a basic image of the course, timing of the course, price of the course and a basic description of the same.
- Design whichever way you want to and try to make it more user friendly and secure.

## Implementation:
1. I started by creating the ***API*** of the appliation using NodeJS and Express.
2. I used MongoDb for the ***storage of the data*** of the application. All the data was fetched from the MongoDb database.
2. Once the routes were ready and the ***testing*** of the functionality was complete. I started with the frontend of the application.
3. I used ***Bootstrap*** classes for the easiness of the design of the front page, which is visible to everyone.
4. However, if the user wants to purchase any course. The user will have to ***login*** into the application and then make a payment.
5. The password was also hashed using ***"bcrypt-js"*** library which signing into the application.
6. The password and session validations were done using the ***"passport"*** library.
7. Last but not the least, the website is ***responsive***.

## Steps to execute the project:
1. Clone the project
2. In one termial run: `mongodb` in one terminal (assuming mongodb is installed in the system)
3. In the second terminal (from the directory where you have package.json file present) run : `npm install`
3. Then, go to the seed folder: `cd seed`
4. In the second terminal run: `node product-seeder.js` 
	This will populate the database with the revelant entries 
5. In the same terminal run: `cd ..`
	To go one folder back
6. Then, run: `npm start`
	This will start the server
7. You can check the project working at the `"http://localhost:3000/"`
