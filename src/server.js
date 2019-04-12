'use strict';

const express = require('express');
const cors = require('cors');
const cuid = require('cuid');

const { checkAdopter } = require('./middleware');
const { CLIENT_ORIGIN } = require('./config');
const { Queue } = require('./queue');


const debug = function (app) {

  console.log({
    adopters : app.get('adopters'),
    cats     : app.get('cats'),
    dogs     : app.get('dogs'),
  });
};


const app = express();

const cats     = new Queue();
const dogs     = new Queue();
const adopters = new Queue();

cats.enqueue({
  imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

dogs.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

app.set('cats', cats);
app.set('dogs', dogs);
app.set('adopters', adopters);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.get('/api/cat', (req, res, next) => {
  return res.json(cats.peek());
});

app.delete('/api/cat', (req, res, next) => {
  cats.dequeue();
  return res.sendStatus(204);
});

app.get('/api/dog', (req, res, next) => {
  return res.json(dogs.peek());
});

app.delete('/api/dog', (req, res, next) => {
  dogs.dequeue();
  return res.sendStatus(204);
});

app.get('/api/getToken', (req, res, next) => {

  const token = cuid();
  req.app.get('adopters').enqueue(token);

  debug(app);

  res.status(200).json({ token });
});

app.post('/api/adopt', checkAdopter, express.json(), (req, res, next) => {

  let adopter = null;
  let cat     = null;
  let dog     = null;

  adopter = req.app.get('adopters').dequeue();

  if (req.body.adoptedCat) {
    cat = req.app.get('cats').dequeue();
  }

  if (req.body.AdoptedDog) {
    dog = req.app.get('dogs').dequeue();
  }

  debug(app);

  // POST.username has adopted cat.name and dog.name
  // console.log({ adopter, cat, dog });

  res.status(200).json({ message: 'Congratulations, adoption successful' });
});


// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(8080,()=>{
  console.log('Serving on 8080');
});
