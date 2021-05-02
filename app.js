const {trivia, source} = require('./data.js');
const delay = 15;

const item = trivia[Math.floor(Math.random() * trivia.length)];

function sleep(delay) {
    //sleep for delay milliseconds
    return new Promise(resolve => setTimeout(resolve, delay));
}

console.log(`Trivia Category: ${item.category}\n       Question: ${item.question}\n`);
pauseForAnswer(item.answer);

async function pauseForAnswer(answer) {
    process.stdout.write(`Answer in ${delay} seconds\r`);
    for (i = 0; i < delay; i++) {
        await sleep(1000);
        process.stdout.write(`Answer in ${delay-i-1} seconds   \r`);
    }
    
    process.stdout.write(`Answer: ${answer}                    \r`);
    console.log('\n\nHope you enjoyed that question. Have a nice day!\n');

}


