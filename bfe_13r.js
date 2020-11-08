// Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

var arr1 = [true,42,"Ada",2,"pizza"]
var arr2 = [1,2,3,4,5,6]

function invert(x){
  
  for(i=0;i<x.length/2;i++){
    if(i%2==0){
    first=x[i]
    last=x[x.length-1-i]
    x[i]=last
    x[x.length-1-i]=first
    }
  }
  return x
}

console.log(invert(arr1))
console.log(invert(arr2))