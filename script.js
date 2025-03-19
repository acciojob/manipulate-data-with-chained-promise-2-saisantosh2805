// function getNumbers() {
//   // Returns a promise that resolves with an array of numbers
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4]);
//     },3000);
//   });
// }

// getNumbers()
//   .then((numbers) => {
//     // First promise: filter out odd numbers after 1 second
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const evenNumbers = numbers.filter(num => num % 2 === 0);
//         document.getElementById("output").textContent = evenNumbers.join(",");
//         resolve(evenNumbers);
//       },3000); // Delay of 1 second
//     });
//   })
//   .then((evenNumbers) => {
//     // Second promise: multiply even numbers by 2 after 2 seconds
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const multipliedNumbers = evenNumbers.map((num) => num * 2);
//         document.getElementById("output").textContent =
//           multipliedNumbers.join(", ");
//         resolve(multipliedNumbers);
//       }, 2000); // Delay of 2 seconds
//     });
//   })
//   .catch((err) => console.error(err));

function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

manipulateArray()
    .then((array) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                document.getElementById("output").textContent = evenNumbers.join(",");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                document.getElementById("output").textContent = doubledNumbers.join(",");
                resolve(doubledNumbers);
            }, 2000);
        });
    });