describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2])).toEqual([[1],[2]])
    expect(split([1,55,4, 2])).toEqual([[1,55],[4,2]])
    expect(split([1,55,4])).toEqual([[1,55],[4]])
    expect(split([1])).toEqual([1])
  });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1],[2])).toEqual([1,2])
    expect(merge([1,5,19],[2,3,42])).toEqual([1,2,3,5, 19,42])

  });
  it('is able to merge two sorted arrays of unequal length into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,5],[2])).toEqual([1,2,5])
    expect(merge([1,5],[2,3,42,900])).toEqual([1,2,3,5, 42,900])
    expect(merge([2,42],[19])).toEqual([2,19,42])

  });
});

describe('MergeSort function', function(){
  // it('returns if the array is empty', function(){
  //   // test the merging algorithm
  //   expect(mergeSort([])).toEqual([])

  // });
  // it('returns the array if its only one item', function(){
  //   // test the merging algorithm
  //   expect(mergeSort([2])).toEqual([2])


  //});
  it('returns a sorted array of any length', function(){

    // expect(mergeSort([2,42,19,7,5])).toEqual([2,5,7,19,42,])
    // // test the merging algorithm
    // expect(mergeSort([2,42,19,7,24,100])).toEqual([2,7,19,24,42,100])
    // expect(mergeSort([2,42,19,7,24,100,1])).toEqual([1,2,7,19,24,42,100])
    // expect(mergeSort([2,42,19,7,24,100,1])).toEqual([1,2,7,19,24,42,100])
    expect(mergeSort([900,2,42,19,1000,7,3,24,100,1,223])).toEqual([1,2,3,7,19,24,42,100,223,900,1000])


  });
});
