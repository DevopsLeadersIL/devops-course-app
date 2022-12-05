const { MongoClient, ObjectID } = require("mongodb");
const { init } = require("../app");

const dbName = "devopsleadersil"; // Database Name
const collectionName = "students";
const url = process.env.MONGO_URI || `mongodb://localhost:27017/${dbName}`; //Server url
const client = new MongoClient(url);

async function initDb() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  let dbList = await db.admin().listDatabases();
  if (!dbList.databases.some((db) => db.name === dbName)) {
    await db.createCollection(collectionName);
    await db.collection(collectionName).insertMany([
      { name: "Assaf", course: "Devops for Dummies" },
      { name: "David", course: "Flying to Brazil" },
      { name: "Yaniv", course: "Devops for Dummies" },
    ]);
  }
  client.close();
}

async function getStudentsList() {
  let studentsList = [];
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  try {
    studentsList = await collection.find({}).toArray();
    console.log(`fetched ${studentsList.length} students from db`);
  } catch (e) {
    console.log(e);
    throw new Error("Error while getting students list");
  }
  client.close();
  return studentsList;
}

async function addStudent(studentName, studentCourse) {
  const newStudentMongoId = {
    name: studentName,
    course: studentCourse,
  };
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  try {
    newStudent = await collection.insertOne(newStudentMongoId);
  } catch (e) {
    console.log(e);
    throw new Error("Error while adding student");
  }
  client.close();
  return newStudent;
}

async function deleteStudentById(studentId) {
  let deletedStudent = {};
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const studentMongoId = new ObjectID(studentId);
  try {
    deletedStudent = await collection.deleteOne({ _id: studentMongoId });
    console.log(`deleted ${deletedStudent.deletedCount} students from db`);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to delete student");
  }
  client.close();
  return deletedStudent;
}

module.exports = { initDb, getStudentsList, addStudent, deleteStudentById };
