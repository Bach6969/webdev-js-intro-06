// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i =", i);
        break; // Exit the loop when i equals 5
    }
    console.log("i =", i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Skipping even number", i);
        continue; // Skip the rest of the loop for even numbers
    }
    console.log("i =", i);
}
    