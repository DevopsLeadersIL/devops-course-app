var express = require("express");
var router = express.Router();
var dbController = require("../db/dbController");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let students = await dbController.getStudentsList();
  res.json(students);
});

router.post("/", async function (req, res, next) {
  console.log(req.body);
  let newStudent = req.body;
  let student = await dbController.addStudent(
    newStudent.name,
    newStudent.course
  );
  res.json(student);
});

router.delete("/", async function (req, res, next) {
  console.log(req.body.studentId);
  let student = await dbController.deleteStudentById(req.body.studentId);
  res.json(student);
});

module.exports = router;
