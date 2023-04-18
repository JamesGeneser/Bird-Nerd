const express = require("express");
const router = express.Router();
const db = require("../../models");


// Route to authenticate user sign up
// =========================================================

router.post("/signup", (req, res, next) => {

   passport.authenticate("local-signup", (err, user, opts) => {
      if (err) {
         console.log("Error: ", err);
         return res.status(401).send("Error occurred");
      }

      if (!user) {
         console.log("Not a user.")
         return res.status(401).send(opts.message);
      }

      req.login(user, err => {
         if (err) {
            console.log("auth error")
            return res.status(401).send("Signup failed");
         }

         res.cookie("username", req.user.username);
         res.cookie("user_id", req.user.id);
         return res.redirect("/");
      });

   })(req, res, next);
});


// Route to authenticate user login
// =========================================================

router.post("/login", (req, res, next) => {

   passport.authenticate("local-login", (err, user) => {
      if (err) {
      console.log("Error: ", err);
      return res.status(401).send("Login failed");
      }
      
      if (!user) {
      console.log("Not a user.");
      return res.status(401).send("Login failed");
      }
      
      req.login(user, (err) => {
      
      if (err) {
      console.log("auth error");
      return res.status(401).send("Login failed");
      }
      
      res.redirect("/profile");
      })
      
   })(req, res, next);
      
});


// Route to handle logout
// =========================================================

router.get("/logout", function (req, res) {

   req.session.destroy(function (err) {
     if (err) {
      res.status(500).json();
      return 
     }

     res.clearCookie("user_id");
     res.clearCookie("username");
     res.clearCookie("connect.sid");
     res.json();
   });

 });

module.exports = router;