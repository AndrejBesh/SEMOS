const weightConverter = (val, val1) => {
    switch (val) {
        case 'mgtog':
            return val1 / 1000;

        case 'gtomg':

            return val1 * 1000;

        default:
            console.log('Enter a valid value');
    }
}
console.log(weightConverter('gtomg', 100))