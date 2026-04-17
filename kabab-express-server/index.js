const express=require('express');
const app=express();
const port=process.env.PORT||5000;
const cors=require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')


//middleware

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n6sp6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
async function run() {
  try {
    // Generate jwt token
    
    // Logout
    const db=client.db('kabab-express');
    const menuCollection=db.collection('menus');
    const userCollection = db.collection('users');
    const cartCollection = db.collection('carts');
   
    app.get('/menus',async(req,res)=>{
        const result=await menuCollection.find().toArray();
        res.send(result);
    })
    
    app.post('/menus',async(req,res)=>{
        const menu=req.body;
        const result=await menuCollection.insertOne(menu);
        res.send(result);
    })

    // Users API
    app.get('/users', async(req,res)=>{
        const result = await userCollection.find().toArray();
        res.send(result);
    })

    app.post('/users', async(req,res)=>{
        const user = req.body;
        const query = {email: user.email}
        const existingUser = await userCollection.findOne(query);
        if(existingUser){
            return res.send({message: 'user already exists', insertedId: null})
        }
        const result = await userCollection.insertOne(user);
        res.send(result);
    })

    // Cart API
    app.get('/carts', async(req,res)=>{
        const email = req.query.email;
        const query = {email: email};
        const result = await cartCollection.find(query).toArray();
        res.send(result);
    })

    app.post('/carts', async(req,res) => {
        const cartItem = req.body;
        const result = await cartCollection.insertOne(cartItem);
        res.send(result);
    })

    app.delete('/carts/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await cartCollection.deleteOne(query);
        res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir)






app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>console.log(`listening on port ${port}`));