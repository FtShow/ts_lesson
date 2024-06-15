export const wait = (time: number) =>{
    return setTimeout(()=>{

    }, time)
}
console.log('12121')
async function run(){

    await wait(1000)
    await wait(1000)
    await wait(1000)
}

run()