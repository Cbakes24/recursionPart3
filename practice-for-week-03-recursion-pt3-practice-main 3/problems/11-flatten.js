/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, flat = []) {
  debugger;
  if (arr.length === 0) return flat;
  debugger;
  if (Array.isArray(arr[0])) {
    flat.push(...flatten(arr[0].flat()));
    return flatten(arr.slice(1), flat);
  } else {
    flat.push(arr[0]);
    return flatten(arr.slice(1), flat);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
