// async: Declares a function as asynchronous. It ensures that the function always returns a Promise, even if it returns a non-Promise value.

// await: Pauses the execution of the async function until the Promise is resolved or rejected. It can only be used inside async functions.

// Purpose: By combining async and await, asynchronous code becomes easier to read and maintain because it looks similar to synchronous code.

// Example
async function fetchData() {
  try {
    // Simulating an asynchronous operation using a Promise
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Fetched Data"), 1000); // Resolves after 1 second
    });

    console.log(response); // Logs the resolved value: "Fetched Data"
  } catch (error) {
    console.error("Error:", error); // Logs any errors if the Promise is rejected
  }
}

// Calling the async function
fetchData();

// Output (after 1 second):
// Fetched Data


// Key Points to Mention in an Interview:
// Error Handling: Always wrap await calls inside a try...catch block to handle rejected Promises.
// Chaining Promises: Highlight that async/await simplifies chaining multiple asynchronous operations.
// Mixing: You can still use .then() and .catch() with async functions if needed.