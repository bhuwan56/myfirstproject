async function handlePromise(isResolveFirst) {
    try {
      // Creating a promise
      const promise = new Promise((resolve, reject) => {
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
  
      // Await the resolution or rejection of the promise
      const data = await promise; // Resolves or throws an error.
      console.log("Promise resolved:", data);
    } catch (error) {
      // Catch block to handle errors
      console.log("Caught error:", error);
    }
  }
  
  // Call the function
  handlePromise(true);  // Resolves the promise
  handlePromise(false); // Rejects the promise


  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then((data)=>console.log("fetch data",data))
  .catch((error)=>console.log("fetching error",error));

  