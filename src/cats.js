const Queue = require('./Queue');

const cats = new Queue();

cats.enqueue({
  imageURL: 'cat-1.jpg',
  imageDescription: 'Cat 1',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  imageURL: 'cat-2.jpg',
  imageDescription: 'Cat 2',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  imageURL: 'cat-3.png',
  imageDescription: 'Cat 3',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  imageURL: 'cat-4.jpg',
  imageDescription: 'Cat 4',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  imageURL: 'cat-5.jpg',
  imageDescription: 'Cat 5',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

module.exports = cats;
