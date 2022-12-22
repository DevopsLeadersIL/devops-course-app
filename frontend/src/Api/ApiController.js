import axios from "axios";
const backendUrl = "http://localhost:3000";

console.log("backendUrl", backendUrl);

export async function getStudents() {
  let students = await axios.get(`${backendUrl}/students`);
  return students.data;
}

export async function addStudent(student) {
  let res = await axios.post(`${backendUrl}/students`, student);
  return true;
}

export async function deleteStudent(studentId) {
  let students = await axios.delete(`${backendUrl}/students`, {
    data: { studentId: studentId },
  });
  return true;
}
