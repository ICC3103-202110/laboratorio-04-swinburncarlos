var prompt = require('prompt-sync')({sigint: true});

function view(counter){
    return('Counter = '+counter+' \n\n (+) (-) \n\n (q) for quit \n\n What would you like to do? \n\n')
}

function update(msg, counter) {
    if (msg === '+'){
        return counter + 1 ;
    }
    else if (msg === '-'){
        return counter - 1 ;  
    }
}

function app (counter) {
    while(true){
        const currentView = view(counter);
        console.clear();
        console.log(currentView);
        const msg = prompt('input + or - : ');
        if (msg === 'q')
            break;
        counter = update(msg, counter);
    }
}

app(0)


