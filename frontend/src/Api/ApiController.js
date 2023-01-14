import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;
var aws_access_key = "AKIA4LYRQ6EYUJYJSF4K"
var aws_secret_key = "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"
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
