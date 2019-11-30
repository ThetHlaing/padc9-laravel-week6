function execute() {
    
    const result2 = promiseFunction(1)
        .then((result) => promiseFunction(result))
        .then(finalresult => {
            console.log('inside promise', finalresult);
            return finalresult;
        }).catch((error) => { console.log(error) });

    console.log("result variable = ", result2);

    return result2;

}

function promiseFunction(input) {
    const result = input + 1;
    return Promise.resolve(result);
}


console.log(execute());