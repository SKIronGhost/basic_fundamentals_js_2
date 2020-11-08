// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

var arr1 = [2,35,6,-7,9];
var arr2 = [2,-8,-3,-5,9];
var arr3 = [1];

function printValues(x){
  let penultimate = x[x.length-2];
  if(x.length==1){
    return "It can't be executable"
  }
  else{
    console.log(penultimate)
    for(i=0;i<x.length;i++){
      if(x[i]%2==1 || x[i]%2==-1)
      return x[i]
    }
    console.log(penultimate)
  }
  
}

console.log(printValues(arr1))
console.log(printValues(arr2))
console.log(printValues(arr3))