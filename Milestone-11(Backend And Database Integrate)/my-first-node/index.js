const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello, From My first ever node')
});

const users = [
    { id: 1, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888887' },
    { id: 3, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888886' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888882' },
    { id: 5, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888883' },
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


// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('I love fazli kacha mitha amm');
})

app.listen(port, () => {
    console.log('listening to port', port);
})