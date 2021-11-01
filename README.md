# MONGO APP APRENTICES
## Requirements
- MongoDB Community: [Download](https://www.mongodb.com/try/download/community)
- NPM

## Instalation
1. Install MongoDB Community (verify that you install MongoDB Compass)
2. Open MongoDB Compass, make connection to the server
    - String connection: `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`
3. Create a database called **apprenticeship** with a collection called **users**
4. Download repo and enter the folder
    - `git clone https://github.com/adjaf-scio/MongoApp.git`
    - `cd MongoApp`

5. Checkout your branch based on your name
    - karina
    - isabel
    - karol
    - emiko
    - cruz
    - edgar
    - enrique
    - moises
    - osvaldo
    - antonio
    - caliche

`git checkout name`

`git pull`

6. Download npm modules 
   - `npm install`
7. Run Seeder (just once), you will see your random email and token in the output (password is *12345678*) 
    - `npm run seed`
8. Run the server
    - `npm run start`
## Routes examples
### Auth
- Register: POST `localhost:3000/api/auth/signup`
- Login: POST `localhost:3000/api/auth/login`
- Get User: GET `localhost:3000/api/auth/user`
- Update User: PATCH `localhost:3000/api/auth/user`
### Contacts
- Get All: GET `localhost:3000/api/contacts`
- Find One: GET `localhost:3000/api/contacts/:id`
- Create: POST `localhost:3000/api/contacts`
- Update Contact: PATCH `localhost:3000/api/contacts/:id`
- Search by phone, email, name: GET `localhost:3000/api/contacts/search/:value`
- Delete Contact: DELETE `localhost:3000/api/contacts/:id`
### Groups
- Get All: GET `localhost:3000/api/groups`
- Find One: GET `localhost:3000/api/groups/:id`
- Create: POST `localhost:3000/api/groups`
- Update Group: PATCH `localhost:3000/api/groups/:id`
- Delete Group: DELETE `localhost:3000/api/groups/:id`

## Homework
1. Search for the "TODO" comments 
2. Solve the required tasks
3. Test and push the code to your branch
4. Have fun

## Documentation
- [Mongoose Docs](https://mongoosejs.com/docs/guide.html)
- [Mongoose Models](https://mongoosejs.com/docs/models.html)
- [Mongoose Models API](https://mongoosejs.com/docs/api/model.html)
- [Mongo Query Operators](https://docs.mongodb.com/manual/reference/operator/query/#std-label-query-selectors)
