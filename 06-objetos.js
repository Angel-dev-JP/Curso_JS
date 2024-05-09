// objetos -- 06

//Cree dos objetos en base a una pelicula y el otro a un animal

let movie_Name = "La huerfana";
let age_movie = 2005;
let Genre = ["Terror", "Suspense", "Accion"]; // Los corchetes se utilizan para listas [1, 2, 3,]

let Movie_LaHuerfana = {
    movie_Name,
    age_movie,
    Genre,
};

console.log(Movie_LaHuerfana)



// El tercero y el segundo es buena practica utilizarlos de esa manera.


let animal = "Gato";
let color = "black";
let age = 2;

let Gato_black = {
    animal: "Gato",
    color: "black",
    age: 2,
};

console.log(Gato_black)

Gato_black.age = 3



// El tercero y el segundo es buena practica utilizarlos de esa manera.


let segundo_Animal = "perro";
let Color = "Blanco";
let edad = 3;

let Perro_Blanco = {

    segundo_Animal: "perro",
    color: "Blanco",
    edad: 3,
};


console.log(Perro_Blanco)

Perro_Blanco.edad = 4; // esto me sirve para modificar algo en especifico

//con esta funcion elimino cualquier informacion de mi objeto
delete Perro_Blanco.color


CosasRamdom = {
    name: "Jose",
    año: 14,
    activo: true,
}

console.log(CosasRamdom)


chica = {
    Color_Ojos: "Blue",
    Edad_kid: 12,
    name_User: "Angelica",
};

console.log(chica)


let carro = {
    Modelo: "BMW",
    Año: 2023,
    Color: "Blue",
    precio: 130000
};

console.log(carro)
