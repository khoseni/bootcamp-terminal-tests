export default function totalPhoneBill(callsAndSMS) {
    const callsAndSMSArray = callsAndSMS.split(', ');
    let callCount = 0;
    let smsCount = 0;
    
    for (const item of callsAndSMSArray) {
        if (item === 'call') {
            callCount++;
        } else if (item === 'sms') {
            smsCount++;
        }
    }

    const callCost = callCount * 2.75;
    const smsCost = smsCount * 0.65;
    const totalCost = callCost + smsCost;
    
    return 'R' + totalCost.toFixed(2);
}
