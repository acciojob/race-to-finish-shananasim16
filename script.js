window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
window.promises = [];

// Function to create a promise that resolves after a random time between 1 and 5 seconds
function createPromise() {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Resolved after ${randomTime} seconds`);
        }, randomTime * 1000);
    });
}

// Add promises to the array `promises`
window.promises.push(
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise()
);

// Use Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
    .then(result => {
        // Print the result in the output div
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error('Error:', error);
    });

