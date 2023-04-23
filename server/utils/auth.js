const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers

    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
      console.log(token + "auth.js server 16");
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log({ token } + " auth.js data=jst.verify(token...");
      req.user = data;
      console.log(req.user + "27");
    } catch {
      console.log("Invalid token");
    }
    console.log("valid :) token");
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
