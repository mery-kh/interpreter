function print(words, variables){
    let str = '';
    let val;
    let op_in = words.indexOf('#');

    words.forEach((element, index) => {
        if(index !== 0){
            if(op_in !== -1 ) {
                if (element !== '#' && index < op_in) {
                    str += element + ' ';
                }
            } else str += element + ' ';
            if(element === '#'){
                if(variables.has(words[index + 1])){
                    val = variables.get(words[index + 1])
                }
            }
        }
    })
    if(!val){
        console.log(str);
    } else console.log(str, val);
}

module.exports = {
    print
}