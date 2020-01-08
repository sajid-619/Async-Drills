function getString(str) {
    console.log(str);
}
getString(`Hello World!`);

function getString(str) {
    setTimeout(() => {
        // I am a callback function
        console.log(`Hello World!`);
    }, 2000);
}
getString();

function getWords(word) {
    setTimeout(() => {
        // I am a callback function
        console.log(`Hello!`);
    }, 3000);
    setTimeout(() => {
        // I am a callback function
        console.log(`Hey!`);
    }, 2000);
    setTimeout(() => {
        // I am a callback function
        console.log(`Adios!`);
    }, 1000);
}

getWords();

function done() {
    console.log(`Job's done!`);
}

done();

function countdown(num, callback) {
    for (let i = num; i >= 1; i--) {
        setTimeout(() => {
            console.log(i);
            if (i === 1) {
                return callback();
            }
        }, 1000);
    }
}

function finalCountDown() {
    console.log('Happy New Year!')
}

countdown(10, finalCountDown);

let lunchTime = true
let orderMeSomeFood = new Promise(
    function(resolve, reject) {
        if (lunchTime === true) {
            let food = {
                lunch: "your favorite lunch",
                drink: "your favorite beverage"
            };
            resolve(food);
        } else {
            let er = new Error('Sorry! All out of sandwiches!');
            reject(er);
        }
    }
)
let order = function () {
    orderMeSomeFood.then(food => {
    console.log(food);
})
.catch(er => {
    console.log(er);
})
}

order();