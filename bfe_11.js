// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

var arr1 = [1,-2,-6,8,0]
var arr2 = [3,-5,-2,2,6]

function getNegatives(x){
  let z=[]
  for(i=0;i<x.length;i++){
    if(x[i]>0){
    x[i]=x[i]*-1
    z.push(x[i])
    }
    else if(x[i]<0){
    x[i]=x[i]*1
    z.push(x[i])
    }
    else{
      x[i]=0
    z.push(x[i])
    }
  }
  return z
}

console.log(getNegatives(arr1))
console.log(getNegatives(arr2))