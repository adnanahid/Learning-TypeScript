// type ProgressCallback = () => void;
// type EnrollCallback = () => void;

// const enroll = (payment: boolean, callback: EnrollCallback): void => {
//   console.log("Course enrollment is in progress");
//   setTimeout(() => {
//     if (payment) {
//       callback();
//     } else {
//       console.log("payment failed");
//     }
//   }, 1000);
// };

// const progress = (marks: number, callback: ProgressCallback) => {
//   console.log("Course on progress");
//   setTimeout((): void => {
//     if (marks >= 80) {
//       callback();
//     } else {
//       console.log("You didn't get enough marks to get a certificate.");
//     }
//   }, 1000);
// };

// const getCertificate = (name: string) => {
//   console.log("preparing your certificate");
//   setTimeout(() => {
//     console.log(`Congrats ${name}! You got the certificate`);
//   }, 1000);
// };

// enroll(true, function () {
//   progress(70, function () {
//     getCertificate("Adnan");
//   });
// });

function enroll(payment) {
  console.log("Course enrollment is in progress");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment) {
        resolve();
      } else {
        reject("Payment failed");
      }
    }, 1000);
  });
}

function progress(marks) {
  console.log("Course in progress");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You didn't get enough marks to get a certificate.");
      }
    }, 1000);
  });
}

function getCertificate(name) {
  console.log("Preparing your certificate...");
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(`Congrats ${name}! You got the certificate`);
      resolve();
    }, 1000);
  });
}

// Using .then() and .catch()
enroll(true)
  .then(() => progress(85))
  .then(() => getCertificate("Adnan"))
  .catch((err) => console.log(err));

// 🔹 Problem: 01
// Create a function delayLog(message, delay) that logs a message after a given delay using Promises.
// Expected Usage:
// delayLog("Hello after 2 seconds", 2000);
// const delayLog = (msg, sec) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(msg);
//       resolve();
//     }, sec);
//   });
// };

// 🔹 Problem 2: Basic Chain
// Write three functions step1(), step2(), and step3() that return Promises and log their step. Chain them using .then().

// Expected Output:
// vbnet
// Copy
// Edit
// Step 1
// Step 2
// Step 3

// const step1 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("step 1");
//     resolve();
//   });
// };
// const step2 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("step 2");
//     resolve();
//   });
// };
// const step3 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("step 3");
//     resolve();
//   });
// };

// step1()
//   .then(() => step2())
//   .then(() => step3());

// 🔹 Problem 3: Reject a Promise
// Create a Promise that randomly either resolves with "Success" or rejects with "Failed". Catch the error properly.

// Hint:
// Use Math.random()

// const either = () => {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Success");
//     } else {
//       reject(new Error("Failed"));
//     }
//   });
// };

// either()
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
