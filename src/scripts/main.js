let JumpStop = []
let Chatten = []
let Polar = []

let createBluegrassArtist = (name, genre, age) => {
    return{
        name: name,
        genre: genre,
        age: age
    }

}

let createFunkyArtist = (name, genre, age) => {
    return{
        name: name,
        genre: genre,
        age: age
    }
}

let createLameArtist = (name, genre, age) => {
    return{
        name: name,
        genre: genre,
        age: age
    }
}

Chatten.push(createBluegrassArtist("Bruce Atkins", "Country", 23))
Chatten.push(createBluegrassArtist("Bartholomew Danielson", "BlueGrass", 23))
Chatten.push(createBluegrassArtist("Avilee Dallas", "Country", 19))
Polar.push(createLameArtist("Jensen Brown", "Pop", 20))
Polar.push(createLameArtist("Austin Kinkaid", "Pop", 22))
JumpStop.push(createFunkyArtist("Dre Funkz", "Funk", 25))
JumpStop.push(createFunkyArtist("Dusta Grimes", "Rap", 21))
JumpStop.push(createFunkyArtist("Loyoncé Branis", "Rap", 27))


console.log(Chatten)
console.log(Polar)
console.log(JumpStop)



// Dusta Grimes is a Rap artist and is 21 years old

// Loyoncé Branis is a Rap artist and is 27 years old