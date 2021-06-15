
const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = '';
const URL = 'https://api.openai.com/v1/engines/davinci/completions';

router.get('/', (req, res) => res.send('<h1>Successful</h1>'));


// Get Single Member
router.post('/', async (req, res) => {
  console.log('hit successful');

  const generatedcontent = await axios({
    URL,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    data: {
      "prompt": "Once upon a time",
      "max_tokens": 5
    },
    'post'
  });

  if (generatedcontent) {
    res.json(generatedcontent);
  } else {
    res.status(400).json({ msg: `Content generation failed` });
  }
});

module.exports = router;
