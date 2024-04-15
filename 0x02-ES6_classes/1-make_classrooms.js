import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRooms = [];
  const roomSizes = [19, 20, 34];

  for (const sizes of roomSizes) {
    classRooms.push(new ClassRoom(sizes));
  }
  return classRooms;
}
