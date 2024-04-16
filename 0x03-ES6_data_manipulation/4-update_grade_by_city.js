export default function updateStudentGradeByCity(arrayObject, city, newGrades) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  return arrayObject
    .filter((el) => el.location === city)
    .map((el) => {
      for (const gr of newGrades) {
        if (!gr.grade) {
          gr.grade = 'N/A';
        }
        if (gr.studentId === el.id) {
          el.grade = gr.grade;
        }
      }
      return el;
    });
}
