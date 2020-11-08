// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.
var arr = [2,7,-8,-6,4];

function maxMin(x){
  let max = x[0];
  let min = x[0];
  if(x.length<1){

  }
  else{
    for(i=0;i<x.length;i++){
    
      if(x[i]>max)
      max = x[i]
      if(x[i]<min)
      min = x[i]
    }
    
  }
  console.log(min)
  return max
}

console.log(maxMin(arr))