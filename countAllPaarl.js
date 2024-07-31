export default function countAllPaarl(reg) {
    const regNumArray = reg.split(',').map(regNum => regNum.trim());
    let count = 0;
    for (let i = 0; i < regNumArray.length; i++) {
        if (regNumArray[i].startsWith('CJ')) {
          
            count++;
        }
    }
    return count;
}