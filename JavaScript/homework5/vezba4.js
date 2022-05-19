const input = [
    ['a', 'b', 'c', 's', '1s'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g', 'h'],
];

const arrayOfLength = (prop) => {
    const length = prop.map(num => num.length)
    console.log(length)
}
arrayOfLength(input)
arrayOfLength([
    ['a', 'b', 'c', 's', '1s'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g', 'h'],
    ['a', 'a']
])

