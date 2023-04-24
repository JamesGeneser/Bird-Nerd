const db = require("./connection");
const { Birds, Category, Post, User } = require("../models");

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
      description:
        "One of the most common herons, they stalk small fish in shallow waters. Flies with its legs trailing behind with wings in a cupped fashion. They nest in colonies of up to 100 birds in tree tops over open water.",
      category: categories[0],
    },
    {
      name: "Bald Eagle",
      category: categories[1],
      description:
        "Migratory birds that return to the same nests every year, adding more sticks each time with some weighing up to  1,000 pounds. They feed on fish, carrion, and ducks.",
    },
    {
      name: "Osprey",
      category: categories[2],
      description:
        "These birds consume fish and arethe only type of raptor that will dive into water to catch its prey. They nest in tall dead trees and mate for life.",
    },
    {
      name: "Common Raven",
      category: categories[3],
      description:
        "Considered to be one of the smartest birds, they follow wolf packs around to scavenge the remains of their kill. They have complex courtship rituals and mate for life.",
    },
    {
      name: "Turkey Vulture",
      category: categories[4],
      description:
        "The lack of feathers on this birds head is an adaptation to avoid picking up disease from the carcasses they scavenge from. They are one of the few birds with a developed sense of smell.",
    },
    {
      name: "Great Horned Owl",
      category: categories[5],
      description:
        "The largest owl in Colorado, that feeds on small mammals, birds, snakes, and insects. They have incredible hearing, and can fly silently.",
    },
    {
      name: "Mourning Dove",
      category: categories[6],
      description:
        "Ground feeders that eat seeds, head bobbing as it walks. The name comes from the sound of their cooing.",
    },
    {
      name: "Belted Kingfisher",
      category: categories[7],
      description:
        "Eats small fish by diving, and has a very loud call. Parents will drop dead fish into water to teach their baby to dive for food.",
    },
    {
      name: "Common Grackle",
      category: categories[8],
      description:
        "Named after the latin word graculus meaning to cough because of its raspy call, and travels with other birds in large flocks. They feed on insects in farmer's fields.",
    },
    {
      name: "American Avocet",
      category: categories[9],
      description:
        "Nesting in colonies of 20 pairs, in shallow alakline water, they are found on the eastern half of Colorado. They feed on aquatic vegetation, fruit, and insects.",
    },
    {
      name: "Black Billed Magpie",
      category: categories[10],
      description:
        "These birds travel in small flocks made up of family members, and nest with these colonies in nests with a dome-shaped roof. They are able to mimic many sounds. ",
    },
    {
      name: "Barn Swallow",
      category: categories[11],
      description:
        "Rarley glides in flight, so it will fly with continuous flapping. They nest in mud nests and feed on beetles, wasps, and flies.",
    },
    {
      name: "Brownheaded Cowbird",
      category: categories[12],
      description:
        "Part of the blackbird family, and is the only parasitic bird in Colorado. They lay eggs in host birds' nests, leaving it to raaise thier young. They feed on insects that are attracted to animals such as bison.",
    },
    {
      name: "Lazuli Bunting",
      category: categories[13],
      description:
        "Found often in shrubs along rivers and streams, and migrates to Colorado in the summer. They feed on insects and seeds gatehring in small flocks.",
    },
    {
      name: "Mountain Bluebird",
      category: categories[14],
      description:
        "Found in the open mountain regions of Colorado, they nest in dead trees, and nest boxes, tolerating close contact with humans. They feed on mainly  insects",
    },
    {
      name: "Tree Swallow",
      category: categories[15],
      description:
        "Migratory bird that is the first swallow to return in spring, they feed on insects. They are found along ponds, lakes, and agricultural fields.",
    },
    {
      name: "Yellow Warbler",
      category: categories[16],
      description:
        "Seen in gardens and shrubbery near water. They consume insects such as small caterpillers from leaves, and mirgrate to Colorado in the summer.",
    },
    {
      name: "Red-Headed Woodpecker",
      category: categories[17],
      description:
        "One of the few woodpeckers where the male and female share a similar apperance. They prefers dead wood to build its nests in due to its weaker bill, where they will store nuts and berries.",
    },
    {
      name: "Black Headed Grosbeak",
      category: categories[18],
      description:
        "Prefers to nest in the foothills of the western part of Colorado, feeding on insects, seeds, and fruit. Both the male and the females sing.",
    },
    {
      name: "Pygmey Nuthatch",
      category: categories[19],
      description:
        "Found in ponderosa pine forests, where they make their nests in cavities of the trees. They feed on insects, seeds and berries, and are found all year round.",
    },
  ]);
  console.log(`Birds Seeded`);

  await Post.deleteMany;

  const posts = await Post.insertMany([
    {
      bird: "Great Horned Owl",
      postText: "Today I came across a Great Horned Owl! ",
      createdAt: Date.now(),
      username: "Chris Hemsworth",
    },
    {
      bird: "Red-Headed Woodpecker",
      postText: "Red-Headed Woodpecker, never seen one before now.",
      createdAt: Date.now(),
      username: "Levi Ackerman",
    },
    {
      bird: "Yellow Warbler",
      postText: "got an amazing view of the Yellow Warbler",
      createdAt: Date.now(),
      username: "Kenn Kaufman",
    },
    {
      bird: "Lazuli Bunting",
      postText: "I finally spotted a Lazuli Bunting ",
      createdAt: Date.now(),
      username: "bindi irwin",
    },
  ]);
  console.log(`Posts Seeded`), await User.deleteMany;

  const user = await User.insertMany([
    {
      username: "Chris Hemsworth",
      email: "ChrisHems@gmail.com",
      post: posts[20],
      password: "scoobydoo",
    },
    {
      username: "Levi Ackerman",
      email: "levi123@yahoo.com",
      post: posts[21],
      password: "titankiller",
    },
    {
      username: "Kenn Kaufman",
      email: "KennKaufman@gmail.com",
      post: posts[22],
      password: "skoolsout",
    },
    {
      username: "bindi irwin",
      email: "bindi@hotmail.com",
      post: posts[23],
      password: "crochunter",
    },
  ]);
  console.log(`Users Seeded`);
});
