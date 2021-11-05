function sumaRekurencja(n) {
    if(n>1) return n * sumaRekurencja(n - 1);
       else return 1;
    
}
console.log(sumaRekurencja(3));