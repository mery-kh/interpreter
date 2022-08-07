const { declare_variable } = require("./declare_variable");
const { print } = require("./print");
const { arithmetic } = require("./arithmetic");
const { condition } = require("./condition");

const variables =  new Map()
let condition_brackets = false;
let istrue = false;

function reader(txt){
    const line = txt.split('\n');
    for (let i = 0; i < line.length; i++) {
        let words = line[i].trim().split(/\s+/);
        if (condition_brackets) {
            if (!istrue) {
                continue;
            }
        }
        if (words[0] === '}') {
            condition_brackets = false;
        } else if (words[0] === "dec") {
            declare_variable(words, variables);
        } else if (words[0] === "log") {
            print(words, variables);
        } else if (words[1] === '=') {
            arithmetic(words, variables);
        } else if (words[0] === 'if') {
            istrue = condition(words, variables, condition_brackets);
        }
    }
}

module.exports = {
    file_read: reader
}