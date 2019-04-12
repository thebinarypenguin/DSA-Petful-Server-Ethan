const Queue = require('./Queue');

const dogs = new Queue();

dogs.enqueue({
  imageURL: 'dog-1.jpg',
  imageDescription: 'Dog 1',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'dog-2.jpg',
  imageDescription: 'Dog 2',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'dog-3.jpg',
  imageDescription: 'Dog 3',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'dog-4.jpg',
  imageDescription: 'Dog 4',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'dog-5.jpg',
  imageDescription: 'Dog 5',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

module.exports = dogs;
