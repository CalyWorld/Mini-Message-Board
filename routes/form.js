const express = require("express");
const router = express.Router();
const { messages } = require("./index");

router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  const { author, text } = req.body;
  messages.push({ text: text, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
