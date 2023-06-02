const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

// user : abdurrahmanshajib253
// pass : jayHRKeObiEWY4oI

const uri = "mongodb+srv://abdurrahmanshajib253:jayHRKeObiEWY4oI@cluster0.utsh8g8.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const database = client.db("test");
        const firstdb = database.collection("DynamicUsers");

        // GET API
        app.get('/users', async (req, res) => {
            const cursor = firstdb.find({});
            const users = await cursor.toArray();
            res.send(users);
        })


        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const user = await firstdb.findOne(query);
            console.log('load user with id ', id);
            res.send(user);
        })

        // POST API
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await firstdb.insertOne(newUser);
            console.log('hitting the post', req.body);
            console.log('added user', result);
            res.json(result);
        })

        // UPDATE API
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                },
            };
            const result = await firstdb.updateOne(filter, updateDoc, options)
            console.log('updating user', id);
            res.json(result);
        })


        // create a document to insert
        // const user = {
        //     name: "Dilara Yasmin disha",
        //     email: "highcg336@gmail.com",
        //     phone: "01999999969"
        // };
        // const result = await firstdb.insertOne(user);
        // console.log(`A document was inserted with the _id: ${result.insertedId}`);



        // DELETE API
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await firstdb.deleteOne(query);
            console.log('deleting user with id ', result);

            res.json(result);
        })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
})

app.listen(port, () => {
    console.log('Running Server on port', port);
})