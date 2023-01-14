import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;
var credentials = "AKsdiejfjhirgD@345664w"
console.log("backendUrl", backendUrl);

export async function getStudents() {
  let students = await axios.get(`${backendUrl}/students`);
  return students.data;
}

export async function addStudent(student) {
  await axios.post(`${backendUrl}/students`, student);
  return true;
}

export async function deleteStudent(studentId) {
  await axios.delete(`${backendUrl}/students`, {
    data: { studentId: studentId },
  });
  return true;
}
