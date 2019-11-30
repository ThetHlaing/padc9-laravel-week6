function execute() {
    const result = divide(4, 0)
        .then(data => console.log(data))
        .catch((error) => console.log("catched = ", error));

    sum(1, 0)
        .then(data => data)
        .then(anotherthen => console.log(anotherthen))
        .catch (error => console.log(error));
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

//Create a sum function with promise
//Reject the promise if any input is zero


execute();
