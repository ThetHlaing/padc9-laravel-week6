async function execute() {

    const result2 = await promiseFunction(1)
        .then((result) => promiseFunction(result))
        .then(finalresult => finalresult)
        .catch((error) => { console.log(error) });

    console.log("result variable = ", result2);
       
    return result2;

}

function promiseFunction(input) {
    const result = input + 1;
    return Promise.resolve(result);
}


execute();