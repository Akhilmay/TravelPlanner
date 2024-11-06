const Users = require('../src/models/user.js');
const Admins = require('../src/models/admin.js');
const Wallets = require('./models/wallet.js');


const { MongoClient, ObjectId, Binary } = require('mongodb');
const uri = 'mongodb+srv://akhilyadavmay2:Akhil%402000@cluster0.h7cnf.mongodb.net/';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const UserInfo = require('../src/models/user.js');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect('mongodb+srv://akhilyadavmay2:Akhil%402000@cluster0.h7cnf.mongodb.net/TravelPlanner', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Mongoose connected');
    console.log('Connected to MongoDB');

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Mongo client connected');
  console.log('Connected to MongoDB');
  client.close();
});






app.get('/api/Wallet', (req, res) => {
  Bookings.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Error fetching data from MongoDB' });
    });
});


app.post('/api/register', (req, res) => {
  const collection = client.db('TravelPlanner').collection('UserInfo');
  collection.insertOne(req.body.data)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error adding data from MongoDB:', error);
      res.status(500).json({ error: 'Error adding data from MongoDB' });
    });
})







app.get('/api/login', async (req, res) => {
  const queryParam = req.query.email;
  const promises = [Admins.find({ email: queryParam }), UserInfo.find({ email: queryParam })]
  const [result1, result2] = await Promise.all(promises);
  if (result1.length > 0) {
    let data = {
      details: result1,
      role: "Admin"
    }
    return res.json(data);
  }
  else if (result2.length > 0) {
    let data = {
      details: result2,
      role: "User"
    }
    return res.json(data);
  }

  else {
    return res.json([]);
  }
})


app.get('/api/get/userdetails', async (req, res) => {
  const queryParam = req.query.userId;
  const promises = [Admins.find({ _id: new ObjectId(queryParam) }), Users.find({ _id: new ObjectId(queryParam) })]
  const [result1, result2] = await Promise.all(promises);
  if (result1.length > 0) {
    let data = {
      details: result1,
      role: "Admin"
    }
    return res.json(data);
  }
  else if (result2.length > 0) {
    let data = {
      details: result2,
      role: "User"
    }
    return res.json(data);
  }

  else {
    return res.json([]);
  }
})



const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});