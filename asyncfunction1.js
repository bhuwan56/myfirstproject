// promise (resolve , reject)
// , callbacks

// Function to handle the promise using async/await and try-catch
async function handlePromise() {
    try {
      // Creating a promise
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Internal server error"); // Rejecting the promise
          resolve({
            data: {
              name: "jhon",
              email: "jhon@gmail.com",
            },//resolve can be ignored because reject can called first..
          });
        }, 3000);
      });
  
      console.log("helllo mangsir group");
  
      // Await the resolution or rejection of the promise
      let data = await promise;
      console.log("Promise resolved:", data);
    } catch (error) {
      // Catch block to handle errors
      console.log("Caught error:", error);
    }
  }
  
  // Call the function
  handlePromise();
  