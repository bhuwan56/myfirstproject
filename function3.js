let users = [" santosh", "ram", "jasmine", "ganga", "mandeep", "bhuwan"];

const showAlert = (type, message) => {
  console.log(`${type}: ${message}`);
};

const signUp = (name) => {
  const registerUser = users.find(
    (c) => c.trim().toLowerCase() === name.trim().toLowerCase()
  );
  if (registerUser) {
    console.log("Registered user:", registerUser.trim());
    showAlert("Success", "Login successful");
  } else {
    console.log("User not registered:", name.trim());
    showAlert("Warning", "Invalid credentials");
  }
};

// Test the signUp function
signUp("  SANTOSH"); // Case-insensitive match
signUp("ram");       // Exact match
signUp("Unknown");   // No match
