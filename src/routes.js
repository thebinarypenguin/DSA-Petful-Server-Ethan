const express          = require('express');
const cuid             = require('cuid');
const { checkAdopter } = require('./middleware');

const debug = function (app) {

  console.log({
    adopters : app.get('adopters'),
    cats     : app.get('cats'),
    dogs     : app.get('dogs'),
  });
};

const router = express.Router();

router.get('/api/cat', (req, res, next) => {
  return res.json(req.app.get('cats').first.value);
});

router.delete('/api/cat', checkAdopter, express.json(), (req, res, next) => {
  const cat = req.app.get('cats').dequeue();
  if (cat && cat.name) { console.log(`${cat.name} was adopted`); }
  return res.sendStatus(204);
});

router.get('/api/dog', (req, res, next) => {
  return res.json(req.app.get('dogs').first.value);
});

router.delete('/api/dog', checkAdopter, express.json(), (req, res, next) => {
  const dog = req.app.get('dogs').dequeue();
  if (dog && dog.name) { console.log(`${dog.name} was adopted`); }
  return res.sendStatus(204);
});

router.get('/api/token', (req, res, next) => {
  const token = cuid();
  req.app.get('adopters').enqueue(token);
  return res.status(200).json({ token });
});

module.exports = router;
