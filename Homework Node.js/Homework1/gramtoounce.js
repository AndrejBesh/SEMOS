const weightConverter = (val, val1) => {
    switch (val) {
        case 'gtooz':
            return val1 / 28.35;

        case 'oztog':

            return val1 * 28.35;

        default:
            console.log('Enter a valid value');
    }
}
console.log(weightConverter('oztog', 100))