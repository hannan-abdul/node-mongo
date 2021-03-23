const express = require ('express');
const cors = require ('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// const rootCall = (req, res)=> res.send('Thank you very much');

const users = ['asad', 'moin', 'sabed','susmita', 'sohana'];

app.get('/', (req, res)=>{
    const fruit ={
        product: 'ada',
        price: 220
    }
    res.send(fruit);
});
// dynamic api call 
app.get('/user/:id', (req, res) =>{
    const id = req.params.id;
    // console.log(req,query);
    const name = users[id];
    res.send({id, name});
})

// post 
app.post('/addUser', (req, res)=>{
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user)
})

app.listen(4000, () => console.log('Listening to port 4000'));

