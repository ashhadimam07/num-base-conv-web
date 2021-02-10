const bin = document.querySelector('#binary');
const dec = document.querySelector('#decimal');
const oct = document.querySelector('#octal');
const hex = document.querySelector('#hex');

function binaryToNum() {
    const b = parseInt(bin.value, 2) || 0;
    dec.value = b;
    oct.value = b.toString(8);
    hex.value = b.toString(16).toUpperCase();
}

bin.addEventListener('input', binaryToNum);
binaryToNum();

function decimalToNum() {
    const d = parseInt(dec.value, 10) || 0;
    bin.value = d.toString(2);
    oct.value = d.toString(8);
    hex.value = d.toString(16).toUpperCase();
}
dec.addEventListener('input', decimalToNum);
decimalToNum();

function octalToNum() {
    const o = parseInt(oct.value, 8) || 0;
    bin.value = o.toString(2);
    hex.value = o.toString(16).toUpperCase();
    dec.value = o.toString(10);
}
oct.addEventListener('input', octalToNum);
octalToNum();

function hexToNum() {
    const h = parseInt(hex.value, 16) || 0;
    bin.value = h.toString(2);
    oct.value = h.toString(8);
    dec.value = h.toString(10);
}
hex.addEventListener('input', hexToNum);
hexToNum();
