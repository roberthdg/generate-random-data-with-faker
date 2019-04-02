const express = require('express');
const _ = require('lodash');
const faker = require('faker');
let app = express();
app.set('port', process.env.PORT || 3000);

//ruta para obtener el arreglo de personas
app.get('/people', (req, res) => { 
    people= _.times(faker.random.number({ min: 0, max: 10 })).map(() => ({ firstName: faker.name.firstName(), lastName: faker.name.lastName() }));
    res.send(people);
}); 

app.listen(app.get('port'),() => {console.log('server on port ', app.get('port'));});