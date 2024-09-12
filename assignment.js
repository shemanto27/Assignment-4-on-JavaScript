
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
    if(typeof obj != 'object'){
        return 'Invalid Input';
    }
    else{
        if(obj.isFFamily == true){
            obj.isFFamily = 20;
        }
        else {
            obj.isFFamily = 0;
        }
        let finalScore = obj.testScore + obj.schoolGrade + obj.isFFamily;
        
        if(finalScore >= 80){
            return true;
        }
        else {return false;}
    }
    
}




function waitingTime(waitingTimes ,serialNumber){
    if((typeof waitingTimes != 'object') || (typeof serialNumber != 'number')){
        return 'Invalid Input';
    }
    else{
        let sum = 0;
        for (let time of waitingTimes){
            sum += time;         
        }
        let average = Math.round(sum/waitingTimes.length);
        let done = waitingTimes.length;
        let beforeHer = serialNumber - 1;
        let remaining = beforeHer - done;
        let timeNeeded = remaining * average;
        return timeNeeded;
    }
}
