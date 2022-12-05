import axios from "axios";

export async function getStudents() {
  let students = await axios.get("http://localhost:3000/students");
  return students.data;
}

export async function addStudent(student) {
  let res = await axios.post("http://localhost:3000/students", student);
  return true;
}

export async function deleteStudent(studentId) {
  let students = await axios.delete("http://localhost:3000/students", {
    data: { studentId: studentId },
  });
  return true;
}
