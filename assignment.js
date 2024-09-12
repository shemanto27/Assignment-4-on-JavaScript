
function calculateTax(income,expenses){
    if((income <= 0 || expenses <=0) || (expenses > income)){
        return 'Invalid Input';
    }
    else{
        let tax = (income - expenses) * 0.2;
        return tax;
    }

}




function sendNotification(email){
    if(email.indexOf('@') == -1){
    return 'Invalid Email';
}
    else{
        x = email.split('@');
        let notification = `${x[0]} sent you an email from ${x[1]}`;
        return notification;
    }
}


function checkDigitsInName(name){
    if(typeof name != 'string'){
        return 'Invalid Input';
    }
    else{
        const regex = /\d/;
        return regex.test(name);
    }
}



function calculateFinalScore(obj){
    
    }


function waitingTime(waitingTimes ,serialNumber){
    
    }