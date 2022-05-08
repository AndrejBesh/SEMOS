const temp = [12, 33, 22, 15, 22]
let sum = 0
for (let i = 0; i < temp.length; i++) {
    sum += temp[i]
}
console.log(`Prosecnata temperatura e ${!temp ? 0 : sum / temp.length}`)
console.log(`Najniskata temperatura e ${Math.min(...temp)},a najvisoka e ${Math.max(...temp)}`)