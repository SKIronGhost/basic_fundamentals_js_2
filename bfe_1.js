// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

var array = [-1,3,5,-5]

function big(x){
  for(i=0;i<x.length;i++){
    if(x[i]>0){
      x[i]="big"
    }
  }
  return x
}

console.log(big(array))