export default function getStudentIdsSum(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  return arrayObject.reduce((total, presentVal) => total + presentVal.id, 0);
}
