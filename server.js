const express = require('express');
const app = express();

const routes = require('./server/routes/routes') 

app.use(express.static('dist/test-app'));
app.use('/routes', routes);

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
    console.log('Render')
})