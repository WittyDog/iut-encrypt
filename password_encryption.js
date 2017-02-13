'use strict';

const crypto = require('crypto');

let password_encryption = {

    encodeSha1: function(value) {
        if (typeof value !== 'string')
            return false;

        let hash = crypto.createHash('sha1');
        hash.update(value);

        return hash.digest('hex');
    }
};

module.exports = password_encryption;