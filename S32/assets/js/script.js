// Palabra reservada class y nombre en PascalCase
class Person {
  // Atributo privado (encapsulado)
  #cellphone;

  // Método constructor con todos los atributos necesarios
  constructor(firstName, lastName, age, height, weight, hobbies, cellphone) {
    // Inicializamos los atributos públicos
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;

    // Inicializamos el atributo privado
    this.#cellphone = cellphone;
  }

  // Método para decir hola
  sayHello() {
    console.log("Hola desde el metodo!");
  }

  // Método para presentarse usando atributos públicos
  introduce() {
    console.log(
      `Hola buenas noches, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años.`
    );
  }

  // Método para mostrar los hobbies
  mostrarHobbies() {
    console.log(`Mis hobbies son: ${this.hobbies.join(", ")}`);
  }

  // Método para mostrar el atributo privado (#cellphone)
  showCellphone() {
    return this.#cellphone;
  }
}

// Instanciamos un objeto usando new
let person1 = new Person(
  "Nayeli",
  "Mamani",
  18,
  1.61,
  50,
  ["leer", "nadar", "jugar"],
  "555-123-5677"
);


// Mostrar el objeto completo
console.log(person1);

// Acceder a los atributos públicos
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);
console.log(person1.weight);
console.log(person1.hobbies);

// Ejecutar métodos públicos
person1.sayHello();
person1.introduce();

console.log("encapsulamiento");
// Mostrar el atributo privado a través del método
console.log(person1.showCellphone());

console.log("Herencia");
class Chef extends Person { };

// Ejemplo
// Crea una clase de Chef a partir de Person
class Chef extends Person {
  // Si quiero agregar más atributos, debo escribir el constructor de esta manera:
  // Debe contener TODOS los atributos de la clase padre
  constructor(
    firstName,
    lastName,
    age,
    height,
    weight,
    hobbies,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    // Primero paso los atributos a la clase padre con super()
    super(firstName, lastName, age, height, weight, hobbies, cellphone);

    // Luego de super(), agrego los atributos nuevos.
    // ESTOS NUEVOS ATRIBUTOS NO SE PASAN A LA CLASE PADRE
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  // Método específico del Chef
  cook() {
    console.log(
      `El chef ${this.lastName} está cocinando ${this.favoriteFood}...`
    );
  }
}
let chef1 = new Chef(
    "Juan",
    "Perez",
     25,
   1.60,
     50,
       ["nadar", "leer", "cocinar"],
  "555-123-5677","pasta"
);
