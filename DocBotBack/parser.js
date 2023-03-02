const fs = require('fs')

console.log("Parsing text file...")

const parseTextFile = (fileName) => {
    const data = fs.readFileSync(fileName, {encoding:'utf8', flag:'r'})
    const lines = data.toString().split("\n")
    return lines.map((line) => line.replace(new RegExp("\t+"), "").replace(new RegExp("\r+"), "")).filter((line) => line.length)
}

const getAllFunctions = (lines) => {
    let arrOfFunctions = []
    let currentFunction = []
    let bracketCount = 0
    let inFunctionFlag = false
    lines.forEach(line => {
        if (line.indexOf("function") !== -1 && !(line.indexOf("//") !== -1 && line.indexOf("function") > line.indexOf("//"))){
            inFunctionFlag = true
            console.log(line)
        }

        if (inFunctionFlag) {
            currentFunction.push(line)
        }
    });
    return arrOfFunctions
}

getAllFunctions(parseTextFile("alphabet_functions.php"))

console.log("Done.")