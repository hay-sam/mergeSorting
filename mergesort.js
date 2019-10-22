function split(wholeArray) {
  if(wholeArray.length < 2){
    return wholeArray;
  }
  /* your code here to define the firstHalf and secondHalf arrays */
  let midIndex = Math.ceil(wholeArray.length/2)
  let firstHalf = wholeArray.slice(0,midIndex)
  let secondHalf = wholeArray.slice(midIndex)


  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  let mergedArr = [];
  while((arr1.length + arr2.length) > 0){
      if(arr1.length === 0){
        mergedArr.push(arr2.shift())
      }else if (arr2.length === 0){
        mergedArr.push(arr1.shift())
      }else{
        (arr1[0] <= arr2[0])? mergedArr.push(arr1.shift()):mergedArr.push(arr2.shift())
      }

  }

  return mergedArr
}


function mergeSort(array) {
  //console.log("im the whole array",array)
  if(array.length === 0){
    return array;
  }
  else if(array.length === 1){
    return array;
  }
  else{
    let splitArr = split(array)
    let firstHalf = splitArr[0]
    // console.log("first half pre recursive",firstHalf)
    firstHalf = mergeSort(firstHalf)
    // console.log("first half post recursive",firstHalf)

    let secondHalf = splitArr[1]
    // console.log("second half pre recursive",secondHalf)
    secondHalf = mergeSort(secondHalf)
    // console.log("second half post recursive",secondHalf)
    return merge(firstHalf,secondHalf)
  }
  /* your code here */

}



