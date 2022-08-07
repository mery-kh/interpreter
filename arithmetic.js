function arithmetic(words, variables) {
    let operand1;
    let operand2;
    if (!variables.has(words[0])) {
        console.log(`Error: you don't have variable with name ${words[0]}`)
        process.exit(1)
    } else if (words[1] !== '=') {
        console.log("Error: invalid assignment operator");
        process.exit(1);
    } else {
        if (words.length === 3) {
            variables.set(words[0], words[2]);
        } else {
            if (!variables.has(words[2])) {
                if (!isNaN(parseFloat(words[2]))) {
                    operand1 = parseFloat(words[2]);
                } else operand1 = words[2];
            } else {
                if (!isNaN(variables.get(words[2]))) {
                    operand1 = parseFloat(variables.get(words[2]));
                } else operand1 = variables.get(words[2]);
            }


            if (!variables.has(words[4])) {
                if (!isNaN(parseFloat(words[4]))) {
                    operand2 = parseFloat(words[4]);
                } else operand2 = words[4];
            } else {
                if (!isNaN(variables.get(words[4]))) {
                    operand2 = parseFloat(variables.get(words[4]));
                } else {
                    operand2 = variables.get(words[4]);

                }
            }

            if (words[3] === "+") {
                variables.set(words[0], operand1 + operand2)
            } else if (words[3] === "-") {
                variables.set(words[0], operand1 - operand2)
            } else if (words[3] === "*") {
                variables.set(words[0], operand1 * operand2)
            } else if (words[3] === "/") {
                variables.set(words[0], operand1 / operand2)
            }else {
                console.log("Error: Unknown arithmetic operator")
                process.exit(1)
            }
        }
    }
}

module.exports = {
    arithmetic
}