// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

var arr = [-2,4,6,-5,-8,0,2,7,8,12]

function countPositives(x){
  let sum = 0
  for(i=0;i<x.length;i++)
  if(x[i]>0){
    sum++
  }
  x[x.length-1] = sum
  return arr
}

console.log(countPositives(arr))