const express = require('express');
const router = express.Router();
const app = express();
const axios = require('axios');

var owner = '';
var repoName = '';

router.get('/', (req, res) => {
    res.send('Angular App')
})

router.get('/posts', (req, res)=>{
    owner = req.query.owner;
    repoName = req.query.repoName;
    axios.get(`https://api.github.com/repos/${owner}/${repoName}/forks?page=1&per_page=10/posts`).
    then(posts =>{
        res.send(posts.data);
        return res.status(200).json(posts.data)
    }).catch(err => {
         return res.status(500).send(err)
    })
    
})

module.exports = router;