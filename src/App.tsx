import React from 'react';
import logo from './logo.svg';
import './App.css';

export const wait = (time: number) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(true)
        }, time)
    })
}

function App() {


    async function run() {

        await wait(1000)
        console.log(1)
        await wait(1000)
        console.log(2)
        await wait(1000)
        console.log(3)
    }

    run()
    return (
        <div className="App">

        </div>
    );
}

export default App;
