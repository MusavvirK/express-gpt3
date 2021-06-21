
const express = require('express');
const router = express.Router();
const generateArticle = require('./openapi');


router.get('/', (req, res) => res.send('<h1>Successful</h1>'));


// Get Single Member
router.post('/', (req, res) => {
  console.log('hit successful');
  const prompt = req.body.querystring;
  generateArticle(prompt).then(response => {
    res.json(response.data);
  });
});

module.exports = router;
