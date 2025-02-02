import express from 'express';
import api from 'api';

const app = express();

const apiKey = 'rnd_dfz0iQh1VXR4EhUL5geo7OImmCcB';

app.get('/apps', (req, res) => {
  api.auth(apiKey);
  api.listServices({ includePreviews: 'true', limit: '20' })
    .then(({ data }) => {
      res.json(data); 
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

