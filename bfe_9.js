// Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

var arr = [1,4,3,21,5]

function addSeven(x){
  let arrAux = []
  let newIndex = 0
  for(i=0;i<x.length;i++){
    newIndex = x[i]+7
    arrAux.push(newIndex)
  }
  console.log(arr)
  return arrAux
}

console.log(addSeven(arr))