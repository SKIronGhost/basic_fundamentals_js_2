// Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 

var arr = [1,-6,-3,4,0,6,7]

function addSeconds(x){
  for(i=0;i<x.length;i++)
  if(i%2==1){
    x[i]++
    console.log(x[i])
  }
  return x
}

console.log(addSeconds(arr))