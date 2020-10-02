
exports.min = function min (array) {
  if(array===null||array===undefined)
  return 0;
  let min=0;
  for(let i=0;i<array.length;i++ )
  {
let buff=array[i];
if(buff<min) min=buff;
  }
  return min;
}

exports.max = function max (array) {
  if(array===null||array===undefined)
  return 0;
  let max=0;
  for(let i=0;i<array.length;i++ )
  {
let buff=array[i];
if(buff>max) max=buff;
  }
  return max;
}

exports.avg = function avg (array) {
  
  if(!(Array.isArray(array) && array.length > 0)) return 0;
  let sum=0;
  for(let i=0;i<array.length;i++ )
  {
sum=sum+array[i];
  }
  return sum/array.length;
}
