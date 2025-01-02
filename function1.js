async function task1() {
    console.log("Task 1: Starting...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1: Completed!");
            resolve("Task 1 Result");
        }, 2000); // Simulates a 2-second delay
    });
}

async function task2() {
    console.log("Task 2: Starting...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2: Completed!");
            resolve("Task 2 Result");
        }, 1000); // Simulates a 1-second delay
    });
}

async function main() {
    console.log("Main Function: Starting...");

    // Wait for Task 1 to complete
    const result1 = await task1();
    console.log(`Main Function: Received "${result1}"`);

    // Wait for Task 2 to complete
    const result2 = await task2();
    console.log(`Main Function: Received "${result2}"`);

    console.log("Main Function: All tasks completed!");
}

// Execute the main function
main();
