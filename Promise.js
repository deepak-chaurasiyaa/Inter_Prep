// A Promise is an object that represents the eventual completion (fulfilled) or failure (rejected) of an asynchronous operation.

// Promises have three primary states:
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled (Resolved): The operation was completed successfully.
// Rejected: The operation failed.

// Example:

// Example of a Promise in JavaScript

const Hi = () => {
  return new Promise((resolve, reject) => {
    const isResolved = false; // Simulating success/failure condition
    if (isResolved) {
      resolve('Promise resolved successfully!'); // Passing data on success
    } else {
      reject('Promise failed!'); // Passing an error message on failure
    }
  });
};

// Handling the Promise
Hi()
  .then((message) => {
    console.log(message); // Logs "Promise resolved successfully!" if resolved
  })
  .catch((error) => {
    console.error(error); // Logs "Promise failed!" if rejected
  });

// Execution Flow
// The Hi function is called and returns a Promise.
// The isResolved condition determines if the Promise is resolved or rejected.
// If isResolved is true, resolve() is called with a success message.
// If isResolved is false, reject() is called with an error message.
// The .then() block executes if the Promise resolves successfully.
// The .catch() block executes if the Promise is rejected.
