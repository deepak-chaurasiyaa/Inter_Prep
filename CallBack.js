// In JavaScript, a Callback is a function passed to another function as an argument.
// When the main function completes its execution, it executes the callback function.

// Example:

const greet = (callbackFunction) => {
  setTimeout(function Hi() {
    console.log('Hi');
    const Name = 'Deepak';
    callbackFunction(Name); // The callback is executed after "Hi" is logged
  }, 2000);
};

const hello = (name) => {
  console.log('Hello ' + name);
};

greet(hello);

// Output (after 2 seconds):
// Hi
// Hello Deepak

// Explanation of Execution:
// greet(hello) is called.
// Inside greet, setTimeout schedules the Hi function to execute after 2 seconds.
// Once the 2 seconds pass, "Hi" is printed, and then the callbackFunction(Name) is called with Name as an argument.
// The hello function is executed, printing "Hello Deepak".
