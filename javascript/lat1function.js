//Web unpas

/*
var a = 8;
var b = 3;
var volumeA;
var volumeB;
var total;

volumeA = a * a * a;
volumeb = b * b * b;

total = volumeA + volumeB;

console.log(total);
*/

function jumlahVolDuakubus(a, b) {
            let volumeA;
            let volumeB;
            let total;

            volumeA = a * a * a;
            volumeB = b * b * b;

            total = volumeA + volumeB;

            return total;
    
} 

console.log(jumlahVolDuakubus(8, 3));


function kali(a, b) {
    hasilKali = a * b;
    console.log("Hasil kali a * b = " + hasilKali);
}

kali(5, 5);


function tambah(a, b) {
    return a + b; 
}

let a = parseInt(prompt('Masukan nilai 1 :'));
let b = parseInt(prompt('Masukan nilai 2 :'));
let jumlah = tambah(a, b);
console.log(jumlah);