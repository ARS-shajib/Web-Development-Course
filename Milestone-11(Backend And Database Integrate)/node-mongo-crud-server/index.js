const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

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

        // POST API
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await firstdb.insertOne(newUser);
            console.log('hitting the post', req.body);
            console.log('added user', result);
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