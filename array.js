// Write a code snippet to find the length of an array.

var arr=[1,2,3,4,5]
console.log(arr.length);


// How do you add an element to the end of an array?
var arr0=[1,2,3,4,5];
arr0.push(6)
console.log(arr0);

// How do you remove the last element from an array?
var arr1=[1,2,3,4,5];
arr1.pop()
console.log(arr1);

// How do you add an element to the beginning of an array?

var arr2=[1,2,3,4,5];
arr2.unshift(0)
console.log(arr2);

// How can you remove the first element from an array?

var arr3=[1,2,3,4,5];
arr3.shift()
console.log(arr3);

// How do you reverse the elements in an array?

var arr4=[1,2,3,4,5];
arr4.reverse()
console.log(arr4);

// How can you find the index of a specific value in an array?

var arr5=[1,2,3,4,5];
console.log(arr5.indexOf(1));

// How can you check if a certain value exists in an array?

var arr6=[1,2,3,4,5];
console.log(arr6.includes(1));

// How can you sort the elements of an array in ascending order?

var arr7=[5,4,3,2,1]
arr7.sort()
console.log(arr7);

// How can you convert an array to a string using commas as separators?

var arr8=[1,2,3,4,5];
console.log(arr8.join(','));

//Write a code snippet that adds an element to the end of an array, then removes the first element.

var arr9=[1,2,3,4,5];
arr9.push(6)
console.log('adds element to the end of array:',arr9);
arr9.shift()
console.log('removes the first element of array: ',arr9);

// How can you reverse an array and then join the elements into a string?
var arr10=[1,2,3,4,5];
console.log(arr10.reverse().join(','));

//Write a code that first sorts an array in ascending order, then removes the last element.

var arr11=[2,4,3,5,1];
var sorting=arr11.sort()
console.log(sorting,'removed last elemengt',sorting.pop());

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?

var arr12=[1,2,3,4,5];
arr12.unshift(-1,0)
arr12.shift()
console.log(arr12);
console.log(arr12.length);

// How do you combine two arrays, sort the combined array, and then remove the last element?
var arr13=[6,7,8,9];
var arr14=[1,2,3,4,5];
var arr15=arr13.concat(arr14).sort()
console.log(arr15,arr15.pop());

