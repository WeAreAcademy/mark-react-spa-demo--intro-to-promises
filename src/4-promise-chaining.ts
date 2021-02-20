import sleep from "./helpers/sleep";

function printWithDelay(message: string) {
  console.log("START of function body");

  const promiseOne = sleep(2000);
  const promiseTwo = promiseOne.then(() =>
    console.log("resolved first promise")
  );
  const promiseThree = promiseTwo.then(() =>
    console.log("resolved second promise", message)
  );
  promiseThree.then(() => console.log("resolved third promise"));

  console.log("END of function body");
}

// function printWithDelay(message: string) {
//   console.log("START of function body");

//   const promiseOne = sleep(2000);
//   promiseOne
//     .then(() => console.log("resolved first promise"))
//     .then(() => console.log("resolved second promise", message))
//     .then(() => console.log("resolved third promise"));

//   console.log("END of function body");
// }

printWithDelay("hello world!");