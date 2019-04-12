const Queue = require('./Queue');

const dogs = new Queue();

dogs.enqueue({
  imageURL: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_4860.jpg',
  imageDescription: 'Dog 1',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'https://images.dog.ceo/breeds/beagle/n02088364_13627.jpg',
  imageDescription: 'Dog 2',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'https://images.dog.ceo/breeds/shihtzu/n02086240_6463.jpg',
  imageDescription: 'Dog 3',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'https://images.dog.ceo/breeds/vizsla/n02100583_1318.jpg',
  imageDescription: 'Dog 4',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'https://images.dog.ceo/breeds/setter-gordon/n02101006_7867.jpg',
  imageDescription: 'Dog 5',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

module.exports = dogs;
