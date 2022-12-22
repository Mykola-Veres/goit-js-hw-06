const chooseOptimalDistanc = (t, k, ls) => {
  // твій код

  // return null;
}


// function chooseOptimalDistance (t, k, ls) {
//   const result = [];
//   if (ls.length < k) {
//     return null;
//   }  
//   ls = ls.sort((a, b) => a - b);

//   for (let i = 0; i < ls.length - k-1; i++) {    
//     if (ls[i] > t) {
//       break;
//     }
//     if (i > 0 && ls[i] === ls[i - 1]) {
//       continue;
//     }
//     let j = i + 1;
//     let l = ls.length - 1;

//     while (j < l) {
//       let sum = ls[i] + ls[j] + ls[l];
  
//       if (sum <= t) {
//         let summ = 0;
//         if (summ < sum) {
//         summ = sum
//         result.splice(0, result.length)
//         result.push([ls[i], ls[j], ls[l]])
//         }
//         j++;
//         continue;
//       }
//       if (sum > t) {        
//         l--;
//         continue;
//       }
//     }
//   }  
//   console.log("ss", result)
//   return result;
// };
// console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]));
// console.log(chooseOptimalDistance(163, 3, [50]))
// console.log(chooseOptimalDistance(163, 2, [50]))




function chooseOptimalDistance (t, k, ls, time = 1) {
  let result = [];
  if (ls.length < k) {
    return null;
  }    
  time = time + 1; 
  let summ = 0;

    k-1
  
    for (let i = 0; i < ls.length; i++) {      
            
        if (ls[i] <= t) {       
        if (summ < ls[i]) {
        result = [];
        summ = ls[i]        
        result.push([ls[i]])
        }         
        }              
       
  }  

  if (time < k) {
    for (let i = 0; i < ls.length; i++) {      
     let sum = ls[i] + ls[i+1];
      if (sum <= t) {       
      if (summ < sum) {
      result = [];
      summ = sum        
      result.push([ls[i] + ls[i+1]])
      }         
      }           

}  

    // chooseOptimalDistance (t, k, ls, time)
  }
  
  return result;
};



console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61, 9, 200]));
console.log(chooseOptimalDistance(163, 3, [50]))
console.log(chooseOptimalDistance(163, 2, [50]))

