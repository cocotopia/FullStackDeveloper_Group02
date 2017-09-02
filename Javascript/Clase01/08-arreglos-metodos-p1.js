const personas = ["Sergio", 'Alonso', "Marjorie", "Jana"]

personas.push("Alejandra")
console.log(personas)

personas.unshift("Martin")
console.log(personas)

const ultimo = personas.pop()
console.log(personas)
console.log("eliminado del final", ultimo)

const primero = personas.shift()
console.log(personas)
console.log("eliminado del inicio", primero)

const unElemento = personas.slice(2,3)
console.log(personas)
console.log("Extraido", unElemento)