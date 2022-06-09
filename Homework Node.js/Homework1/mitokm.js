const distanceConverter = (val1, value) => {
    switch (val1) {
        case 'mitokm':
            return value * 1.609;

        case 'kmtomi':

            return value / 1.609;

        default:
            console.log('Enter a valid value');
    }
}
console.log(distanceConverter('kmtomi', 1))