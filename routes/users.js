import express from 'express';
import { v4 as uuidv4} from 'uuid';
import { createUser, getUserWithId } from '../controllers/users.js'

const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        id: uuidv4()
    },
    {
        firstName: "Mary",
        lastName: "Jane",
        age: 24,
        id: uuidv4()
    }
];

// all routes in here are starting with /users

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.get('/:id', getUserWithId);

router.post('/', createUser);

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} deleted from the database`);
});

router.patch('/:id', (req, res) => {
    
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName)   user.firstName = firstName;
    if(lastName)    user.lastName = lastName;
    if(age)         user.age = age;

    res.send(`User with the id ${id} has been updated`);

});

export default router;