const db = require('./connection')
const {Birds} = require('../models')
const Category = require('../models/Category')



db.once('open', async () => {
   await Category.deleteMany();

   const categories = await Category.insertMany([
    {Size: 'Large'}, //1
    {Size: 'Medium'}, //2
    {Size: 'Small'}, //3
    {bodyColor: 'Orange'}, //4
    {bodyColor: 'Yellow'}, //5
    {bodyColor: 'Blue'},
    {bodyColor: 'Brown'},
    {bodyColor: 'Blue'},
    {bodyColor: 'BrownWhite'},
    {bodyColor: 'BlueWhite'}, //10
    {bodyColor: 'Black'},
    {bodyColor: 'BlackWhite'},
    {bodyColor: 'White'},
    {headColor: 'Red'},
    {headColor: 'Brown'}, //15
    {headColor: 'Black'},
    {headColor: 'Yellow'},
    {headColor: 'Blue'},
    {headColor: 'Grey'},
    {headColor: 'White'}, //20
  ])

  console.log(`cateogires seeded`);

  await Birds.deleteMany();
  
  const birds = await Birds.insertMany([
        {
            name: "Great Blue Heron",
            category: categories[3,6,18]._id,
            description: "description"
          },
          {
            name: "Bald Eagle",
            category: categories[3,7,20]._id,
            description: "description"
          },
          {
            name: "Osprey",
            category: categories[3,9,18]._id,
            description: "description"
          },
          {
            name: "Common Raven",
            category: categories[3,11,16]._id,
            description: "description"
          },
          {
            name: "Turkey Vulture",
            category: categories[3,7,14]._id,
            description: "description"
          },
          {
            name: "Great Horned Owl",
            category: categories[3,7,15]._id,
            description: "description"
          },
          {
            name: "Mourning Dove",
            category: categories[2,13,20]._id,
            description: "description"
          },
          {
            name: "Belted Kingfisher",
            category: categories[2,10,18]._id,
            description: "description"
          },
          {
            name: "Common Grackle",
            category: categories[2,11,16]._id,
            description: "description"
          },
          {
            name: "American Avocet",
            category: categories[2,12,15]._id,
            description: "description"
          },
          {
            name: "Black Billed Magpie",
            category: categories[2,12,16]._id,
            description: "description"
          },
          {
            name: "Barn Swallow",
            category: categories[1,7,18]._id,
            description: "description"
          },
          {
            name: "Brownheaded Cowbord",
            category: categories[1,11,15]._id,
            description: "description"
          },
          {
            name: "Lazuli Bunting",
            category: categories[1,13,18]._id,
            description: "description"
          },
          {
            name: "Mountain Bluebird",
            category: categories[1,6,18]._id,
            description: "description"
          },
          {
            name: "Tree Swallow",
            category: categories[1,10,18]._id,
            description: "description"
          },
          {
            name: "Yellow Warbler",
            category: categories[1,5,17]._id,
            description: "description"
          },
          {
            name: "Red-Headed Woodpecker",
            category: categories[1,12,14]._id,
            description: "description"
          },
          {
            name: "Black Headed Grosbeak",
            category: categories[1,4,16]._id,
            description: "description"
          },
          {
            name: "Pygmey Nuthatch",
            category: categories[1,10,15]._id,
            description: "description"
          },
    ])
})

await Birds.create({
  name: "Pygmey Nuthatch",
            category: Category[1,10,15]._id,
            description: "description"
})


module.exports= Birds, Category