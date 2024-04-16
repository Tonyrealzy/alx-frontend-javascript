export default function getStudentsByLocation(arrayObject, city) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  return arrayObject.filter((c) => {
    c.location === city;
  });
}
