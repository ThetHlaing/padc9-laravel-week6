function execute() {
    const result = divide(4, 1)
        .then(data => sum(0, 2))
        .then(data => console.log("Sum result", data))
        .catch(error => console.log("Error is ", error))

    result.then(data => console.log(data));
    console.log("result var = ", result);
}

function divide(firstNumber, secondNumber) {
    return new Promise((resolve, reject) => {
        if (secondNumber !== 0) {
            const result = firstNumber / secondNumber;
            resolve(result);
        }
        else {
            reject("Divided by zero");
        }

    });
}

function sum(firstNumber, secondNumber) {
    return new Promise((resolve, reject) => {
        if (firstNumber !== 0) {
            resolve(firstNumber + secondNumber);
        }
        else {
            reject("First number shouldn't be zero");
        }
    })
}

//Create a sum function with promise
//Reject the promise if any input is zero


execute();
