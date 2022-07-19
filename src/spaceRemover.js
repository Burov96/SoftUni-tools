//informaciq za substr() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr#syntax



function spaceRemover (input){
    let index = 0;
    let current = input[index];
    let total = input.length;
    let sum = ""
    while (index < total){
        current = input[index];
        sum = `${sum}, "${current}"`
            index++;
        }
        let noShit = (sum.substr(2))  //.replace(/.{40}/g, '$&\n')
    return `([${noShit}])`;
}
export default spaceRemover
