function spaceRemover (){
  let text;
  let name = prompt('Цитирай input-а:','Няма подаден input!');
  let index = 0;
  let current = name[index];
  let total = name.length;
  let sum = ""
  while (index < total){
      current = name[index];
      sum = `${sum}, "${current}"`
          index++;
      }
      let noShit = (sum.substr(2))  //.replace(/.{40}/g, '$&\n')
  text = (`([${noShit}])`);
    console.log (text);
}
    spaceRemover()

//     (["(", "[", """, "1", "0", """, ",", "
// ", "
// ", """, "2", """, ",", "
// ", "
// ", """, "2", """, ",", "
// ", "
// ", """, "4", """, ",", "
// ", "
// ", """, "6", """, ",", "
// ", "
// ", """, "S", "T", "O", "P", """, "]", ")"])

// (["10",
// "2",
// "2",
// "4",
// "6",
// "STOP"])