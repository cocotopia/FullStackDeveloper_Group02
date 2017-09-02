/*
for(var corredor=0; corredor<10; corredor = corredor + 1){}

for(let corredor=0; corredor<10; corredor = corredor + 1){}

for(let corredor=0; corredor<10; corredor += 1){}

for(let corredor=0; corredor<10; corredor++){}

for(let corredor=0; corredor<10; ++corredor){}

*/

const personas = []
const alumnos = ["Rafael", "Carmen", "Mario", "Aurora"]

const datos = ["Angular", "Sábados", 12, false]

console.log(datos)
console.log(datos[2])

const datosComplejo = [[20, 10, 30], true, 45]
const datosP0 = datosComplejo[0]
const item = datosP0[1]

console.log(item)
console.log(datosComplejo[0][1])