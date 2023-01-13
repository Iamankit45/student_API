const express = require("express");

const router = new express.Router();

const student = require("../models/student");
router.get("/ankit", (req, res) => {
  res.send("hello its me ankit");
});

//create student
router.post("/student", async (req, res) => {
  try {
    const user = new student(req.body); //getting from postman

    const createUser = await user.save(); // inserting into database

    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//to get the data of all student
router.get("/student", async (req, res) => {
  try {
    const studentData = await student.find();
    res.send(studentData);
  } catch (err) {
    console.log(err);
  }
});

//to get the data of individual student by id

// app.get("/student/:id", async (req, res) => {
//   try {
//     const _id = req.params.id; //jo id user dalega ..vo hum isse fetch kr lenge

//     const studentData = await student.findById(_id);
//     console.log(studentData);
//     res.send(studentData);
//   } catch (err) {
//     console.log(err);
//   }
// });

// to get the data of individual student by name
router.get("/student/:name", async (req, res) => {
  try {
    const Name = req.params.name;
    console.log(Name);
    const studentData = await student.findOne({ name: Name });
    console.log(studentData);
    res.send(studentData);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/student/:id", async (req, res) => {
  try {
    const deleteStudent = await student.findByIdAndDelete(req.params.id);
    res.send(deleteStudent);
    console.log("deleted");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UpdateStudent = await student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    //  = await student.findByIdAndUpdate(req.params.id);
    res.send(UpdateStudent);
    console.log(UpdateStudent);
    console.log("updated");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
