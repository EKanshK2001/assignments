/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {

    const time1 = new Date();
    const time1ms = time1.getTime();
    // console.log(time1ms);

    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i;
    }

    const time2 = new Date();
    const time2ms = time2.getTime();
    // console.log(time2ms);
    
    const diff = time2ms - time1ms;
    return diff;
}

console.log(calculateTime(10) + 'ms');
console.log(calculateTime(100) + 'ms');
console.log(calculateTime(1000) + 'ms');
console.log(calculateTime(10000) + 'ms');
console.log(calculateTime(100000) + 'ms');
console.log(calculateTime(1000000) + 'ms');
console.log(calculateTime(10000000) + 'ms');
console.log(calculateTime(100000000) + 'ms');
console.log(calculateTime(1000000000) + 'ms');
console.log(calculateTime(10000000000) + 'ms');