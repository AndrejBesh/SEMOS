const getFirstLetters = (str) => {
    const firstLetters = str
        .trim()
        .split(' ')
        .map(first => first[0].toUpperCase())
        .join('');
    console.log(firstLetters)
    return firstLetters;

}
getFirstLetters('eve edna proba')