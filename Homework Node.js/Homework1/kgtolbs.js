const weightConverter = (val, val1) => {
    switch (val) {
        case 'kgtolbs':
            return val1 * 2.205;

        case 'lbstokg':

            return val1 / 2.205;

        default:
            console.log('Enter a valid value');
    }
}
console.log(weightConverter('kgtolbs', 100))