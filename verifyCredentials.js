module.exports = verify;

function verify(credentials, cb) {
    if (!credentials.name) {
        return cb(null, {verified: false});
    }

    cb(null, {verified: true});
}

