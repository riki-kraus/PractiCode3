import express from 'express';
import renderApi from '@api/render-api';

const app = express();
const PORT = process.env.PORT || 3000;

// התחברות ל-Render API
renderApi.auth('rnd_dfz0iQh1VXR4EhUL5geo7OImmCcB');

// נקודת קצה שמחזירה את רשימת השירותים
app.get('/services', async (req, res) => {
  try {
    const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching services');
  }
});

// הודעה שהשרת רץ
app.get('/', (req, res) => {
  res.send('Render API Service is running!');
});

// הפעלת השרת על הפורט ש-Render מספק
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
