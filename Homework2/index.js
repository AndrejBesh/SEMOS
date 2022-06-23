const fs = require('fs');
const makeDir = (name) => {
    return new Promise((success, fail) => {
        fs.mkdir(name, { recursive: true }, (err) => {
            if (err) {
                return fail(err);
            } return success;
        });
    })
};

(async () => {
    try {
        await makeDir('proba');
    } catch (err) {
        console.log(err);
    }
})();
const readDir = (dirname) => {
    return new Promise((success, fail) => {
        fs.readdir(dirname, (err, files) => {
            if (err) {
                return fail(err);
            } return success(console.log("Current directory filenames:"),
                files.forEach(file => {
                    console.log(file);
                })
            )
        });
    })
};

(async () => {
    try {
        await readDir('proba');
    } catch (err) {
        console.log(err);
    }
})();
const rmFD = (dirname) => {
    return new Promise((success, fail) => {
        fs.rm(dirname, { recursive: true }, (err) => {
            if (err) {
                return fail(console.log(err.message));
            } return success(console.log('Successfully deleted file'))
        });
    })
};

(async () => {
    try {
        await rmFD('proba');
    } catch (err) {
        console.log(err);
    }
})();
const rmDir = (dirname) => {
    return new Promise((success, fail) => {
        fs.rm(dirname, { recursive: true }, (err) => {
            if (err) {
                return fail(console.log(err.message));
            } return success(console.log('Successfully deleted directory'))
        });
    })
};

(async () => {
    try {
        await rmDir('proba');
    } catch (err) {
        console.log(err);
    }
})();

const unLink = (dirname) => {
    return new Promise((success, fail) => {
        fs.unlinkSync(dirname, (err) => {
            if (err) {
                return fail(console.log(err.message));
            } return success(console.log(`${dirname} was successfully removed`));
        });
    })
};

(async () => {
    try {
        await unLink('proba.txt');
    } catch (err) {
        console.log(err);
    }
})();


