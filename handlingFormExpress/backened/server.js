// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // 👈 This replaces body-parser.json()

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body); // should log: { username: 'ZunoonAli', password: 'Zunoon@786' }
  res.send("Form received for user: " + req.body.username);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
