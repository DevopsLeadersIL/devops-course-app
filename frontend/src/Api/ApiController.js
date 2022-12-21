import axios from "axios";
import { Config } from "../config";

export async function getStudents() {
  let students = await axios.get(`${Config.backendUrl}/studentds`,{ crossdomain: true });
  return students.data;
}

export async function addStudent(student) {
  let res = await axios.post(`${Config.backendUrl}/student`, student);
  return true;
}

export async function deleteStudent(studentId) {
  let students = await axios.delete(`${Config.backendUrl}/students`, {
    data: { studentId: studentId },
  });
  return true;
}
