import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGODB_URI || "mongodb://test:Compadre123@ds063186.mlab.com:63186/sin-delantal";

mongoose.connect(mongoURI, {useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', () => console.log('Error al conectar a la db'))
    .once('open', () => console.log('Conectado a la db'))

app.use(parser.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send('Server on')
});

app.listen(8080, ()=> console.log('Server on 8080'))