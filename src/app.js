

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['telecom', 'insomnio', 'internet', 'cyborg'];
let domain = ["com", "net", "org", "io", "dev"]

for (let pronombre of pronoun) {
  for (let adjetivo of adj) {
    for (let nombre of noun) {
      for (let dominio of domain) {
        if (dominio == nombre.slice(nombre.length - dominio.length)) {
          let nombre2 = nombre.slice(0, nombre.length - dominio.length)
          console.log(`${pronombre}${adjetivo}${nombre2}.${dominio}`);
        }
        else {
          console.log(`${pronombre}${adjetivo}${nombre}.${dominio}`);
        }
      }
    }
  }
}