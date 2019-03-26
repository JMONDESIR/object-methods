// const mustang = {
//         color: "Midnight Blue",
//         year: 1976,
//         length: 120,
//         width: 62,
//         height: 47
// }

// const allCars = [
//         {
//             model: "Mustang",
//             color: "Midnight Blue",
//             year: 1976,
//             length: 120,
//             width: 62,
//             height: 47
//         },
//         {
//             model: "Xterra",
//             color: "Forest Green",
//             year: 2011,
//             length: 144,
//             width: 71,
//             height: 55
//         },
//         {
//             model: "Thunderbird",
//             color: "Red",
//             year: 2005,
//             length: 115,
//             width: 58,
//             height: 42
//         },
//         {
//             model: "Suburban",
//             color: "Grey",
//             year: 2015,
//             length: 149,
//             width: 73,
//             height: 58
//         }
// ]

const outputElement = document.querySelector("#app")

// // Iterate the array of cars. Individual objects stored in `car`.
// allCars.forEach(car => {
// console.log(car.model)
//     // Iterate all of the values of the current car
//         for (const value of Object.values(car)) {
//             console.log(value)
//       outputElement.innerHTML += `<div>${value}</div>`
//     }
// })

// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
        officeName: "DooLittle's Office",
        streetAddress: "2603 Church Avenue",
        doctorName: "Dr. DooLittle M.D.",
        patientName: "Amy Purint",
        visitDate: "03/25/2019",
        amountBilled: 1204.46,
        amountBilled: "06/31/2019"
}
console.log(doctorBill)

// Lightning Exercise 2: Copy the code below and paste it above your object.

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// Use square bracket notation to output the value of those three properties to the console in Chrome.

console.log(doctorBill[dateVisited])
console.log(doctorBill[owed])
console.log(doctorBill[patient])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.


// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

for (const taco of Object.keys(doctorBill)) {
        console.log(taco)
        // Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
        outputElement.innerHTML += `<section><span>${taco}</span></section><hr>`
        }
