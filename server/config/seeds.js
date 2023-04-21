const db = require("./connection");
const { Birds, Category, Thoughts, User } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { Size: "Large", bodyColor: "Blue", headColor: "Blue" },
    { Size: "Large", bodyColor: "Brown", headColor: "White" },
    { Size: "Large", bodyColor: "BrownWhite", headColor: "White" },
    { Size: "Large", bodyColor: "Black", headColor: "Black" },
    { Size: "Large", bodyColor: "Brown", headColor: "Red" },
    { Size: "Large", bodyColor: "Brown", headColor: "Brown" },
    { Size: "Medium", bodyColor: "White", headColor: "Brown" },
    { Size: "Medium", bodyColor: "BlueWhite", headColor: "Blue" },
    { Size: "Medium", bodyColor: "Black", headColor: "Black" },
    { Size: "Medium", bodyColor: "BlackWhite", headColor: "Brown" },
    { Size: "Medium", bodyColor: "BlackWhite", headColor: "Black" },
    { Size: "Small", bodyColor: "Brown", headColor: "Blue" },
    { Size: "Small", bodyColor: "Black", headColor: "Brown" },
    { Size: "Small", bodyColor: "White", headColor: "Blue" },
    { Size: "Small", bodyColor: "Blue", headColor: "Blue" },
    { Size: "Small", bodyColor: "BlueWhite", headColor: "Blue" },
    { Size: "Small", bodyColor: "Yellow", headColor: "Yellow" },
    { Size: "Small", bodyColor: "BlackWhite", headColor: "Red" },
    { Size: "Small", bodyColor: "Orange", headColor: "Black" },
    { Size: "Small", bodyColor: "BlueWhite", headColor: "Brown" },
  ]);

  console.log(`Categories Seeded`);

  await Birds.deleteMany();

  const birds = await Birds.insertMany([
    {
      name: "Great Blue Heron",
      category: categories[1],
      description: "description",
    },
    {
      name: "Bald Eagle",
      category: categories[2],
      description: "description",
    },
    {
      name: "Osprey",
      category: categories[3],
      description: "description",
    },
    {
      name: "Common Raven",
      category: categories[4],
      description: "description",
    },
    {
      name: "Turkey Vulture",
      category: categories[5],
      description: "description",
    },
    {
      name: "Great Horned Owl",
      category: categories[6],
      description: "description",
    },
    {
      name: "Mourning Dove",
      category: categories[7],
      description: "description",
    },
    {
      name: "Belted Kingfisher",
      category: categories[8],
      description: "description",
    },
    {
      name: "Common Grackle",
      category: categories[9],
      description: "description",
    },
    {
      name: "American Avocet",
      category: categories[10],
      description: "description",
    },
    {
      name: "Black Billed Magpie",
      category: categories[11],
      description: "description",
    },
    {
      name: "Barn Swallow",
      category: categories[12],
      description: "description",
    },
    {
      name: "Brownheaded Cowbird",
      category: categories[13],
      description: "description",
    },
    {
      name: "Lazuli Bunting",
      category: categories[14],
      description: "description",
    },
    {
      name: "Mountain Bluebird",
      category: categories[15],
      description: "description",
    },
    {
      name: "Tree Swallow",
      category: categories[16],
      description: "description",
    },
    {
      name: "Yellow Warbler",
      category: categories[17],
      description: "description",
    },
    {
      name: "Red-Headed Woodpecker",
      category: categories[18],
      description: "description",
    },
    {
      name: "Black Headed Grosbeak",
      category: categories[19],
      description: "description",
    },
    {
      name: "Pygmy Nuthatch",
      category: categories[20],
      description: "description",
    },
  ]);
  console.log(`Birds Seeded`);

  await Thoughts.deleteMany;

  const thoughts = await Thoughts.insertMany([
    {
      thought: "Today i came across a Great Horned Owl! ",
      createdAt: Date.now(),
      username: "Chris Hemsworth",
    },
    {
      thought: "Red-Headed Woodpecker, never seen one before now.",
      createdAt: Date.now(),
      username: "Levi Ackerman",
    },
    {
      thought: "got an amazing view of the Yellow Warbler",
      createdAt: Date.now(),
      username: "Kenn Kaufman",
    },
    {
      thought: "I finally spotted a Lazuli Bunting ",
      createdAt: Date.now(),
      username: "bindi irwin",
    },
    console.log(`Thoughts Seeded`),
  ]);

  await User.deleteMany;

  const user = await User.insertMany([
    {
      username: "Chris Hemsworth",
      email: "ChrisHems@gmail.com",
      thought: thoughts[1],
      password: "scoobydoo",
    },
    {
      username: "Levi Ackerman",
      email: "levi123@yahoo.com",
      thought: thoughts[2],
      password: "titankiller",
    },
    {
      username: "Kenn Kaufman",
      email: "KennKaufman@gmail.com",
      thought: thoughts[3],
      password: "skoolsout",
    },
    {
      username: "bindi irwin",
      email: "bindi@hotmail.com",
      thought: thoughts[4],
      password: "crochunter",
    },
  ]);
});
