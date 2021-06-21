const axios = require('axios');
const API_KEY = '';
const url = 'https://api.openai.com/v1/engines/davinci/completions';
const method = 'post';

function generateArticle(article) {
    return axios({
        url,
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        data: {
          "prompt": article,
          "max_tokens": 10
        },
        method,
      });        
}

module.exports = generateArticle;
