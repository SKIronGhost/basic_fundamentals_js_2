// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
var arr = [1,2,3,4,5,6]

function double(x){
  let z = []
  for(i=0;i<x.length;i++){
    x[i] = x[i] + x[i];
    z.push(x[i])
  }
  console.log(z)
}

console.log(double(arr))