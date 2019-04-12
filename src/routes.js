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

router.delete('/api/cat', (req, res, next) => {
  req.app.get('cats').dequeue();
  return res.sendStatus(204);
});

router.get('/api/dog', (req, res, next) => {
  return res.json(req.app.get('dogs').first.value);
});

router.delete('/api/dog', (req, res, next) => {
  req.app.get('dogs').dequeue();
  return res.sendStatus(204);
});

router.get('/api/token', (req, res, next) => {

  const token = cuid();
  req.app.get('adopters').enqueue(token);

  debug(req.app);

  res.status(200).json({ token });
});

router.post('/api/adopt', checkAdopter, express.json(), (req, res, next) => {

  let adopter = null;
  let cat     = null;
  let dog     = null;

  adopter = req.app.get('adopters').dequeue();

  if (req.body.adoptedCat) {
    cat = req.app.get('cats').dequeue();
    console.log(`${cat.name} was adopted by ${adopter.value}`);
  }

  if (req.body.adoptedDog) {
    dog = req.app.get('dogs').dequeue();
    console.log(`${dog.name} was adopted by ${adopter.value}`);
  }

  // debug(req.app);

  res.status(200).json({ message: 'Congratulations, adoption successful' });
});

module.exports = router;
