const view = counter => {
    return(counter);
}

const update = (msg, counter) => {
    if (msg == '+'){
        update(counter + 1);
    }
    else if (msg == '-'){
        update(counter - 1);
    }

}

//while (true);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter + or -', msg => {
    view(msg)
    //console.log(`The position ${msg} of the fibonacci sequence is ${Actualize_View(msg)}`);
    readline.close();
});

//const current_view = x => view(x);

//console.clear();
//console.log(current_view(x));

console.log(msg);


