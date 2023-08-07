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
function decodeOneChar(tenExpr) {
   let resStr= '';
   let tenNum = tenExpr.slice(0,10);
   if (tenNum === '**********') {return resStr+=" "}
   for (i = 0; i < tenNum.length; i = i + 2) {
      if ((tenNum[i] + tenNum[i + 1]) === '10') {resStr+="."}
      if ((tenNum[i] + tenNum[i + 1]) === '11') {resStr+="-"}
   }
   return MORSE_TABLE[resStr];
}

function nArr(str) {
   let res = ""
   for (let i = 0; i < str.length; i = i + 10) {
      res += `${str.substring(i,i + 10)} `;
   }
   return res.split(" ")
}

function decode(expr) {
   let res = nArr(expr);
   let resStr = res.map (x => decodeOneChar(x));
   return resStr.join("");
}

module.exports = {
    decode
}