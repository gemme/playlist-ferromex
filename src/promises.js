const MyPromise1 = new Promise((success, error) => {
    setTimeout(() => {
        if(true) return success('Exito Promise1');
        return error('No funciono');
    }, 2000);
});
const MyPromise2 = (promise1) => new Promise((success, error) => {
    setTimeout(() => {
        if(true) return success(promise1 + 'Exito promise2');
        return error('No funciono promise 2');
    }, 2000);
});

const MyPromise3 =  new Promise((success, error) => {
    setTimeout(() => {
        if(true) return success('Exito promise3');
        //return error('No funciono promise 3');
    }, 3000);
});

console.log('inicie')
/* MyPromise1
    .then(success => MyPromise2(success))
    .then(success => console.log(success))
    .catch(error => console.log(error)); */
    
    /* Promise.all([
        MyPromise3,
        MyPromise1
    ])
    .then(success => console.log(success))
    .catch(error => console.log(error)); */
    // ES7
    const call = async () => {
        try{
            const value1 = await MyPromise1;
            console.log(value1);
            const value2 = await MyPromise2(value1);
            console.log(value2);
        }catch(error) {
            console.log(error);
        }
    }

    call();

console.log('termine')
