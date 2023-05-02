function solution(numbers) {
  let max = 0;
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
            if(numbers[i]*numbers[j]>max){
                max=numbers[i]*numbers[j]
            }
        }
    }
    console.log(max)
         return max
}