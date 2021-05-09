const Actualize = (msg, counter) => {
    if (msg == '+'){
        Actualize_View(counter + 1);
    }
    else if (msg == '-'){
        Actualize_View(counter - 1);
    }

}