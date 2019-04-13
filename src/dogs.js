const Queue = require('./Queue');

const dogs = new Queue();

dogs.populate = function () {

  this.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_4860.jpg',
    imageDescription: 'Dog 1',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  });

  this.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/beagle/n02088364_13627.jpg',
    imageDescription: 'Dog 2',
    name: 'Pavlov',
    sex: 'Male',
    age: 5,
    breed: 'Mutt',
    story: 'Owner was a jerk, starved him on purpose for science. Excessive drooler'
  });

  this.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/shihtzu/n02086240_6463.jpg',
    imageDescription: 'Dog 3',
    name: 'Lassie',
    sex: 'Female',
    age: 6,
    breed: 'Collie',
    story: 'Very loyal dog. Will notify family if someone falls into a well'
  });

  this.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/vizsla/n02100583_1318.jpg',
    imageDescription: 'Dog 4',
    name: 'Rin Tin Tin',
    sex: 'Male',
    age: 11,
    breed: 'German Shepherd',
    story: 'Survived a war and was a former movie star. Will act for treats'
  });

  this.enqueue({
    imageURL: 'https://images.dog.ceo/breeds/setter-gordon/n02101006_7867.jpg',
    imageDescription: 'Dog 5',
    name: 'Hachiko',
    sex: 'Male',
    age: 10,
    breed: 'Akita',
    story: 'Waited for previous owner at train station, but owner never came back'
  });

};

dogs.populate();

module.exports = dogs;
