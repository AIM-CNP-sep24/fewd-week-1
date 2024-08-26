import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(express.json());

const photos = [
  {
    user: 'sleer',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/Québec_city_at_night%2C_view_from_Lévis_city.jpg',
    caption: 'Quebec',
  },
  {
    user: 'fritzvd',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/HK_小西灣道_10_Siu_Sai_Wan_Road_小西灣廣場_Siu_Sai_Wan_Plaza_食品_室內街市_indoor_food_market_July_2020_SS2_02.jpg/800px-HK_小西灣道_10_Siu_Sai_Wan_Road_小西灣廣場_Siu_Sai_Wan_Plaza_食品_室內街市_indoor_food_market_July_2020_SS2_02.jpg',
    caption: 'Food Market',
  },
];

app.get('/api/posts', (req, res) => {
  res.json(photos);
});

app.post('/api/posts', (req, res) => {
  console.log(req.body);
  if (req.body.user && req.body.caption && req.body.imageURL) {
    photos.push(req.body);
    res.json('Thanks');
  } else {
    res
      .status(406)
      .json(`Missing information in ${JSON.stringify(req.body, 2)}`);
  }
});

app.listen(port, () => {
  console.log(`api running on ${port}`);
});
