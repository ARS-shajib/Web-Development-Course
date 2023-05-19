const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello! I am Abdur Rahman and it is  My First ever node.');
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01777676898' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoora@gmail.com', phone: '01777676898' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01777676898' },
    { id: 3, name: 'Shajib', email: 'Shajib@gmail.com', phone: '01777676898' },
    { id: 4, name: 'Shusmita', email: 'Shusmita@gmail.com', phone: '01777676898' },
    { id: 5, name: 'Shabuj', email: 'Shabuj@gmail.com', phone: '01777676898' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('data paici ha ha ha', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('This is fucking fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
});