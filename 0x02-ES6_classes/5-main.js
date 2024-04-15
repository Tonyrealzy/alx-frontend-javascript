import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
<<<<<<< HEAD
}
=======
}
>>>>>>> d3facd9655bcc410fe94ccd3ca67b4320d4797e0
