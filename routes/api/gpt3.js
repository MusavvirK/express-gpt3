
const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = '';
const url = 'https://api.openai.com/v1/engines/davinci/completions';

router.get('/', (req, res) => res.send('<h1>Successful</h1>'));


// Get Single Member
router.post('/', (req, res) => {
  console.log('hit successful');
  const method = 'post';
  const prompt = req.body.querystring;

  (async () => {
    const generatedcontent = await axios({
      url,
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        "prompt": prompt,
        "max_tokens": 100
      },
      method,
    });

    if (generatedcontent.data){
      console.log(generatedcontent.data);
      res.json(generatedcontent.data);
    } else {
      console.log('error: content generation failed');
    }
  })();

});

module.exports = router;
