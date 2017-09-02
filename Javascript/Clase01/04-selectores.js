const navs = document.getElementsByTagName("nav")
console.log(navs) // Retorna un HTMLCollection

const rojo = document.getElementsByClassName("rojo")
console.log(rojo)

const titular = document.getElementById("titular")
console.log(titular)

const navsSelector = document.querySelectorAll("nav")
const rojoSelector = document.querySelectorAll("section.rojo")

console.log(navsSelector)
console.log(rojoSelector)

const rojoSelectorUnico = document.querySelector("section.rojo")
console.log(rojoSelectorUnico)

const dataRel10 = document.querySelectorAll('[data-rel="10"]')
console.log(dataRel10)

const dataRel = document.querySelectorAll("[data-rel]")
console.log(dataRel)

const dataRel1 = document.querySelectorAll('[data-rel^="1"]')
console.log(dataRel1)

const dataRel0 = document.querySelectorAll('[data-rel$="0"]')
console.log(dataRel0)

