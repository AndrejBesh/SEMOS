const distanceConverter = (val1, value) => {
    switch (val1) {
        case 'cmtoin':
            return value / 2.54;

        case 'intocm':

            return value * 2.54;

        default:
            console.log('Enter a valid value');
    }
}
console.log(distanceConverter('intocm', 10))