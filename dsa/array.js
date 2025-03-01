// delete, add & update elements from a specific index?

let arr = [1, 2, 5, 3, 4, 7, 1, 9];

// Deletion of an element

arr.splice(2, 2); // Removes element from index first parameter to number of item passed as second param to remove

console.log(arr); //[1, 2, 4, 7, 1, 9];

// Add Item at specific index

arr.splice(2, 0, 5, 3);
console.log(arr);
