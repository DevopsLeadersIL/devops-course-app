import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { deleteStudent } from "./Api/ApiController";

function StudentsTable({ students }) {
  return (
    <div className="App">
      <Table striped bordered hover="sm">
        <thead>
          <tr>
            <th>_id</th>
            <th>Student Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
            return (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteStudent(student._id);
                    }}
                  >
                    Delete Student
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentsTable;
