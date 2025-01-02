function handlePromise(isResolveFirst) {
    // Creating a promise
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isResolveFirst) {
          // Scenario 1: resolve is called before reject
          resolve({
            data: {
              name: "jhon",
              email: "jhon@gmail.com",
            },
          });
          // Any call to reject after resolve will be ignored.
        } else {
          // Scenario 2: reject is called before resolve
          reject("Internal server error");
          // Any call to resolve after reject will be ignored.
        }
      }, 3000);
    });
  
    console.log("hello mangsir group");
  
    // Handling the promise using .then() and .catch()
    promise
      .then((data) => {
        console.log("Promise resolved:", data);
      })
      .catch((error) => {
        console.log("Caught error:", error);
      });
  }
  
  // Call the function
  handlePromise(true);  // Resolves the promise
  handlePromise(false); // Rejects the promise
  