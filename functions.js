// let a = "10";
// let b = 20;
// console.log(a + b);

// function xyz(name) {
//   return `hello ${name}`;
// }
// const result = xyz("jhon");
// console.log(result);

function add(x, y) {
    return x + y;
  }
  const additonValue = add(10, 20);
  console.log(additonValue);
  
  setTimeout(() => {
    console.log("hello world");
  }, 2000);
  
  console.log("log from buttom");
  
  function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
  let finalSum = sum(1, 2, 3);
  console.log(finalSum);
  
  try {
    let firstName = "Rohan";
    let lastName = "Poudel";
    let fullName = firstName1 + " " + lastName;
    console.log(fullName);
  } catch (error) {
    console.log("this is error", error.message);
  }
  //traditional function
  function add1(x, y) {
    return x + y;
  }
  const additonValue1 = add(10, 20);
  console.log(additonValue);
  //arrow function
  const add2 = (x, y) => {
    return x + y;
  };
  const additonValue2 = add(20, 20);
  console.log(additonValue2);
  
  function helloWorld() {
    let message = " hello , world";
    setTimeout(() => {
      console.log(message);
    }, 4000);
  }
  helloWorld();
  
  const showAlert = (type, message) => {
    console.log(`${type}: ${message}`);
  };
  
  let users = [" santosh", "ram", "jasmine", "ganga", "mandeep", "bhuwan"];
  
  const signUp = (name) => {
    const registerUser = users.find((c) => c.trim() === name.trim());
    if (registerUser) {
      console.log("register user", registerUser);
      showAlert("success", "login successfull");
    } else {
      console.log("user not register", "sorry");
      showAlert("Warning", "invalid credential");
    }
  };
  signUp("  santosh");