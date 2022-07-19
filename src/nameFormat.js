function nameFormat (input) {
    let innput = "";
    innput = input
    let num = innput.toString().substring(0, 4)
    let name = innput.toString().substring(4).replace(/\s/g, '')
    let fullname = `${num}${name}.js`
    return (fullname)
}
export default nameFormat
// nameFormat (["02. equal Sums Even Odd Position"])