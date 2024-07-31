export default function countAllFromTown(reg, town) {
    const regNumArray = reg.split(',').map(regNum => regNum.trim());
       
    let count = 0;
    for (let i = 0; i < regNumArray.length; i++) {
        if (regNumArray[i].startsWith(town)) {
            count++;
        }
    }
    
    return count;
}