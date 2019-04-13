const express          = require('express');
const cuid             = require('cuid');
const { checkAdopter, checkAuth } = require('./middleware');

const debug = function (app) {

  console.log({
    adopters : app.get('adopters'),
    cats     : app.get('cats'),
    dogs     : app.get('dogs'),
  });
};

const router = express.Router();

router.get('/api/cat', (req, res, next) => {

  const currentCat = req.app.get('cats').first;

  if (!currentCat || !currentCat.value) {
    return res.status(204).json({ message: 'There are currently no cats available for adoption' });
  }

  return res.status(200).json(currentCat.value);
});

router.delete('/api/cat', checkAdopter, express.json(), (req, res, next) => {

  if (!req.app.get('cats').first) {
    return res.status(204).json({ message: 'There are currently no cats available for adoption' });
  }

  const cat = req.app.get('cats').dequeue();
  if (cat && cat.name) { console.log(`${cat.name} was adopted`); }
  return res.sendStatus(204);
});

router.get('/api/dog', (req, res, next) => {


  const currentDog = req.app.get('dogs').first;

  if (!currentDog || !currentDog.value) {
    return res.status(204).json({ message: 'There are currently no dogs available for adoption' });
  }

  return res.status(200).json(currentDog.value);
});

router.delete('/api/dog', checkAdopter, express.json(), (req, res, next) => {

  if (!req.app.get('dogs').first) {
    return res.status(204).json({ message: 'There are currently no dogs available for adoption' });
  }

  const dog = req.app.get('dogs').dequeue();
  if (dog && dog.name) { console.log(`${dog.name} was adopted`); }
  return res.sendStatus(204);
});

router.get('/api/token', (req, res, next) => {
  const token = cuid();
  req.app.get('adopters').enqueue(token);
  return res.status(200).json({ token });
});

router.get('/api/position', checkAuth, (req, res, next) => {

  let position = 1;
  const adopterId    = req.app.get('adopterId');
  const adopterQueue = req.app.get('adopters');

  let currentAdopter = adopterQueue.first;
  while (currentAdopter && currentAdopter.value) {

    if (currentAdopter.value === adopterId) {
      break;
    }

    position++;
    currentAdopter = currentAdopter.next;
  }

  if (!currentAdopter || currentAdopter.value !== adopterId) {
    return res.status(400).json({ message: 'You are not currently in the queue' });
  }

  return res.status(200).json({ position });
});

router.get('/reset', (req, res, next) => {
  req.app.get('cats').populate();
  req.app.get('dogs').populate();
  return res.status(200).end();
});

module.exports = router;
