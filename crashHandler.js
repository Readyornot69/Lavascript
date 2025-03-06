
// crashHandler.js

// Function to run code and catch crashes
function runWithCrashHandler(func) {
  try {
    func();  // Attempt to run the provided function
  } catch (error) {
    handleCrash(error);  // If an error occurs, handle it gracefully
  }
}

// Handle crashes and display relevant information
function handleCrash(error) {
  const errorDiv = document.getElementById('error');
  const timestamp = new Date().toISOString(); // Get the current timestamp

  // Display a friendly error message to the user
  errorDiv.textContent = `An error occurred: ${error.message}`;

  // Log the error details in the console for debugging
  console.error(`Error Timestamp: ${timestamp}`);
  console.error(`Error Message: ${error.message}`);
  console.error(`Stack Trace: ${error.stack}`);

  // Optionally, you can send the error details to a server for remote logging
  // sendErrorToServer(error);
}

// Optional: Send error data to a server for logging (if required)
function sendErrorToServer(error) {
  fetch('/log-error', {
    method: 'POST',
    body: JSON.stringify({ 
      timestamp: new Date().toISOString(),
      errorMessage: error.message, 
      stack: error.stack 
    }),
    headers: { 'Content-Type': 'application/json' }
  });
}
