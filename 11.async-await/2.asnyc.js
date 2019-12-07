  
    function functionA(){
        return new Promise((resolve,reject)=>{
            resolve(1);
        });
    }


    async function functionB(){
        return 1;
    }

    function functionC(){
        return 1;
    }

    console.log(functionA().then(data => console.log('this is data',data)));
    console.log(functionB().then(data => console.log('this is data',data)));
    console.log(functionC());