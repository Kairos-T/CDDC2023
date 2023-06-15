/**
 * Convert charCode array to hex string
 * @param   {array}  target - A target text(charCode array)
 * @returns {string}        - A hex string
 */
function CharCodeArrToHexString(target) {
    let result = "";

    target.forEach(charCode => {
        result += ("00" + charCode.toString(0x10)).slice(-2);
    });

    return result;
}

/**
 * Xor plain using key
 * @param   {array} plain - A plain text(charCode array)
 * @param   {array} key   - A key text(charCode array)
 * @returns {array}       - A encoded text(charCode array)
 */
function xor(plain, key) {
    let encoded = [];

    for (let i = 0; i < plain.length; i++)
        encoded.push(plain[i] ^ key[i % key.length]);

    return encoded;
}

/**
 * Generate random key
 * @param   {int}    keyLen - A length of key
 * @returns {string}        - A key
 */
function generateKey(keyLen) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charsLen = chars.length;

    let key = "";

    for (let i = 0; i < keyLen; i++)
        key += chars.charAt(Math.floor(Math.random() * charsLen));

    return key;
}

/**
 * Convert string to charCode(int) array
 * @param   {string} target - A string value
 * @returns {array}         - A charCode array
 */
function stringToCharCodeArr(target) {
    let arr = [];

    for (let i = 0; i < target.length; i++)
        arr.push(target.charCodeAt(i));

    return arr;
}

/**
 * Encode plain text
 * @param   {string} plain  - A plain text
 * @param   {int}    keylen - A length of key
 * @returns {string}        - A encoded text
 */
function encode(plain, keyLen) {
    let key = generateKey(keyLen);

    let plainArr = stringToCharCodeArr(plain);
    let keyArr = stringToCharCodeArr(key);

    encodedArr = xor(plainArr, keyArr);

    return CharCodeArrToHexString(encodedArr);
}


