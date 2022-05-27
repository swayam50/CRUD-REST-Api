import { v4 as uuidv4} from 'uuid';

export const createUser = (req, res) => {
    
    const userId = uuidv4();
    const user = req.body;

    const userWithId = { ...user, id: userId};

    users.push(userWithId);
    // users.push({ ...user, uuidv4()});

    res.send(`User with name ${user.firstName} added to the database`);
};

export const getUserWithId = (req, res) => {
    const { id } = req.params;
    const foundUsers = users.find((user) => user.id === id);

    res.send(foundUsers);
};