// Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
var arr1 = [3,1,6,4,2]
var arr2 = [4,8,6,5]

function invert(x){
  
  for(i=0;i<x.length/2;i++){
    first=x[i]
    last=x[x.length-1-i]
    x[i]=last
    x[x.length-1-i]=first
  }
  return x
}

console.log(invert(arr1))
console.log(invert(arr2))