const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let string = '';

    if (expr.includes('**********')) {
        arr = expr.split('**********');
    } else {
        arr.push(expr);
    }
    
    let arrayString = [];

    for (let i = 0; i < arr.length; i++) {
        let array = [];
        for (let j = 0; j < arr[i].length; j += 10) {
            array.push(arr[i].slice(j, j + 10));
        }
        arrayString.push(array);
    }

    for (let i = 0; i < arrayString.length; i++) {
        for (let j = 0; j < arrayString[i].length; j++) {
            let wordStr = '';
            for (let k = arrayString[i][j].length - 1; 0 < k; k -= 2) {
                if (arrayString[i][j][k] === '0' && arrayString[i][j][k - 1] === '0') {
                    continue;
                } else if (
                    arrayString[i][j][k] === '0' &&
                    arrayString[i][j][k - 1] === '1'
                ) {
                    wordStr += '.';
                } else if (
                    arrayString[i][j][k] === '1' &&
                    arrayString[i][j][k - 1] === '1'
                ) {
                    wordStr += '-';
                }
            }
            string += MORSE_TABLE[wordStr.split('').reverse().join('')];
        }
        string += ' ';
    }
    return string.trim();
}

module.exports = {
    decode
};