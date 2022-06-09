const cyrilic = require('cyrillic-to-translit-js')
const cyrillicToTranslit = new cyrilic
console.log(cyrillicToTranslit.transform('Дали работи?'))
console.log(cyrillicToTranslit.transform('Да!'))