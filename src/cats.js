const Queue = require('./Queue');

const cats = new Queue();

cats.populate = function () {

  this.enqueue({
    imageURL: 'https://images.unsplash.com/photo-1471874276752-65e2d717604a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'Cat 1',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  });

  this.enqueue({
    imageURL: 'https://images.unsplash.com/photo-1539045209481-f385a84f81d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'Cat 5',
    name: 'Garfield',
    sex: 'Male',
    age: 10,
    breed: 'Tabby',
    story: 'Lazy, fat, and cynical. Hates Mondays and will eat lasagna and sleep all day'
  });

  this.enqueue({
    imageURL: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'Cat 3',
    name: 'Stinky',
    sex: 'Male',
    age: 7,
    breed: 'Persian',
    story: 'Found in the dumpster, loves to eat garbage'
  });

  this.enqueue({
    imageURL: 'https://images.unsplash.com/photo-1457410129867-5999af49daf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'Cat 4',
    name: 'Grumpy',
    sex: 'Male',
    age: 6,
    breed: 'Burmese',
    story: 'Kicked out of last home for being too grumpy'
  });

  this.enqueue({
    imageURL: 'https://images.unsplash.com/photo-1505481354248-2ba5d3b9338e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'Cat 2',
    name: 'Duffy',
    sex: 'Female',
    age: 5,
    breed: 'Siamese',
    story: 'Hit by a car, but still has 8 more lives'
  });
};

cats.populate();

module.exports = cats;
