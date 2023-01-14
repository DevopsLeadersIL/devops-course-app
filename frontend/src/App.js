import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentsTable from "./StudentsTable";
import { Navbar, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getStudents, addStudent } from "./Api/ApiController";

function App() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newCourse, setNewCourse] = useState("");

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            DevopsLeadersIL - Course App
          </Navbar.Brand>
        </Container>
      </Navbar>
      {students.length > 0 ? (
        <StudentsTable students={students} />
      ) : (
        <div>No Students to display</div>
      )}
      <Button
        variant="primary"
        onClick={async () => {
          let students = await getStudents();
          console.log(students);
          setStudents(students);
        }}
      >
        Refresh Students List
      </Button>

      <br />
      <br />
      <br />
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Student Full Name - Test</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ploni Almoni"
            onChange={(e) => {
              setNewStudentName(e.target.value);
            }}
          />
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Something Interesting"
            onChange={(e) => {
              setNewCourse(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={async () => {
            let newStudent = { name: newStudentName, course: newCourse };
            console.log(newStudent);
            addStudent(newStudent);
          }}
        >
          Add Student to DB
        </Button>
      </Form>
    </div>
  );
}

export default App;
