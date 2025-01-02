// Function to handle the promise using async/await and try-catch
async function handlePromise() {
    try {
      // Creating a promise
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {

          resolve({
            data: {
              name: "jhon",
              email: "jhon@gmail.com",
            },
            
          });
          reject("Internal server error");
          // Reject would be ignored since resolve is called first
        }, 3000);
      });
  
      console.log("helllo mangsir group");
  
      // Await the resolution of the promise
      let data = await promise;
      console.log("Promise resolved:", data);
    } catch (error) {
      // Catch block to handle errors
      console.log("Caught error:", error);
    }
  }
  
  // Call the function
  handlePromise();
  