const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 5000;

// user: abdurrahmanshajib253
// pass: jUpD5jNSSsbaG22E



const uri = "mongodb+srv://abdurrahmanshajib253:jUpD5jNSSsbaG22E@cluster0.xtblw9m.mongodb.net/?retryWrites=true&w=majority";

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
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });

        const database = client.db("modelDB");
        const haiku = database.collection("users");
        // create a document to insert
        // const user = {
        //     name: 'Opu Biswas',
        //     email: 'Tupo@gmail.com',
        //     phone: '01999772368'
        // }
        // const result = await haiku.insertOne(user);

        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
        // console.log('fuck error');


        // POST API
        app.post('/users', async (req, res) => {
            console.log('hitting the post');
            res.send('hit the post');
        })

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
});

app.listen(port, () => {
    console.log('listening to port', port);
})