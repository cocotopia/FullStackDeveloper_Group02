var nombre = 'Sergio'
let apellidoPaterno = "Hidalgo"
const apellidoMaterno = "Cáceres"

/*
	Por el alcance:
		- var: generar variables globales
		- let, const: su alcance depende donde estén declaradas

	Por inmutabilidad:
		- mutables: var, let
		- inmutable: const
*/

console.log("Tipo de dato", typeof(nombre))
nombre = 40
console.log("Tipo de dato", typeof(nombre))

console.log("Tipo de dato del let", typeof(apellidoPaterno))
apellidoPaterno = false
console.log("Tipo de dato del let", typeof(apellidoPaterno))

/*console.log("Tipo de dato del const", typeof(apellidoMaterno))
apellidoMaterno = true
console.log("Tipo de dato del const", typeof(apellidoMaterno))

console.log("Tipo de dato del const", typeof(apellidoMaterno))
apellidoMaterno = "Montes"
console.log("Tipo de dato del const", typeof(apellidoMaterno))*/

if(true){
	var zoo = "Parque de las Leyendas"
	let tipo = "felino"
	const nombreFelino = "León"
	console.log("Dentro del if", tipo)
	console.log("Dentro del if", nombreFelino)
	console.log("Dentro del if", zoo)
}

/*console.log("Fuera del if", zoo)
console.log("Fuera del if", tipo)
console.log("Fuera del if", nombreFelino)*/

const frecuenciaHorario
frecuenciaHorario = "Sábados"



