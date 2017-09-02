const personas = ["Sergio", 'Alonso', "Marjorie", "Jana"]

const longitud = personas.length

for(let indice = 0; indice < longitud; indice++){
	console.log(personas[indice])
}

for(let indice = 0; indice < personas.length; indice++){
	console.log(personas[indice])
}

personas.forEach(function(valor, indice){
	console.log("forEach", valor)
	console.log("forEach indice", indice)
})

personas.forEach(function(valor){
	console.log("forEach", valor)
})

personas.forEach(function(valor, indice){
	console.log("forEach", indice)
})