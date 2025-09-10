// Crea un objeto de persona
let person = {
    name: "Nayeli Mamani Caqui",
    age: 18,
    cellphone: "987654321",
    hobbies: ["enseñar", "jugar voleyball", "escuchar musica"]
};

console.log(person.name);

// Acceder con notación de corchetes
console.log(person["age"]);

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.cellphone);
console.log(person.hobbies)
console.log(person.hobbies[0]);

console.log("Actualizamos el valor del atributo del objeto");

// Actualizar el valor de un objeto
person.age = "19";
console.log(person.age);

console.log("Agregar un nuevo atributo al objeto");

// Agregar un nuevo atributo
person.birthDate = "16-03-2007";
console.log(person);



let heroes = {
  members: [
    {
      name: "Molecule Man",
      secretIdentity: "Dan Jukes",
      powers: ["Damage resistance", "Radiation blast", "Turning tiny"]
    },
    {
      name: "Eternal Flame",
      secretIdentity: "Grace Mendez",
      powers: ["Fire control", "Flight"]
    },
    {
      name: "Inferno",
      secretIdentity: "Luis González",
      powers: ["Heat vision", "Explosion"]
    }
  ]
};


// Reto 4
console.log(heroes.members[1].powers[1]); // Damage resistance
console.log(heroes.members[2].name);      // Eternal Flame
console.log(heroes.members[2].powers[2]); // Inferno
