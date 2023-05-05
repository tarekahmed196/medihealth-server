const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');

const doctors = require('./data/doctors.json')

app.use(cors());


app.get('/', (req, res) => {
  res.send('Health api running')
})


app.get('/doctor-categories', (req, res)=>{
    res.send(categories);
})

app.get('/doctors', (req, res)=>{
    res.send(doctors);
})

app.get('/doctors/:id', (req, res)=>{

   const id = req.params.id;
   const selectedDoctor = doctors.find(doctor => doctor._id === id);
   res.send(selectedDoctor);
   

})

app.listen(port, () => {
  console.log(`Health server running on port`, port);
})