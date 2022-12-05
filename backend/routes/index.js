var express = require("express");
var router = express.Router();

const dbController = require("../db/dbController");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let studentsList = await dbController.getStudentsList("students");
  res.render("index", {
    title: "DevopsLeader IL - Users List Example",
    studentsList,
  });
});

module.exports = router;
