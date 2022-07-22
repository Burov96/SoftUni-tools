function nameFormat (input) {
    let innput = "";
    innput = input
    let purva = innput.toString().substring(4, 5).toLowerCase()
    let name = innput.toString().substring(5).replace(/\s/g, '')
    let fullname = `${purva}${name}.js`
    return (fullname)
}
export default nameFormat
// nameFormat (["02. equal Sums Even Odd Position"])