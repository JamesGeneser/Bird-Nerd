const users = [
    {
      user: "Chris Hemsworth",
      email: "ChrisHems@gmail.com",
      thoughts: [],
    },
    {
      user: "Levi Ackerman",
      email: "levi123@yahoo.com",
      thoughts: [],
    },
    {
      user: "Kenn Kaufman",
      email: "KennKaufman@gmail.com",
      thoughts: [],
    },
    {
      user: "bindi irwin",
      email: "bindi@hotmail.com",
      thoughts: [],
    },
  ];
  
  const thoughts = [
    {
      thought: "Today i came across a Great Horned Owl! ",
      createdAt: Date.now(),
      user: "Chris Hemsworth",
    },
    {
      thought: "Red-Headed Woodpecker, never seen one before now.",
      createdAt: Date.now(),
      user: "Levi Ackerman",
    },
    {
      thought: "got an amazing view of the Yellow Warbler",
      createdAt: Date.now(),
      user: "Kenn Kaufman",
    },
    {
      thought: "I finally spotted a Lazuli Bunting ",
      createdAt: Date.now(),
      user: "bindi irwin",
    },
  ];
  
  module.exports = { users, thoughts };