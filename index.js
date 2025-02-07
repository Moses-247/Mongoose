require('dotenv').config();

const Person = require('./person');
const mongoose = require('mongoose');


//Create a Person Instance and Save:
const createAndSavePerson = () =>{
    const person = new Person({
        name:"Moses Asuga",
        age: 24,
        favoriteFoods:['Chapo','samosa']
    });

    person.save((err, data) =>{
        if(err) return console.error(err);
        console.log('Person saved:', data);
    });
};

createAndSavePerson();


//Connecting to Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
