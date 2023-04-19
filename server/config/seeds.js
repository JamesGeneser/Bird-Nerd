const db = require('./connection')
const {Birds, User} = require('../models')

db.once('open', async () => {
    const birdData = await Birds.insertMany([
        {
            name: "Great Blue Heron",
            keys: {
              size: "Large",
              "body-color": "Blue",
              "head-color": "Grey",
            },
          },
          {
            name: "Bald Eagle",
            keys: {
              size: "Large",
              "body-color": "Brown",
              "head-color": "White",
            },
          },
          {
            name: "Osprey",
            keys: {
              size: "Large",
              "body-color": "Brown/White",
              "head-color": "White",
            },
          },
          {
            name: "Common Raven",
            keys: {
              size: "Large",
              "body-color": "Black",
              "head-color": "Black",
            },
          },
          {
            name: "Turkey Vulture",
            keys: {
              size: "Large",
              "body-color": "Brown",
              "head-color": "Red",
            },
          },
          {
            name: "Great Horned Owl",
            keys: {
              size: "Large",
              "body-color": "Brown",
              "head-color": "Brown",
            },
          },
          {
            name: "Mourning Dove",
            keys: {
              size: "Medium",
              "body-color": "White",
              "head-color": "Brown",
            },
          },
          {
            name: "Belted Kingfisher",
            keys: {
              size: "Medium",
              "body-color": "Blue/White",
              "head-color": "Blue",
            },
          },
          {
            name: "Common Grackle",
            keys: {
              size: "Medium",
              "body-color": "Black",
              "head-color": "Black",
            },
          },
          {
            name: "American Avocet",
            keys: {
              size: "Medium",
              "body-color": "Black/White",
              "head-color": "Brown",
            },
          },
          {
            name: "Black Billed Magpie",
            keys: {
              size: "Medium",
              "body-color": "Black/White",
              "head-color": "Black",
            },
          },
          {
            name: "Barn Swallow",
            keys: {
              size: "Small",
              "body-color": "Brown",
              "head-color": "Blue",
            },
          },
          {
            name: "Brownheaded Cowbord",
            keys: {
              size: "Small",
              "body-color": "Black",
              "head-color": "Brown",
            },
          },
          {
            name: "Lazuli Bunting",
            keys: {
              size: "Small",
              "body-color": "White",
              "head-color": "Blue",
            },
          },
          {
            name: "Mountain Bluebird",
            keys: {
              size: "Small",
              "body-color": "Blue",
              "head-color": "Blue",
            },
          },
          {
            name: "Tree Swallow",
            keys: {
              size: "Small",
              "body-color": "Blue/White",
              "head-color": "Blue",
            },
          },
          {
            name: "Yellow Warbler",
            keys: {
              size: "Small",
              "body-color": "Yellow",
              "head-color": "Yellow",
            },
          },
          {
            name: "Red-Headed Woodpecker",
            keys: {
              size: "Small",
              "body-color": "Black/White",
              "head-color": "Red",
            },
          },
          {
            name: "Black Headed Grosbeak",
            keys: {
              size: "Small",
              "body-color": "Orange",
              "head-color": "Black",
            },
          },
          {
            name: "Pygmey Nuthatch",
            keys: {
              size: "Small",
              "body-color": "Blue/White",
              "head-color": "Brown",
            },
          },
    ])
})

module.exports= {birdData}