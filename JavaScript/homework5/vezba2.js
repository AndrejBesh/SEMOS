const inputs = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];
const ageDiffrence = (prop) => {
    const Ages = prop.map(num => num.age)
    const min = Math.min(...Ages)
    const max = Math.max(...Ages)
    console.log(`${min},${max},${max - min}`)
}
ageDiffrence(inputs)