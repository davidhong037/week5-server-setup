const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];

app.get('/api/users', (req, res) => {
    
    if (req.query.name){
        const filteredNames = friends.filter(friendName => friendName.toLowerCase().includes(req.query.name.toLowerCase()))
        res.status(200).send(filteredNames)
    } else{
        res.status(200).send(friends);
    }
})

app.get ('/api/users/:id', (req, res) => {
    
    const name = friends[+req.params.id]

    res.status(200).send(name)
})

app.listen(4000, () => console.log('Server running on 4000'))
// app.get("/weather/:temperature", (req, res) => {
//     const { temperature } = req.params;
//     const phrase = `<h3>It was ${temperature} today</h3>`;
//     res.status(200).send(phrase);
// })