export const range=(min,max)=>{return Array.from({length:max-min+1},(_,i)=>min+i)};

export const random=(min,max)=>min+Math.floor(Math.random()*(max-min+1));
export const sum=(arr)=>arr.reduce((acc,curr)=>curr+acc,0);

export const randomSum=(arr,max)=>{
  const sets=[[]];
  const sums=[];
  for(let i=0;i<arr.length;i++){
    for(let j=0,len=sets.length;j<len;j++){
      const candidateSet=sets[j].concat(arr[i]);
      const candidateSum=sum(candidateSet);
      if(candidateSum<=max){
        if(arr.includes(candidateSum)){
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
  }
  return sums[random(0,sums.length-1)];
}
// export const randomSum=(arr,max)=>{
//     const sets = [[]];
//     const sums = [];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0, len = sets.length; j < len; j++) {
//         const candidateSet = sets[j].concat(arr[i]);
//         console.log(candidateSet)
//         const candidateSum = sum(candidateSet);
//         if (candidateSum <= max) {
            
//           if(arr.includes(candidateSum)){
//             sets.push(candidateSet);
//             sums.push(candidateSum);
//           }
          
//         }
//       }
//     }
//     console.log(sets);
//     console.log(sums)
//     return sums[random(0, sums.length - 1)];
    
    // console.log("lllllllllllllllll",arr)
    // const sets=[[]];
    // const sums=[];
    // for(let i=0;i<arr.length;i++){
    //     for(let j=0,len=sets.length;j<len;j++){
    //         const candidateSet=sets[j].concat(arr[i]);
    //         console.log("candidateSet",candidateSet);
    //         const candidateSum=sum(candidateSet);
    //         console.log("candidateSum",candidateSum);
    //         if(candidateSum<=max){
    //             sets.push(candidateSet);
    //             sums.push(candidateSum)
    //         }
    //         console.log("sets",sets);
    //         console.log("sums",sums);
    //     }
    // }
    // return sums[random(0,sums.length)];
//};